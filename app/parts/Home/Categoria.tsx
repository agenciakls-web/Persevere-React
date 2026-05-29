"use client";

import Link from "next/link";

export default function Categoria() {
    return (
        <section className="my-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-5 gap-4">
                    <Link href="/imoveis?action=comprar&TipoImovel=Casa+Padrao">
                        <div className="bg-black bg-[url(/img/categoria-2.png)] bg-cover h-32 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-xl 2xl:text-2xl">
                            Casas
                        </div>
                    </Link>
                    <Link href="/imoveis?action=comprar&TipoImovel=Apartamento+Padrao">
                        <div className="bg-black bg-[url(/img/categoria-3.png)] bg-cover h-32 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-xl 2xl:text-2xl">
                            Apartamentos
                        </div>
                    </Link>
                    <Link href="/imoveis?action=comprar&TipoImovel=Casa+de+Condominio">
                        <div className="bg-black bg-[url(/img/categoria-4.png)] bg-cover h-32 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-xl 2xl:text-2xl">
                            Casa de Condomínio
                        </div>
                    </Link>
                    <Link href="/imoveis?action=comprar&TipoImovel=Terreno+Padrao">
                        <div className="bg-black bg-[url(/img/categoria-1.png)] bg-cover h-32 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-xl 2xl:text-2xl">
                            Terrenos
                        </div>
                    </Link>
                    <Link href="/imoveis?action=comprar&TipoImovel=Loteamento%2FCondominio">
                        <div className="bg-black bg-[url(/img/categoria-4.png)] bg-cover h-32 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-xl 2xl:text-2xl">
                            Loteamento/Condomínio
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
