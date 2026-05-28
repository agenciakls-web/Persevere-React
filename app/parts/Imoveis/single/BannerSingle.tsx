import Link from "next/link";
// @ts-ignore
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { PhotosType } from "../../tipagem/imoveis";

export default function BannerSingle({ slides }: { slides: PhotosType[]}) {
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
                perPage: 2,           
                height: "100%",       
            }}
            className="object-cover rounded-xl h-full"
            id="slide-main"
        >
            <SplideTrack className="h-full w-full absolute">
                {slides.map((slide, idx) => (
                    <SplideSlide key={idx} className="h-full w-full absolute">
                            <div
                                className="h-full w-full bg-black bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                style={{ backgroundImage: `url(${slide.URLArquivo})` }}
                                role="img"></div>
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    );
}