"use client";

import Link from "next/link";

export default function Categoria() {
    return (
        <section className="my-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-5 gap-4">
                    <Link href="/imoveis?action=comprar&TipoImovel=Casa+Padrao">
                        <div className="bg-black bg-[url(/img/categoria-2.png)] bg-cover h-42 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-base 2xl:text-lg">
                            Casas
                        </div>
                    </Link>
                    <Link href="/imoveis?action=comprar&TipoImovel=Apartamento+Padrao">
                        <div className="bg-black bg-[url(/img/categoria-3.png)] bg-cover h-42 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-base 2xl:text-lg">
                            Apartamentos
                        </div>
                    </Link>
                    <Link href="/imoveis?action=comprar&TipoImovel=Casa+de+Condominio">
                        <div className="bg-black bg-[url(/img/categoria-4.png)] bg-cover h-42 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-base 2xl:text-lg">
                            Casa de Condomínio
                        </div>
                    </Link>
                    <Link href="/imoveis?action=comprar&TipoImovel=Terreno+Padrao">
                        <div className="bg-black bg-[url(/img/categoria-1.png)] bg-cover h-42 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-base 2xl:text-lg">
                            Terrenos
                        </div>
                    </Link>
                    <Link href="/imoveis?action=comprar&TipoImovel=Loteamento%2FCondominio">
                        <div className="bg-black bg-[url(/img/categoria-4.png)] bg-cover h-42 rounded-xl text-center flex items-center justify-center text-white font-brandon uppercase text-base 2xl:text-lg">
                            Loteamento/Condomínio
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
