'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContentLinks } from '../../dados/contentLinks';

export default function ImovelDetalhe({ imovel }: { imovel: any}) {

    const fotos = useMemo(() => {
        return imovel?.photos || [];
    }, [imovel]);

    const vantagens = [
        {
            label: 'Área Total',
            value: imovel?.AreaTotal ? `${imovel.AreaTotal}m²` : null,
        },
        {
            label: 'Quartos',
            value: imovel?.QtdDormitorios || null,
        },
        {
            label: 'Banheiros',
            value: imovel?.QtdBanheiros || null,
        },
        {
            label: 'Vagas',
            value: imovel?.QtdVagas || null,
        },
        {
            label: 'Suítes',
            value: imovel?.QtdSuites || null,
        },
    ];

    const caracteristicas = [
        { label: 'Suítes', active: imovel?.QtdSuites },
        { label: 'Garagem', active: imovel?.QtdVagas },
        { label: 'Elevador', active: imovel?.QtdElevador },
        { label: 'Ar Condicionado', active: imovel?.ArCondicionado },
        { label: 'Varanda', active: imovel?.Varanda },
        { label: 'Pronto pra morar', active: imovel?.ProntoMorar },
        { label: 'Lavabo', active: imovel?.Lavabo },
        { label: 'Churrasqueira', active: imovel?.Churrasqueira },
        { label: 'Piscina', active: imovel?.Piscina },
        { label: 'Playground', active: imovel?.Playground },
        { label: 'Quadra de Tênis', active: imovel?.QuadraTenis },
        { label: 'Quadra Poliesportiva', active: imovel?.QuadraPoliEsportiva },
        { label: 'Sala de Ginástica', active: imovel?.SalaGinastica },
        { label: 'Salão de Festas', active: imovel?.SalaoFestas },
        { label: 'Salão de Jogos', active: imovel?.SalaoJogos },
        { label: 'Interfone', active: imovel?.Interfone },
        { label: 'Campo de Futebol', active: imovel?.campodefutebol },
        { label: 'Banheiro Empregada', active: imovel?.WCEmpregada },
    ];

    return (
        <main>
            <section className="py-10">
                <div className="container mx-auto px-4">

                    {/* HEADER */}
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                        <div>
                            <p className="text-lg font-medium text-orange-500">
                                {imovel?.Bairro} - {imovel?.Cidade}
                            </p>

                            <h1 className="mt-2 text-2xl font-bold leading-tight text-blue-600 md:text-4xl">
                                {imovel?.SubTipoImovel} - {imovel?.CategoriaImovel}
                            </h1>

                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">

                                <svg
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-blue-500"
                                >
                                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>

                                <span>
                                    {imovel?.Bairro} - {imovel?.Cidade}
                                </span>
                            </div>
                        </div>

                        <div className="text-left md:text-right">
                            <p className="text-xs uppercase tracking-widest text-gray-400">
                                Código do imóvel
                            </p>

                            <h2 className="mt-1 text-lg font-semibold text-gray-600 md:text-2xl">
                                {imovel?.CodigoImovel}
                            </h2>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-10 flex flex-col gap-8 lg:flex-row">

                        {/* LEFT */}
                        <div className="w-full lg:w-2/3">

                            {/* GALERIA */}
                            {fotos.length > 0 && (
                                <div>

                                    <Splide
                                        options={{
                                            type: 'fade',
                                            rewind: true,
                                            pagination: false,
                                            arrows: true,
                                        }}
                                        aria-label="Galeria do imóvel"
                                    >
                                        {fotos.map((foto:any, index:any) => (
                                            <SplideSlide key={index}>

                                                <div className="relative h-62.5 overflow-hidden rounded-2xl sm:h-100 lg:h-137.5">

                                                    <Image
                                                        src={foto?.URLArquivo}
                                                        alt={`Foto ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                        priority={index === 0}
                                                    />
                                                </div>

                                            </SplideSlide>
                                        ))}
                                    </Splide>

                                    <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">

                                        {fotos.map((foto: any, index: any) => (
                                            <div
                                                key={index}
                                                className="relative h-20 overflow-hidden rounded-xl border"
                                            >
                                                <Image
                                                    src={foto?.URLArquivo}
                                                    alt={`Miniatura ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            )}

                            {/* VANTAGENS */}
                            {vantagens.some(item => item.value) && (
                                <div className="mt-10">

                                    <h3 className="mb-6 text-center text-lg font-bold uppercase text-orange-500">
                                        Vantagens
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

                                        {vantagens.map((item, index) => {

                                            if (!item.value) return null;

                                            return (
                                                <div
                                                    key={index}
                                                    className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm"
                                                >
                                                    <div className="text-2xl font-bold text-blue-600">
                                                        {item.value}
                                                    </div>

                                                    <div className="mt-2 text-sm text-gray-500">
                                                        {item.label}
                                                    </div>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>
                            )}

                            {/* SOBRE */}
                            {imovel?.Observacao && (
                                <div className="mt-10">

                                    <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                                        Sobre o imóvel
                                    </h3>

                                    <div className="leading-8 text-gray-600 whitespace-pre-line">
                                        {imovel.Observacao}
                                    </div>
                                </div>
                            )}

                            {/* VIDEO */}
                            {imovel?.video && (
                                <div className="mt-10">

                                    <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                                        Vídeo
                                    </h3>

                                    <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">

                                        <iframe
                                            className="h-full w-full"
                                            src={`https://www.youtube.com/embed/${imovel.video}`}
                                            title="Vídeo do imóvel"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />

                                    </div>
                                </div>
                            )}
                        </div>

                        {/* SIDEBAR */}
                        <div className="w-full lg:w-1/3">

                            {/* CARD PREÇO */}
                            <div className="sticky top-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">

                                <div className="p-6">

                                    <div className="border-b pb-6">

                                        <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                                            Venda
                                        </p>

                                        {imovel?.PrecoVenda && (
                                            <h3 className="mt-2 text-3xl font-bold text-blue-600">
                                                {Number(imovel.PrecoVenda).toLocaleString(
                                                    'pt-BR',
                                                    {
                                                        style: 'currency',
                                                        currency: 'BRL',
                                                    }
                                                )}
                                            </h3>
                                        )}
                                    </div>

                                    <div className="space-y-5 py-6">

                                        {imovel?.PrecoCondominio && (
                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    Condomínio
                                                </p>

                                                <p className="text-lg font-medium text-gray-600">
                                                    {Number(
                                                        imovel.PrecoCondominio
                                                    ).toLocaleString('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL',
                                                    })}
                                                    /mês
                                                </p>
                                            </div>
                                        )}

                                        {imovel?.AreaTotal && (
                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    Área Total
                                                </p>

                                                <p className="text-lg font-medium text-gray-600">
                                                    {imovel.AreaTotal}m²
                                                </p>
                                            </div>
                                        )}

                                        {imovel?.AreaUtil && (
                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    Área Útil
                                                </p>

                                                <p className="text-lg font-medium text-gray-600">
                                                    {imovel.AreaUtil}m²
                                                </p>
                                            </div>
                                        )}

                                    </div>

                                    <div className="space-y-3">

                                        {/*
                                        <Link
                                            href="https://wa.me/5521991257878?text=Olá,%20vim%20pelo%20site!"
                                            target="_blank"
                                        >
                                            <button className="w-full rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                                                Quero visitar
                                            </button>
                                        </Link>
                                        */}

                                        <Link
                                            href={ContentLinks.whatsapp}
                                            target="_blank"
                                        >
                                            <button className="w-full rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-3 font-semibold text-white transition md:px-8 2xl:px-16 text-xs md:text-base 2xl:text-lg ">
                                                Mais informações
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            {/* CARACTERÍSTICAS */}
                            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">

                                <div className="p-6">

                                    <h3 className="mb-6 text-2xl font-semibold text-blue-600">
                                        Características
                                    </h3>

                                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">

                                        {caracteristicas.map((item, index) => {

                                            if (!item.active) return null;

                                            return (
                                                <div
                                                    key={index}
                                                    className="rounded-lg bg-gray-50 px-3 py-2"
                                                >
                                                    {item.label}
                                                </div>
                                            );
                                        })}

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