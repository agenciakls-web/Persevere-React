"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function TrabalheConosco() {
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({
    message: '',
    type: null
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Exemplo de lógica de envio
    try {
      // const response = await fetch('/api/send-resume', { method: 'POST', body: formData });
      console.log("Dados capturados:", Object.fromEntries(formData));
      setStatus({ message: 'Currículo enviado com sucesso!', type: 'success' });
    } catch (error) {
      setStatus({ message: 'Ocorreu um erro ao enviar.', type: 'error' });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <h3 className="my-4 font-medium text-2xl text-blue-500 font-sans">
                Cadastrar Currículo
              </h3>

              <form onSubmit={handleSubmit} id="form-contact" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nome */}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-field md:col-span-2"
                    placeholder="Nome"
                    required
                  />

                  {/* Celular */}
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    className="input-field"
                    placeholder="Celular"
                  />

                  {/* Telefone */}
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="input-field"
                    placeholder="Telefone"
                  />

                  {/* E-mail */}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-field md:col-span-2"
                    placeholder="E-mail"
                    required
                  />

                  {/* Linkedin */}
                  <input
                    type="text"
                    name="linkedin"
                    id="linkedin"
                    className="input-field md:col-span-2"
                    placeholder="URL do Linkedin"
                  />

                  {/* Arquivo */}
                  <div className="md:col-span-2">
                    <input
                      type="file"
                      name="curriculo"
                      id="curriculo-contact"
                      className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>

                  {/* Botão Submit */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase md:col-span-2 transition-colors duration-300"
                  >
                    Enviar Currículo
                  </button>
                </div>

                {/* Resposta do formulário */}
                {status.message && (
                  <div 
                    className={`p-4 rounded-lg text-center ${
                      status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {status.message}
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