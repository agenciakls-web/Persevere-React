import Image from "next/image";

export default function Financiamento() {
  
  return (
    <main>
    <section className="py-8">
        <div className="container mx-auto px-4">

            <div className="flex justify-center">
                <div className="w-1/2 text-center">
                    <h2 className="py-2 font-bold font-brandon uppercase">
                        Escolha um banco e faça a sua simulação.
                    </h2>
                    <ul className="flex justify-center my-2">
                        <li className="mx-2">
                            <a href="https://ww3.itau.com.br/imobline/pre/simuladores_new/index.aspx?IDENT_bkl=pre&amp;IMOB_tipobkl=" target="_blank">
                                <Image src="/img/bancos/itau.jpg" alt="Itaú" className="rounded-full" width={500} height={500} />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="https://www.webcasas.com.br/webcasas/?headerandfooter/#/dados-pessoais" target="_blank">
                                <Image src="/img/bancos/santander.jpg" alt="Santander" className="rounded-full"  width={500} height={500} />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx" target="_blank">
                                <Image src="/img/bancos/banco-brasil.jpg" alt="Banco do Brasil" className="rounded-full"  width={500} height={500} />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="https://banco.bradesco/html/classNameic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm#box1-comprar" target="_blank">
                                <Image src="/img/bancos/bradesco.jpg" alt="Bradesco" className="rounded-full"  width={500} height={500} />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="http://www8.caixa.gov.br/siopiinternet/simulaOperacaoInternet.do?method=inicializarCasoUso" target="_blank">
                                <Image src="/img/bancos/caixa.jpg" alt="Caixa" className="rounded-full"  width={500} height={500} />
                            </a>
                        </li>
                    </ul>
                    <p className="py-2">Estamos a disposição para lhe auxiliar no seu processo de compra com financiamento habitacional. </p>
                    <p className="py-2">Temos uma equipe altamente capacitada, entre em contato conosco, trataremos seu caso com o carinho que você merece.</p>
                </div>

            </div>
        </div>
    </section>
</main>
  );
}