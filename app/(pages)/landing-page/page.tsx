"use client";

import Image from "next/image";
import Link from "next/link";
import {ContentLinks} from "@/app/parts/dados/contentLinks";
import ContatoFormLandingPage  from "@/app/parts/Componentes/ContatoFormLandingPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export default function landingPage() {
  return (
      <>
      <div className="h-2 bg-blue-500 w-full"></div>
    <header id="header">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
                <div className="logo py-4">
                    <Image src="/img/logo.png" width={192} height={96} className="w-32 sm:w-48 md:w-64 lg:w-72" alt="" />
                </div>
                <nav className="items-center flex">
                    <ul className="mx-2 hidden md:flex">
                        <li><a href="#header"
                                className="text-blue-500 hover:text-gold-500 transition px-2 uppercase font-medium">Início</a>
                        </li>
                        <li><a href="#sobre"
                                className="text-blue-500 hover:text-gold-500 transition px-2 uppercase font-medium">Sobre</a>
                        </li>
                        <li><a href="#servicos"
                                className="text-blue-500 hover:text-gold-500 transition px-2 uppercase font-medium">Imóveis</a>
                        </li>
                        <li><a href="#contato"
                                className="text-blue-500 hover:text-gold-500 transition px-2 uppercase font-medium">Contato</a>
                        </li>
                    </ul>
                    <a id="mobile-menu-hamburger">
                        <div className="hamburger hamburger--squeeze md:hidden px-4">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </a>
                </nav>
            </div>
        </div>
    </header>
    <nav
        className="fixed top-0 h-screen w-96 bg-blue-500 pt-2 px-4 z-50 text-center text-base transition-all duration-300 ease-in-out font-open right-0 hidden ">
        <div className="hidden -right-full"></div>
        <div className="button-close absolute top-0 right-0 px-4 py-2 my-2 mx-4 text-2xl rounded-md text-white hover:text-yellow-300 transition-colors"
            id="header-bar-mobile-close">
            <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="block">
            <div className="px-2 py-2">
                <h3 className="text-blue-400 text-left font-bold">Institucional</h3>
                <ul className="text-white">
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Início
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="sobre.html" className="py-1 flex items-center hover:text-orange">
                            Quem Somos
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Trabalhe Conosco
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Avaliar Corretor
                        </a>
                    </li>
                </ul>
            </div>
            <div className="px-2 py-2">
                <h3 className="text-blue-400 text-left font-bold">Imóveis</h3>
                <ul className="text-white">
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Venda
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Locação
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Condomínios
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Encomende seu imóvel
                        </a>
                    </li>
                </ul>
            </div>
            <div className="px-2 py-2">
                <h3 className="text-blue-400 text-left font-bold">Serviços</h3>
                <ul className="text-white">
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Cadastre seu imóvel
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Enviar Proposta
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="" className="py-1 flex items-center hover:text-orange">
                            Financiamento
                        </a>
                    </li>
                </ul>
            </div>
            <div className="px-2 py-2">
                <h3 className="text-blue-400 text-left font-bold">Contato</h3>
                <ul className="text-white">
                    <li className="mx-2">
                        <a href="contato.html" className="py-1 flex items-center hover:text-orange">
                            Fale Conosco
                        </a>
                    </li>
                </ul>
            </div>
            <div id="pre-socials-container" className="pre-socials-container">
                <ul id="pre-list-ul" className="text-white flex justify-center items-center my-4 text-xl">
                    <li className="m-2">
                        <a href="https://pt-br.facebook.com/redeconomia" target="blank"
                            className="menu-link main-menu-link">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li className="m-2">
                        <a href="https://www.instagram.com/souredeconomia/" target="blank"
                            className="menu-link main-menu-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="m-2">
                        <a href="https://www.youtube.com/user/souredeconomia" target="blank"
                            className="menu-link main-menu-link">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>
                    <li className="m-2">
                        <a href="https://player.hstbr.net/radioproducoes" target="blank"
                            className="menu-link main-menu-link">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </li>
                    <li className="m-2">
                        <a href="https://webmail.exchange.locaweb.com.br/owa/auth/logon.aspx?replaceCurrent=1&amp;url=https%3a%2f%2fwebmail.exchange.locaweb.com.br%2fowa%2f"
                            target="blank" className="menu-link main-menu-link">
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="banner min-h-40 sm:min-h-64 md:min-h-72 lg:min-h-80 xl:min-h-96 2xl:min-h-104 py-8 bg-cover bg-center bg-[url(/img/banner-landing.jpg)] flex justify-center items-center">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div className="text-sm md:text-xl text-black rounded-xl flex align-items justify-center h-full flex-col lg:pr-48">
                    <h2 className="text-white text-center md:text-left text-3xl md:text-4xl lg:text-5xl uppercase leading-tight font-bold my-2 md:my-4">O imóvel certo para você!</h2>
                    <h3 className="text-white text-center md:text-left text-xl md:text-2xl lg:text-3xl uppercase leading-tight my-2 md:my-4 ">nós temos os melhores imóveis para você!</h3>
                </div>
                <div>
                    <div role="form" className="wpcf7" id="wpcf7-f6-o1" lang="pt-BR" dir="ltr">
                        <div className="screen-reader-response">
                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                            <ul></ul>
                        </div>
                        <ContatoFormLandingPage />
                        {/* 
                        <form action="/#wpcf7-f6-o1" method="post" className="wpcf7-form init" noValidate
                            data-status="init">
                            <span className="wpcf7-form-control-wrap" data-name="nome"><input type="text" name="nome" value="" size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required w-full my-3 py-3 px-6 rounded-lg text-lg font-medium border text-gray-500 mdcol-span-2" id="nome" aria-required="true" aria-invalid="false" placeholder="Nome"></input></span>
                            <span className="wpcf7-form-control-wrap" data-name="email"><input type="email" name="email" value="" size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email w-full my-3 py-3 px-6 rounded-lg text-lg font-medium border text-gray-500" id="email" aria-required="true" aria-invalid="false" placeholder="E-mail"></input></span>
                            <span className="wpcf7-form-control-wrap" data-name="phone"><input type="tel" name="phone" value="" size={40} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel w-full my-3 py-3 px-6 rounded-lg text-lg font-medium border text-gray-500" id="phone" aria-required="true" aria-invalid="false" placeholder="Telefone"></input></span>
                            <input type="submit" value="Enviar" className="wpcf7-form-control has-spinner wpcf7-submit bg-blue-500 hover:bg-blue-700 transition text-white font-medium rounded-full my-4 py-2 px-10 block text-base uppercase" id="enviar"></input><span className="wpcf7-spinner"></span>
                            <div className="wpcf7-response-output" aria-hidden="true"></div>
                        </form>
                        
                        */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section id="imoveis" className="my-10">
        <div className="container mx-auto px-4">
            <h2 className="text-orange-500 uppercase text-2xl md:text-2xl text-center my-2 font-open">Nossos Imóveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                <div
                    className="bg-black bg-[url(/img/landing-1.jpg)] bg-cover h-64 sm:h-72 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                </div>
                <div
                    className="bg-black bg-[url(/img/landing-2.jpg)] bg-cover h-64 sm:h-72 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                </div>
                <div
                    className="bg-black bg-[url(/img/landing-4.jpg)] bg-cover h-64 sm:h-72 rounded-xl sm:rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-lg sm:text-2xl">
                </div>
            </div>
            <div className="w-full">
                <a href="">
                    <button type="button"
                        className="bg-orange-500 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-lg mx-auto uppercase">quero saber mais</button>
                </a>
            </div>
        </div>
    </section>
    <div id="sobre" className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
            <div className="block md:flex md:flex-row-reverse items-center">
                <div className="md:w-1/2 flex justify-center">
                    <Image src="/img/loja.jpg" width={680} height={510} className="w-2/3 rounded-xl" alt="Loja" />
                </div>
                <div className="md:w-1/2">
                    <h3
                        className="text-center md:text-left text-lg md:text-2xl xl:text-3xl text-blue-500 uppercase font-bold my-4">
                        A persevere</h3>
                    <p className="text-center md:text-left text-base md:text-xl xl:text-2xl text-zinc-800 my-2 font-open font-medium">Somos um
                        Somos uma empresa perseverante e inovadora, pertencente a um grupo empresarial que atua e investe no mercado imobiliário há 20 anos.</p>
                    <p className="text-center md:text-left text-base md:text-xl xl:text-2xl my-2 font-open font-medium">Investimos no aprimoramento de nossos colaboradores e enxergamos os desafios como grandes oportunidades de aprendizado e crescimento.</p>
                </div>
            </div>
        </div>
    </div>
    <section id="contato" className="min-h-140 py-4 md:py-10">
        <div className="container mx-auto px-6">
            <h3 className="text-center uppercase font-base text-blue-500 text-xl md:text-3xl font-bold py-8">ENTRE EM
                CONTATO</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div className="p-4">
                    <div role="form" className="wpcf7" id="wpcf7-f6-o1" lang="pt-BR" dir="ltr">
                        <div className="screen-reader-response">
                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                            <ul></ul>
                        </div>
                        <form action="/#wpcf7-f6-o1" method="post" className="wpcf7-form init" noValidate
                            data-status="init">
                            <div style={{ display: 'none' }}>
                                <input type="hidden" name="_wpcf7" value="6"></input>
                                <input type="hidden" name="_wpcf7_version" value="5.6.4"></input>
                                <input type="hidden" name="_wpcf7_locale" value="pt_BR"></input>
                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f6-o1"></input>
                                <input type="hidden" name="_wpcf7_container_post" value="0"></input>
                                <input type="hidden" name="_wpcf7_posted_data_hash" value=""></input>
                            </div>
                            <span className="wpcf7-form-control-wrap" data-name="nome">
                                <input type="text" name="nome"
                                    value="" size={40}
                                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required w-full my-3 py-3 px-6 rounded-lg text-lg font-medium border text-gray-500 mdcol-span-2"
                                    id="nome" aria-required="true" aria-invalid="false" placeholder="Nome"></input></span>
                            <span className="wpcf7-form-control-wrap" data-name="email"><input type="email" name="email"
                                    value="" size={40}
                                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email w-full my-3 py-3 px-6 rounded-lg text-lg font-medium border text-gray-500"
                                    id="email" aria-required="true" aria-invalid="false" placeholder="E-mail"></input></span>
                            <span className="wpcf7-form-control-wrap" data-name="phone"><input type="tel" name="phone"
                                    value="" size={40}
                                    className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel w-full my-3 py-3 px-6 rounded-lg text-lg font-medium border text-gray-500"
                                    id="phone" aria-required="true" aria-invalid="false" placeholder="Telefone"></input></span>
                            <input type="submit" value="Enviar"
                                className="wpcf7-form-control has-spinner wpcf7-submit bg-blue-500 hover:bg-blue-700 transition text-white font-medium rounded-full my-4 py-2 px-10 block text-base uppercase"
                                id="enviar"></input><span className="wpcf7-spinner"></span>
                            <div className="wpcf7-response-output" aria-hidden="true"></div>
                        </form>
                    </div>
                </div>
                <div className="text-sm md:text-xl text-black rounded-xl">
                    <div className="border-orange-500 border-blue-500 border-2 rounded-xl text-md md:text-lg p-6 my-3 md:mt-0">
                        <div className="text-lg md:text-xl pb-2">
                            <h3 className="font-bold uppercase">Informações de contato</h3>
                            <p>Entre em contato conosco também pelas informações abaixo:</p>
                        </div>
                        <a href="tel:552126340075" target="_blank">
                            <div
                                className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                                <div className="px-4 md:px-6 text-xl md:text-4xl text-orange">
                                    <FontAwesomeIcon icon={faPhone} aria-hidden="true"></FontAwesomeIcon>
                                </div>
                                <div>
                                    <div className="py-1 font-bold uppercase">Telefone:</div>
                                    <div>(21) 2634-0075</div>
                                </div>
                            </div>
                        </a>
                        <a href="https://wa.me/5521991257878?text=Ol%C3%A1,%20vim%20pelo%20site!" target="_blank">
                            <div
                                className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                                <div className="px-4 md:px-6 text-xl md:text-4xl text-orange">
                                    <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true"></FontAwesomeIcon>
                                </div>
                                <div>
                                    <div className="py-1 font-bold uppercase">WhatsApp:</div>
                                    <div>(21) 99125-7878</div>
                                </div>
                            </div>
                        </a>
                        <a href="mailto:contato@persevere.com.br" target="_blank">
                            <div
                                className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                                <div className="px-4 md:px-6 text-xl md:text-4xl text-orange">
                                    <FontAwesomeIcon icon={faEnvelope} aria-hidden="true"></FontAwesomeIcon>
                                </div>
                                <div>
                                    <div className="py-1 font-bold uppercase">E-mail:</div>
                                    <div>contato@persevere.com.br</div>
                                </div>
                            </div>
                        </a>
                        <a href="https://goo.gl/maps/icjifAHpkpRhfNtw5" target="_blank">
                            <div
                                className="flex justify-start items-center px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all">
                                <div className="px-4 md:px-6 text-xl md:text-4xl text-orange">
                                    <FontAwesomeIcon icon={faLocationDot} aria-hidden="true"></FontAwesomeIcon>
                                </div>
                                <div>
                                    <div className="py-1 font-bold uppercase">Endereço:</div>
                                    <div>R. Prof. Cardoso de Menezes - Jardim Atlântico Oeste</div>
                                    <div> Maricá - RJ, 24935-425</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="bg-gray-100 py-14 font-brandon">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
                <div className="lg:w-7/12 text-center lg:text-left ">
                    <h3 className="text-blue-500 text-2xl md:text-3xl uppercase py-2 font-medium">Agende uma visita sem
                        compromisso!</h3>
                    <p className="text-orange-500 text-xl md:text-2xl">Nós temos os melhores imóveis disponíveis para você!</p>
                </div>
                <div className="lg:w-5/12">
                    <button type="button"
                        className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-3 px-16 block text-base md:text-lg mx-auto uppercase">Solicite
                        um orçamento</button>
                </div>
            </div>
        </div>
    </section>
   <footer className="bg-blue-500 py-6 md:py-12 text-white font-brandon">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-16">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-1 flex justify-center md:block">
              <Link href="/">
                <Image
                  src="/img/logo-white.png"
                  alt="Logo Persevere"
                  width={180}
                  height={60}
                  className="h-auto w-auto object-contain"
                />
              </Link>
            </div>

            {/* Menu Column */}
            <div>
              <h3 className="py-3 text-2xl font-semibold">MENU</h3>
              <hr className="w-6 mb-4 border-2 border-solid border-orange-500" />
              <nav className="uppercase text-sm">
                <ul className="font-reading space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quem-somos"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Quem Somos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/imoveis"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Imóveis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contato"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="py-3 text-2xl font-semibold">CONTATO</h3>
              <hr className="w-6 mb-4 border-2 border-solid border-orange-500" />
              <div className="uppercase text-sm">
                <ul className="font-reading space-y-2">
                  <li>
                    <a
                      href={ContentLinks.email}
                      className="hover:text-orange-500 transition-colors wrap-break-word"
                    >
                      {ContentLinks.emailShow}
                    </a>
                  </li>
                  <li>
                    <a
                      href={ContentLinks.phone}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {ContentLinks.phoneShow}
                    </a>
                  </li>
                  <li>
                    <a
                      href={ContentLinks.whatsapp}
                      target="_blank"
                      className="hover:text-orange-500 transition-colors"
                    >
                      {ContentLinks.whatsappShow}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Column */}
            <div>
              <h3 className="py-3 text-2xl font-semibold">REDES SOCIAIS</h3>
              <hr className="w-6 mb-4 border-2 border-solid border-orange-500" />
              <div className="flex items-center gap-5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform hover:text-orange-500"
                >
                  <svg
                    className="h-6 md:h-7 fill-white"
                    viewBox="0 0 24 24"
                    width="28"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform hover:text-orange-500"
                >
                  <svg
                    className="h-6 md:h-7 fill-white"
                    viewBox="0 0 24 24"
                    width="28"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform "
                >
                  <svg
                    className="h-6 md:h-7 fill-white "
                    viewBox="0 0 24 24"
                    width="28"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Post-Footer */}
      <div className="bg-orange-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm md:text-base uppercase font-medium tracking-wide">
            Persevere - Todos os direitos reservados 
          </div>
        </div>
      </div>
   </>
   
  );
}
