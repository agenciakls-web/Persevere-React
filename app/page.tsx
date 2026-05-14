import Banner from "./parts/Home/Banner";
import Artigos from "./parts/Home/Artigos";
import Destaques from "./parts/Home/Destaques";
import Contato from "./parts/Home/Contato";
import Categoria from "./parts/Home/Categoria";
import Pesquisa from "./parts/pesquisa";

export default function Home() {
    return (
        <div>
            <Banner />
            <Pesquisa />
            <Categoria />
            <Destaques  />
            <Artigos  />
            <Contato />
        </div>
    );
}
