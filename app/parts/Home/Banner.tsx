import axios from "axios";
import MainSlider from "../Componentes/MainSlider";

interface Slide {
    codigo: string;
    img: string;
}

// O componente agora é uma função assíncrona (Async Component)
export default async function Banner() {
    
    // Sua lista local mantida no servidor do Front-end
    const slidesLocais: Slide[] = [
        { codigo: "PS899", img: "/img/slide/PS899.jpg" },
        { codigo: "PSI004", img: "/img/slide/PSI004.jpg" },
        { codigo: "ps850", img: "/img/slide/ps850.jpg" },
        { codigo: "PSI138", img: "/img/slide/PSI138.jpg" },
        { codigo: "PS1086", img: "/img/slide/PS1086.jpg" },
        { codigo: "PS1088", img: "/img/slide/PS1088.jpg" },
        { codigo: "PS1077", img: "/img/slide/PS1077.jpg" },
        { codigo: "ps1032", img: "/img/slide/ps1032.jpg" },
        { codigo: "ps1089", img: "/img/slide/ps1089.jpg" },
        { codigo: "PSI074", img: "/img/slide/PSI074.jpg" },
        { codigo: "ps688", img: "/img/slide/ps688.jpg" },
    ];

    let slides: Slide[] = [];

    try {
        // Faz a busca direto no servidor
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BACKEND}/imoveis/banners`, 
            { slides: slidesLocais }
        );
        slides = response.data;
    } catch (error) {
        console.error("Erro ao carregar banners no servidor:", error);
        // Fallback seguro caso o back-end falhe
        slides = slidesLocais;
    }

    // Se por algum motivo o retorno vier vazio, exibe a lista local
    if (!slides || slides.length === 0) {
        slides = slidesLocais;
    }

    return (
        <div className="banner h-64 sm:h-80 md:h-64 lg:h-96 xl:h-120 2xl:h-160 relative">
            <MainSlider slides={slides} />
        </div>
    );
}