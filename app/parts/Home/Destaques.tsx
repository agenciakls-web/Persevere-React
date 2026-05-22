"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type Photo = {
    URLArquivo: string;
    Principal?: number;
};

type ImovelDestaque = {
    id: number;
    slug: string;
    Bairro: string;
    Cidade: string;
    PrecoVenda?: number;
    SubTipoImovel: string;
    photos: Photo[];
};

export default function Destaques() {
    const [destaques, setDestaques] = useState<ImovelDestaque[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarDestaques() {
            try {
                setLoading(true);
                // Substitua pela URL real da sua API externa ou interna
                const response = await axios.get("URL_DA_SUA_API/imoveis/destaques");
                setDestaques(response.data);
            } catch (error) {
                console.error("Erro ao carregar os destaques do frontend:", error);
            } finally {
                setLoading(false);
            }
        }

        carregarDestaques();
    }, []);

    if (loading) {
        return (
            <div className="py-20 text-center text-blue-500 font-semibold">
                Carregando imóveis em destaque...
            </div>
        );
    }

    return (
        <section className="my-10">
            <div className="container mx-auto px-4">
                {/* Menu de categorias */}
                <div className="flex justify-center">
                    <div className="bg-gray-100 py-3 px-6 my-3 rounded-full uppercase font-semibold text-orange-500">
                        <div className="flex items-center text-xs sm:text-sm">
                            <a href="#" className="px-4 hover:text-orange-600 transition">
                                Prontos Para Morar
                            </a>
                            <hr className="h-6 border-gray-300 border border-solid rounded-full" />
                            <a href="#" className="px-4 hover:text-orange-600 transition">
                                Em construção
                            </a>
                            <hr className="h-6 border-gray-300 border border-solid rounded-full" />
                            <a href="#" className="px-4 hover:text-orange-600 transition">
                                Lançamentos
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid de imóveis dinâmico */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {destaques.map((imovel) => {
                        // Define qual foto usar de fundo (Principal ou a primeira disponível)
                        const fotoCapa = imovel.photos?.find(p => p.Principal === 1)?.URLArquivo
                            || imovel.photos?.[0]?.URLArquivo
                            || "/img/product-1.png"; // Fallback padrão

                        return (
                            <Link
                                href={`/imoveis/codigo/${imovel.slug}`}
                                key={imovel.id}
                                className="group relative bg-black bg-cover bg-center h-80 flex items-end rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-md"
                                style={{ backgroundImage: `url('${fotoCapa}')` }}
                            >
                                {/* Película escura gradual para dar leitura ao texto branco */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all"></div>

                                <div className="relative font-brandon text-white px-4 py-4 font-bold text-sm 2xl:text-xl z-10 w-full">
                                    <span className="text-xs font-medium text-orange-400 uppercase tracking-wider block mb-1">
                                        {imovel.SubTipoImovel}
                                    </span>
                                    <h4 className="text-lg leading-tight">{imovel.Bairro} - {imovel.Cidade}</h4>
                                    <h5 className="mt-1 font-semibold text-gray-200">
                                        {imovel.PrecoVenda
                                            ? `A partir de: ${imovel.PrecoVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
                                            : "Preço sob consulta"
                                        }
                                    </h5>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Botão Ver Mais */}
                <div className="w-full mt-6">
                    <Link href="/imoveis">
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full py-2 px-16 block text-base 2xl:text-lg mx-auto uppercase transition"
                        >
                            Ver Mais
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}