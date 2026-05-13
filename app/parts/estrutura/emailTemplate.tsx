import { ContatoTypes } from "../Componentes/ContatoForm";
import { ContentLinks } from "../dados/contentLinks";
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Heading } from "@react-email/heading";
import { Section } from "@react-email/section";

export function EmailTemplate(body : ContatoTypes ) {
    return (
        <Html>
            <Tailwind>
                <Container>
                    <Section className="text-4 font-sans mx-auto my-4 w-150">
                        <Section className="text-center">
                            <Img
                                src="https://persevere.com.br/img/logo.png"
                                width="150"
                                height="40"
                                alt={ContentLinks.titleSite}
                                className="mx-auto w-32"
                            />
                            <Heading className="uppercase font-bold mt-2">Contato Recebido</Heading>
                        </Section>

                        <Section className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Contato</h3>
                            <table className="w-full border-collapse">
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 text-right font-bold text-orange-500 w-32 bg-blue-600">
                                            Nome
                                        </td>
                                        <td className="px-4 py-2 bg-zinc-200">{body.nome}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-right font-bold text-orange-500 w-32 bg-blue-600">
                                            E-mail
                                        </td>
                                        <td className="px-4 py-2 bg-zinc-200">{body.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-right font-bold text-orange-500 w-32 bg-blue-600">
                                            Telefone
                                        </td>
                                        <td className="px-4 py-2 bg-zinc-200">{body.telefone}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Section>
                    </Section>
                </Container>
            </Tailwind>
        </Html>
    );
}
