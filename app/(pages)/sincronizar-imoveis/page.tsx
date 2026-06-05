'use client'
import { useState } from 'react';
import axios from 'axios';
import HeaderTitle from '@/app/parts/estrutura/headerTitle';

interface SyncSummary {
    totalProcessados: number;
    totalCriados: number;
    totalAtualizados: number;
    totalDeletados: number;
}

interface SyncResponse {
    success: boolean;
    summary: SyncSummary;
    detalhes: {
        criados: string[];
        atualizados: string[];
        deletados: string[];
    };
}

export default function PainelSincronizacao() {
    const [loading, setLoading] = useState(false);
    const [dados, setDados] = useState<SyncResponse | null>(null);
    const [erro, setErro] = useState<string | null>(null);

    const iniciarSincronizacao = async () => {
        setLoading(true);
        setErro(null);
        setDados(null);

        try {
            // Substitua pela URL correta da sua API da Persevere
            const response = await axios.get<SyncResponse>(process.env.NEXT_PUBLIC_API_BACKEND + '/getimoveis-api');
            setDados(response.data);
        } catch (err: any) {
            setErro(err.response?.data?.error || 'Erro de comunicação com o servidor.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <HeaderTitle title='Sincronizar Imóveis' />
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 mb-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">🔄 Sincronizador de Imóveis (Midas XML)</h1>
                        <p className="text-sm text-gray-500 mb-4">
                            Cruza as informações do XML imobiliário com o banco de dados. Novos imóveis serão integrados, indisponíveis serão removidos e modificações de preços ou fotos serão aplicadas instantaneamente.
                        </p>

                        <button
                            onClick={iniciarSincronizacao}
                            disabled={loading}
                            className={`px-6 py-3 font-semibold text-white rounded-xl transition shadow-md ${loading
                                ? 'bg-orange-300 cursor-not-allowed'
                                : 'bg-orange-500 hover:bg-orange-600 active:scale-95'
                                }`}
                        >
                            {loading ? 'Sincronizando Banco de Dados... ⏳' : 'Sincronizar Agora'}
                        </button>
                    </div>

                    {/* TELA DE LOADING INTEGRADA (GIRANDO) */}
                    {loading && (
                        <div className="bg-white rounded-2xl p-12 shadow-md border border-gray-100 flex flex-col items-center justify-center space-y-4 animate-pulse">
                            <svg
                                className="animate-spin h-12 w-12 text-orange-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {/* Círculo de fundo (fundo cinza/opaco discreto) */}
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                {/* Arco que gira (O caminho corrigido) */}
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>

                            {/* Mensagens Solicitadas */}
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-700">Sincronização em andamento</h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    Estamos atualizando os imóveis, isso pode demorar um pouco...
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Mensagem de Erro */}
                    {erro && (
                        <div className="bg-red-50 text-red-600 border border-red-200 p-4 rounded-xl font-medium mb-6">
                            ⚠️ Erro na Sincronização: {erro}
                        </div>
                    )}

                    {/* Resultado da Carga de Dados */}
                    {dados && dados.success && !loading && (
                        <div className="space-y-6 animate-fadeIn">
                            {/* Grid de Contadores Visuais */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
                                    <span className="block text-xs uppercase font-bold text-blue-400">Analisados</span>
                                    <span className="text-3xl font-bold text-blue-600">{dados.summary.totalProcessados}</span>
                                </div>
                                <div className="bg-green-50 border border-green-100 p-4 rounded-xl text-center">
                                    <span className="block text-xs uppercase font-bold text-green-400">Novos Criados</span>
                                    <span className="text-3xl font-bold text-green-600">+{dados.summary.totalCriados}</span>
                                </div>
                                <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-center">
                                    <span className="block text-xs uppercase font-bold text-amber-500">Atualizados</span>
                                    <span className="text-3xl font-bold text-amber-600">{dados.summary.totalAtualizados}</span>
                                </div>
                                <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-center">
                                    <span className="block text-xs uppercase font-bold text-red-400">Removidos/Vendidos</span>
                                    <span className="text-3xl font-bold text-red-600">-{dados.summary.totalDeletados}</span>
                                </div>
                            </div>

                            {/* Detalhamento dos códigos dos imóveis */}
                            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-700 mb-4">📋 Relatório Técnico da Operação</h3>

                                <div className="space-y-4">
                                    {/* Bloco de Criados */}
                                    {dados.detalhes.criados.length > 0 && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-green-600 mb-1">🆕 Códigos Inseridos:</h4>
                                            <div className="flex flex-wrap gap-1.5 text-xs font-mono text-green-700">
                                                {dados.detalhes.criados.map(cod => (
                                                    <span key={cod} className="bg-green-100/60 px-2 py-0.5 rounded border border-green-200">{cod}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Bloco de Deletados */}
                                    {dados.detalhes.deletados.length > 0 && (
                                        <div className="pt-2 border-t border-gray-100">
                                            <h4 className="text-sm font-semibold text-red-600 mb-1">🗑️ Códigos Removidos do Site:</h4>
                                            <div className="flex flex-wrap gap-1.5 text-xs font-mono text-red-700">
                                                {dados.detalhes.deletados.map(cod => (
                                                    <span key={cod} className="bg-red-100/60 px-2 py-0.5 rounded border border-red-200">{cod}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Mensagem amigável caso nada mude de estado */}
                                    {dados.summary.totalCriados === 0 && dados.summary.totalDeletados === 0 && (
                                        <p className="text-sm text-gray-400 italic">
                                            Nenhum imóvel novo entrou ou saiu do sistema. Todos os {dados.summary.totalAtualizados} imóveis existentes foram apenas checados e reajustados na memória.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}