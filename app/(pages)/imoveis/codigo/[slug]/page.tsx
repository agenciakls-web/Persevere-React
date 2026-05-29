import { Metadata } from "next";
import axios from "axios";
import ImovelSingle from "@/app/parts/Imoveis/single/ImovelSingle";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Contato from "@/app/parts/Home/Contato";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/imoveis/codigo/${slug}`);
        const imovel = response.data;

        if (!imovel) return { title: "Imóvel não encontrado" };

        const fotoExibicao = imovel.photos?.find((p: any) => p.Principal === 1)?.URLArquivo
            || imovel.photos?.[0]?.URLArquivo
            || "https://seusite.com/img/product-1.png"; // Use URL absoluta para a imagem padrão

        const titulo = `${imovel.SubTipoImovel} à venda em ${imovel.Bairro} - ${imovel.Cidade}`;
        const descricao = imovel.Descricao || `Confira este excelente imóvel com ${imovel.QtdDormitorios || 0} quartos, ${imovel.AreaTotal || 0}m². Saiba mais detalhes!`;

        return {
            title: titulo,
            description: descricao,
            openGraph: {
                title: titulo,
                description: descricao,
                url: `https://seusite.com/imoveis/codigo/${slug}`, // Altere para o seu domínio real
                siteName: "Sua Imobiliária",
                images: [
                    {
                        url: fotoExibicao, // O WhatsApp exige URL absoluta (com https://)
                        width: 1200,
                        height: 630,
                        alt: titulo,
                    },
                ],
                locale: "pt_BR",
                type: "website",
            },
        };
    } catch (error) {
        return {
            title: "Detalhes do Imóvel",
        };
    }
}

// 2. O componente principal apenas renderiza a página passando os parâmetros
export default async function Page({ params }: Props) {
    const { slug } = await params;
    return (
        <main>
            <HeaderTitle title={"Imóvel Atual"} />
            <section className="py-8 text-gray-500" id="imoveis">
                <div className="container mx-auto px-4">
                    <ImovelSingle initialSlug={slug} />
                </div>
            </section>
            <Contato />
        </main >
    );
}