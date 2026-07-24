'use client';

type TipoImovel = {
    TipoImovel: string;
};

type CondominioImovel = {
    NomeCondominio: string;
};

interface FormFiltersType {
    pesquisa: string;
    TipoImovel: string;
    PrecoVenda: string;
    quartos: string;
    condominio: string;
    CodigoImovel: string;
    Cidade: string;
    NomeCondominio: string; // <-- Adicionado
    action: string;
    orderBy: string;
    orderDirection: string;
}

interface SidebarFiltrosProps {
    formFilters: FormFiltersType;
    setFormFilters: React.Dispatch<React.SetStateAction<FormFiltersType>>;
    tiposDisponiveis: TipoImovel[];
    cidadesDisponiveis: { Cidade: string }[];
    condominiosDisponiveis: CondominioImovel[]; // <-- Adicionado
    aplicarFiltros: (novosFiltros?: FormFiltersType, novaPagina?: number) => void;
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function SidebarFiltros({
    formFilters,
    setFormFilters,
    tiposDisponiveis,
    cidadesDisponiveis,
    condominiosDisponiveis, // <-- Adicionado
    aplicarFiltros,
    handleSubmit,
    handleChange,
}: SidebarFiltrosProps) {

    // Opções de preço adaptativas (Venda vs Aluguel)
    const opcoesPrecoComprar = [
        { label: 'Até 200.000', value: '1' },
        { label: '200.000 até 400.000', value: '2' },
        { label: '400.000 até 600.000', value: '3' },
        { label: '600.000 até 800.000', value: '4' },
        { label: '800.000 até 1.000.000', value: '5' },
        { label: 'Acima de 1.000.000', value: '6' },
    ];

    const opcoesPrecoAlugar = [
        { label: 'Até R$ 1.000', value: '1' },
        { label: 'R$ 1.000 até R$ 2.000', value: '2' },
        { label: 'R$ 2.000 até R$ 3.000', value: '3' },
        { label: 'R$ 3.000 até R$ 5.000', value: '4' },
        { label: 'Acima de R$ 5.000', value: '5' },
    ];

    const opcoesPrecoAtuais = formFilters.action === 'alugar' ? opcoesPrecoAlugar : opcoesPrecoComprar;

    const mudarAcao = (novaAcao: string) => {
        const atualizado: FormFiltersType = {
            pesquisa: '',
            TipoImovel: '',
            PrecoVenda: '',
            quartos: '',
            condominio: '',
            CodigoImovel: '',
            Cidade: '',
            NomeCondominio: '',
            action: novaAcao,
            orderBy: formFilters.orderBy,
            orderDirection: formFilters.orderDirection,
        };
        setFormFilters(atualizado);
        aplicarFiltros(atualizado, 1);
    };

    return (
        <aside>
            <div className="mb-4 md:mb-10">
                {/* ALTERNADOR DE BUSCA (TABS COMPRAR / ALUGAR / CÓDIGO) */}
                <div className="mb-6 flex gap-1 border-b border-gray-200 pb-2">
                    <button
                        type="button"
                        onClick={() => mudarAcao('comprar')}
                        className={`w-1/3 rounded-lg py-2.5 text-xs md:text-sm font-bold uppercase transition ${
                            formFilters.action === 'comprar'
                                ? 'bg-blue-500 text-white shadow'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                    >
                        Comprar
                    </button>

                    <button
                        type="button"
                        onClick={() => mudarAcao('alugar')}
                        className={`w-1/3 rounded-lg py-2.5 text-xs md:text-sm font-bold uppercase transition ${
                            formFilters.action === 'alugar'
                                ? 'bg-blue-500 text-white shadow'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                    >
                        Alugar
                    </button>

                    <button
                        type="button"
                        onClick={() => mudarAcao('codigo')}
                        className={`w-1/3 rounded-lg py-2.5 text-xs md:text-sm font-bold uppercase transition ${
                            formFilters.action === 'codigo'
                                ? 'bg-orange-500 text-white shadow'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                    >
                        Código
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

                    {/* VISÃO: PESQUISA COMPRAR OU ALUGAR */}
                    {(formFilters.action === 'comprar' || formFilters.action === 'alugar') && (
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

                            {/* CIDADES DINÂMICAS DO BANCO */}
                            <div>
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-blue-500">
                                    Cidade
                                </h4>
                                <div className="hidden md:block space-y-1 max-h-48 overflow-y-auto pr-1">
                                    <label className="flex items-center py-1 cursor-pointer hover:text-blue-600 font-medium text-gray-700">
                                        <input
                                            type="radio"
                                            name="Cidade"
                                            value=""
                                            checked={formFilters.Cidade === ""}
                                            onChange={handleChange}
                                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
                                        />
                                        Todas as cidades
                                    </label>

                                    {cidadesDisponiveis.map((item, index) => (
                                        <label key={index} className="flex items-center py-1 cursor-pointer hover:text-blue-600 font-medium text-gray-700">
                                            <input
                                                type="radio"
                                                name="Cidade"
                                                value={item.Cidade}
                                                checked={formFilters.Cidade === item.Cidade}
                                                onChange={handleChange}
                                                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
                                            />
                                            {item.Cidade}
                                        </label>
                                    ))}
                                </div>

                                <select
                                    name="Cidade"
                                    value={formFilters.Cidade}
                                    onChange={handleChange}
                                    className="block md:hidden w-full py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                >
                                    <option value="">Todas as cidades</option>
                                    {cidadesDisponiveis.map((item, index) => (
                                        <option key={index} value={item.Cidade}>
                                            {item.Cidade}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* CONDOMÍNIOS DINÂMICOS DO BANCO */}
                            <div>
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-blue-500">
                                    Condomínio
                                </h4>
                                <div className="hidden md:block space-y-1 max-h-48 overflow-y-auto pr-1">
                                    <label className="flex items-center py-1 cursor-pointer hover:text-blue-600 font-medium text-gray-700">
                                        <input
                                            type="radio"
                                            name="NomeCondominio"
                                            value=""
                                            checked={formFilters.NomeCondominio === ""}
                                            onChange={handleChange}
                                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
                                        />
                                        Todos os condomínios
                                    </label>

                                    {condominiosDisponiveis.map((item, index) => (
                                        <label key={index} className="flex items-center py-1 cursor-pointer hover:text-blue-600 font-medium text-gray-700">
                                            <input
                                                type="radio"
                                                name="NomeCondominio"
                                                value={item.NomeCondominio}
                                                checked={formFilters.NomeCondominio === item.NomeCondominio}
                                                onChange={handleChange}
                                                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
                                            />
                                            {item.NomeCondominio}
                                        </label>
                                    ))}
                                </div>

                                <select
                                    name="NomeCondominio"
                                    value={formFilters.NomeCondominio}
                                    onChange={handleChange}
                                    className="block md:hidden w-full py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                >
                                    <option value="">Todos os condomínios</option>
                                    {condominiosDisponiveis.map((item, index) => (
                                        <option key={index} value={item.NomeCondominio}>
                                            {item.NomeCondominio}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* TIPO DINÂMICO DO BANCO */}
                            <div>
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-blue-500">
                                    Tipo de Imóvel
                                </h4>
                                <div className="hidden md:block space-y-1 max-h-48 overflow-y-auto pr-1">
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

                            {/* PREÇO (ADAPTÁVEL DINAMICAMENTE PARA COMPRA / ALUGUEL) */}
                            <div>
                                <h4 className="text-sm md:text-base my-2 font-bold uppercase text-blue-500">
                                    {formFilters.action === 'alugar' ? 'Preço de Locação' : 'Preço de Venda'}
                                </h4>
                                <div className="hidden md:block space-y-2">
                                    {opcoesPrecoAtuais.map((opcao) => (
                                        <label key={opcao.value} className="flex items-center cursor-pointer hover:text-blue-600 font-medium text-gray-700">
                                            <input
                                                type="radio"
                                                name="PrecoVenda"
                                                value={opcao.value}
                                                checked={formFilters.PrecoVenda === opcao.value}
                                                onChange={handleChange}
                                                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400"
                                            />
                                            {opcao.label}
                                        </label>
                                    ))}
                                </div>

                                <select
                                    name="PrecoVenda"
                                    value={formFilters.PrecoVenda}
                                    onChange={handleChange}
                                    className="block md:hidden w-full py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                >
                                    <option value="">
                                        {formFilters.action === 'alugar' ? 'Preço de locação' : 'Preço de compra'}
                                    </option>
                                    {opcoesPrecoAtuais.map((opcao) => (
                                        <option key={opcao.value} value={opcao.value}>
                                            {opcao.label}
                                        </option>
                                    ))}
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