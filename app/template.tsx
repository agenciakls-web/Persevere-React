"use client";
import Footer from "./parts/estrutura/Footer";
import Menu from "./parts/estrutura/menu";
import { usePathname } from 'next/navigation';


export default function Template({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();

    const hideLayoutRoutes = ['/servicos-de-advocacia']; 
    const shouldHideLayout = hideLayoutRoutes.includes(pathname);

    return (
        <>
            {!shouldHideLayout && <Menu />}
            {children}
            {!shouldHideLayout && <Footer />}
        </>
    );
}
