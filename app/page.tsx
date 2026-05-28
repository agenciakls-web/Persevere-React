import Banner from "./parts/Home/Banner";
import Destaques from "./parts/Home/Destaques";
import Contato from "./parts/Home/Contato";
import Categoria from "./parts/Home/Categoria";
import OfertasSemana from "./parts/Home/Ofertas";
import PesquisaImovel from "./parts/Home/Pesquisa";

export default function Home() {
    return (
        <div>
            <Banner />
            <PesquisaImovel />
            <Categoria />
            <Destaques  />
            <OfertasSemana  />
            <Contato />
        </div>
    );
}
