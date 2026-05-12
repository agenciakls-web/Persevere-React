import { ContatoTypes } from "../Componentes/ContatoForm";

export function EmailTemplate(body: ContatoTypes) {
    return (
        <div>
            <h1>Contato Site - Bruna Dornelles Advocacia</h1>
            <p>Nome: {body.nome}!</p>
            <p>E-mail: {body.email}!</p>
            <p>Telefone: {body.telefone}!</p>
        </div>
    )
};