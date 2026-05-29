"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Link from "next/link";
import { ContentLinks } from "@/app/parts/dados/contentLinks";
import { CopyButton } from "@/app/parts/Componentes/CopyButton";
import BannerSingle from "./BannerSingle";
import { ImovelType } from "../../tipagem/imoveis";

export default function ImovelSingle({ initialSlug }: { initialSlug: string }) {
    const [imovel, setImovel] = useState<ImovelType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!initialSlug) return;

        async function carregarImovel() {
            try {
                setLoading(true);

                const response = await axios.get(
                    process.env.NEXT_PUBLIC_API_BACKEND +
                    `/imoveis/codigo/${initialSlug}`,
                );
                setImovel(response.data);
            } catch (error) {
                console.error("Erro ao carregar os detalhes do imóvel:", error);
            } finally {
                setLoading(false);
            }
        }

        carregarImovel();
    }, [initialSlug]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center text-blue-500 font-medium">
                Carregando detalhes do imóvel...
            </div>
        );
    }

// Função auxiliar para validar propriedades booleanas ou numéricas do tipo (0 ou 1 / true ou false)
    const temCaracteristica = (valor: boolean | number | undefined | null): boolean => {
        if (typeof valor === 'boolean') return valor;
        if (typeof valor === 'number') return valor > 0;
        return false;
    };

    if (!imovel) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-gray-700">
                    Imóvel não encontrado
                </h1>
                <p className="text-gray-500">
                    O imóvel que você procura não existe ou foi removido.
                </p>
            </div>
        );
    }

    const fotoExibicao =
        imovel.Photos?.find((p) => p.Principal === 1)?.URLArquivo ||
        imovel.Photos?.[0]?.URLArquivo ||
        "/img/product-1.png";

    return (
        <main>
            <HeaderTitle title={imovel.SubTipoImovel || "Imóveis"} />
            <section className="py-8 text-gray-500" id="imoveis">
               <div className="container mx-auto px-4">
            <div>
                {/* Dados de Localização Dinâmicos */}
                <p className="text-lg font-medium text-orange-500">
                    {imovel.Bairro} - {imovel.Cidade}/RJ
                </p>
                <h1 className="mt-1 text-3xl font-semibold text-blue-500">
                    {imovel.titulo || `${imovel.SubTipoImovel} com ${imovel.QtdDormitorios || 0} dormitórios à venda, ${imovel.AreaTotal || 0} m²`}
                </h1>

                <dl className="my-4 text-xs font-medium flex items-center">
                    <dt className="sr-only">Location</dt>
                    <dd className="flex items-center">
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1 text-blue-500"
                            aria-hidden="true"
                        >
                            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        {imovel.Cidade} - Rio de Janeiro {imovel.CEP && `(CEP: ${imovel.CEP})`}
                        <div className="mx-2 float-left">
                            <button
                                type="button"
                                onClick={() =>
                                    window.open(
                                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                            `${imovel.Bairro} ${imovel.Cidade} Rio de Janeiro`,
                                        )}`,
                                        "_blank",
                                    )
                                }
                                className="bg-blue-500 text-white text-xs py-2 px-2 rounded-md hover:bg-blue-600 transition"
                            >
                                Ver no mapa
                            </button>
                        </div>
                        <CopyButton imovel={imovel} />
                    </dd>
                </dl>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full md:w-2/3">
                    <div className="relative h-96 w-full">
                        <BannerSingle slides={imovel.Photos || []} />
                    </div>

                    <div className="py-4 text-base text-gray-500">
                        <h3 className="text-blue-500 my-2 text-2xl font-open">
                            Sobre o imóvel
                        </h3>

                        {imovel.Observacao ? (
                            <p className="py-1 whitespace-pre-line">{imovel.Observacao}</p>
                        ) : (
                            <>
                                <p className="py-1">
                                    Excelente {imovel.SubTipoImovel?.toLowerCase()} em ótima
                                    localização no bairro {imovel.Bairro}, próximo ao comércio
                                    local e condução estruturada.
                                </p>
                                <p className="py-1">
                                    Possui ótimo acabamento contando com{" "}
                                    {imovel.QtdDormitorios} dormitórios,{" "}
                                    {imovel.QtdBanheiros || 1} banheiro(s) e espaço para{" "}
                                    {imovel.QtdVagas || 0} carro(s).
                                </p>
                                {temCaracteristica(imovel.UtilizeFGTS) && (
                                    <p className="py-1 font-semibold text-blue-500">
                                        👉 Você pode utilizar seu FGTS para a compra deste imóvel!
                                    </p>
                                )}
                                <p className="py-1">
                                    Agilizamos todo o processo de financiamento dos bancos até
                                    a entrega das chaves do imóvel.
                                </p>
                            </>
                        )}
                    </div>
                </div>

                <div className="w-full md:w-1/3">
                    <div className="px-2 pb-6">
                        <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300 bg-white">
                            <div className="px-6 py-4">
                                <div className="">
                                    <div className="py-3">
                                        <h4 className="text-lg text-orange-500 uppercase">
                                            {imovel.CategoriaImovel || 'Venda'}
                                        </h4>
                                        
                                        {/* Bloco de Preço de Venda */}
                                        {imovel.PrecoVenda > 0 && (
                                            <h3 className="text-2xl text-blue-500 font-medium uppercase">
                                                {imovel.PrecoVenda.toLocaleString("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                })}
                                            </h3>
                                        )}

                                        {/* Bloco de Preço de Locação Padrão */}
                                        {imovel.PrecoLocacao > 0 && (
                                            <h3 className="text-xl text-green-600 font-medium uppercase mt-2">
                                                Locação: {imovel.PrecoLocacao.toLocaleString("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                })}/mês
                                            </h3>
                                        )}

                                        {/* Bloco de Locação por Temporada */}
                                        {imovel.PrecoLocacaoTemporada > 0 && (
                                            <h3 className="text-lg text-purple-600 font-medium uppercase mt-1">
                                                Temporada: {imovel.PrecoLocacaoTemporada.toLocaleString("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                })}/diária
                                            </h3>
                                        )}

                                        {/* Fallback caso não tenha nenhum preço cadastrado */}
                                        {(!imovel.PrecoVenda && !imovel.PrecoLocacao && !imovel.PrecoLocacaoTemporada) && (
                                            <h3 className="text-2xl text-blue-500 font-medium uppercase">
                                                Sob Consulta
                                            </h3>
                                        )}

                                        {imovel.PrecoVenda > 0 && imovel.AreaUtil > 0 && (
                                            <p className="text-sm my-1 text-blue-500 ">
                                                {(imovel.PrecoVenda / imovel.AreaUtil).toLocaleString("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                })} /m²
                                            </p>
                                        )}
                                    </div>

                                    <div className="py-3 border-t border-gray-100">
                                        <h4 className="text-sm text-gray-400">
                                            Código do Imóvel
                                        </h4>
                                        <h3 className="text-lg text-gray-600 font-medium">
                                            {imovel.CodigoImovel}
                                        </h3>
                                    </div>
                                </div>
                                
                                <Link href="#" target="_blank">
                                    <button
                                        type="button"
                                        className="bg-orange-500 hover:bg-orange-600 text-gray-100 font-medium rounded-full my-4 py-2 block md:px-8 2xl:px-16 text-xs md:text-base 2xl:text-lg mx-auto uppercase w-4/5 transition"
                                    >
                                        Mais informações
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="px-2 pb-6">
                        <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300 bg-white">
                            <div className="px-6 py-4">
                                <h3 className="text-blue-500 my-2 text-2xl font-open">
                                    Estrutura
                                </h3>
                                <div className="space-y-2 text-gray-600 text-base">
                                    {/* Métrica de Áreas */}
                                    {imovel.AreaUtil > 0 && (
                                        <div>📐 Área Útil: <span className="font-semibold">{imovel.AreaUtil} m²</span></div>
                                    )}
                                    {imovel.AreaTotal > 0 && (
                                        <div>📐 Área Total: <span className="font-semibold">{imovel.AreaTotal} m²</span></div>
                                    )}

                                    {/* Quantidades Principais */}
                                    {imovel.QtdDormitorios > 0 && (
                                        <div>🛏️ Quartos: <span className="font-semibold">{imovel.QtdDormitorios}</span></div>
                                    )}
                                    {imovel.QtdSuites > 0 && (
                                        <div>🚿 Suítes: <span className="font-semibold">{imovel.QtdSuites}</span></div>
                                    )}
                                    {imovel.QtdBanheiros > 0 && (
                                        <div>🚽 Banheiros: <span className="font-semibold">{imovel.QtdBanheiros}</span></div>
                                    )}
                                    {imovel.QtdSalas > 0 && (
                                        <div>📺 Salas: <span className="font-semibold">{imovel.QtdSalas}</span></div>
                                    )}
                                    {imovel.QtdVagas > 0 && (
                                        <div>🚗 Vagas na Garagem: <span className="font-semibold">{imovel.QtdVagas}</span></div>
                                    )}

                                    {/* Informações de Prédio/Condomínio se houver */}
                                    {imovel.QtdAndar > 0 && (
                                        <div>🏢 Total de Andares: <span className="font-semibold">{imovel.QtdAndar}</span></div>
                                    )}
                                    {imovel.QtdUnidadesAndar > 0 && (
                                        <div>🏢 Unidades por Andar: <span className="font-semibold">{imovel.QtdUnidadesAndar}</span></div>
                                    )}
                                    {imovel.QtdElevador > 0 && (
                                        <div>🛗 Elevadores: <span className="font-semibold">{imovel.QtdElevador}</span></div>
                                    )}

                                    {/* Características Internas e Lazer (Aparecem dinamicamente se existirem) */}
                                    {(temCaracteristica(imovel.ArCondicionado) || 
                                      temCaracteristica(imovel.Churrasqueira) || 
                                      temCaracteristica(imovel.Piscina) || 
                                      temCaracteristica(imovel.Playground) || 
                                      temCaracteristica(imovel.SalaoFestas) || 
                                      temCaracteristica(imovel.SalaGinastica) ||
                                      temCaracteristica(imovel.SalaoJogos) ||
                                      temCaracteristica(imovel.Jardim)) && (
                                        <div className="pt-2 border-t border-gray-100">
                                            <h4 className="text-sm font-bold uppercase text-blue-500 mb-1">Comodidades & Lazer</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                                {temCaracteristica(imovel.ArCondicionado) && <li>Ar Condicionado</li>}
                                                {temCaracteristica(imovel.Churrasqueira) && <li>Churrasqueira</li>}
                                                {temCaracteristica(imovel.Piscina) && <li>Piscina</li>}
                                                {temCaracteristica(imovel.Playground) && <li>Playground</li>}
                                                {temCaracteristica(imovel.SalaoFestas) && <li>Salão de Festas</li>}
                                                {temCaracteristica(imovel.SalaGinastica) && <li>Espaço Fitness / Academia</li>}
                                                {temCaracteristica(imovel.SalaoJogos) && <li>Salão de Jogos</li>}
                                                {temCaracteristica(imovel.Jardim) && <li>Jardim</li>}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Infraestrutura Externa / Condomínio / Rural */}
                                    {(temCaracteristica(imovel.Interfone) ||
                                      temCaracteristica(imovel.Cerca) ||
                                      temCaracteristica(imovel.RuaAsfaltada) ||
                                      temCaracteristica(imovel.Esgoto) ||
                                      temCaracteristica(imovel.EnergiaEletrica) ||
                                      temCaracteristica(imovel.InfraInternet) ||
                                      temCaracteristica(imovel.TVCabo) ||
                                      temCaracteristica(imovel.EstacionamentoVisitantes) ||
                                      temCaracteristica(imovel.EstacionamentoRotativo) ||
                                      temCaracteristica(imovel.Heliponto)) && (
                                        <div className="pt-2 border-t border-gray-100">
                                            <h4 className="text-sm font-bold uppercase text-blue-500 mb-1">Infraestrutura</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                                {temCaracteristica(imovel.Interfone) && <li>Interfone</li>}
                                                {temCaracteristica(imovel.Cerca) && <li>Cerca / Segurança</li>}
                                                {temCaracteristica(imovel.RuaAsfaltada) && <li>Rua Asfaltada</li>}
                                                {temCaracteristica(imovel.Esgoto) && <li>Rede de Esgoto</li>}
                                                {temCaracteristica(imovel.EnergiaEletrica) && <li>Energia Elétrica</li>}
                                                {temCaracteristica(imovel.InfraInternet) && <li>Internet Banda Larga</li>}
                                                {temCaracteristica(imovel.TVCabo) && <li>TV a Cabo</li>}
                                                {temCaracteristica(imovel.EstacionamentoVisitantes) && <li>Estacionamento para Visitantes</li>}
                                                {temCaracteristica(imovel.EstacionamentoRotativo) && <li>Estacionamento Rotativo</li>}
                                                {temCaracteristica(imovel.Heliponto) && <li>Heliponto</li>}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Características Rurais / Chácaras / Sítios */}
                                    {(temCaracteristica(imovel.Lago) ||
                                      temCaracteristica(imovel.Lavoura) ||
                                      temCaracteristica(imovel.Pasto) ||
                                      temCaracteristica(imovel.Silos) ||
                                      temCaracteristica(imovel.Paiol) ||
                                      temCaracteristica(imovel.Curral) ||
                                      temCaracteristica(imovel.PocoArtesiano) ||
                                      temCaracteristica(imovel.CasaCaseiro)) && (
                                        <div className="pt-2 border-t border-gray-100">
                                            <h4 className="text-sm font-bold uppercase text-orange-500 mb-1">Estrutura Rural</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                                {temCaracteristica(imovel.Lago) && <li>Lago / Rio</li>}
                                                {temCaracteristica(imovel.Lavoura) && <li>Área de Lavoura</li>}
                                                {temCaracteristica(imovel.Pasto) && <li>Área de Pasto</li>}
                                                {temCaracteristica(imovel.Curral) && <li>Curral</li>}
                                                {temCaracteristica(imovel.Silos) && <li>Silos</li>}
                                                {temCaracteristica(imovel.Paiol) && <li>Paiol</li>}
                                                {temCaracteristica(imovel.PocoArtesiano) && <li>Poço Artesiano</li>}
                                                {temCaracteristica(imovel.CasaCaseiro) && <li>Casa de Caseiro</li>}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </section>
        </main>
    );
}
