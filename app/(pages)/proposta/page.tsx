"use client";

import React, { useState } from 'react';
import { 
  User, MapPin, GraduationCap, Book, 
  List, Clipboard, ClipboardCheck, Trash2 
} from 'lucide-react';

const STEPS = [
  { id: 1, label: "Pessoais", icon: <User size={20} /> },
  { id: 2, label: "Endereço", icon: <MapPin size={20} /> },
  { id: 3, label: "Escolaridade", icon: <GraduationCap size={20} /> },
  { id: 4, label: "Cursos", icon: <Book size={20} /> },
  { id: 5, label: "Experiências", icon: <List size={20} /> },
  { id: 6, label: "Vaga", icon: <Clipboard size={20} /> },
  { id: 7, label: "Currículo", icon: <ClipboardCheck size={20} /> },
];

export default function TrabalheConosco() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    if (currentStep < STEPS.length) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === STEPS.length) {
      console.log("Dados enviados:", formData);
      alert("Proposta enviada com sucesso!");
    } else {
      nextStep();
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      {/* Header dos Passos */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <h3 className="mb-10 text-center font-medium text-2xl text-blue-500 font-reading">
            Faça parte da equipe!
          </h3>
          
          <div className="grid grid-cols-7 gap-2 max-w-4xl mx-auto">
            {STEPS.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="relative w-full flex justify-center">
                  {/* Linha Conectora */}
                  {step.id !== 1 && (
                    <div className="absolute right-1/2 -translate-x-5 top-1/2 w-full h-0.5 bg-gray-100 -z-10">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-500" 
                        style={{ width: currentStep >= step.id ? '100%' : '0%' }}
                      />
                    </div>
                  )}
                  
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    currentStep >= step.id ? 'bg-blue-500 text-white' : 'bg-white border-2 border-gray-100 text-gray-400'
                  }`}>
                    {step.icon}
                  </div>
                </div>
                <span className={`hidden md:block text-[10px] uppercase mt-2 text-center font-semibold ${
                  currentStep >= step.id ? 'text-blue-500' : 'text-gray-300'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário Conteúdo */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
            
            {/* ETAPA 1: PESSOAIS */}
            {currentStep === 1 && (
              <div className="animate-in fade-in duration-500">
                <h2 className="py-3 font-medium text-xl text-blue-500 mb-4">Informações Pessoais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <input type="text" placeholder="NOME COMPLETO" className="input-style lg:col-span-2" required />
                  <input type="email" placeholder="E-MAIL" className="input-style lg:col-span-2" required />
                  <input type="tel" placeholder="TELEFONE" className="input-style" />
                  <input type="tel" placeholder="CELULAR" className="input-style" />
                  <input type="text" placeholder="CPF" className="input-style" />
                  <input type="text" placeholder="RG" className="input-style" />
                  <input type="text" placeholder="DATA DE NASCIMENTO" className="input-style" />
                  <input type="text" placeholder="NACIONALIDADE" className="input-style" />
                  <input type="text" placeholder="NATURALIDADE" className="input-style" />
                  <select className="input-style" required>
                    <option value="">SEXO</option>
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                  </select>
                </div>
              </div>
            )}

            {/* ETAPA 2: ENDEREÇO */}
            {currentStep === 2 && (
              <div className="animate-in fade-in duration-500">
                <h2 className="py-3 font-medium text-xl text-blue-500 mb-4">Endereço</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input type="text" placeholder="CEP" className="input-style" />
                  <input type="text" placeholder="ENDEREÇO" className="input-style md:col-span-2" />
                  <input type="text" placeholder="NÚMERO" className="input-style" />
                  <input type="text" placeholder="COMPLEMENTO" className="input-style" />
                  <input type="text" placeholder="BAIRRO" className="input-style" />
                  <input type="text" placeholder="CIDADE" className="input-style" />
                  <input type="text" placeholder="ESTADO" className="input-style" />
                </div>
              </div>
            )}

            {/* ETAPA 3: ESCOLARIDADE */}
            {currentStep === 3 && (
              <div className="animate-in fade-in duration-500">
                <h2 className="py-3 font-medium text-xl text-blue-500 mb-4">Escolaridade</h2>
                <select className="input-style max-w-md">
                  <option value="">Selecionar</option>
                  <option>Ensino Médio Completo</option>
                  <option>Ensino Superior Cursando</option>
                  <option>Ensino Superior Completo</option>
                </select>
              </div>
            )}

            {/* ETAPA 4: CURSOS (Repetir conforme necessário) */}
            {currentStep === 4 && (
              <div className="animate-in fade-in duration-500 space-y-6">
                <h2 className="py-3 font-medium text-xl text-blue-500">Cursos</h2>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-6 last:border-0">
                    <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Curso {i}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input type="text" placeholder="NOME DO CURSO" className="input-style" />
                      <input type="text" placeholder="INSTITUIÇÃO" className="input-style" />
                      <input type="text" placeholder="DURAÇÃO" className="input-style" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ETAPA 5: EXPERIÊNCIAS */}
            {currentStep === 5 && (
              <div className="animate-in fade-in duration-500 space-y-6">
                <h2 className="py-3 font-medium text-xl text-blue-500">Experiências</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-3">
                      <h3 className="text-sm font-bold text-gray-400 uppercase">Empresa {i}</h3>
                      <input type="text" placeholder="NOME DA EMPRESA" className="input-style" />
                      <input type="text" placeholder="CARGO" className="input-style" />
                      <input type="text" placeholder="TEMPO" className="input-style" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ETAPA 6: VAGA */}
            {currentStep === 6 && (
              <div className="animate-in fade-in duration-500">
                <h2 className="py-3 font-medium text-xl text-blue-500 mb-4">Vaga de Interesse</h2>
                <select className="input-style max-w-md">
                  <option value="">Selecione a Vaga</option>
                  <option>Operador de Loja</option>
                  <option>Assistente Administrativo</option>
                </select>
              </div>
            )}

            {/* ETAPA 7: CURRÍCULO */}
            {currentStep === 7 && (
              <div className="animate-in fade-in duration-500 space-y-6">
                <h2 className="py-3 font-medium text-xl text-blue-500">Dados Complementares</h2>
                <textarea rows={4} className="input-style" placeholder="FALE SOBRE VOCÊ"></textarea>
                
                <h2 className="py-3 font-medium text-xl text-blue-500">Anexar Currículo</h2>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <input type="file" className="input-style flex-1" />
                  <button type="button" className="bg-red-50 text-red-500 p-3 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
                <p className="text-xs text-gray-400 italic">Formatos aceitos: PDF</p>
              </div>
            )}

            {/* Botões de Navegação */}
            <div className="flex justify-end gap-4 mt-12 pt-6 border-t">
              {currentStep > 1 && (
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="px-8 py-2 rounded-full border-2 border-blue-500 text-blue-500 font-bold uppercase transition-all hover:bg-blue-50"
                >
                  Anterior
                </button>
              )}
              <button 
                type="submit"
                className="px-8 py-2 rounded-full bg-blue-500 text-white font-bold uppercase transition-all hover:bg-blue-600 shadow-md"
              >
                {currentStep === STEPS.length ? "Enviar Proposta" : "Próximo"}
              </button>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
}