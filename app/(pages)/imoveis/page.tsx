"use client";

import ListImoveis from "@/app/parts/Imoveis/ListImoveis";
import { Suspense } from "react";

export const dynamic = 'force-dynamic'; 
export const revalidate = 0;

export default function Imoveis() {
    return (
        <Suspense fallback={<div className="py-12 text-center">Carregando filtros...</div>}>
            <ListImoveis />
        </Suspense>
    );
}
