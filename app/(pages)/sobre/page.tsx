"use client";

import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";

export default function Sobre() {
    return (
        <main>
            <HeaderTitle title="Sobre" />
            <section className="py-16" id="#sobre">
                <div className="container mx-auto px-4">
                    <div className="block lg:flex lg:flex-row-reverse">
                        <div className="lg:w-1/2 flex justify-content items-center">
                            <Image
                                alt=""
                                src="/img/loja.jpg"
                                className="w-full mx-auto lazyloaded"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className="lg:w-1/2 px-2">
                            <div className="text-base text-justify md:text-left md:text-xl text-zinc-700 font-reading">
                                <p className="py-2">
                                    Somos uma empresa perseverante e inovadora, pertencente a um
                                    grupo empresarial que atua e investe no mercado imobiliário há
                                    20 anos.
                                </p>
                                <p className="py-2">
                                    Investimos no aprimoramento de nossos colaboradores e
                                    enxergamos os desafios como grandes oportunidades de
                                    aprendizado e crescimento.
                                </p>
                                <p className="py-2">
                                    Temos como marca registrada nosso forte DNA Empreendedor,
                                    voltado para proporcionar a realização dos sonhos dos nossos
                                    clientes e parceiros estratégicos, operando competentemente na
                                    Compra, Venda, Locação e Construção de Imóveis (Residenciais e
                                    Comerciais). Dispondo de uma variada e qualificada Carteira de
                                    Imóveis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center text-xl">
                    <h3 className="text-2xl text-blue-500 uppercase font-brandon">
                        Missão
                    </h3>
                    <p className="py-2 text-gray-500">
                        Nossa missão é satisfazer as necessidades de nossos estimados
                        clientes, preservando os fatores éticos e morais que são as
                        premissas básicas dos nossos negócios, destacados pela excelência no
                        atendimento aos nossos clientes, com respeito, seriedade,
                        profissionalismo e credibilidade em nossas operações, aplicando a
                        melhoria contínua em nossos processos internos. Tendo como nossa
                        meta principal sermos uma empresa diferenciada e inovadora, bem
                        como, uma grande referência no mercado imobiliário.
                    </p>
                    <p className="py-2">
                        <strong>Tenha Fé e PERSEVERE!</strong>
                    </p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h3 className="text-center uppercase text-xl md:text-3xl mb-8 font-bold text-blue-500">
                        SIGA-NOS NAS REDES SOCIAIS
                    </h3>
                    <div className="font-bold py-2 bg-pink md:text-lg flex text-blue-500 gap-6 md:gap-12 justify-center">
                        <div>
                            <a
                                href="https://www.facebook.com/persevereimoveis"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 md:h-12 fill-blue-500"
                                    viewBox="0 0 23.811 23.81"
                                >
                                    <path
                                        id="facebook"
                                        d="M62.252,29.548V48.242a.405.405,0,0,0-.037.084,2.888,2.888,0,0,1-2.99,2.473q-2.546,0-5.091,0c-.6,0-.857-.258-.857-.866V41.727c0-.6.257-.857.866-.858.7,0,1.395,0,2.093,0,.082,0,.165-.007.256-.011v-1.99h-.265c-.721,0-1.442,0-2.162,0a.71.71,0,0,1-.787-.793q0-1.325,0-2.65a.81.81,0,0,1,.891-.895c.69,0,1.379,0,2.069,0h.247v-2c-.787,0-1.554,0-2.32,0a2.794,2.794,0,0,0-2.888,2.889c0,.868,0,1.736,0,2.6,0,.59-.256.844-.851.845-.7,0-1.41,0-2.115,0-.081,0-.162.009-.243.014v1.989h.269c.7,0,1.41,0,2.115,0a.725.725,0,0,1,.826.828q0,4.138,0,8.276a.724.724,0,0,1-.827.826q-4.51,0-9.02,0a3.251,3.251,0,0,1-.714-.073A2.887,2.887,0,0,1,38.444,47.8q0-7.893,0-15.785c0-.721-.008-1.442,0-2.162a2.892,2.892,0,0,1,1.976-2.71c.189-.064.386-.1.579-.153H59.7a.562.562,0,0,0,.106.04,2.766,2.766,0,0,1,2.066,1.439A7.059,7.059,0,0,1,62.252,29.548ZM54.7,42.279V49.4h.241q2.138,0,4.278,0a1.518,1.518,0,0,0,1.634-1.643q0-8.858,0-17.715a1.517,1.517,0,0,0-1.634-1.643q-8.869,0-17.739,0a2.024,2.024,0,0,0-.528.064,1.5,1.5,0,0,0-1.1,1.583q0,8.846,0,17.692A1.523,1.523,0,0,0,41.509,49.4h8.347V42.278c-.808,0-1.6,0-2.387,0a.734.734,0,0,1-.833-.828q0-1.581,0-3.162a.733.733,0,0,1,.831-.829c.713,0,1.426,0,2.139,0h.268c0-.672-.009-1.314,0-1.955a5.663,5.663,0,0,1,.084-1.016,4.159,4.159,0,0,1,4.044-3.359c1.03-.019,2.061-.006,3.092,0a.722.722,0,0,1,.818.813q0,1.592,0,3.185a.715.715,0,0,1-.8.806c-.721,0-1.442,0-2.162,0h-.262v1.529h.259c.728,0,1.457,0,2.185,0a.713.713,0,0,1,.778.764q.01,1.65,0,3.3a.708.708,0,0,1-.742.752c-.247.009-.5,0-.744,0C55.857,42.28,55.285,42.279,54.7,42.279Z"
                                        transform="translate(-38.441 -26.99)"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.instagram.com/persevere.imoveis/"
                                target="_blank"
                            >
                                <svg
                                    id="instagram"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 md:h-12 fill-blue-500"
                                    viewBox="0 0 23.763 23.766"
                                >
                                    <path
                                        id="Caminho_29"
                                        data-name="Caminho 29"
                                        d="M62.57,32.477v12.81a12.931,12.931,0,0,1-.288,1.33,5.928,5.928,0,0,1-5.69,4.143q-5.9.017-11.81,0a5.724,5.724,0,0,1-3.453-1.1,5.888,5.888,0,0,1-2.521-5.012q0-5.743,0-11.485a6.7,6.7,0,0,1,.089-1.177,5.776,5.776,0,0,1,3.707-4.566A11.95,11.95,0,0,1,44.284,27h12.81c.167.03.333.057.5.088a5.81,5.81,0,0,1,4.549,3.693A11.98,11.98,0,0,1,62.57,32.477Zm-1.994,6.405h.009c0-1.934,0-3.867,0-5.8a3.906,3.906,0,0,0-.358-1.778,3.859,3.859,0,0,0-3.663-2.314c-3.921-.014-7.842-.006-11.764,0a5.044,5.044,0,0,0-.692.054,3.9,3.9,0,0,0-3.3,3.7c-.026,4.045-.011,8.09-.013,12.135a3.515,3.515,0,0,0,.35,1.571,3.891,3.891,0,0,0,3.726,2.328q5.812.008,11.624,0a5.744,5.744,0,0,0,.785-.056,3.919,3.919,0,0,0,3.29-3.667C60.6,43,60.576,40.939,60.576,38.882Z"
                                        transform="translate(-38.807 -27)"
                                    ></path>
                                    <path
                                        id="Caminho_30"
                                        data-name="Caminho 30"
                                        d="M136.666,118.942a5.94,5.94,0,1,1-5.9-5.969A5.954,5.954,0,0,1,136.666,118.942Zm-5.936-3.984a3.955,3.955,0,1,0,3.951,3.954A3.949,3.949,0,0,0,130.73,114.958Z"
                                        transform="translate(-118.844 -107.032)"
                                    ></path>
                                    <path
                                        id="Caminho_31"
                                        data-name="Caminho 31"
                                        d="M283.979,87.279a1.481,1.481,0,0,1-.022-2.962,1.481,1.481,0,1,1,.022,2.962Z"
                                        transform="translate(-265.65 -80.356)"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
