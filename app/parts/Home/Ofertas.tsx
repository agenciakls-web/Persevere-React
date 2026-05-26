"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

type Photo = {
    URLArquivo: string;
    Principal?: number;
};

type ImovelOferta = {
    id: number;
    CodigoImovel: string;
    slug: string;
    Bairro: string;
    Cidade: string;
    SubTipoImovel: string;
    PrecoVenda?: number;
    AreaTotal?: number;
    QtdDormitorios?: number;
    QtdBanheiros?: number;
    QtdVagas?: number;
    photos: Photo[];
};

export default function OfertasSemana() {
    const [ofertas, setOfertas] = useState<ImovelOferta[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarOfertas() {
            try {
                setLoading(true);
                // Ajuste para a URL real da sua API Express
                const response = await axios.get(process.env.NEXT_PUBLIC_API_BACKEND + '/imoveis/ofertas');
                setOfertas(response.data);
            } catch (error) {
                console.error("Erro ao buscar as ofertas no frontend:", error);
            } finally {
                setLoading(false);
            }
        }

        carregarOfertas();
    }, []);

    if (loading) {
        return (
            <div className="py-20 text-center text-blue-500 font-semibold">
                Carregando ofertas da semana...
            </div>
        );
    }

    return (
        <section className="my-10" id="card">
            <div className="container mx-auto px-4">
                {/* Cabeçalho / Menu de filtros rápidos */}
                <div className="px-2 my-2 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <h2 className="text-blue-500 text-2xl font-semibold font-open">
                            Nossos Imóveis
                        </h2>
                        <div className="flex flex-wrap justify-center bg-gray-100/80 px-4 py-1.5 rounded-full text-sm">
                            <Link href="/imoveis?status=ofertas" className="py-1 mx-3 text-orange-500 font-medium hover:text-orange-600 transition">
                                Ofertas da Semana
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/imoveis?finalidade=comprar" className="py-1 mx-3 text-orange-500 font-medium hover:text-orange-600 transition">
                                Para Comprar
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/imoveis?finalidade=alugar" className="py-1 mx-3 text-orange-500 font-medium hover:text-orange-600 transition">
                                Para Alugar
                            </Link>
                        </div>
                    </div>

                    <Link href="/imoveis">
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full Nevo py-1.5 px-8 text-xs 2xl:text-sm uppercase transition"
                        >
                            VER TODOS
                        </button>
                    </Link>
                </div>

                {/* Grid de 4 Colunas adaptável */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr mt-6">
                    {ofertas.map((imovel) => {
                        // Resgata a foto principal ou sem foto
                        const fotoCapa = imovel.photos?.find(p => p.Principal === 1)?.URLArquivo
                            || "/img/sem-foto.png";

                        return (
                            <div key={imovel.id} className="px-1 py-2 h-full">
                                <Link href={`/imoveis/codigo/${imovel.CodigoImovel}`} className="flex flex-col h-full group">
                                    <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-200 bg-white flex flex-col justify-between transition-all duration-300 hover:shadow-gray-300 group-hover:-translate-y-1">

                                        {/* Container da Imagem */}
                                        <div className="relative w-full h-48 overflow-hidden">
                                            <Image
                                                alt={imovel.SubTipoImovel}
                                                src={fotoCapa}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            />
                                        </div>

                                        {/* Informações do imóvel */}
                                        <div className="px-5 py-4 flex justify-between items-stretch flex-1">
                                            <div className="w-7/12 uppercase flex flex-col justify-between py-1">
                                                <div>
                                                    <h4 className="text-xs text-orange-500 font-bold tracking-wider">{imovel.Cidade}</h4>
                                                    <h3 className="text-sm 2xl:text-base text-blue-500 font-semibold truncate mt-0.5">
                                                        {imovel.Bairro}
                                                    </h3>
                                                </div>
                                                <div className="mt-4">
                                                    <h4 className="text-xs text-orange-500 font-bold tracking-wider">VENDA</h4>
                                                    <h3 className="text-sm 2xl:text-base text-blue-500 font-bold mt-0.5">
                                                        {imovel.PrecoVenda
                                                            ? imovel.PrecoVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                                            : "Sob Consulta"
                                                        }
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Ícones Técnicos (Injetados dinamicamente) */}
                                            <div className="w-5/12 flex flex-col justify-between items-end border-l border-gray-100 pl-3">
                                                <div className="grid grid-cols-2 gap-x-2 gap-y-3 w-full text-gray-500">
                                                    {/* Área */}
                                                    <div className="flex items-center gap-1.5 text-xs">
                                                        <span className="font-semibold">{imovel.AreaTotal || 0}m²</span>
                                                    </div>
                                                    {/* Quartos */}
                                                    <div className="flex items-center justify-end gap-1.5 text-xs">
                                                        <span className="font-semibold">{imovel.QtdDormitorios || 0}</span>
                                                        <small className="text-[10px] text-gray-400">DORM</small>
                                                    </div>
                                                    {/* Banheiros */}
                                                    <div className="flex items-center gap-1.5 text-xs">
                                                        <span className="font-semibold">{imovel.QtdBanheiros || 1}</span>
                                                        <small className="text-[10px] text-gray-400">BANH</small>
                                                    </div>
                                                    {/* Vagas */}
                                                    <div className="flex items-center justify-end gap-1.5 text-xs">
                                                        <span className="font-semibold">{imovel.QtdVagas || 0}</span>
                                                        <small className="text-[10px] text-gray-400">VAG</small>
                                                    </div>
                                                </div>

                                                <div className="text-blue-500 text-right font-bold text-xs tracking-wider group-hover:text-orange-500 transition-colors pt-2">
                                                    VER MAIS →
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Botão de Rodapé */}
                <div className="w-full mt-4">
                    <Link href="/imoveis">
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full py-2 px-16 block text-base 2xl:text-lg mx-auto uppercase transition shadow-md"
                        >
                            VER MAIS OFERTAS
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}