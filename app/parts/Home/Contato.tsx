"use client";

import { ContentLinks } from "@/app/parts/dados/contentLinks";

export default function Contato() {
    return (
        <section className="bg-gray-100 py-14 font-brandon">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    {/* Texto */}
                    <div className="lg:w-7/12 text-center lg:text-left">
                        <h3 className="text-blue-500 text-lg md:text-3xl uppercase py-2 font-medium">
                            Agende uma visita sem compromisso!
                        </h3>
                        <p className="text-orange-500 text-sm 2xl:text-2xl">
                            Nós temos os melhores imóveis disponíveis para você!
                        </p>
                    </div>

                    {/* Botão */}
                    <div className="lg:w-5/12">
                        <a
                            href={ContentLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="conversion"
                        >
                            <button
                                type="button"
                                className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-base md:text-lg mx-auto uppercase"
                            >
                                Agende Já
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
