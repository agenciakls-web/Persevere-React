"use client";

import { ContentLinks } from "@/app/parts/dados/contentLinks";

export default function Contato() {
  return (
    <section className="bg-gray-100 py-14 font-brandon">
      <div className="container mx-auto px-4">
        <div className="flex">
          {/* Texto */}
          <div className="w-7/12">
            <h3 className="text-blue-500 text-xl 2xl:text-3xl uppercase py-2 font-medium">
              Agende uma visita sem compromisso!
            </h3>
            <p className="text-orange text-base 2xl:text-2xl">
              Nós temos os melhores imóveis disponíveis para você!
            </p>
          </div>

          {/* Botão */}
          <div className="w-5/12">
            <a
              href={ContentLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-3 px-16 block text-base 2xl:text-lg mx-auto uppercase"
              >
                Solicite um orçamento
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
