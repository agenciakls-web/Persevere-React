'use client'
import { useState } from "react";

export default function PesquisaImovel() {
    const [activeTab, setActiveTab] = useState("tab-1");
    
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-left md:text-right text-sm mx-2 md:mx-0 md:text-xl uppercase font-semibold text-blue-500">
                    CJ: 10624
                </div>
                <h3 className="text-blue-500 text-2xl md:text-3xl uppercase pb-8 font-medium text-center">
                    Pesquisar imóvel
                </h3>
                <ul className="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 md:px-16">
                    <li className="mx-1 md:mx-2 xl:mx-2">
                        <button
                            onClick={() => handleTabClick("tab-1")}
                            className={`tab-button cursor-pointer my-1 md:my-0 px-1 xl:px-4 py-4 md:py-5 block rounded-xl lg:rounded-b-none lg:rounded-t-xl w-full text-center uppercase text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base ${activeTab === "tab-1"
                                    ? "bg-white text-blue-500"
                                    : "bg-blue-500 text-white"
                                }`}
                        >
                            Comprar
                        </button>
                    </li>
                    <li className="mx-1 md:mx-2 xl:mx-2">
                        <button
                            onClick={() => handleTabClick("tab-3")}
                            className={`tab-button cursor-pointer my-1 md:my-0 px-1 xl:px-4 py-4 md:py-5 block rounded-xl lg:rounded-b-none lg:rounded-t-xl w-full text-center uppercase text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base ${activeTab === "tab-3"
                                    ? "bg-white text-blue-500"
                                    : "bg-blue-500 text-white"
                                }`}
                        >
                            Código
                        </button>
                    </li>
                </ul>

                {/* Conteúdo */}
                <div className="rounded-xl p-8 bg-white">
                    {activeTab === "tab-1" && (
                        <form action="/imoveis" method="GET">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                <div>
                                    <select
                                        name="TipoImovel"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500"
                                    >
                                        <option value="">Tipo</option>
                                        {/* Exemplo de opções estáticas */}
                                        <option value="Casa">Casa</option>
                                        <option value="Apartamento">Apartamento</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        name="pesquisa"
                                        placeholder="Digite condomínio, região, bairro ou cidade"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500"
                                    />
                                </div>
                                <div>
                                    <select
                                        name="PrecoVenda"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500"
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
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500"
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
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500"
                                    >
                                        <option value="">Em condomínio fechado</option>
                                        <option value="1">Sim</option>
                                        <option value="0">Não</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="hidden" name="action" value="comprar" />
                                    <button
                                        type="submit"
                                        className="bg-orange-500 text-gray-100 font-medium rounded-full py-3 px-16 block text-lg uppercase"
                                    >
                                        <i className="fa fa-search mx-2"></i>
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}

                    {activeTab === "tab-3" && (
                        <form action="/imoveis" method="GET">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <input
                                        type="text"
                                        name="CodigoImovel"
                                        placeholder="Digite o código do imóvel"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-lg font-medium border text-blue-500 border-blue-500"
                                    />
                                </div>
                                <div>
                                    <input type="hidden" name="action" value="codigo" />
                                    <button
                                        type="submit"
                                        className="bg-orange-500 text-gray-100 font-medium rounded-full py-3 px-16 block text-lg uppercase"
                                    >
                                        <i className="fa fa-search mx-2"></i>
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}