import { ContatoTypes } from "../Componentes/ContatoForm";
import { ContentLinks } from "../dados/contentLinks";

export function EmailTemplate({ body }: { body: ContatoTypes }) {
    return (
        <div className="text-4 font-sans mx-auto my-4 w-150">
            <div className="text-center">
                <img
                    src="https://persevere.com.br/img/logo.png"
                    width="150"
                    height="40"
                    alt={ContentLinks.titleSite}
                    className="mx-auto w-32"
                />
                <h2 className="uppercase font-bold mt-2">Contato Recebido</h2>
            </div>

            <div className="mt-6">
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
            </div>
        </div>
    );
}
