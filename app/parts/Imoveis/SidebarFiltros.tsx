'use client';

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
    Cidade: string;
    action: string;
    orderBy: string;
    orderDirection: string;
}

interface SidebarFiltrosProps {
    formFilters: FormFiltersType;
    setFormFilters: React.Dispatch<React.SetStateAction<FormFiltersType>>;
    tiposDisponiveis: TipoImovel[];
    aplicarFiltros: (novosFiltros?: FormFiltersType, novaPagina?: number) => void;
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function SidebarFiltros({
    formFilters,
    setFormFilters,
    tiposDisponiveis,
    aplicarFiltros,
    handleSubmit,
    handleChange,
}: SidebarFiltrosProps) {
    return (
        <aside>
            <div className="mb-4 md:mb-10">
                {/* ALTERNADOR DE BUSCA (TABS) */}
                <div className="mb-6 flex gap-2 border-b border-gray-200 pb-2">
                    <button
                        type="button"
                        onClick={() => {
                            const atualizado: FormFiltersType = {
                                pesquisa: '',
                                TipoImovel: '',
                                PrecoVenda: '',
                                quartos: '',
                                condominio: '',
                                CodigoImovel: '',
                                Cidade: '',
                                action: 'comprar',
                                orderBy: formFilters.orderBy,
                                orderDirection: formFilters.orderDirection,
                            };
                            setFormFilters(atualizado);
                            aplicarFiltros(atualizado, 1);
                        }}
                        className={`w-1/2 rounded-lg py-2.5 text-xs md:text-sm font-bold uppercase transition ${formFilters.action === 'comprar'
                                ? 'bg-blue-500 text-white shadow'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                            }`}
                    >
                        Pesquisa Geral
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            const atualizado: FormFiltersType = {
                                pesquisa: '',
                                TipoImovel: '',
                                PrecoVenda: '',
                                quartos: '',
                                condominio: '',
                                CodigoImovel: '',
                                Cidade: '',
                                action: 'codigo',
                                orderBy: formFilters.orderBy,
                                orderDirection: formFilters.orderDirection,
                            };
                            setFormFilters(atualizado);
                            aplicarFiltros(atualizado, 1);
                        }}
                        className={`w-1/2 rounded-lg py-2.5 text-xs md:text-sm font-bold uppercase transition ${formFilters.action === 'codigo'
                                ? 'bg-orange-500 text-white shadow'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                            }`}
                    >
                        Por Código
                    </button>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="action" value={formFilters.action} />
                    <input type="hidden" name="orderBy" value={formFilters.orderBy} />
                    <input type="hidden" name="orderDirection" value={formFilters.orderDirection} />

                    {/* VISÃO: BUSCA POR CÓDIGO */}
                    {formFilters.action === 'codigo' && (
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-orange-500">
                                    Código do Imóvel
                                </h4>
                                <input
                                    type="text"
                                    name="CodigoImovel"
                                    placeholder="Ex: PSI022"
                                    value={formFilters.CodigoImovel}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-orange-500 py-3 px-2 md:px-4 text-sm md:text-lg font-medium text-orange-600 placeholder-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="block w-full text-center rounded-full bg-orange-500 px-4 py-3 text-sm md:text-lg font-medium uppercase text-gray-100 hover:bg-orange-600 transition shadow-md"
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
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-blue-500">
                                    Termo de pesquisa
                                </h4>
                                <input
                                    type="text"
                                    name="pesquisa"
                                    placeholder="Digite condomínio, região, bairro..."
                                    value={formFilters.pesquisa}
                                    onChange={handleChange}
                                    className="w-full py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500 md:col-span-2 tt-autocomplete kenlo-filter-property"
                                />
                            </div>
                            {/* CAMPO NOVO: PESQUISA POR CIDADE */}
                            <div>
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-blue-500">
                                    Cidade
                                </h4>
                                <input
                                    type="text"
                                    name="Cidade"
                                    placeholder="Ex: Rio de Janeiro, São Paulo..."
                                    value={formFilters.Cidade || ''}
                                    onChange={handleChange}
                                    className="w-full py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                />
                            </div>

                            {/* TIPO DINÂMICO DO BANCO */}
                            <div>
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-blue-500">
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
                                    className="block md:hidden w-full py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
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
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-blue-500">
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
                                    className="block md:hidden w-full py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
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
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-blue-500">
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
                                    className="block md:hidden w-full py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                >
                                    <option value="">Mínimo de Quartos</option>
                                    {[1, 2, 3, 4, 5].map((q) => (
                                        <option key={q} value={q}>{q} ou +</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="block w-full text-center rounded-full bg-blue-500 px-4 py-3 text-sm md:text-lg font-medium uppercase text-gray-100 hover:bg-blue-600 transition shadow-md"
                            >
                                Filtrar Resultados
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </aside>
    );
}