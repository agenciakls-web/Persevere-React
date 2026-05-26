'use client'
import Link from "next/link";
// @ts-ignore
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
export type SlideItem = {
    codigo: string;
    img: string;
};

interface MainSliderProps {
    slides: SlideItem[];
}

export default function MainSlider({ slides }: MainSliderProps) {
    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <Splide
            hasTrack={false} 
            aria-label="Imóveis em Destaque"
            options={{
                type: "loop",         
                autoplay: true,       
                interval: 5000,       
                speed: 1000,          
                rewind: true,         
                arrows: true,         
                pagination: true,     
                perPage: 1,           
                height: "100%",       
            }}
            className="object-cover h-full w-full absolute"
            id="slide-main"
        >
            <SplideTrack className="h-full w-full absolute">
                {slides.map((slide, idx) => (
                    <SplideSlide key={idx} className="h-full w-full absolute">
                        <Link
                            href={`/imoveis/codigo/${slide.codigo}`}
                            className="block h-full w-full"
                        >
                            <div
                                className="h-full w-full bg-black bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                style={{ backgroundImage: `url(${slide.img})` }}
                                role="img"
                                aria-label={`Imóvel código ${slide.codigo}`}
                            ></div>
                        </Link>
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    );
}