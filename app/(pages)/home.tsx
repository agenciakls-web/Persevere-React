// app/page.js ou pages/index.js (dependendo da versão do Next.js)
import Banner from "./parts/Home/Banner";
import Pesquisa from "./parts/Home/Pesquisa";
import Categorias from "./parts/Home/Categorias";
import DestaquePrincipal from "./parts/Home/DestaquePrincipal";
import DestaqueSecundario from "./parts/Home/DestaqueSecundario";
import ImoveisRegiao from "./parts/Home/ImoveisRegiao";
import Agende from "./parts/Home/Agende";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Banner />
      <Pesquisa />
      <Categorias />
      <DestaquePrincipal />
      <DestaqueSecundario />
      <ImoveisRegiao />
      <Agende />
    </main>
  );
}
