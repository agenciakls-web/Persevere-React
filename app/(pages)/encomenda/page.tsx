"use client";

import React, { useState } from 'react';

export default function EncomendeImovel() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Processando seu pedido...");

    // Simulação de lógica de envio
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Dados da encomenda:", data);

    setTimeout(() => {
      setStatus("Sua solicitação foi enviada! Entraremos em contato em breve.");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {/* Ajuste de largura: 100% em mobile, 1/2 em desktop */}
            <div className="w-full lg:w-1/2 max-w-2xl">
              
              <h3 className="mb-8 font-medium text-2xl md:text-3xl font-reading text-blue-500 text-center md:text-left">
                Descreva as características do Imóvel que deseja
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Textarea ocupa as duas colunas no desktop */}
                  <textarea 
                    name="message" 
                    id="message" 
                    required
                    rows={5}
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 md:col-span-2 transition-all" 
                    placeholder="Descreva as características aqui"
                  ></textarea>

                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 md:col-span-2 transition-all" 
                    placeholder="Nome"
                  />

                  <input 
                    type="tel" 
                    name="mobile" 
                    id="mobile" 
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 transition-all" 
                    placeholder="Celular"
                  />

                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 transition-all" 
                    placeholder="Telefone"
                  />

                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 md:col-span-2 transition-all" 
                    placeholder="E-mail"
                  />

                  {/* Botão de Envio */}
                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit"
                      className="bg-blue-500 text-white hover:bg-red-800 transition-colors font-medium rounded-full py-3 px-12 text-base uppercase tracking-wide w-full md:w-auto"
                    >
                      Enviar Encomenda
                    </button>
                  </div>
                </div>

                {/* Área de Resposta */}
                {status && (
                  <div className="mt-6 p-4 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-center font-medium animate-pulse">
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}