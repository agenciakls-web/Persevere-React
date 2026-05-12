"use client";

export default function Banner() {
  return (
    <div className="banner h-160 bg-cover bg-center bg-[url(/img/banner.png)] flex justify-center items-center">
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-7 px-4 text-xs 2xl:text-xl">
          <li className="mx-4">
            <a
              className="bg-blue-500 px-4 py-5 block rounded-t-xl w-full text-center uppercase text-white !bg-white !text-blue-500"
              href="#tab-0"
              data-index="0"
            >
              Comprar
            </a>
          </li>
          <li className="mx-4">
            <a
              className="bg-blue-500 px-4 py-5 block rounded-t-xl w-full text-center uppercase text-white"
              href="#tab-1"
              data-index="1"
            >
              Novos
            </a>
          </li>
          <li className="mx-4">
            <a
              className="bg-blue-500 px-4 py-5 block rounded-t-xl w-full text-center uppercase text-white"
              href="#tab-2"
              data-index="2"
            >
              Alugar
            </a>
          </li>
          <li className="mx-4">
            <a
              className="bg-blue-500 px-4 py-5 block rounded-t-xl w-full text-center uppercase text-white"
              href="#tab-3"
              data-index="3"
              data-link-url="https://www.cavalleiroimoveis.com.br/condominios"
            >
              Condomínios
            </a>
          </li>
          <li className="mx-4">
            <a
              className="bg-blue-500 px-4 py-5 block rounded-t-xl w-full text-center uppercase text-white"
              href="#tab-4"
              data-index="4"
              data-link-url="https://www.cavalleiroimoveis.com.br/imoveis/a-venda"
            >
              Busca Avançada
            </a>
          </li>
          <li className="mx-4">
            <a
              className="bg-blue-500 px-4 py-5 block rounded-t-xl w-full text-center uppercase text-white"
              href="#tab-5"
              data-index="5"
              data-link-url="https://www.cavalleiroimoveis.com.br/imoveis/a-venda?caracteristicas=aceita-permuta"
            >
              Aceita Permuta
            </a>
          </li>
          <li className="mx-4">
            <a
              className="bg-blue-500 px-4 py-5 block rounded-t-xl w-full text-center uppercase text-white"
              href="#tab-6"
              data-index="6"
            >
              Código
            </a>
          </li>
        </ul>

        <div className="rounded-xl p-8 bg-white">
          <div
            className="tab-pane fade in active"
            id="tab-0"
            role="tabpanel"
            aria-label="profile-tab"
            data-key="0"
          >
            <form action="/imoveis" method="GET">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <select
                    id="label-property-type"
                    defaultValue=""
                    className="w-full py-3 px-4 rounded-lg text-sm 2xl:text-lg font-medium border text-blue-500 border-blue-500"
                  >
                    <option value="">Tipo</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="apartamento-duplex">
                      Apartamento duplex
                    </option>
                    <option value="casa">Casa</option>
                    <option value="chacara">Chácara</option>
                    <option value="cobertura">Cobertura</option>
                    <option value="galpao">Galpão</option>
                    <option value="loja">Loja</option>
                    <option value="pousada">Pousada</option>
                    <option value="sala">Sala</option>
                    <option value="sitio">Sítio</option>
                    <option value="terreno">Terreno</option>
                    <option value="village">Village</option>
                    <option value="area">Área</option>
                  </select>
                </div>

                <div>
                  <input
                    autoComplete="off"
                    id="label-locality"
                    type="text"
                    placeholder="Digite condomínio, região, bairro ou cidade"
                    className="w-full py-3 px-4 rounded-lg text-sm 2xl:text-lg font-medium border text-blue-500 border-blue-500"
                  />
                </div>

                <div>
                  <select
                    id="label-sale-price"
                    name="sale_price"
                    defaultValue=""
                    className="w-full py-3 px-4 rounded-lg text-sm 2xl:text-lg font-medium border text-blue-500 border-blue-500"
                  >
                    <option value="">Preço de venda</option>
                    <option value="~60000">Até 60.000</option>
                    <option value="60000~80000">De 60.000 até 80.000</option>
                    <option value="80000~100000">De 80.000 até 100.000</option>
                    <option value="100000~200000">
                      De 100.000 até 200.000
                    </option>
                    <option value="200000~400000">
                      De 200.000 até 400.000
                    </option>
                    <option value="400000~600000">
                      De 400.000 até 600.000
                    </option>
                    <option value="600000~800000">
                      De 600.000 até 800.000
                    </option>
                    <option value="800000~1000000">
                      De 800.000 até 1.000.000
                    </option>
                    <option value="1000000~2000000">
                      De 1.000.000 até 2.000.000
                    </option>
                    <option value="2000000~4000000">
                      De 2.000.000 até 4.000.000
                    </option>
                    <option value="4000000~6000000">
                      De 4.000.000 até 6.000.000
                    </option>
                    <option value="6000000~8000000">
                      De 6.000.000 até 8.000.000
                    </option>
                    <option value="8000000~">Acima de 8.000.000</option>
                  </select>
                </div>

                <div>
                  <select
                    id="label-bedrooms"
                    defaultValue=""
                    className="w-full py-3 px-4 rounded-lg text-sm 2xl:text-lg font-medium border text-blue-500 border-blue-500"
                  >
                    <option value="">Quartos</option>
                    <option value="1+">1 ou +</option>
                    <option value="2+">2 ou +</option>
                    <option value="3+">3 ou +</option>
                    <option value="4+">4 ou +</option>
                    <option value="5+">5 ou +</option>
                  </select>
                </div>

                <div>
                  <select
                    id="label-condo"
                    defaultValue=""
                    className="w-full py-3 px-4 rounded-lg text-sm 2xl:text-lg font-medium border text-blue-500 border-blue-500"
                  >
                    <option value="">Em condomínio fechado</option>
                    <option value="em-condominio-fechado">Sim</option>
                    <option value="-em-condominio-fechado">Não</option>
                  </select>
                </div>

                <div className="">
                  <button
                    type="button"
                    className=" flex justify-center items-center bg-orange text-gray-100 bg-blue-500 font-medium rounded-full py-3 px-16  text-sm 2xl:text-lg uppercase"
                    id="clickSearch"
                  >
                    <i className="fa fa-search mx-2"></i>
                    Buscar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
