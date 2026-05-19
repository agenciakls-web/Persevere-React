// pages/resultados.js
import React from "react";

export default function Resultados({ contatos, leads, evaluates, orders, proposals, records, works }) {
  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        
        {/* Contatos */}
        <Section title="Contatos">
          <Table headers={["Nome","E-mail","Telefone","Motivo","Mensagem","Horário"]}>
            {contatos.map((c, i) => (
              <tr key={i}>
                <td>{c.nome}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.motivo}</td>
                <td>{c.mensagem}</td>
                <td>{c.date_created}</td>
              </tr>
            ))}
          </Table>
        </Section>

        {/* Leads */}
        <Section title="Leads">
          <Table headers={["Nome","E-mail","Telefone","Horário"]}>
            {leads.map((l, i) => (
              <tr key={i}>
                <td>{l.nome}</td>
                <td>{l.email}</td>
                <td>{l.phone}</td>
                <td>{l.date_created}</td>
              </tr>
            ))}
          </Table>
        </Section>

        {/* Avaliações */}
        <Section title="Avaliações">
          <Table headers={["Status","E-mail","Nome"]}>
            {evaluates.map((e, i) => (
              <tr key={i}>
                <td>{e.status}</td>
                <td>{e.email}</td>
                <td>{e.nome}</td>
              </tr>
            ))}
          </Table>
        </Section>

        {/* Você pode repetir o mesmo padrão para Orders, Proposals, Records e Works */}
      </div>
    </main>
  );
}

// Componente Section
function Section({ title, children }) {
  return (
    <div className="py-8">
      <h3 className="my-4 font-medium text-2xl text-blue-500">{title}</h3>
      {children}
    </div>
  );
}

// Componente Table
function Table({ headers, children }) {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="border border-gray-300 px-2 py-1 text-left">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
