import { useEffect, useState } from "react";
import axios from "axios";
import MainSlider from "../Componentes/MainSlider";

interface Slide {
    codigo: string;
    img: string;
}

export default function Banner() {
    const [slides, setSlides] = useState<Slide[]>([]);
    const [loading, setLoading] = useState(true);

    // Sua lista local mantida estritamente no Front-end
    const slidesLocais: Slide[] = [
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

    useEffect(() => {
        async function carregarBannersInteligentes() {
            try {
                setLoading(true);

                // Enviamos a lista local para o back-end validar
                const response = await axios.post(
                    process.env.NEXT_PUBLIC_API_BACKEND + '/imoveis/banners',
                    { slides: slidesLocais }
                );

                // O back-end já devolve tudo mapeado e substituído no mesmo formato [{codigo, img}]
                setSlides(response.data);
            } catch (error) {
                console.error("Erro ao carregar banners validados pelo back-end:", error);
                // Se a API falhar, usamos a lista local como fallback para o usuário não ver uma tela em branco
                setSlides(slidesLocais);
            } finally {
                setLoading(false);
            }
        }

        carregarBannersInteligentes();
    }, []);

    if (loading || slides.length === 0) {
        return <div className="banner h-[16rem] sm:h-[20rem] md:h-[16rem] lg:h-[24rem] xl:h-[30rem] 2xl:h-[40rem] bg-gray-100 animate-pulse" />;
    }

    return (
        <div className="banner h-[16rem] sm:h-[20rem] md:h-[16rem] lg:h-[24rem] xl:h-[30rem] 2xl:h-[40rem] relative">
            <MainSlider slides={slides} />
        </div>
    );
}