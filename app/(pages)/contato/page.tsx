"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContentLinks } from "@/app/parts/dados/contentLinks";

export default function Contato() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    // Aqui você integraria com sua API de e-mail (ex: Nodemailer, SendGrid ou Route Handler do Next)
    // Exemplo básico de feedback
    setTimeout(() => setStatus("Mensagem enviada com sucesso!"), 2000);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h3 className="my-6 font-medium text-3xl font-reading text-blue-500">
            Entre em contato
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <form
                onSubmit={handleSubmit}
                id="form-contact"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full py-3 px-4 rounded-lg text-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 md:col-span-2"
                    placeholder="NOME"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full py-3 px-4 rounded-lg text-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700"
                    placeholder="E-MAIL"
                  />
                  <input
                    type="tel"
                    name="phone"
                    className="w-full py-3 px-4 rounded-lg text-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700"
                    placeholder="TELEFONE"
                  />
                  <select
                    name="reason_id"
                    required
                    className="w-full py-3 px-4 rounded-lg text-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-500 md:col-span-2 bg-white"
                  >
                    <option value="" disabled selected>
                      MOTIVO DO CONTATO
                    </option>
                    <option value="1">Atendimento ao consumidor - SAC</option>
                    <option value="2">Imprensa</option>
                    <option value="3">Reclamações</option>
                    <option value="4">Sugestões</option>
                    <option value="5">Elogios</option>
                    <option value="6">Reportar Erro ou Problema</option>
                    <option value="7">Outro Motivo</option>
                  </select>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full py-3 px-4 rounded-lg text-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 md:col-span-2"
                    placeholder="MENSAGEM"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white hover:bg-blue-700 transition-colors font-medium rounded-full py-3 px-12 text-base uppercase tracking-wider"
                >
                  Enviar Mensagem
                </button>

                {status && (
                  <div className="mt-4 p-3 bg-blue-50 text-blue-700 rounded-lg">
                    {status}
                  </div>
                )}
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="font-brandon">
              <div className="border-2 border-blue-500 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                <div>
                  <h3 className="text-2xl font-bold uppercase text-gray-900">
                    Informações de contato
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Entre em contato conosco também pelas informações abaixo:
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Telefone */}
                  <a href={ContentLinks.phone} target="_blank" rel="">
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="text-blue-500">
                        <Phone size={32} />
                      </div>
                      <div>
                        <div className="font-bold uppercase text-sm text-gray-500">
                          Telefone:
                        </div>
                        <div className="text-xl text-gray-800 font-semibold">
                          {ContentLinks.phoneShow}
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={ContentLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="text-green-500">
                      <MessageCircle size={32} />
                    </div>
                    <div>
                      <div className="font-bold uppercase text-sm text-gray-500">
                        WhatsApp:
                      </div>
                      <div className="text-xl text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">
                        {ContentLinks.whatsappShow}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={ContentLinks.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="text-blue-500">
                      <Mail size={32} />
                    </div>
                    <div>
                      <div className="font-bold uppercase text-sm text-gray-500">
                        E-mail:
                      </div>
                      <div className="text-lg text-gray-800 font-semibold break-all group-hover:text-blue-600 transition-colors">
                        {ContentLinks.emailShow}
                      </div>
                    </div>
                  </a>

                  {/* Endereço */}
                  <a
                    href={ContentLinks.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="text-blue-500">
                        <MapPin size={32} />
                      </div>
                      <div>
                        <div className="font-bold uppercase text-sm text-gray-500">
                          Endereço:
                        </div>
                        <div className="text-base text-gray-700 leading-relaxed">
                          {ContentLinks.address1}
                          {ContentLinks.address2}
                          <div> {ContentLinks.address3}</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
