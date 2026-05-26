"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";
import Link from "next/link";
import { ContentLinks } from "@/app/parts/dados/contentLinks";
import { CopyButton } from "@/app/parts/Componentes/CopyButton";


type Photo = {
    URLArquivo: string;
    Principal?: number;
};

type Imovel = {
    id: number;
    slug: string;
    Bairro: string;
    Cidade: string;
    SubTipoImovel: string;
    CategoriaImovel: string;
    CodigoImovel: string;
    QtdDormitorios?: number;
    QtdBanheiros?: number;
    QtdVagas?: number;
    AreaTotal?: number;
    PrecoVenda?: number;
    Descricao?: string; 
    photos: Photo[];
};

export default function ImovelSingle() {
    const params = useParams();
    const slug = params?.slug; 

    const [imovel, setImovel] = useState<Imovel | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        async function carregarImovel() {
            try {
                setLoading(true);
                
                const response = await axios.get( process.env.NEXT_PUBLIC_API_BACKEND + `/imoveis/codigo/${slug}`);
                setImovel(response.data);
            } catch (error) {
                console.error("Erro ao carregar os detalhes do imóvel:", error);
            } finally {
                setLoading(false);
            }
        }

        carregarImovel();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center text-blue-500 font-medium">
                Carregando detalhes do imóvel...
            </div>
        );
    }

    if (!imovel) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-gray-700">Imóvel não encontrado</h1>
                <p className="text-gray-500">O imóvel que você procura não existe ou foi removido.</p>
            </div>
        );
    }

    
    const fotoExibicao = imovel.photos?.find((p) => p.Principal === 1)?.URLArquivo 
        || imovel.photos?.[0]?.URLArquivo 
        || "/img/product-1.png"; 

    return (
        <main>
            <HeaderTitle title={imovel.SubTipoImovel || "Imóveis"} />
            <section className="py-8 text-gray-500" id="imoveis">
                <div className="container mx-auto px-4">
                    <div>
                        {/* Dados de Localização Dinâmicos */}
                        <p className="text-lg font-medium text-orange-500">
                            {imovel.Bairro} - {imovel.Cidade}/RJ
                        </p>
                        <h1 className="mt-1 text-3xl font-semibold text-blue-500">
                            {imovel.SubTipoImovel} com {imovel.QtdDormitorios || 0} dormitórios à venda, {imovel.AreaTotal || 0} m²
                        </h1>

                        <dl className="my-4 text-xs font-medium flex items-center">
                            <dt className="sr-only">Location</dt>
                            <dd className="flex items-center">
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-1 text-blue-500"
                                    aria-hidden="true"
                                >
                                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                {imovel.Cidade} - Rio de Janeiro
                                <div className="mx-2 float-left">
                                    <button
                                        type="button"
                                        className="bg-blue-500 text-white text-xs py-2 px-2 rounded-md hover:bg-blue-600 transition"
                                    >
                                        Ver no mapa
                                    </button>
                                </div>
                                <CopyButton imovel={imovel} />
                            </dd>
                        </dl>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="w-full md:w-2/3">
                            <div className="relative h-96 w-full">
                                <Image
                                    src={fotoExibicao}
                                    alt={imovel.SubTipoImovel}
                                    fill
                                    className="object-cover rounded-xl"
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                    priority
                                />
                            </div>
                            
                            <div className="py-4 text-base text-gray-500">
                                <h3 className="text-blue-500 my-2 text-2xl font-open">
                                    Sobre o imóvel
                                </h3>
                                
                                {/* Se você tiver a descrição salva em formato texto no banco: */}
                                {imovel.Descricao ? (
                                    <p className="py-1 whitespace-pre-line">{imovel.Descricao}</p>
                                ) : (
                                    <>
                                        <p className="py-1">
                                            Excelente {imovel.SubTipoImovel.toLowerCase()} em ótima localização no bairro {imovel.Bairro}, próximo ao comércio local e condução estruturada.
                                        </p>
                                        <p className="py-1">
                                            Possui ótimo acabamento contando com {imovel.QtdDormitorios} dormitórios, {imovel.QtdBanheiros || 1} banheiro(s) e espaço para {imovel.QtdVagas || 0} carro(s).
                                        </p>
                                        <p className="py-1">
                                            Agilizamos todo o processo de financiamento dos bancos até a entrega das chaves do imóvel. Use seu FGTS.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="w-full md:w-1/3">
                            <div className="px-2 pb-6">
                                <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300 bg-white">
                                    <div className="px-6 py-4">
                                        <div className="">
                                            <div className="py-3">
                                                <h4 className="text-lg text-orange-500 uppercase">Venda</h4>
                                                <h3 className="text-2xl text-blue-500 font-medium uppercase">
                                                    {imovel.PrecoVenda ? imovel.PrecoVenda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : "Sob Consulta"}
                                                </h3>
                                                {imovel.PrecoVenda && imovel.AreaTotal && (
                                                    <p className="text-sm my-1 text-blue-500 ">
                                                        {(imovel.PrecoVenda / imovel.AreaTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/m²
                                                    </p>
                                                )}
                                            </div>
                                            
                                            {/* Ajuste esses valores se passarem a vir do seu banco no futuro */}
                                            <div className="py-3 border-t border-gray-100">
                                                <h4 className="text-sm text-gray-400">Código do Imóvel</h4>
                                                <h3 className="text-lg text-gray-600 font-medium">
                                                    {imovel.CodigoImovel}
                                                </h3>
                                            </div>
                                        </div>
                                       {/*
                                       
                                        <button
                                            type="button"
                                            className="bg-orange-500 hover:bg-orange-600 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-lg mx-auto uppercase w-4/5 transition"
                                        >
                                            Quero visitar
                                        </button>*/}
                                        <Link href={ContentLinks.whatsapp} target="_blank">
                                        <button
                                            type="button"
                                            className="bg-orange-500 hover:bg-orange-600 text-gray-100 font-medium rounded-full my-4 py-2  block md:px-8 2xl:px-16 text-xs md:text-base 2xl:text-lg  mx-auto uppercase w-4/5 transition"
                                        >
                                            Mais informações
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Detalhes de Cômodos adicionais */}
                            <div className="px-2 pb-6">
                                <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300 bg-white">
                                    <div className="px-6 py-4">
                                        <h3 className="text-blue-500 my-2 text-2xl font-open">
                                            Estrutura
                                        </h3>
                                        <div className="space-y-2 text-gray-600 text-base">
                                            <div>🚗 Vagas na garagem: <span className="font-semibold">{imovel.QtdVagas || 0}</span></div>
                                            <div>🛏️ Quartos: <span className="font-semibold">{imovel.QtdDormitorios || 0}</span></div>
                                            <div>🚿 Banheiros: <span className="font-semibold">{imovel.QtdBanheiros || 0}</span></div>
                                            <div>📐 Área Total: <span className="font-semibold">{imovel.AreaTotal || 0} m²</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}