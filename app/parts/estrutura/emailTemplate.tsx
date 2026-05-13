import { ContatoTypes } from "../Componentes/ContatoForm";
import { ContentLinks } from "../dados/contentLinks";

export function EmailTemplate({ body }: { body: ContatoTypes }) {
    return (
        <div className="text-[18px] font-sans mx-auto my-4 w-[600px]">
            <div className="text-center">
                <img
                    src="https://persevere.com.br/img/logo.png"
                    width="150"
                    height="40"
                    alt={ContentLinks.titleSite}
                    className="mx-auto w-[150px] h-[40px]"
                />
                <h2 className="uppercase font-bold mt-2">Contato Recebido</h2>
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Contato</h3>
                <table className="w-full border-collapse">
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 text-right font-bold text-[#efefef] w-[120px] bg-blue-600">
                                Nome
                            </td>
                            <td className="px-4 py-2 bg-[#dedede]">{body.nome}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-right font-bold text-[#efefef] w-[120px] bg-blue-600">
                                E-mail
                            </td>
                            <td className="px-4 py-2 bg-[#dedede]">{body.email}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-right font-bold text-[#efefef] w-[120px] bg-blue-600">
                                Telefone
                            </td>
                            <td className="px-4 py-2 bg-[#dedede]">{body.telefone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
