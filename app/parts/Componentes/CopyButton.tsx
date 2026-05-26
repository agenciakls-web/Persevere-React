"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { LinkIcon } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CopyButton({ imovel }: { imovel: any }) {
  const [copiado, setCopiado] = useState(false);
  const pathname = usePathname();

  const handleCopy = async () => {
    try {
      // Monta o link da página atual
      const link = `https://www.persevere.com${pathname}`;

      // Texto do anúncio
      const texto = `${imovel.SubTipoImovel} em ${imovel.Bairro} - ${imovel.Cidade}\n${link}`;

      // Pega a foto principal ou fallback
      const imagemUrl =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        imovel.photos?.find((p: any) => p.Principal === 1)?.URLArquivo ||
        imovel.photos?.[0]?.URLArquivo ||
        "/img/product-1.png";

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
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      <LinkIcon className="w-4 h-4" />
      {copiado ? "Copiado!" : "Copiar anúncio"}
    </button>
  );
}
