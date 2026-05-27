import Link from "next/link";
import Image from "next/image";
import { ContentLinks } from "../dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
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
              <h3 className="py-3 text-base 2xl:text-2xl font-semibold">
                MENU
              </h3>
              <hr className="w-6 mb-4 border-2 border-solid border-orange-500" />
              <nav className="uppercase text-xs 2xl:text-sm">
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
                      href="/sobre"
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
              <h3 className="py-3 text-base 2xl:text-2xl font-semibold">
                CONTATO
              </h3>
              <hr className="w-6 mb-4 border-2 border-solid border-orange-500" />
              <div className="uppercase text-xs 2xl:text-sm">
                <ul className="font-reading space-y-2">
                  <li>
                    <a
                      href={ContentLinks.email}
                      className="hover:text-orange-500 transition-colors wrap-break-word"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                      {ContentLinks.emailShow}
                    </a>
                  </li>
                  <li className="2xl:text-base">
                    <a
                      href={`${ContentLinks.whatsapp}?text=Olá%2C%20vim%20pelo%20site.`}
                      target="_blank"
                      className="hover:text-orange-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      {ContentLinks.whatsappShow}
                    </a>
                  </li>
                  <li>
                    <a
                      href={ContentLinks.phone}
                      className="hover:text-orange-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faPhone} />
                      {ContentLinks.phoneShow}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Column */}
            <div>
              <h3 className="py-3 text-base 2xl:text-2xl font-semibold">
                REDES SOCIAIS
              </h3>
              <hr className="w-6 mb-4 border-2 border-solid border-orange-500" />
              <div className="flex items-center gap-5">
                {/* Facebook */}
                <a
                  href={ContentLinks.facebook}
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
                  href={ContentLinks.instagram}
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
                  href={ContentLinks.youtube}
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
          <div className="text-center text-sm 2xl:text-base uppercase font-medium tracking-wide">
            Persevere - Todos os direitos reservados
          </div>
        </div>
      </div>
    </>
  );
}
