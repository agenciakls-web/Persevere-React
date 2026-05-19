"use client";

import { useEffect } from "react";
import Link from "next/link";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Banner() {
    useEffect(() => {
        const main = new Splide("#slide-main", {
            type: "loop",
            rewind: true,
            pagination: false,
            arrows: true,
            autoplay: true,
            interval: 2500,
        });

        main.mount();
    }, []);

    const slides = [
        { codigo: "PSI004", img: "https://persevere.com.br/img/slide/PSI004.jpg" },
        { codigo: "ps850", img: "https://persevere.com.br/img/slide/ps850.jpg" },
        { codigo: "PSI138", img: "https://persevere.com.br/img/slide/PSI138.jpg" },
        { codigo: "PS1086", img: "https://persevere.com.br/img/slide/PS1086.jpg" },
        { codigo: "PS1088", img: "https://persevere.com.br/img/slide/PS1088.jpg" },
        { codigo: "PS1077", img: "https://persevere.com.br/img/slide/PS1077.jpg" },
        { codigo: "ps1032", img: "https://persevere.com.br/img/slide/ps1032.jpg" },
        { codigo: "PS899", img: "https://persevere.com.br/img/slide/PS899.jpg" },
        { codigo: "ps1089", img: "https://persevere.com.br/img/slide/ps1089.jpg" },
        { codigo: "PSI074", img: "https://persevere.com.br/img/slide/PSI074.jpg" },
        { codigo: "ps688", img: "https://persevere.com.br/img/slide/ps688.jpg" },
    ];

    return (
        <div className="banner h-[16rem] sm:h-[20rem] md:h-[16rem] lg:h-[24rem] xl:h-[30rem] 2xl:h-[40rem] relative">
            <section
                className="splide object-cover h-full w-full absolute"
                id="slide-main"
            >
                <div className="splide__track h-full w-full absolute">
                    <ul className="splide__list h-full w-full absolute">
                        {slides.map((slide, idx) => (
                            <li
                                key={idx}
                                className="splide__slide h-full w-full absolute"
                            >
                                <Link href={`/imoveis/codigo/${slide.codigo}`}>
                                    <div
                                        className="h-full w-full bg-black bg-cover bg-center"
                                        style={{ backgroundImage: `url(${slide.img})` }}
                                    ></div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
