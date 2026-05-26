/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { LinkIcon } from "lucide-react";

export function CopyButton({ imovel, slug }: { imovel: any; slug: string }) {
  const [copiado, setCopiado] = useState(false);

  const handleCopy = async () => {
    // Monta o link usando o slug
    const link = `https://www.persevere.com/imovel/${slug}`;

    // Texto do anúncio
    const texto = `${imovel.SubTipoImovel} em ${imovel.Bairro} - ${imovel.Cidade}\n${link}`;

    // Pega a foto principal ou fallback
    const imagemUrl =
      imovel.photos?.find((p: any) => p.Principal === 1)?.URLArquivo ||
      "/img/sem-foto.png";

    // Faz o fetch da imagem
    const resposta = await fetch(imagemUrl);
    const blob = await resposta.blob();

    // Copia texto + imagem
    const clipboardItems = [
      new ClipboardItem({
        "text/plain": new Blob([texto], { type: "text/plain" }),
        [blob.type]: blob,
      }),
    ];

    await navigator.clipboard.write(clipboardItems);

    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
    >
      <LinkIcon className="w-4 h-4" />
      {copiado ? "Copiado!" : "Copiar anúncio"}
    </button>
  );
}
