import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";

export default function Financiamento() {
    return (
        <main>
            <HeaderTitle title="Financiamento" />
            <section className="py-8 text-gray-500">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="md:w-1/2 text-center">
                            <h2 className="py-2 font-bold font-brandon uppercase">
                                Escolha um banco e faça a sua simulação.
                            </h2>
                            <ul className="flex justify-center my-2">
                                <li className="mx-2">
                                    <a
                                        href="https://www.itau.com.br/emprestimos-financiamentos/credito-imobiliario?gclsrc=aw.ds&gad_source=1&gad_campaignid=23374170640&gbraid=0AAAAAob3x5QdIXGKAsKAthXNzQ1GZZubT&gclid=CjwKCAjwuanRBhBSEiwAY5y6V1itM-PibqTmdLkwU72_-yTdGzGhPsGvrm5deBZ_SnDWTeY9TzenFhoCLYAQAvD_BwE"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/img/bancos/itau.jpg"
                                            alt="Itaú"
                                            className="rounded-full"
                                            width={500}
                                            height={500}
                                        />
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a
                                        href="https://www.negociosimobiliarios.santander.com.br/negociosimobiliarios/#/dados-pessoais?goal=3&ic=lpcreditoimob"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/img/bancos/santander.jpg"
                                            alt="Santander"
                                            className="rounded-full"
                                            width={500}
                                            height={500}
                                        />
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a
                                        href="https://www.bb.com.br/site/pra-voce/financiamentos/financiamento-imobiliario/"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/img/bancos/banco-brasil.jpg"
                                            alt="Banco do Brasil"
                                            className="rounded-full"
                                            width={500}
                                            height={500}
                                        />
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a
                                        href="https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/img/bancos/bradesco.jpg"
                                            alt="Bradesco"
                                            className="rounded-full"
                                            width={500}
                                            height={500}
                                        />
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a
                                        href="https://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso&isVoltar=true"
                                        target="_blank"
                                    >
                                        <Image
                                            src="/img/bancos/caixa.jpg"
                                            alt="Caixa"
                                            className="rounded-full"
                                            width={500}
                                            height={500}
                                        />
                                    </a>
                                </li>
                            </ul>
                            <p className="py-2">
                                Estamos a disposição para lhe auxiliar no seu processo de compra
                                com financiamento habitacional.{" "}
                            </p>
                            <p className="py-2">
                                Temos uma equipe altamente capacitada, entre em contato conosco,
                                trataremos seu caso com o carinho que você merece.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
