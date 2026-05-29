import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import ListImoveis from "@/app/parts/Imoveis/ListImoveis";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Imoveis() {
    return (
        <main>
            <HeaderTitle title='Imóveis' />
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <Suspense fallback={<div className="py-12 text-center">Carregando filtros...</div>}>
                        <ListImoveis />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}
