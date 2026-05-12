import Banner from "./parts/Home/Banner";
import Artigos from "./parts/Home/Artigos";
import Destaques from "./parts/Home/Destaques";
import Contato from "./parts/Home/Contato";
import Categoria from "./parts/Home/Categoria";

export default function Home() {
    return (
        <div>
            <Banner />
            <Categoria />
            <Destaques  />
            <Artigos  />
            <Contato />
        </div>
    );
}
