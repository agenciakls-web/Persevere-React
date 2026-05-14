
    "use client";
// import Footer from "./parts/estrutura/Footer";
// import Menu from "./parts/estrutura/menu";
// import { usePathname } from 'next/navigation';


export default function Template({ children }: { children: React.ReactNode }) {

    // const pathname = usePathname();

    // const OcultarRotas = ['/landing-page']; // Adicione as rotas onde deseja ocultar o layout   
    // const OcultarLayout = OcultarRotas.includes(pathname);

    return (
        <>
            {/* {!OcultarLayout && <Menu />} */}
            {children}
            {/* {!OcultarLayout && <Footer />} */}
        </>
    );
}

    
    

