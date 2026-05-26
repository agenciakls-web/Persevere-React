import MainSlider from "../Componentes/MainSlider";

export default function Banner() {

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
            <MainSlider slides={slides} />
        </div>
    );
}
