import Image from "next/image";
import Dra from "@/public/img/quem-somos.png";
import Duvidas from "@/app/parts/Componentes/pesquisar";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";

interface PropsBg {
  cor: string;
  titulo: string;
}

export default function Escritorio({ cor, titulo }: PropsBg) {
  const bgColor = cor;
  const Title = titulo;

  return (
    <>
    <HeaderTitle title="Sobre Nós" />
      <section className="relative py-10">
              <div className={`${bgColor}` + " overflow-x-hidden relative"}>
                <div className="container mx-auto px-4 ">
                  <div className=" grid md:grid-cols-2 gap-8 items-center justify-center">
                    <div className="flex  flex-col items-start gap-4 md:gap-6 text-black">
                      <div className="">
                        <h2 className="text-sm lg:text-lg text-yellow-600  font-semibold  my-2">
                          {Title}
                        </h2>
                        <p className="text-xl md:text-2xl lg:text-3xl py-4 font-light ">
                          Bruna Dornelles Advocacia
                        </p>
                      </div>
                      <p className="text-xs lg:text-lg  font-light">
                        O Escritório de Advocacia Bruna Dornelles atua com
                        compromisso, ética e excelência na prestação de serviços
                        jurídicos. Nosso foco é oferecer soluções estratégicas e
                        seguras, sempre com transparência e dedicação em cada
                        atendimento.
                      </p>
                      <p className="text-xs lg:text-lg  font-light">
                        Prezamos pela qualidade e pela atenção individualizada, por
                        isso realizamos atendimentos com hora marcada, garantindo
                        máxima segurança, organização e total atenção às necessidades
                        de cada cliente.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      {" "}
                      <Image src={Dra} alt="Imagem da Dra Bruna Dornelles" />
                    </div>
                  </div>
                  <Duvidas />
                </div>
              </div>
            </section>
    </>
  );
}