/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { LinkIcon } from "lucide-react";

export function CopyButton({ imovel, slug }: { imovel: any; slug: string }) {
    const [copiado, setCopiado] = useState(false);

    const handleCopy = async () => {
        // Monta o link usando o slug
        const link = `https://www.persevere.com/imovel/${slug}`;

        const clipboardItems = [ new ClipboardItem({ "text/plain": link }) ];
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
