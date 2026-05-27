"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <>
      {/* Overlay para fechar ao clicar fora */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-opacity-40 z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* Menu lateral */}
      <nav
        onClick={() => setIsOpen(false)}
        className={`fixed top-0 h-screen w-96 bg-blue-500 pt-2 px-4 z-50 text-center text-base transition-all duration-300 ease-in-out font-open ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        {/* Botão fechar */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute top-0 right-0 px-4 py-2 my-2 mx-4 text-2xl rounded-md text-orange-500 transition duration-300 ease-in-out cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <div className="block">
          {/* Institucional */}
          <div className="px-2 py-2">
            <h3 className="text-blue-400 text-left font-bold">Institucional</h3>
            <ul className="text-white">
              <li className="mx-2">
                <Link
                  href="/"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Início
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  href="/sobre"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Quem Somos
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  href="/trabalhe"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Trabalhe Conosco
                </Link>
              </li>
              {/*
              <li className="mx-2">
                <Link
                  href="/avaliar"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Avaliar Corretor
                </Link>
              </li>
              */}
            </ul>
          </div>

          {/* Imóveis */}
          <div className="px-2 py-2">
            <h3 className="text-blue-400 text-left font-bold">Imóveis</h3>
            <ul className="text-white">
              <li className="mx-2">
                <Link
                  href="/imoveis"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Venda
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  href="/imoveis"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Condomínios
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  href="/encomende"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Encomende seu imóvel
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="px-2 py-2">
            <h3 className="text-blue-400 text-left font-bold">Serviços</h3>
            <ul className="text-white ">
              <li className="mx-2">
                <Link
                  href="/cadastre"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Cadastre seu imóvel
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  href="/proposta"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Enviar Proposta
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  href="/financiamento"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Financiamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="px-2 py-2">
            <h3 className="text-blue-400 text-left font-bold">Contato</h3>
            <ul className="text-white">
              <li className="mx-2">
                <Link
                  href="/contato"
                  className="py-1 flex items-center hover:text-orange-500"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
          {/* Contato */}
          <div className="px-2 py-2">
            <h3 className="text-blue-400 text-left font-bold">
              Avalie a empresa
            </h3>
            <ul className="text-white">
              <li>
                <a
                  href="https://g.page/r/CTv4ZYHj0FqvEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-start items-center gap-2 hover:text-orange-500 transition-colors"
                >
                  <div className="text-sm">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-300"
                    />
                  </div>
                  Deixe sua avaliação
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div className="pre-socials-container">
            <ul className="text-white flex justify-center items-center my-4 text-xl">
              <li className="m-2">
                <a
                  href="https://www.facebook.com/persevereimoveis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-link main-menu-link"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="m-2">
                <a
                  href="https://www.instagram.com/persevere.imoveis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-link main-menu-link"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="m-2">
                <a
                  href="https://wa.me/5521991257878?text=Olá,%20vim%20pelo%20site!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-link main-menu-link"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li className="m-2">
                <Link href="/sobre" className="menu-link main-menu-link">
                  <i className="fas fa-phone"></i>
                </Link>
              </li>
              <li className="m-2">
                <a
                  href="mailto:contato@persevere.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-link main-menu-link"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
