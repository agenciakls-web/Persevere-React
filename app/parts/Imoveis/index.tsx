'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type TipoImovel = {
  TipoImovel: string;
};

type Photo = {
  URLArquivo: string;
  Principal?: number;
};

type Imovel = {
  id: number;
  slug: string;

  Bairro: string;
  Cidade: string;
  SubTipoImovel: string;
  CategoriaImovel: string;

  CodigoImovel: string;

  QtdDormitorios?: number;
  QtdBanheiros?: number;
  QtdVagas?: number;

  AreaTotal?: number;

  PrecoVenda?: number;

  photos: Photo[];
};

interface Props {
  tiposImoveis: TipoImovel[];
  imoveis: Imovel[];
}

export default function ImoveisPage({
  tiposImoveis,
  imoveis,
}: Props) {
  const [filters, setFilters] = useState({
    pesquisa: '',
    TipoImovel: '',
    PrecoVenda: '',
    quartos: '',
    condominio: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* SIDEBAR */}
            <div className="w-full px-4 md:block md:w-1/3 lg:w-1/4">
              <aside>
                <div className="mb-4 md:mb-10">
                  <form className="space-y-6">
                    {/* PESQUISA */}
                    <div>
                      <h4 className="my-2 font-bold uppercase text-blue-500">
                        Pesquisar
                      </h4>

                      <input
                        type="text"
                        name="pesquisa"
                        placeholder="Digite condomínio, região, bairro ou cidade"
                        value={filters.pesquisa}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-blue-500 px-4 py-3 text-lg font-medium text-blue-500"
                      />
                    </div>

                    {/* TIPO */}
                    <div>
                      <h4 className="my-2 font-bold uppercase text-blue-500">
                        Tipo de Imóvel
                      </h4>

                      <div className="hidden md:block">
                        {tiposImoveis.map((tipo, index) => (
                          <label
                            key={index}
                            className="block py-1"
                          >
                            <input
                              type="radio"
                              name="TipoImovel"
                              value={tipo.TipoImovel}
                              onChange={handleChange}
                              className="mr-2"
                            />

                            {tipo.TipoImovel}
                          </label>
                        ))}
                      </div>

                      <select
                        name="TipoImovel"
                        value={filters.TipoImovel}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-blue-500 px-2 py-2 text-lg font-medium text-blue-500 md:hidden"
                      >
                        <option value="">
                          Tipo de imóvel
                        </option>

                        {tiposImoveis.map((tipo, index) => (
                          <option
                            key={index}
                            value={tipo.TipoImovel}
                          >
                            {tipo.TipoImovel}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* PREÇO */}
                    <div>
                      <h4 className="my-2 font-bold uppercase text-blue-500">
                        Preço de Venda
                      </h4>

                      <div className="hidden md:block space-y-2">
                        {[
                          'Até 200.000',
                          '200.000 até 400.000',
                          '400.000 até 600.000',
                          '600.000 até 800.000',
                          '800.000 até 1.000.000',
                          'Acima de 1.000.000',
                        ].map((label, index) => (
                          <label
                            key={index}
                            className="block"
                          >
                            <input
                              type="radio"
                              name="PrecoVenda"
                              value={index + 1}
                              onChange={handleChange}
                              className="mr-2"
                            />

                            {label}
                          </label>
                        ))}
                      </div>

                      <select
                        name="PrecoVenda"
                        value={filters.PrecoVenda}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-blue-500 px-2 py-2 text-lg font-medium text-blue-500 md:hidden"
                      >
                        <option value="">
                          Preço de compra
                        </option>

                        <option value="1">
                          Até 200.000
                        </option>

                        <option value="2">
                          200.000 até 400.000
                        </option>

                        <option value="3">
                          400.000 até 600.000
                        </option>

                        <option value="4">
                          600.000 até 800.000
                        </option>

                        <option value="5">
                          800.000 até 1.000.000
                        </option>

                        <option value="6">
                          Acima de 1.000.000
                        </option>
                      </select>
                    </div>

                    {/* QUARTOS */}
                    <div>
                      <h4 className="my-2 font-bold uppercase text-blue-500">
                        Mínimo de Quartos
                      </h4>

                      <div className="hidden md:block space-y-2">
                        {[1, 2, 3, 4, 5].map((q) => (
                          <label key={q} className="block">
                            <input
                              type="radio"
                              name="quartos"
                              value={q}
                              onChange={handleChange}
                              className="mr-2"
                            />

                            {q} ou +
                          </label>
                        ))}
                      </div>

                      <select
                        name="quartos"
                        value={filters.quartos}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-blue-500 px-2 py-2 text-lg font-medium text-blue-500 md:hidden"
                      >
                        <option value="">
                          Mínimo de Quartos
                        </option>

                        {[1, 2, 3, 4, 5].map((q) => (
                          <option key={q} value={q}>
                            {q} ou +
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* CONDOMÍNIO */}
                    <div>
                      <h4 className="my-2 font-bold uppercase text-blue-500">
                        Em condomínio fechado
                      </h4>

                      <div className="hidden md:block space-y-2">
                        <label className="block">
                          <input
                            type="radio"
                            name="condominio"
                            value="1"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Sim
                        </label>

                        <label className="block">
                          <input
                            type="radio"
                            name="condominio"
                            value="0"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          Não
                        </label>
                      </div>

                      <select
                        name="condominio"
                        value={filters.condominio}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-blue-500 px-2 py-2 text-lg font-medium text-blue-500 md:hidden"
                      >
                        <option value="">
                          Em condomínio fechado
                        </option>

                        <option value="1">Sim</option>
                        <option value="0">Não</option>
                      </select>
                    </div>

                    {/* BOTÃO */}
                    <button
                      type="submit"
                      className="block rounded-full bg-orange-500 px-16 py-3 text-lg font-medium uppercase text-gray-100"
                    >
                      Buscar
                    </button>
                  </form>
                </div>
              </aside>
            </div>

            {/* LISTAGEM */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              {imoveis.length > 0 ? (
                <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {imoveis.map((imovel) => {
                    const foto =
                      imovel.photos?.find(
                        (p) => p.Principal === 1
                      )?.URLArquivo ||
                      imovel.photos?.[0]?.URLArquivo;

                    return (
                      <Link
                        href={`/imovel/${imovel.slug}`}
                        key={imovel.id}
                        className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1"
                      >
                        {/* IMAGEM */}
                        <div className="relative h-64">
                          {foto && (
                            <Image
                              src={foto}
                              alt={imovel.SubTipoImovel}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>

                        {/* CONTEÚDO */}
                        <div className="p-4">
                          <p className="text-sm text-orange-500">
                            {imovel.Bairro} -{' '}
                            {imovel.Cidade}
                          </p>

                          <h3 className="mt-1 text-xl font-semibold text-blue-500">
                            {imovel.SubTipoImovel}
                          </h3>

                          <p className="mt-2 text-gray-500">
                            {imovel.QtdDormitorios} quartos •{' '}
                            {imovel.QtdBanheiros} banheiros
                          </p>

                          <p className="text-gray-500">
                            {imovel.QtdVagas} vagas
                          </p>

                          {imovel.AreaTotal && (
                            <p className="text-gray-500">
                              {imovel.AreaTotal}m²
                            </p>
                          )}

                          {imovel.PrecoVenda && (
                            <div className="mt-4 text-2xl font-bold text-blue-500">
                              {imovel.PrecoVenda.toLocaleString(
                                'pt-BR',
                                {
                                  style: 'currency',
                                  currency: 'BRL',
                                }
                              )}
                            </div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <h1 className="text-2xl font-bold">
                    Não há imóveis nessa área
                  </h1>

                  <p className="mt-2 text-gray-500">
                    Infelizmente não temos imóveis disponíveis nessa seção.
                  </p>
                </div>
              )}

              {/* PAGINAÇÃO */}
              <div className="my-8 flex justify-center">
                <ul className="inline-flex gap-2">
                  <li>
                    <button className="rounded border px-4 py-2 hover:bg-gray-100">
                      {'<<'}
                    </button>
                  </li>

                  <li>
                    <button className="rounded border px-4 py-2 hover:bg-gray-100">
                      {'<'}
                    </button>
                  </li>

                  <li>
                    <button className="rounded bg-blue-500 px-4 py-2 text-white">
                      1
                    </button>
                  </li>

                  <li>
                    <button className="rounded border px-4 py-2 hover:bg-gray-100">
                      2
                    </button>
                  </li>

                  <li>
                    <button className="rounded border px-4 py-2 hover:bg-gray-100">
                      {'>'}
                    </button>
                  </li>

                  <li>
                    <button className="rounded border px-4 py-2 hover:bg-gray-100">
                      {'>>'}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}