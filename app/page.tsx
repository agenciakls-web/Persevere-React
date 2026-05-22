import Banner from "./parts/Home/Banner";
import Destaques from "./parts/Home/Destaques";
import Contato from "./parts/Home/Contato";
import Categoria from "./parts/Home/Categoria";
import Pesquisa from "./parts/pesquisa";
import OfertasSemana from "./parts/Home/Ofertas";

export default function Home() {
    return (
        <div>
            <Banner />
            <Pesquisa />
            <Categoria />
            <Destaques  />
            <OfertasSemana  />
            <Contato />
        </div>
    );
}
