'use client';

interface FormFiltersType {
    pesquisa: string;
    TipoImovel: string;
    PrecoVenda: string;
    quartos: string;
    condominio: string;
    CodigoImovel: string;
    action: string;
}

interface PaginacaoProps {
    paginaAtual: number;
    totalPaginas: number;
    formFilters: FormFiltersType;
    aplicarFiltros: (novosFiltros?: FormFiltersType, novaPagina?: number) => void;
}

export default function Paginacao({ paginaAtual, totalPaginas, formFilters, aplicarFiltros }: PaginacaoProps) {
    if (totalPaginas <= 1) return null;

    return (
        <div className="my-8 flex justify-center">
            <ul className="inline-flex gap-2 items-center">
                <li>
                    <button 
                        onClick={() => aplicarFiltros(formFilters, 1)} 
                        disabled={paginaAtual === 1} 
                        className="rounded border px-4 py-2 hover:bg-gray-50 disabled:opacity-40 transition"
                    >
                        {'<<'}
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => aplicarFiltros(formFilters, paginaAtual - 1)} 
                        disabled={paginaAtual === 1} 
                        className="rounded border px-4 py-2 hover:bg-gray-50 disabled:opacity-40 transition"
                    >
                        {'<'}
                    </button>
                </li>
                <li>
                    <span className="rounded bg-blue-500 px-4 py-2.5 text-white font-bold">
                        {paginaAtual} de {totalPaginas}
                    </span>
                </li>
                <li>
                    <button 
                        onClick={() => aplicarFiltros(formFilters, paginaAtual + 1)} 
                        disabled={paginaAtual >= totalPaginas} 
                        className="rounded border px-4 py-2 hover:bg-gray-50 disabled:opacity-40 transition"
                    >
                        {'>'}
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => aplicarFiltros(formFilters, totalPaginas)} 
                        disabled={paginaAtual >= totalPaginas} 
                        className="rounded border px-4 py-2 hover:bg-gray-50 disabled:opacity-40 transition"
                    >
                        {'>>'}
                    </button>
                </li>
            </ul>
        </div>
    );
}