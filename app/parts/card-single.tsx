import Link from "next/link";

export default function CardSingle() {
  const imovel = {
    CodigoImovel: 123,
    Bairro: "Copacabana",
    Cidade: "Rio de Janeiro",
    AreaTotal: 80,
    QtdDormitorios: 2,
    QtdBanheiros: 2,
    QtdVagas: 1,
    QtdSuites: 1,
  };

  const foto = "/images/imovel.jpg";
  const precoVenda = 500000;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="px-2 py-2">
        <Link href={`/imoveis/codigo/${imovel.CodigoImovel}`} className="h-full block">
          <div className="rounded-xl h-full overflow-hidden shadow-lg shadow-gray-300">
            {foto && (
              <div
                className="bg-blue-500 h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${foto})` }}
              ></div>
            )}

            <div className="px-6 py-4 flex justify-between">
              {/* Informações principais */}
              <div className="w-7/12 uppercase">
                <div className="pb-4">
                  <h4 className="text-sm text-orange">{imovel.Bairro}</h4>
                  <h3 className="text-lg text-blue-500 font-medium">{imovel.Cidade}</h3>
                </div>
                <div>
                  <h4 className="text-sm text-orange">VENDA</h4>
                  <h3 className="text-lg text-blue-500 font-medium">
                    R$ {precoVenda.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </h3>
                </div>
              </div>

              {/* Detalhes */}
              <div className="w-5/12">
                <div className="grid grid-cols-2 gap-2">
                  {imovel.AreaTotal > 0 && (
                    <div className="flex items-center">
                      <div className="px-2">
                        {/* Ícone largura */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 w-6" viewBox="0 0 18.362 7.363">
                          <path d="M61.211,58.618..." fill="#304c74" />
                        </svg>
                      </div>
                      <div className="text-sm">{imovel.AreaTotal}m²</div>
                    </div>
                  )}

                  {imovel.QtdDormitorios > 0 && (
                    <div className="flex items-center justify-end">
                      <div className="px-2">
                        {/* Ícone cama */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.513" height="11.294" viewBox="0 0 16.513 11.294">
                          <path d="M78.171,96.256..." fill="#304c74" />
                        </svg>
                      </div>
                      <div className="text-sm">{imovel.QtdDormitorios}</div>
                    </div>
                  )}

                  {imovel.QtdBanheiros > 0 && (
                    <div className="flex items-center">
                      <div className="px-2">
                        {/* Ícone chuveiro */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.326" height="18.318" viewBox="0 0 18.326 18.318">
                          <path d="M50.98,62.108..." fill="#304c74" />
                        </svg>
                      </div>
                      <div className="text-sm">{imovel.QtdBanheiros}</div>
                    </div>
                  )}

                  {imovel.QtdVagas > 0 && (
                    <div className="flex items-center justify-end">
                      <div className="px-2">
                        {/* Ícone carro */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.29" height="10.821" viewBox="0 0 15.29 10.821">
                          <path d="M90.276,118.707..." fill="#304c74" />
                        </svg>
                      </div>
                      <div className="text-sm">{imovel.QtdVagas}</div>
                    </div>
                  )}

                  {imovel.QtdSuites > 0 && (
                    <div className="flex items-center">
                      <div className="px-2">
                        {/* Ícone banheira */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.254" height="18.327" viewBox="0 0 18.254 18.327">
                          <path d="M87.87,53.651..." fill="#304c74" />
                        </svg>
                      </div>
                      <div className="text-sm">{imovel.QtdSuites}</div>
                    </div>
                  )}
                </div>

                <div className="text-blue-500 text-right py-2 text-base font-bold">
                  VER MAIS
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
