export default function Pesquisa() {
    return (
        <section className="py-10 bg-gray-100" id="#pesquisa">
            <div className="container mx-auto px-4">
                <div className="text-left md:text-right text-sm mx-2 md:mx-0 md:text-xl uppercase font-semibold text-blue-500">
                    CJ: 10624
                </div>
                <h3 className="text-blue-500 text-2xl md:text-3xl uppercase pb-8 font-medium text-center">
                    Pesquisar imóvel
                </h3>
                <ul className="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 md:px-16">
                    <li className="mx-1 md:mx-2 xl:mx-2">
                        <a
                            className="tab-button cursor-pointer bg-blue-500 my-1 md:my-0 px-1 xl:px-4 py-4 md:py-5 block rounded-xl lg:rounded-b-none lg:rounded-t-xl w-full text-center uppercase text-white text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base"
                            data-tab="tab-1"
                        >
                            Comprar
                        </a>
                    </li>
                    <li className="mx-1 md:mx-2 xl:mx-2">
                        <a
                            className="tab-button cursor-pointer bg-blue-500 my-1 md:my-0 px-1 xl:px-4 py-4 md:py-5 block rounded-xl lg:rounded-b-none lg:rounded-t-xl w-full text-center uppercase text-white text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base"
                            data-tab="tab-3"
                        >
                            Código
                        </a>
                    </li>
                </ul>
                <div className="rounded-xl p-8 bg-white">
                    <div className="tab-content" data-tab="tab-1">
                        <form method="GET" action="/imoveis">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                <div>
                                    <select
                                        name="TipoImovel"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 custom-select"
                                    >
                                        <option value="">Tipo</option>
                                        <option value="Casa">Casa</option>
                                        <option value="Apartamento">Apartamento</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        name="pesquisa"
                                        placeholder="Digite condomínio, região, bairro ou cidade"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 tt-autocomplete kenlo-filter-property"
                                    />
                                </div>
                                <div>
                                    <select
                                        name="PrecoVenda"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 custom-select"
                                    >
                                        <option value="">Preço de compra</option>
                                        <option value="1">Até 200.000</option>
                                        <option value="2">De 200.000 até 400.000</option>
                                        <option value="3">De 400.000 até 600.000</option>
                                        <option value="4">De 600.000 até 800.000</option>
                                        <option value="5">De 800.000 até 1.000.000</option>
                                        <option value="6">Acima de 1.000.000</option>
                                    </select>
                                </div>

                                <div>
                                    <select
                                        name="quartos"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 custom-select"
                                    >
                                        <option value="">Mínimo de Quartos</option>
                                        <option value="1">1 ou +</option>
                                        <option value="2">2 ou +</option>
                                        <option value="3">3 ou +</option>
                                        <option value="4">4 ou +</option>
                                        <option value="5">5 ou +</option>
                                    </select>
                                </div>
                                <div>
                                    <select
                                        name="condominio"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 custom-select"
                                    >
                                        <option value="">Em condomínio fechado</option>
                                        <option value="1">Sim</option>
                                        <option value="0">Não</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="hidden" name="acao" value="comprar" />
                                    <button
                                        type="submit"
                                        className="bg-orange-500 text-gray-100 font-medium rounded-full py-3 px-16 block text-lg uppercase"
                                        id="clickSearch"
                                    >
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="tab-content" data-tab="tab-3">
                        <form method="GET" action="/imoveis">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="CodigoImovel"
                                        placeholder="Digite o código do imóvel"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500 tt-autocomplete kenlo-filter-property"
                                    />
                                </div>
                                <div>
                                    <input type="hidden" name="acao" value="code" />
                                    <button
                                        type="submit"
                                        className="bg-orange-500 text-gray-100 font-medium rounded-full py-3 px-16 block text-lg uppercase"
                                        id="clickSearch"
                                    >
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
