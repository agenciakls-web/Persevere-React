'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import axios from 'axios';
import HeaderTitle from '../estrutura/headerTitle';
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
}

export default function ListImoveis() {
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
    const actionAtual = searchParams.get('action') || 'comprar';

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
        action: actionAtual,
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
            action: actionAtual,
        });
    }, [pesquisaAtual, tipoAtual, precoAtual, quartosAtual, condominioAtual, codigoImovelAtual, actionAtual]);

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
                imoveis.sort((a, b) => Number(a.PrecoVenda) - Number(b.PrecoVenda));

                setListaImoveis(imoveis);
                setTotalPaginas(response.data.totalPaginas || 1);
            } catch (error) {
                console.error("Erro ao buscar imóveis:", error);
            } finally {
                setLoading(false); // Corrigido aqui de 'finaly' para 'finally'
            }
        }
        carregarImoveis();
    }, [paginaAtual, pesquisaAtual, tipoAtual, precoAtual, quartosAtual, condominioAtual, codigoImovelAtual, actionAtual]);

    // Trata as alterações de inputs do formulário
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const atualizado = { ...formFilters, [name]: value };
        setFormFilters(atualizado);

        // Dispara o filtro em tempo de execução ao clicar em itens objetivos (Radio/Select)
        if (type === 'radio' || e.target.tagName.toLowerCase() === 'select') {
            aplicarFiltros(atualizado, 1);
        }
    };

    // Monta a QueryString e injeta os parâmetros na rota do Next.js
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
        <main key={searchParams.toString()}>
            <HeaderTitle title='Imóveis' />
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">

                        {/* SIDEBAR CONTAINER */}

                        <Suspense fallback={<div className="py-12 text-center">Carregando filtros...</div>}>
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
                        </Suspense>

                        {/* LISTAGEM CONTAINER */}
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            {loading ? (
                                <div className="py-12 text-center text-blue-500 font-medium">
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

                            {/* PAGINAÇÃO CONTAINER */}
                            <Suspense fallback={<div className="py-12 text-center">Carregando filtros...</div>}>
                                <Paginacao
                                    paginaAtual={paginaAtual}
                                    totalPaginas={totalPaginas}
                                    formFilters={formFilters}
                                    aplicarFiltros={aplicarFiltros}
                                />
                            </Suspense>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}