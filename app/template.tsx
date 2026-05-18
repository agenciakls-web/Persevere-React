"use client";
import Footer from "./parts/estrutura/Footer";
import { usePathname } from "next/navigation";
import MobileMenu from "./parts/estrutura/menu";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const OcultarRotas = ["/landing-page"]; 
  const OcultarLayout = OcultarRotas.includes(pathname);

  return (
    <>
      {!OcultarLayout && <MobileMenu />}
      {children}
      {!OcultarLayout && <Footer />}
    </>
  );
}
