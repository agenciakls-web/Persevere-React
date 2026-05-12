import Image from "next/image";
import { ContentLinks } from "../dados/contentLinks";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [menuActive, setMenuActive] = useState("");
  const [menuNavigation, setMenuNavigation] = useState("-right-full");

  const menuBurger = () => {
    const currentActive = menuActive == "" ? "is-active" : "";
    const currentNavigation = menuActive == "" ? "right-0" : "-right-full";
    setMenuActive(currentActive);
    setMenuNavigation(currentNavigation);
  };

  return (
    <>
      <div className="h-2 bg-blue-500 w-full"></div>
      <header>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo py-4">
              <Link href="/">
                <Image
                  src="/img/logo.png"
                  alt="Logo"
                  width={150}
                  height={50}
                  priority
                />
              </Link>
            </div>

            {/* Botões e Menu */}
            <div className="flex items-center">
              {/* Botão WhatsApp */}
              <a
                href={ContentLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex mx-4 bg-blue-500 py-3 px-4 rounded-full text-lg text-white font-brandon">
                  <Image
                    src="/img/whatsapp.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="mx-4 w-6 h-6"
                  />
                  {ContentLinks.whatsappShow}
                </button>
              </a>
              {/* Menu Mobile */}
              <div className="flex items-center gap-x-4 ">
                <div className="z-20 block  " onClick={menuBurger}>
                  <div className={"hamburger hamburger--squeeze " + menuActive}>
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav
        className={
          "block  z-40 w-60 h-screen bg-orange-500 text-base text-white fixed top-17.4 px-6 pt-8 transition-all duration-300 ease-in-out  " +
          menuNavigation
        }
      >
        <div className="container mx-auto">
          <ul className="flex flex-col gap-5 xl:gap-10 md:text-base  font-medium">
            <li className="relative px-3 lg:px-0  text-center ">
              <div className="flex flex-wrap items-center relative gap-1 ">
                Teste
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
