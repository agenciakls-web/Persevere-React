'use client';

import Image from 'next/image';
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { ContentLinks } from '../dados/contentLinks';
import Link from 'next/link';

type Photo = {
  URLArquivo: string;
  Principal?: number;
};

type Imovel = {
  Bairro: string;
  Cidade: string;
  SubTipoImovel: string;
  CategoriaImovel: string;
  CodigoImovel: string;

  AreaTotal?: number;
  AreaUtil?: number;

  QtdDormitorios?: number;
  QtdBanheiros?: number;
  QtdVagas?: number;
  QtdSuites?: number;

  Observacao?: string;
  video?: string;

  PrecoVenda?: number;
  PrecoCondominio?: number;

  QtdElevador?: boolean;
  ArCondicionado?: boolean;
  Varanda?: boolean;
  ProntoMorar?: boolean;
  Lavabo?: boolean;
  Churrasqueira?: boolean;
  Copa?: boolean;
  Piscina?: boolean;
  EstacionamentoVisitantes?: boolean;
  Playground?: boolean;
  QuadraTenis?: boolean;
  QuadraPoliEsportiva?: boolean;
  SalaGinastica?: boolean;
  SalaoFestas?: boolean;
  SalaoJogos?: boolean;
  Interfone?: boolean;
  campodefutebol?: boolean;
  WCEmpregada?: boolean;

  photos: Photo[];
};

interface Props {
  imovel: Imovel;
}

export default function ImovelPage({ imovel }: Props) {
  const vantagens = [
    {
      label: 'Área',
      value: imovel.AreaTotal,
      suffix: 'm²',
    },
    {
      label: 'Dormitórios',
      value: imovel.QtdDormitorios,
    },
    {
      label: 'Banheiros',
      value: imovel.QtdBanheiros,
    },
    {
      label: 'Vagas',
      value: imovel.QtdVagas,
    },
    {
      label: 'Suítes',
      value: imovel.QtdSuites,
    },
  ].filter((item) => item.value && item.value !== 0);

  const caracteristicas = [
    imovel.QtdSuites && 'Suítes',
    imovel.QtdVagas && 'Garagem',
    imovel.QtdElevador && 'Elevador',
    imovel.ArCondicionado && 'Ar Condicionado',
    imovel.Varanda && 'Varanda',
    imovel.ProntoMorar && 'Pronto pra morar',
    imovel.Lavabo && 'Lavabo',
    imovel.Churrasqueira && 'Churrasqueira',
    imovel.Copa && 'Copa',
    imovel.Piscina && 'Piscina',
    imovel.EstacionamentoVisitantes && 'Estacionamento (Visitantes)',
    imovel.Playground && 'Playground',
    imovel.QuadraTenis && 'Quadra de Tênis',
    imovel.QuadraPoliEsportiva && 'Quadra Poliesportiva',
    imovel.SalaGinastica && 'Sala de Ginástica',
    imovel.SalaoFestas && 'Salão de Festa',
    imovel.SalaoJogos && 'Salão de Jogos',
    imovel.Interfone && 'Interfone',
    imovel.campodefutebol && 'Campo de Futebol',
    imovel.WCEmpregada && 'Banheiro (Empregada)',
  ].filter(Boolean);

  return (
    <main>
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="justify-between md:flex">
            <div>
              <p className="text-lg font-medium text-orange-500">
                {imovel.Bairro} - {imovel.Cidade}
              </p>

              <h1 className="mt-1 text-3xl font-semibold text-blue-500">
                {imovel.SubTipoImovel} - {imovel.CategoriaImovel}
              </h1>

              <div className="my-4 flex items-center text-xs font-medium">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 text-blue-500"
                >
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>

                {imovel.Bairro} - {imovel.Cidade}
              </div>
            </div>

            <div className="my-2 flex items-center text-left md:block md:text-right">
              <div>
                <p className="text-sm font-medium uppercase text-gray-400">
                  Código do Imóvel
                </p>

                <h2 className="mx-2 text-sm font-semibold uppercase text-gray-400 md:mx-0 md:text-xl">
                  {imovel.CodigoImovel}
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            {/* LEFT */}
            <div className="w-full md:w-2/3">
              {/* GALERIA */}
              {imovel.photos?.length > 0 && (
                <div>
                  <Splide
                    options={{
                      type: 'slide',
                      rewind: true,
                      pagination: false,
                      arrows: true,
                    }}
                    className="overflow-hidden rounded-xl"
                    hasTrack={false}
                  >
                    <SplideTrack>
                      {imovel.photos.map((foto, index) => (
                        <SplideSlide key={index}>
                          <div className="relative h-64 sm:h-80 md:h-64 lg:h-80 xl:h-104 2xl:h-120">
                            <Image
                              src={foto.URLArquivo}
                              alt="Imóvel"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </SplideSlide>
                      ))}
                    </SplideTrack>
                  </Splide>

                  <Splide
                    options={{
                      fixedWidth: 100,
                      fixedHeight: 60,
                      gap: 10,
                      rewind: true,
                      pagination: false,
                      arrows: false,
                      breakpoints: {
                        600: {
                          fixedWidth: 60,
                          fixedHeight: 44,
                        },
                      },
                    }}
                    className="mt-4"
                  >
                    {imovel.photos.map((foto, index) => (
                      <SplideSlide key={index}>
                        <div className="relative h-15 w-full overflow-hidden rounded-lg">
                          <Image
                            src={foto.URLArquivo}
                            alt="Thumb"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
              )}

              {/* VANTAGENS */}
              {vantagens.length > 0 && (
                <div className="my-4">
                  <h3 className="my-4 text-center text-lg font-bold uppercase text-orange-500">
                    Vantagens
                  </h3>

                  <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                      {vantagens.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center rounded-lg border border-blue-500 p-4"
                        >
                          <span className="text-sm text-gray-500">
                            {item.label}
                          </span>

                          <span className="mt-2 text-lg font-semibold text-blue-500">
                            {item.value}
                            {item.suffix}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SOBRE */}
              {imovel.Observacao && (
                <div className="py-4 text-base text-gray-500">
                  <h3 className="my-2 text-2xl text-blue-500">
                    Sobre o imóvel
                  </h3>

                  <p className="whitespace-pre-line py-1">
                    {imovel.Observacao}
                  </p>
                </div>
              )}

              {/* VIDEO */}
              {imovel.video && (
                <div className="py-4 text-base text-gray-500">
                  <h3 className="my-2 text-2xl text-blue-500">Vídeo</h3>

                  <iframe
                    className="aspect-video w-full rounded-xl md:rounded-2xl"
                    src={`https://www.youtube.com/embed/${imovel.video}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="w-full md:w-1/3">
              {/* CARD PREÇO */}
              <div className="px-2 pb-6">
                <div className="h-full overflow-hidden rounded-xl shadow-lg shadow-gray-300">
                  <div className="px-6 py-4">
                    <div className="py-3">
                      <h4 className="text-lg uppercase text-orange-500">
                        Venda
                      </h4>

                      {imovel.PrecoVenda && (
                        <h3 className="text-2xl font-medium uppercase text-blue-500">
                          {imovel.PrecoVenda.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </h3>
                      )}
                    </div>

                    {imovel.PrecoCondominio && (
                      <div className="py-3">
                        <h4 className="text-sm text-gray-400">Condomínio</h4>

                        <h3 className="text-lg font-medium text-gray-400">
                          {imovel.PrecoCondominio.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                          /mês
                        </h3>
                      </div>
                    )}

                    {imovel.AreaTotal && (
                      <div className="py-3">
                        <h4 className="text-sm text-gray-400">
                          Área Total
                        </h4>

                        <h3 className="text-lg font-medium text-gray-400">
                          {imovel.AreaTotal}m²
                        </h3>
                      </div>
                    )}

                    {imovel.AreaUtil && (
                      <div className="py-3">
                        <h4 className="text-sm text-gray-400">
                          Área Útil
                        </h4>

                        <h3 className="text-lg font-medium text-gray-400">
                          {imovel.AreaUtil}m²
                        </h3>
                      </div>
                    )}

                    {/*<a
                      href="https://wa.me/5521991257878?text=Olá,%20vim%20pelo%20site!"
                      target="_blank"
                    >
                      <button className="my-4 block w-4/5 rounded-full bg-orange-500 px-16 py-2 text-lg font-medium uppercase text-gray-100 hover:bg-orange-600 mx-auto">
                        Quero visitar
                      </button>
                    </a>
                     */}

                    <Link
                      href={ContentLinks.whatsapp}
                      target="_blank"
                    >
                      <button className="mx-auto my-4 block w-4/5 rounded-full bg-orange-500 hover:bg-orange-600 px-16 py-2 text-lg font-medium uppercase text-gray-100 ">
                        Mais informações
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARACTERÍSTICAS */}
              <div className="px-2 pb-6">
                <div className="h-full overflow-hidden rounded-xl shadow-lg shadow-gray-300">
                  <div className="px-6 py-4">
                    <h3 className="my-2 text-2xl text-blue-500">
                      Características
                    </h3>

                    <div className="grid grid-cols-2 text-base text-gray-500">
                      {caracteristicas.map((item, index) => (
                        <div key={index} className="py-1">
                          {item}
                        </div>
                      ))}
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