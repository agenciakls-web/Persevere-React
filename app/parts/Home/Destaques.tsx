"use client";

export default function Destaques() {
  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        {/* Menu de categorias */}
        <div className="flex justify-center">
          <div className="bg-gray-100 py-3 px-6 my-3 rounded-full uppercase font-semibold text-orange">
            <div className="flex items-center">
              <a href="#" className="px-4">
                Prontos Para Morar
              </a>
              <hr className="h-6 border-gray-300 border border-solid rounded-full" />
              <a href="#" className="px-4">
                Em construção
              </a>
              <hr className="h-6 border-gray-300 border border-solid rounded-full" />
              <a href="#" className="px-4">
                Lançamentos
              </a>
            </div>
          </div>
        </div>

        {/* Grid de imóveis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-black bg-cover bg-center h-80 flex items-end"
              style={{ backgroundImage: "url('/img/product-1.png')" }}
            >
              <div className="font-brandon text-white px-4 py-3 font-bold text-sm 2xl:text-xl">
                <h4>Rio de Janeiro - Barra da Tijuca</h4>
                <h5>A partir de: R$ 1.560.000,00</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Ver Mais */}
        <div className="w-full">
          <a href="#">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-base 2xl:text-lg mx-auto uppercase"
            >
              Ver Mais
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
