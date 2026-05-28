'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import axios from 'axios';
import HeaderTitle from '../estrutura/headerTitle';
import ListImoveisCard from './ListImoveisCard';
import { ImovelType } from '../tipagem/imoveis';

type TipoImovel = {
    TipoImovel: string;
};

// Removida a prop 'tiposImoveis' do parâmetro da função
export default function ListImoveis() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Pegando valores atuais da URL ou definindo padrões
    const paginaAtual = parseInt(searchParams.get('page') || '1');
    const pesquisaAtual = searchParams.get('pesquisa') || '';
    const tipoAtual = searchParams.get('TipoImovel') || '';
    const precoAtual = searchParams.get('PrecoVenda') || '';
    const quartosAtual = searchParams.get('quartos') || '';
    const condominioAtual = searchParams.get('condominio') || '';
    const codigoImovelAtual = searchParams.get('CodigoImovel') || '';
    const actionAtual = searchParams.get('action') || 'comprar';

    // Estados locais para controlar os dados da API
    const [listaImoveis, setListaImoveis] = useState<ImovelType[]>([]);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [loading, setLoading] = useState(true);

    // NOVO ESTADO: Armazena os tipos de imóveis dinâmicos trazidos do banco
    const [tiposDisponiveis, setTiposDisponiveis] = useState<TipoImovel[]>([]);

    // Estado do formulário
    const [formFilters, setFormFilters] = useState({
        pesquisa: pesquisaAtual,
        TipoImovel: tipoAtual,
        PrecoVenda: precoAtual,
        quartos: quartosAtual,
        condominio: condominioAtual,
        CodigoImovel: codigoImovelAtual,
        action: actionAtual,
    });

    // Sincroniza o formulário se a URL mudar externamente
    useEffect(() => {
        setFormFilters({
            pesquisa: pesquisaAtual,
            TipoImovel: tipoAtual,
            PrecoVenda: precoAtual,
            quartos: quartosAtual,
            condominio: condominioAtual,
            CodigoImovel: codigoImovelAtual,
            action: actionAtual,
        });
    }, [pesquisaAtual, tipoAtual, precoAtual, quartosAtual, condominioAtual, codigoImovelAtual, actionAtual]);

    // 1. EFFECT EXCLUSIVO PARA CARREGAR OS TIPOS DO BANCO (Dispara apenas uma vez no load da página)
    useEffect(() => {
        async function carregarTipos() {
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_API_BACKEND + '/imoveis/tipos');
                setTiposDisponiveis(response.data);
            } catch (error) {
                console.error("Erro ao carregar os tipos de imóveis do banco:", error);
            }
        }
        carregarTipos();
    }, []);

    // 2. EFFECT PARA CARREGAR OS IMÓVEIS FILTRADOS
    useEffect(() => {
        async function carregarImoveis() {
            setLoading(true);
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_API_BACKEND + '/imoveis', {
                    params: {
                        page: paginaAtual,
                        limit: 12,
                        pesquisa: pesquisaAtual,
                        TipoImovel: tipoAtual,
                        PrecoVenda: precoAtual,
                        quartos: quartosAtual,
                        condominio: condominioAtual,
                        CodigoImovel: codigoImovelAtual,
                        action: actionAtual,
                    }
                });

                const imoveis: ImovelType[] = response.data.resultado || response.data;

                // Ordena do menor para o maior valor
                imoveis.sort((a, b) => Number(a.PrecoVenda) - Number(b.PrecoVenda));

                setListaImoveis(imoveis);
                setTotalPaginas(response.data.totalPaginas || 1);
            } catch (error) {
                console.error("Erro ao buscar imóveis:", error);
            } finally {
                setLoading(false);
            }
        }

        carregarImoveis();
    }, [paginaAtual, pesquisaAtual, tipoAtual, precoAtual, quartosAtual, condominioAtual, codigoImovelAtual, actionAtual]);

    // Atualiza os inputs controlados e dispara busca instantânea se for Radio ou Select
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        const atualizado = {
            ...formFilters,
            [name]: value,
        };

        setFormFilters(atualizado);

        // Se alterou um radio ou select, já executa a pesquisa imediatamente
        if (type === 'radio' || e.target.tagName.toLowerCase() === 'select') {
            aplicarFiltros(atualizado, 1);
        }
    };

    // Atualiza a URL com os filtros
    const aplicarFiltros = (novosFiltros = formFilters, novaPagina = 1) => {
        const params = new URLSearchParams();

        if (novaPagina > 1) params.set('page', novaPagina.toString());
        if (novosFiltros.action) params.set('action', novosFiltros.action);
        if (novosFiltros.pesquisa) params.set('pesquisa', novosFiltros.pesquisa);
        if (novosFiltros.TipoImovel) params.set('TipoImovel', novosFiltros.TipoImovel);
        if (novosFiltros.PrecoVenda) params.set('PrecoVenda', novosFiltros.PrecoVenda);
        if (novosFiltros.quartos) params.set('quartos', novosFiltros.quartos);
        if (novosFiltros.condominio) params.set('condominio', novosFiltros.condominio);
        if (novosFiltros.CodigoImovel) params.set('CodigoImovel', novosFiltros.CodigoImovel);

        router.push(`${pathname}?${params.toString()}`);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        aplicarFiltros(formFilters, 1); 
    };

    return (
        <main>
            <HeaderTitle title='Imóveis' />
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        
                        
                        {/* SIDEBAR */}
                        <div className="w-full px-4 md:block md:w-1/3 lg:w-1/4">
                            <aside>
                                <div className="mb-4 md:mb-10">
                                    
                                    {/* ALTERNADOR DE BUSCA (TABS) */}
                                    <div className="mb-6 flex gap-2 border-b border-gray-200 pb-2">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const atualizado = {
                                                    pesquisa: '',
                                                    TipoImovel: '',
                                                    PrecoVenda: '',
                                                    quartos: '',
                                                    condominio: '',
                                                    CodigoImovel: '',
                                                    action: 'comprar'
                                                };
                                                setFormFilters(atualizado);
                                                aplicarFiltros(atualizado, 1);
                                            }}
                                            className={`w-1/2 rounded-lg py-2.5 text-sm font-bold uppercase transition ${
                                                formFilters.action === 'comprar'
                                                    ? 'bg-blue-500 text-white shadow'
                                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                            }`}
                                        >
                                            Pesquisa Geral
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const atualizado = {
                                                    pesquisa: '',
                                                    TipoImovel: '',
                                                    PrecoVenda: '',
                                                    quartos: '',
                                                    condominio: '',
                                                    CodigoImovel: '',
                                                    action: 'codigo'
                                                };
                                                setFormFilters(atualizado);
                                                aplicarFiltros(atualizado, 1);
                                            }}
                                            className={`w-1/2 rounded-lg py-2.5 text-sm font-bold uppercase transition ${
                                                formFilters.action === 'codigo'
                                                    ? 'bg-orange-500 text-white shadow'
                                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                            }`}
                                        >
                                            Por Código
                                        </button>
                                    </div>

                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <input type="hidden" name="action" value={formFilters.action} />

                                        {/* VISÃO: BUSCA POR CÓDIGO */}
                                        {formFilters.action === 'codigo' && (
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="my-2 font-bold uppercase text-orange-500">
                                                        Código do Imóvel
                                                    </h4>
                                                    <input
                                                        type="text"
                                                        name="CodigoImovel"
                                                        placeholder="Ex: PSI022"
                                                        value={formFilters.CodigoImovel}
                                                        onChange={handleChange}
                                                        className="w-full rounded-lg border border-orange-500 px-4 py-3 text-lg font-medium text-orange-600 placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="block w-full text-center rounded-full bg-orange-500 px-4 py-3 text-lg font-medium uppercase text-gray-100 hover:bg-orange-600 transition shadow-md"
                                                >
                                                    Buscar Código
                                                </button>
                                            </div>
                                        )}

                                        {/* VISÃO: PESQUISA PADRÃO / COMPRAR */}
                                        {formFilters.action === 'comprar' && (
                                            <div className="space-y-6">
                                                {/* PESQUISA GERAL */}
                                                <div>
                                                    <h4 className="my-2 font-bold uppercase text-blue-500">
                                                        Termo de pesquisa
                                                    </h4>
                                                    <input
                                                        type="text"
                                                        name="pesquisa"
                                                        placeholder="Digite condomínio, região, bairro..."
                                                        value={formFilters.pesquisa}
                                                        onChange={handleChange}
                                                        className="w-full rounded-lg border border-blue-500 px-4 py-3 text-lg font-medium text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>

                                                {/* TIPO DINÂMICO DO BANCO */}
                                                <div>
                                                    <h4 className="my-2 font-bold uppercase text-blue-500">
                                                        Tipo de Imóvel
                                                    </h4>
                                                    <div className="hidden md:block space-y-1">
                                                        <label className="flex items-center py-1 cursor-pointer hover:text-blue-600 font-medium text-gray-700">
                                                            <input
                                                                type="radio"
                                                                name="TipoImovel"
                                                                value=""
                                                                checked={formFilters.TipoImovel === ""}
                                                                onChange={handleChange}
                                                                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
                                                            />
                                                            Todos os tipos
                                                        </label>

                                                        {tiposDisponiveis.map((tipo, index) => (
                                                            <label key={index} className="flex items-center py-1 cursor-pointer hover:text-blue-600 font-medium text-gray-700">
                                                                <input
                                                                    type="radio"
                                                                    name="TipoImovel"
                                                                    value={tipo.TipoImovel}
                                                                    checked={formFilters.TipoImovel === tipo.TipoImovel}
                                                                    onChange={handleChange}
                                                                    className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
                                                                />
                                                                {tipo.TipoImovel}
                                                            </label>
                                                        ))}
                                                    </div>

                                                    <select
                                                        name="TipoImovel"
                                                        value={formFilters.TipoImovel}
                                                        onChange={handleChange}
                                                        className="block w-full rounded-lg border border-blue-500 px-2 py-2 text-lg font-medium text-blue-500 md:hidden"
                                                    >
                                                        <option value="">Todos os tipos</option>
                                                        {tiposDisponiveis.map((tipo, index) => (
                                                            <option key={index} value={tipo.TipoImovel}>
                                                                {tipo.TipoImovel}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                {/* PREÇO */}
                                                <div>
                                                    <h4 className="my-2 font-bold uppercase text-blue-500">
                                                        Preço de Venda
                                                    </h4>
                                                    <div className="hidden md:block space-y-2">
                                                        {[
                                                            'Até 200.000',
                                                            '200.000 até 400.000',
                                                            '400.000 até 600.000',
                                                            '600.000 até 800.000',
                                                            '800.000 até 1.000.000',
                                                            'Acima de 1.000.000',
                                                        ].map((label, index) => (
                                                            <label key={index} className="flex items-center cursor-pointer hover:text-blue-600 font-medium text-gray-700">
                                                                <input
                                                                    type="radio"
                                                                    name="PrecoVenda"
                                                                    value={index + 1}
                                                                    checked={formFilters.PrecoVenda === (index + 1).toString()}
                                                                    onChange={handleChange}
                                                                    className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
                                                                />
                                                                {label}
                                                            </label>
                                                        ))}
                                                    </div>

                                                    <select
                                                        name="PrecoVenda"
                                                        value={formFilters.PrecoVenda}
                                                        onChange={handleChange}
                                                        className="block w-full rounded-lg border border-blue-500 px-2 py-2 text-lg font-medium text-blue-500 md:hidden"
                                                    >
                                                        <option value="">Preço de compra</option>
                                                        <option value="1">Até 200.000</option>
                                                        <option value="2">200.000 até 400.000</option>
                                                        <option value="3">400.000 até 600.000</option>
                                                        <option value="4">600.000 até 800.000</option>
                                                        <option value="5">800.000 até 1.000.000</option>
                                                        <option value="6">Acima de 1.000.000</option>
                                                    </select>
                                                </div>

                                                {/* QUARTOS */}
                                                <div>
                                                    <h4 className="my-2 font-bold uppercase text-blue-500">
                                                        Mínimo de Quartos
                                                    </h4>
                                                    <div className="hidden md:block space-y-2">
                                                        {[1, 2, 3, 4, 5].map((q) => (
                                                            <label key={q} className="flex items-center cursor-pointer hover:text-blue-600 font-medium text-gray-700">
                                                                <input
                                                                    type="radio"
                                                                    name="quartos"
                                                                    value={q}
                                                                    checked={formFilters.quartos === q.toString()}
                                                                    onChange={handleChange}
                                                                    className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
                                                                />
                                                                {q} ou +
                                                            </label>
                                                        ))}
                                                    </div>

                                                    <select
                                                        name="quartos"
                                                        value={formFilters.quartos}
                                                        onChange={handleChange}
                                                        className="block w-full rounded-lg border border-blue-500 px-2 py-2 text-lg font-medium text-blue-500 md:hidden"
                                                    >
                                                        <option value="">Mínimo de Quartos</option>
                                                        {[1, 2, 3, 4, 5].map((q) => (
                                                            <option key={q} value={q}>{q} ou +</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="block w-full text-center rounded-full bg-blue-500 px-4 py-3 text-lg font-medium uppercase text-gray-100 hover:bg-blue-600 transition shadow-md"
                                                >
                                                    Filtrar Resultados
                                                </button>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </aside>
                        </div>

                        {/* LISTAGEM (O restante do seu código permanece igual) */}
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            {loading ? (
                                <div className="py-12 text-center text-blue-500 font-medium">Carregando imóveis...</div>
                            ) : listaImoveis.length > 0 ? (
                                <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {listaImoveis.map((imovel) => (
                                        <ListImoveisCard key={imovel.CodigoImovel} imovel={imovel} />
                                    ))}
                                </div>
                            ) : (
                                <div className="py-12 text-center">
                                    <h1 className="text-2xl font-bold">Não há imóveis nessa área</h1>
                                    <p className="mt-2 text-gray-500">Infelizmente não temos imóveis disponíveis nessa seção.</p>
                                </div>
                            )}

                            {/* PAGINAÇÃO */}
                            <div className="my-8 flex justify-center">
                                <ul className="inline-flex gap-2 items-center">
                                    <li><button onClick={() => aplicarFiltros(formFilters, 1)} disabled={paginaAtual === 1} className="rounded border px-4 py-2 disabled:opacity-40">{'<<'}</button></li>
                                    <li><button onClick={() => aplicarFiltros(formFilters, paginaAtual - 1)} disabled={paginaAtual === 1} className="rounded border px-4 py-2 disabled:opacity-40">{'<'}</button></li>
                                    <li><span className="rounded bg-blue-500 px-4 py-2.5 text-white font-bold">{paginaAtual} de {totalPaginas}</span></li>
                                    <li><button onClick={() => aplicarFiltros(formFilters, paginaAtual + 1)} disabled={paginaAtual >= totalPaginas} className="rounded border px-4 py-2 disabled:opacity-40">{'>'}</button></li>
                                    <li><button onClick={() => aplicarFiltros(formFilters, totalPaginas)} disabled={paginaAtual >= totalPaginas} className="rounded border px-4 py-2 disabled:opacity-40">{'>>'}</button></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}