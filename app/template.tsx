"use client";
import Footer from "./parts/estrutura/Footer";
import { usePathname } from "next/navigation";
import MobileMenu from "./parts/estrutura/Menu";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const OcultarRotas = ["/melhores-imoveis"]; 
  const OcultarLayout = OcultarRotas.includes(pathname);

  return (
    <>
      {!OcultarLayout && <MobileMenu />}
      {children}
      {!OcultarLayout && <Footer />}
    </>
  );
}
