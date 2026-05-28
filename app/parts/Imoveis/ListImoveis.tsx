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

    // Estados locais para controlar os dados da API
    const [listaImoveis, setListaImoveis] = useState<ImovelType[]>([]);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [loading, setLoading] = useState(true);

    // Estado do formulário (controlado localmente para não disparar a API a cada tecla digitada)
    const [formFilters, setFormFilters] = useState({
        pesquisa: pesquisaAtual,
        TipoImovel: tipoAtual,
        PrecoVenda: precoAtual,
        quartos: quartosAtual,
        condominio: condominioAtual,
    });

    // Sincroniza o formulário se a URL mudar externamente
    useEffect(() => {
        setFormFilters({
            pesquisa: pesquisaAtual,
            TipoImovel: tipoAtual,
            PrecoVenda: precoAtual,
            quartos: quartosAtual,
            condominio: condominioAtual,
        });
    }, [pesquisaAtual, tipoAtual, precoAtual, quartosAtual, condominioAtual]);

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
                    }
                });
                console.log(response);

            // Adapte o response abaixo de acordo com o retorno da sua API
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
}, [paginaAtual, pesquisaAtual, tipoAtual, precoAtual, quartosAtual, condominioAtual]);

    // Atualiza os inputs controlados
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormFilters({
            ...formFilters,
            [e.target.name]: e.target.value,
        });
    };

    // Atualiza a URL com os filtros quando o usuário clica em "Buscar" ou troca um Radio
    const aplicarFiltros = (novosFiltros = formFilters, novaPagina = 1) => {
        const params = new URLSearchParams();

        if (novaPagina > 1) params.set('page', novaPagina.toString());
        if (novosFiltros.pesquisa) params.set('pesquisa', novosFiltros.pesquisa);
        if (novosFiltros.TipoImovel) params.set('TipoImovel', novosFiltros.TipoImovel);
        if (novosFiltros.PrecoVenda) params.set('PrecoVenda', novosFiltros.PrecoVenda);
        if (novosFiltros.quartos) params.set('quartos', novosFiltros.quartos);
        if (novosFiltros.condominio) params.set('condominio', novosFiltros.condominio);

        router.push(`${pathname}?${params.toString()}`);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        aplicarFiltros(formFilters, 1); // Reseta para a página 1 ao buscar
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const atualizado = { ...formFilters, [e.target.name]: e.target.value };
        setFormFilters(atualizado);
        aplicarFiltros(atualizado, 1); // Filtra imediatamente ao clicar no Radio
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
                                        {/* PESQUISA */}
                                        <div>
                                            <h4 className="my-2 font-bold uppercase text-blue-500">
                                                Pesquisar
                                            </h4>

                                            <input
                                                type="text"
                                                name="pesquisa"
                                                placeholder="Digite condomínio, região, bairro ou cidade"
                                                value={formFilters.pesquisa}
                                                onChange={handleChange}
                                                className="w-full rounded-lg border border-blue-500 px-4 py-3 text-lg font-medium text-blue-500"
                                            />
                                        </div>

                                        {/* TIPO */}
                                        <div>
                                            <h4 className="my-2 font-bold uppercase text-blue-500">
                                                Tipo de Imóvel
                                            </h4>

                                            <div className="hidden md:block">
                                                {tiposImoveis.map((tipo, index) => (
                                                    <label
                                                        key={index}
                                                        className="block py-1"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="TipoImovel"
                                                            value={tipo.TipoImovel}
                                                            onChange={handleChange}
                                                            className="mr-2"
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
                                                <option value="">
                                                    Tipo de imóvel
                                                </option>

                                                {tiposImoveis.map((tipo, index) => (
                                                    <option
                                                        key={index}
                                                        value={tipo.TipoImovel}
                                                    >
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
                                                    <label
                                                        key={index}
                                                        className="block"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="PrecoVenda"
                                                            value={index + 1}
                                                            onChange={handleChange}
                                                            className="mr-2"
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
                                                <option value="">
                                                    Preço de compra
                                                </option>

                                                <option value="1">
                                                    Até 200.000
                                                </option>

                                                <option value="2">
                                                    200.000 até 400.000
                                                </option>

                                                <option value="3">
                                                    400.000 até 600.000
                                                </option>

                                                <option value="4">
                                                    600.000 até 800.000
                                                </option>

                                                <option value="5">
                                                    800.000 até 1.000.000
                                                </option>

                                                <option value="6">
                                                    Acima de 1.000.000
                                                </option>
                                            </select>
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
                                                            onChange={handleChange}
                                                            className="mr-2"
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
                                                <option value="">
                                                    Mínimo de Quartos
                                                </option>

                                                {[1, 2, 3, 4, 5].map((q) => (
                                                    <option key={q} value={q}>
                                                        {q} ou +
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* CONDOMÍNIO */}
                                        <div>
                                            <h4 className="my-2 font-bold uppercase text-blue-500">
                                                Em condomínio fechado
                                            </h4>

                                            <div className="hidden md:block space-y-2">
                                                <label className="block">
                                                    <input
                                                        type="radio"
                                                        name="condominio"
                                                        value="1"
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Sim
                                                </label>

                                                <label className="block">
                                                    <input
                                                        type="radio"
                                                        name="condominio"
                                                        value="0"
                                                        onChange={handleChange}
                                                        className="mr-2"
                                                    />
                                                    Não
                                                </label>
                                            </div>

                                            <select
                                                name="condominio"
                                                value={formFilters.condominio}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border border-blue-500 px-2 py-2 text-lg font-medium text-blue-500 md:hidden"
                                            >
                                                <option value="">
                                                    Em condomínio fechado
                                                </option>

                                                <option value="1">Sim</option>
                                                <option value="0">Não</option>
                                            </select>
                                        </div>

                                        {/* BOTÃO */}
                                        <button
                                            type="submit"
                                            className="block rounded-full bg-orange-500 px-16 py-3 text-lg font-medium uppercase text-gray-100"
                                        >
                                            Buscar
                                        </button>
                                    </form>
                                </div>
                            </aside>
                        </div>

                        {/* LISTAGEM */}
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            {loading ? (
                                <div className="py-12 text-center text-blue-500 font-medium">Carregando imóveis...</div>
                            ) : listaImoveis.length > 0 ? (
                                <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {listaImoveis.map((imovel) => {
                                        return (
                                            <ListImoveisCard key={imovel.CodigoImovel} imovel={imovel} />
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="py-12 text-center">
                                    <h1 className="text-2xl font-bold">
                                        Não há imóveis nessa área
                                    </h1>

                                    <p className="mt-2 text-gray-500">
                                        Infelizmente não temos imóveis disponíveis nessa seção.
                                    </p>
                                </div>
                            )}

                            {/* PAGINAÇÃO */}
                            <div className="my-8 flex justify-center">
                                <ul className="inline-flex gap-2 items-center">
                                    {/* Ir para a Primeira Página */}
                                    <li>
                                        <button
                                            onClick={() => aplicarFiltros(formFilters, 1)}
                                            disabled={paginaAtual === 1}
                                            className="rounded border px-4 py-2 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                        >
                                            {'<<'}
                                        </button>
                                    </li>

                                    {/* Página Anterior */}
                                    <li>
                                        <button
                                            onClick={() => aplicarFiltros(formFilters, paginaAtual - 1)}
                                            disabled={paginaAtual === 1}
                                            className="rounded border px-4 py-2 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                        >
                                            {'<'}
                                        </button>
                                    </li>

                                    {/* Indicador da Página Atual */}
                                    <li>
                                        <span className="rounded bg-blue-500 px-4 py-2.5 text-white font-bold">
                                            {paginaAtual} de {totalPaginas}
                                        </span>
                                    </li>

                                    {/* Próxima Página */}
                                    <li>
                                        <button
                                            onClick={() => aplicarFiltros(formFilters, paginaAtual + 1)}
                                            disabled={paginaAtual >= totalPaginas}
                                            className="rounded border px-4 py-2 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                        >
                                            {'>'}
                                        </button>
                                    </li>

                                    {/* Ir para a Última Página */}
                                    <li>
                                        <button
                                            onClick={() => aplicarFiltros(formFilters, totalPaginas)}
                                            disabled={paginaAtual >= totalPaginas}
                                            className="rounded border px-4 py-2 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
                                        >
                                            {'>>'}
                                        </button>
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