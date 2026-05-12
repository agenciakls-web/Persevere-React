import Image from 'next/image';
import Link from 'next/link';

export default function Financiar() {
  const bancos = [
    {
      nome: 'Itaú',
      href: 'https://ww3.itau.com.br/imobline/pre/simuladores_new/index.aspx?IDENT_bkl=pre&IMOB_tipobkl=',
      src: '/img/bancos/itau.jpg',
    },
    {
      nome: 'Santander',
      href: 'https://www.webcasas.com.br/webcasas/?headerandfooter/#/dados-pessoais',
      src: '/img/bancos/santander.jpg',
    },
    {
      nome: 'Banco do Brasil',
      href: 'https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx',
      src: '/img/bancos/banco-brasil.jpg',
    },
    {
      nome: 'Bradesco',
      href: 'https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm#box1-comprar',
      src: '/img/bancos/bradesco.jpg',
    },
    {
      nome: 'Caixa',
      href: 'http://www8.caixa.gov.br/siopiinternet/simulaOperacaoInternet.do?method=inicializarCasoUso',
      src: '/img/bancos/caixa.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2 text-center">
              <h2 className="py-4 font-bold text-xl md:text-2xl uppercase tracking-tight text-gray-800">
                Escolha um banco e faça a sua simulação.
              </h2>

              {/* Lista de Bancos */}
              <ul className="flex flex-wrap justify-center items-center gap-4 my-8">
                {bancos.map((banco) => (
                  <li key={banco.nome} className="transition-transform hover:scale-110">
                    <Link 
                      href={banco.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full border border-gray-100 shadow-sm">
                        <Image
                          src={banco.src}
                          alt={banco.nome}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Textos Informativos */}
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Estamos a disposição para lhe auxiliar no seu processo de compra com financiamento habitacional.
                </p>
                <p>
                  Temos uma equipe altamente capacitada, entre em contato conosco, trataremos seu caso com o carinho que você merece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}