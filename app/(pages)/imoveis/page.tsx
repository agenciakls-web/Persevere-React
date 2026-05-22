"use client";

import ListImoveis from "@/app/parts/Imoveis/ListImoveis";

export default function Imoveis() {
    const exemplo = {
        tiposImoveis: [
            { TipoImovel: "Apartamento" },
            { TipoImovel: "Casa" },
            { TipoImovel: "Cobertura" },
        ],
        imoveis: [
            {
                id: 1,
                slug: "apartamento-centro-rj",
                Bairro: "Centro",
                Cidade: "Rio de Janeiro",
                SubTipoImovel: "Apartamento Padrão",
                CategoriaImovel: "Residencial",
                CodigoImovel: "AP001",
                QtdDormitorios: 2,
                QtdBanheiros: 1,
                QtdVagas: 1,
                AreaTotal: 65,
                PrecoVenda: 350000,
                photos: [
                    { URLArquivo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/The_Breakers_rear.jpg", Principal: 1 },
                    { URLArquivo: "hhttps://upload.wikimedia.org/wikipedia/commons/7/7f/The_Breakers_rear.jpg" },
                ],
            },
            {
                id: 2,
                slug: "casa-bangu-rj",
                Bairro: "Bangu",
                Cidade: "Rio de Janeiro",
                SubTipoImovel: "Casa Térrea",
                CategoriaImovel: "Residencial",
                CodigoImovel: "CA045",
                QtdDormitorios: 3,
                QtdBanheiros: 2,
                QtdVagas: 2,
                AreaTotal: 120,
                PrecoVenda: 480000,
                photos: [
                    { URLArquivo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/The_Breakers_rear.jpg", Principal: 1 },
                    { URLArquivo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/The_Breakers_rear.jpg" },
                ],
            },
        ],
    };
    return (
        <>
            <ListImoveis tiposImoveis={exemplo.tiposImoveis} />
        </>
    );
}
