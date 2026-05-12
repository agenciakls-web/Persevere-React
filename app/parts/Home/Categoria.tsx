"use client";

export default function Categoria() {
  return (
    <section className="my-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-black bg-[url(/img/categoria-1.png)] bg-cover h-64 rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-xl 2xl:text-2xl">
            Lançamentos
          </div>
          <div className="bg-black bg-[url(/img/categoria-2.png)] bg-cover h-64 rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-xl 2xl:text-2xl">
            Casas
          </div>
          <div className="bg-black bg-[url(/img/categoria-3.png)] bg-cover h-64 rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-xl 2xl:text-2xl">
            Apartamentos
          </div>
          <div className="bg-black bg-[url(/img/categoria-4.png)] bg-cover h-64 rounded-3xl text-center flex items-center justify-center text-white font-brandon uppercase text-xl 2xl:text-2xl">
            Locações
          </div>
        </div>
      </div>
    </section>
  );
}
