"use client";

import React, { useState } from 'react';

export default function AvaliarCorretor() {
  const [formData, setFormData] = useState({
    avaliacao: '',
    email: '',
    corretor: ''
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando avaliação...");
    
    // Simulação de envio
    setTimeout(() => {
      console.log("Dados enviados:", formData);
      setStatus("Avaliação enviada com sucesso!");
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {/* Define largura total em mobile e 1/2 em desktop */}
            <div className="w-full md:w-1/2 max-w-2xl">
              <h3 className="my-6 font-medium text-2xl md:text-3xl font-reading text-blue-500 text-center md:text-left">
                Avaliar Corretor
              </h3>

              <form onSubmit={handleSubmit} id="form-contact" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Opções de Avaliação */}
                  <div className="md:col-span-2 flex flex-wrap items-center justify-center md:justify-start gap-4 py-2 bg-gray-50 rounded-lg px-4 border border-gray-100">
                    <span className="text-gray-700 font-medium mr-2">Avaliação:</span>
                    
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="avaliacao" 
                        value="Regular" 
                        id="avaliacao-regular"
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="avaliacao-regular" className="ml-2 text-gray-700 cursor-pointer">Regular</label>
                    </div>

                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="avaliacao" 
                        value="Bom" 
                        id="avaliacao-bom"
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="avaliacao-bom" className="ml-2 text-gray-700 cursor-pointer">Bom</label>
                    </div>

                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="avaliacao" 
                        value="Excelente" 
                        id="avaliacao-excelente"
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        onChange={handleInputChange}
                      />
                      <label htmlFor="avaliacao-excelente" className="ml-2 text-gray-700 cursor-pointer">Excelente</label>
                    </div>
                  </div>

                  {/* Campo E-mail */}
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 rounded-lg text-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 md:col-span-2" 
                    placeholder="Seu e-mail"
                  />

                  {/* Campo Nome do Corretor */}
                  <input 
                    type="text" 
                    name="corretor" 
                    id="name" 
                    required
                    value={formData.corretor}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 rounded-lg text-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 md:col-span-2" 
                    placeholder="Nome do Corretor"
                  />

                  {/* Botão Submit */}
                  <button 
                    type="submit"
                    className="bg-blue-500 text-white hover:bg-red-800 transition-colors font-medium rounded-full my-4 py-3 px-10 block text-base uppercase md:col-span-2 w-full md:w-max mx-auto md:mx-0"
                  >
                    Enviar Avaliação
                  </button>
                </div>

                {/* Termos */}
                <p className="text-center text-sm text-gray-500 leading-relaxed">
                  Ao enviar concordo com os <strong>termos de uso</strong> e <strong>política de privacidade</strong>, 
                  para contatar os próximos anunciantes e afirmo ter mais de 18 anos.
                </p>

                {/* Resposta do formulário */}
                {status && (
                  <div className={`text-center p-3 rounded-lg ${status.includes("sucesso") ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
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