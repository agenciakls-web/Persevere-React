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

export default function ListImoveis({ tiposImoveis }: { tiposImoveis: TipoImovel[] }) {
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
    const actionAtual = searchParams.get('action') || 'comprar'; // NOVO: Captura a action da URL

    // Estados locais para controlar os dados da API
    const [listaImoveis, setListaImoveis] = useState<ImovelType[]>([]);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [loading, setLoading] = useState(true);

    // Estado do formulário
    const [formFilters, setFormFilters] = useState({
        pesquisa: pesquisaAtual,
        TipoImovel: tipoAtual,
        PrecoVenda: precoAtual,
        quartos: quartosAtual,
        condominio: condominioAtual,
        CodigoImovel: codigoImovelAtual,
        action: actionAtual, // NOVO: Adicionado ao estado do formulário
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
            action: actionAtual, // NOVO
        });
    }, [pesquisaAtual, tipoAtual, precoAtual, quartosAtual, condominioAtual, codigoImovelAtual, actionAtual]);

    // Função que busca os dados no Backend via Axios
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
                        action: actionAtual, // CORREÇÃO CRÍTICA: Agora enviando a action para o back-end reconhecer o filtro de código!
                    }
                });
                console.log("Resposta do servidor:", response);

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

    // Atualiza os inputs controlados
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        setFormFilters(prev => {
            const novosFiltros = { ...prev, [name]: value };
            
            // Regra inteligente: Se o usuário digitar no campo CodigoImovel, muda automaticamente a action para 'codigo'
            if (name === 'CodigoImovel' && value.trim() !== '') {
                novosFiltros.action = 'codigo';
            } else if (name === 'CodigoImovel' && value.trim() === '') {
                novosFiltros.action = 'comprar';
            }
            return novosFiltros;
        });
    };

    // Atualiza a URL com os filtros quando o usuário clica em "Buscar"
    const aplicarFiltros = (novosFiltros = formFilters, novaPagina = 1) => {
        const params = new URLSearchParams();

        if (novaPagina > 1) params.set('page', novaPagina.toString());
        if (novosFiltros.action) params.set('action', novosFiltros.action); // NOVO
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
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        
                                        {/* INPUT HIDDEN DA ACTION */}
                                        <input type="hidden" name="action" value={formFilters.action} />

                                        {/* NOVO CAMPO: BUSCA POR CÓDIGO DO IMÓVEL */}
                                        <div>
                                            <h4 className="my-2 font-bold uppercase text-orange-500">
                                                Buscar por Código
                                            </h4>
                                            <input
                                                type="text"
                                                name="CodigoImovel"
                                                placeholder="Ex: PSI022"
                                                value={formFilters.CodigoImovel}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-orange-500 px-4 py-3 text-lg font-medium text-orange-600 placeholder-orange-300"
                                            />
                                        </div>

                                        <hr className="border-gray-200 my-4" />

                                        {/* PESQUISA GERAL */}
                                        <div>
                                            <h4 className="my-2 font-bold uppercase text-blue-500">
                                                Pesquisa Geral
                                            </h4>
                                            <input
                                                type="text"
                                                name="pesquisa"
                                                placeholder="Digite condomínio, região..."
                                                value={formFilters.pesquisa}
                                                onChange={handleChange}
                                                disabled={formFilters.CodigoImovel.trim() !== ''} // Desabilita se estiver buscando por código
                                                className="w-full rounded-lg border border-blue-500 px-4 py-3 text-lg font-medium text-blue-500 disabled:opacity-50"
                                            />
                                        </div>

                                        {/* TIPO */}
                                        <div>
                                            <h4 className="my-2 font-bold uppercase text-blue-500">
                                                Tipo de Imóvel
                                            </h4>
                                            <div className="hidden md:block">
                                                {tiposImoveis.map((tipo, index) => (
                                                    <label key={index} className="block py-1">
                                                        <input
                                                            type="radio"
                                                            name="TipoImovel"
                                                            value={tipo.TipoImovel}
                                                            checked={formFilters.TipoImovel === tipo.TipoImovel}
                                                            onChange={handleChange}
                                                            disabled={formFilters.CodigoImovel.trim() !== ''}
                                                            className="mr-2"
                                                        />
                                                        {tipo.TipoImovel}
                                                    </label>
                                                ))}
                                            </div>
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
                                                    <label key={index} className="block">
                                                        <input
                                                            type="radio"
                                                            name="PrecoVenda"
                                                            value={index + 1}
                                                            checked={formFilters.PrecoVenda === (index + 1).toString()}
                                                            onChange={handleChange}
                                                            disabled={formFilters.CodigoImovel.trim() !== ''}
                                                            className="mr-2"
                                                        />
                                                        {label}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* QUARTOS */}
                                        <div>
                                            <h4 className="my-2 font-bold uppercase text-blue-500">
                                                Mínimo de Quartos
                                            </h4>
                                            <div className="hidden md:block space-y-2">
                                                {[1, 2, 3, 4, 5].map((q) => (
                                                    <label key={q} className="block">
                                                        <input
                                                            type="radio"
                                                            name="quartos"
                                                            value={q}
                                                            checked={formFilters.quartos === q.toString()}
                                                            onChange={handleChange}
                                                            disabled={formFilters.CodigoImovel.trim() !== ''}
                                                            className="mr-2"
                                                        />
                                                        {q} ou +
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* BOTÃO */}
                                        <button
                                            type="submit"
                                            className="block w-full text-center rounded-full bg-orange-500 px-4 py-3 text-lg font-medium uppercase text-gray-100 evaluation-btn hover:bg-orange-600 transition"
                                        >
                                            Buscar
                                        </button>
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
                                    <li>
                                        <button onClick={() => aplicarFiltros(formFilters, 1)} disabled={paginaAtual === 1} className="rounded border px-4 py-2 disabled:opacity-40">{'<<'}</button>
                                    </li>
                                    <li>
                                        <button onClick={() => aplicarFiltros(formFilters, paginaAtual - 1)} disabled={paginaAtual === 1} className="rounded border px-4 py-2 disabled:opacity-40">{'<'}</button>
                                    </li>
                                    <li>
                                        <span className="rounded bg-blue-500 px-4 py-2.5 text-white font-bold">{paginaAtual} de {totalPaginas}</span>
                                    </li>
                                    <li>
                                        <button onClick={() => aplicarFiltros(formFilters, paginaAtual + 1)} disabled={paginaAtual >= totalPaginas} className="rounded border px-4 py-2 disabled:opacity-40">{'>'}</button>
                                    </li>
                                    <li>
                                        <button onClick={() => aplicarFiltros(formFilters, totalPaginas)} disabled={paginaAtual >= totalPaginas} className="rounded border px-4 py-2 disabled:opacity-40">{'>>'}</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}