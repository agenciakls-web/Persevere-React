'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import axios from 'axios';
import ListImoveisCard from './ListImoveisCard';
import SidebarFiltros from './SidebarFiltros';
import Paginacao from './Paginacao';
import { ImovelType } from '../tipagem/imoveis';

type TipoImovel = {
    TipoImovel: string;
};

interface FormFiltersType {
    pesquisa: string;
    TipoImovel: string;
    PrecoVenda: string;
    quartos: string;
    condominio: string;
    CodigoImovel: string;
    action: string;
    orderBy: string;
    orderDirection: string;
    Cidade: string;
}

function ListImoveisContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Valores atuais vindos da URL do Next.js
    const paginaAtual = parseInt(searchParams.get('page') || '1');
    const pesquisaAtual = searchParams.get('pesquisa') || '';
    const tipoAtual = searchParams.get('TipoImovel') || '';
    const precoAtual = searchParams.get('PrecoVenda') || '';
    const quartosAtual = searchParams.get('quartos') || '';
    const condominioAtual = searchParams.get('condominio') || '';
    const codigoImovelAtual = searchParams.get('CodigoImovel') || '';
    const cidadeAtual = searchParams.get('Cidade') || '';
    const actionAtual = searchParams.get('action') || 'comprar';
    const orderByAtual = searchParams.get('orderBy') || 'PrecoVenda';
    const orderDirectionAtual = searchParams.get('orderDirection') || 'asc';

    // Estados de controle de dados da API
    const [listaImoveis, setListaImoveis] = useState<ImovelType[]>([]);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [loading, setLoading] = useState(true);
    const [tiposDisponiveis, setTiposDisponiveis] = useState<TipoImovel[]>([]);

    // Objeto central do estado do formulário
    const [formFilters, setFormFilters] = useState<FormFiltersType>({
        pesquisa: pesquisaAtual,
        TipoImovel: tipoAtual,
        PrecoVenda: precoAtual,
        quartos: quartosAtual,
        condominio: condominioAtual,
        CodigoImovel: codigoImovelAtual,
        Cidade: cidadeAtual,
        action: actionAtual,
        orderBy: orderByAtual,
        orderDirection: orderDirectionAtual,
    });

    // Sincroniza o estado interno se a URL do navegador mudar
    useEffect(() => {
        setFormFilters({
            pesquisa: pesquisaAtual,
            TipoImovel: tipoAtual,
            PrecoVenda: precoAtual,
            quartos: quartosAtual,
            condominio: condominioAtual,
            CodigoImovel: codigoImovelAtual,
            Cidade: cidadeAtual,
            action: actionAtual,
            orderBy: orderByAtual,
            orderDirection: orderDirectionAtual,
        });
    }, [pesquisaAtual, tipoAtual, precoAtual, quartosAtual, condominioAtual, codigoImovelAtual, cidadeAtual, actionAtual, orderByAtual, orderDirectionAtual]);

    // Busca os tipos distintos cadastrados no banco de dados
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

    // Busca a lista de imóveis com base nos filtros da URL
    useEffect(() => {
        async function carregarImoveis() {
            if (!process.env.NEXT_PUBLIC_API_BACKEND) {
                console.warn("API URL não definida.");
                return;
            }

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
                        Cidade: cidadeAtual,
                        action: actionAtual,
                        orderBy: orderByAtual,
                        orderDirection: orderDirectionAtual,
                    }
                });

                const imoveis: ImovelType[] = response.data.resultado || response.data;

                // Ordenação dinâmica feita no Front-end
                imoveis.sort((a, b) => {
                    let valorA = a[orderByAtual as keyof ImovelType];
                    let valorB = b[orderByAtual as keyof ImovelType];

                    if (orderByAtual === 'PrecoVenda' || orderByAtual === 'PrecoLocacao') {
                        return orderDirectionAtual === 'asc' 
                            ? Number(valorA) - Number(valorB) 
                            : Number(valorB) - Number(valorA);
                    }

                    valorA = String(valorA ?? '').toLowerCase();
                    valorB = String(valorB ?? '').toLowerCase();

                    if (valorA < valorB) return orderDirectionAtual === 'asc' ? -1 : 1;
                    if (valorA > valorB) return orderDirectionAtual === 'asc' ? 1 : -1;
                    return 0;
                });

                setListaImoveis(imoveis);
                setTotalPaginas(response.data.totalPaginas || 1);
            } catch (error) {
                console.error("Erro ao buscar imóveis:", error);
                setListaImoveis([]);
            } finally {
                setLoading(false);
            }
        }
        carregarImoveis();
    }, [paginaAtual, pesquisaAtual, tipoAtual, precoAtual, quartosAtual, condominioAtual, codigoImovelAtual, actionAtual, orderByAtual, orderDirectionAtual]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const atualizado = { ...formFilters, [name]: value };
        setFormFilters(atualizado);

        if (type === 'radio' || e.target.tagName.toLowerCase() === 'select') {
            aplicarFiltros(atualizado, 1);
        }
    };

    const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const [campo, direcao] = e.target.value.split('-');
        const atualizado = { ...formFilters, orderBy: campo, orderDirection: direcao };
        setFormFilters(atualizado);
        aplicarFiltros(atualizado, 1);
    };

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
        if (novosFiltros.Cidade) params.set('Cidade', novosFiltros.Cidade);
        if (novosFiltros.orderBy) params.set('orderBy', novosFiltros.orderBy);
        if (novosFiltros.orderDirection) params.set('orderDirection', novosFiltros.orderDirection);

        router.push(`${pathname}?${params.toString()}`);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        aplicarFiltros(formFilters, 1);
    };

    return (
        <div className="flex flex-wrap">
            <div className="w-full px-4 md:block md:w-1/3 lg:w-1/4">
                <SidebarFiltros
                    formFilters={formFilters}
                    setFormFilters={setFormFilters}
                    tiposDisponiveis={tiposDisponiveis}
                    aplicarFiltros={aplicarFiltros}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 px-4">
                <div className="flex justify-between items-center mb-6 bg-white p-2 md:p-4 rounded-xl shadow-sm border border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">
                        {listaImoveis.length > 0 ? `${listaImoveis.length} imóveis encontrados` : ''}
                    </span>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="ordenacao" className="text-sm font-semibold text-gray-600 whitespace-nowrap">Ordenar por:</label>
                        <select 
                            id="ordenacao"
                            value={`${formFilters.orderBy}-${formFilters.orderDirection}`}
                            onChange={handleOrderChange}
                            className="text-sm bg-gray-50 border border-gray-200 rounded-lg p-2 text-gray-700 outline-none focus:border-orange-500 transition"
                        >
                            <option value="PrecoVenda-asc">Menor Preço ↑</option>
                            <option value="PrecoVenda-desc">Maior Preço ↓</option>
                            <option value="titulo-asc">Título (A-Z)</option>
                            <option value="titulo-desc">Título (Z-A)</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div className="py-12 text-center text-orange-500 font-medium">
                        Carregando imóveis...
                    </div>
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
                
                <Paginacao
                    paginaAtual={paginaAtual}
                    totalPaginas={totalPaginas}
                    formFilters={formFilters}
                    aplicarFiltros={aplicarFiltros}
                />
            </div>
        </div>
    );
}

export default function ListImoveis() {
    return (
        <Suspense fallback={<div className="py-12 text-center text-orange-500">Carregando listagem de imóveis...</div>}>
            <ListImoveisContent />
        </Suspense>
    );
}