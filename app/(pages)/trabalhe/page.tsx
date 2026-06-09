"use client";

import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Megaphone,
  TrendingUp,
  ArrowRight,
  Users,
  Star,
} from "lucide-react";

const vagas = [
  {
    title: "Administrativo",
    description:
      "Atue nos bastidores garantindo organização, eficiência e suporte para todas as áreas da empresa.",
    icon: Briefcase,
    href: "https://forms.gle/9onou7wMCsTnd3AZ9",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Consultor de Imóveis",
    description:
      "Conecte pessoas aos seus sonhos através de um atendimento consultivo e estratégico.",
    icon: Building2,
    href: "https://forms.gle/pSnWbuBMGyaUtB5L7",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "SDR - Desenvolvimento de Vendas",
    description:
      "Gere oportunidades, fortaleça relacionamentos e impulsione resultados comerciais.",
    icon: TrendingUp,
    href: "https://forms.gle/AjcNDu99chWMsjmJ7",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Marketing",
    description:
      "Crie estratégias, campanhas e conteúdos que fortalecem a presença da Persevere.",
    icon: Megaphone,
    href: "https://forms.gle/EgNDVe8hLv3bY2xq5",
    color: "from-blue-500 to-blue-600",
  },
];

export default function TrabalheConosco() {
  return (
    <main className="bg-white">
      <HeaderTitle title="Trabalhe Conosco" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-50 py-8 md:py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-blue-600">

            <h1 className="mb-6  font-bold leading-tight text-base md:text-4xl">
              Construa sua carreira com uma empresa que valoriza pessoas,
              crescimento e resultados.
            </h1>

            <p className="mx-auto max-w-3xl text-xs md:text-base leading-4 md:leading-8 text-orange-500">
              Na Persevere, acreditamos que grandes resultados são construídos
              por profissionais comprometidos, inovadores e apaixonados pelo que
              fazem. Nosso time trabalha diariamente para transformar
              oportunidades em conquistas e sonhos em realidade.
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
                Nossa Cultura
              </span>

              <h2 className="mb-4 md:mb-6 font-semibold text-gray-900 text-lg md:text-4xl">
                Como é trabalhar na Persevere
              </h2>

              <div className="space-y-5 text-sm md:text-lg  leading-4 md:leading-8 text-gray-600">
                <p>
                  Trabalhar na Persevere é fazer parte de um ambiente dinâmico,
                  colaborativo e focado em crescimento constante. Valorizamos
                  pessoas que tenham atitude, visão de futuro e vontade de
                  evoluir profissionalmente.
                </p>

                <p>
                  Nosso compromisso é desenvolver talentos, incentivar novas
                  ideias e criar oportunidades reais de crescimento dentro da
                  empresa.
                </p>

                <p>
                  Aqui, acreditamos em relações transparentes, trabalho em
                  equipe e excelência no atendimento. Mais do que colaboradores,
                  buscamos parceiros de jornada.
                </p>
              </div>
            </div>

            <div className="grid gap-3 md:gap-5 grid-cols-2">
              {[
                {
                  text: "Desenvolvimento profissional",
                  icon: <Briefcase className="w-5 h-5 md:w-7 md:h-7" />,
                },
                {
                  text: "Ambiente colaborativo",
                  icon: <Users className="w-5 h-5 md:w-7 md:h-7" />,
                },
                {
                  text: "Crescimento constante",
                  icon: <TrendingUp className="w-5 h-5 md:w-7 md:h-7" />,
                },
                {
                  text: "Valorização de talentos",
                  icon: <Star className="w-5 h-5 md:w-7 md:h-7" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-white p-3 md:p-6 shadow-lg shadow-blue-100/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl  text-blue-600">
                    {item.icon}
                  </div>

                  <h3 className="text-xs md:text-lg font-semibold text-gray-900">
                    {item.text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VAGAS */}
      <section className="bg-gray-50 py-8 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-7 md:mb-14 max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-blue-600">
              Oportunidades
            </span>

            <h2 className="mb-4 md:mb-6 font-semibold text-gray-900 text-lg md:text-4xl">
              Escolha a área que combina com você
            </h2>

            <p className="text-sm leanding-4 md:leading-8 text-gray-600">
              Clique em uma das áreas abaixo para preencher o formulário e
              iniciar sua jornada com a Persevere.
            </p>
          </div>

          <div className="grid gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-4">
            {vagas.map((vaga, index) => {
              const Icon = vaga.icon;

              return (
                <Link
                  key={index}
                  href={vaga.href}
                  target="_blank"
                  className="group relative flex flex-col items-center text-center overflow-hidden rounded-xl bg-white p-4 md:p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className={`mb-4 md:mb-6 flex w-10 h-10  md:h-16 md:w-16 items-center justify-center rounded-2xl bg-linear-to-br ${vaga.color} text-white shadow-lg`}
                  >
                    <Icon className="w-6 h-6 md:w-30 md:h-30" />
                  </div>

                  <h3 className="mb-4 text-sm md:text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    {vaga.title}
                  </h3>

                  <p className="mb-4 md:mb-8 text-xs md:text-base leading-3 md:leading-7 text-gray-600">
                    {vaga.description}
                  </p>

                  <div className="inline-flex items-center gap-3 rounded-md border border-blue-400 px-2 py-1 md:px-5 md:py-3 font-medium text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white text-xs md:text-sm">
                    Enviar candidatura
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-orange-500">
            <h2 className="mb-3 md:mb-6  font-bold text-lg md:text-4xl">
              Venha crescer com a Persevere
            </h2>

            <p className="text-sm mdtext-lg leading-4 md:leading-8 text-blue-600">
              Estamos sempre em busca de profissionais talentosos, comprometidos
              e com vontade de fazer a diferença. Faça parte da nossa história e
              construa um futuro de grandes conquistas com a gente.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
