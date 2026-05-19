"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Header({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
    return (
        <header>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="logo py-4">
                        <Link href="/">
                            <Image
                                src="/img/logo.png"
                                width={200}
                                height={80}
                                alt="Persevere - Soluções Imobiliária"
                                className="w-32 sm:w-48 md:w-64 lg:w-72"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="https://www.instagram.com/persevere.imoveis/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex justify-center items-center mx-2 py-3 rounded-full text-lg text-blue-500 font-brandon uppercase">
                                <FontAwesomeIcon icon={faInstagram} className=" px-2 text-2xl" />
                                <span className="hidden lg:block">Instagram</span>
                            </button>
                        </a>
                        <a
                            href="https://www.facebook.com/persevereimoveis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex justify-center items-center mx-2 py-3 rounded-full text-lg text-blue-500 font-brandon uppercase">
                                <FontAwesomeIcon icon={faFacebook} className=" px-2 text-2xl" />
                                <span className="hidden lg:block">Facebook</span>
                            </button>
                        </a>
                        <a
                            href="https://wa.me/5521991257878?text=Ol%C3%A1,%20vim%20pelo%20site!"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex justify-center items-center mx-4 bg-blue-500 py-3 px-2 md:px-4 rounded-full text-lg text-white font-brandon uppercase">
                                <Image
                                    src="/img/whatsapp.png"
                                    width={24}
                                    height={24}
                                    alt="WhatsApp"
                                    className="w-6 mx-4"
                                />
                                <span className="hidden lg:block">(21) 99125-7878</span>
                            </button>
                        </a>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="hamburger hamburger--squeeze"
                        >
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
