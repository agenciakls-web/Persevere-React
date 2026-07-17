'use client'
import { useState, useEffect } from "react";
import axios from "axios";

type TipoImovel = {
    TipoImovel: string;
};

type CidadeImovel = {
    Cidade: string;
};

export default function PesquisaImovel() {
    const [activeTab, setActiveTab] = useState("tab-1");
    const [tiposDisponiveis, setTiposDisponiveis] = useState<TipoImovel[]>([]);
    const [cidadesDisponiveis, setCidadesDisponiveis] = useState<CidadeImovel[]>([]);
    
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    // Carrega os dados dinâmicos do banco ao montar o componente
    useEffect(() => {
        async function carregarDadosFiltros() {
            try {
                const [resTipos, resCidades] = await Promise.all([
                    axios.get(process.env.NEXT_PUBLIC_API_BACKEND + '/imoveis/tipos'),
                    axios.get(process.env.NEXT_PUBLIC_API_BACKEND + '/imoveis/cidades')
                ]);
                
                setTiposDisponiveis(resTipos.data);
                setCidadesDisponiveis(resCidades.data);
            } catch (error) {
                console.error("Erro ao carregar dados dos filtros:", error);
            }
        }
        carregarDadosFiltros();
    }, []);

    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-left md:text-right text-sm mx-2 md:mx-0 md:text-xl uppercase font-semibold text-blue-500">
                    CJ: 10624
                </div>
                <h3 className="text-blue-500 text-xl md:text-3xl uppercase py-3 font-medium text-center">
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
                                {/* TIPO DE IMÓVEL DINÂMICO */}
                                <div>
                                    <select
                                        name="TipoImovel"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                    >
                                        <option value="">Tipo</option>
                                        {tiposDisponiveis.map((item, index) => (
                                            <option key={index} value={item.TipoImovel}>
                                                {item.TipoImovel}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* PESQUISA TEXTUAL */}
                                <div>
                                    <input
                                        name="pesquisa"
                                        placeholder="Digite condomínio, região, bairro..."
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                    />
                                </div>

                                {/* CIDADE DINÂMICA (Adicionada após a pesquisa) */}
                                <div>
                                    <select
                                        name="Cidade"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                    >
                                        <option value="">Cidade</option>
                                        {cidadesDisponiveis.map((item, index) => (
                                            <option key={index} value={item.Cidade}>
                                                {item.Cidade}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* PREÇO VENDA */}
                                <div>
                                    <select
                                        name="PrecoVenda"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
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

                                {/* QUARTOS */}
                                <div>
                                    <select
                                        name="quartos"
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                    >
                                        <option value="">Mínimo de Quartos</option>
                                        <option value="1">1 ou +</option>
                                        <option value="2">2 ou +</option>
                                        <option value="3">3 ou +</option>
                                        <option value="4">4 ou +</option>
                                        <option value="5">5 ou +</option>
                                    </select>
                                </div>

                                {/* BOTÃO BUSCAR */}
                                <div className="flex items-center justify-center md:justify-start">
                                    <input type="hidden" name="action" value="comprar" />
                                    <button
                                        type="submit"
                                        className="bg-orange-500 text-gray-100 font-medium rounded-full py-2 px-16 block text-sm md:text-lg uppercase"
                                    >
                                        <i className="fa fa-search"></i>
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
                                        className="w-full py-2 md:py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-blue-500 border-blue-500"
                                    />
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <input type="hidden" name="action" value="codigo" />
                                    <button
                                        type="submit"
                                        className="bg-orange-500 text-gray-100 font-medium rounded-full py-2 px-16 block text-sm md:text-lg uppercase"
                                    >
                                        <i className="fa fa-search"></i>
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