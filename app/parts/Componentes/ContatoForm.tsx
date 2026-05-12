"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface ContatoTypes {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default function ContatoForm() {
  const { register, handleSubmit, reset } = useForm<ContatoTypes>();
  const [message, setMessage] = useState<string>("");
  const [colorMessage, setColorMessage] = useState<string>("bg-red-700");

  function onSubmitSend(data: ContatoTypes) {
    if (data.nome == null || data.nome.length < 3) {
      setMessage("O nome digitado não é válido");
    } else if (data.email == null || data.email.length < 5) {
      setMessage("O e-mail digitado não é válido");
    } else if (data.telefone == null || data.telefone.length < 7) {
      setMessage("O telefone digitado não é válido");
    } else if (
      !data.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setMessage("O e-mail digitado não é válido");
    } else {
      setMessage("");
      axios
        .post("/api/resend", data)
        .then(function (response) {
          if (response.data) {
            setMessage("Mensagem enviada com sucesso");
            setColorMessage("bg-teal-700");
            reset();
          } else {
            setMessage(
              "Mensagem não enviada, verifique todos os campos e tente novamente",
            );
            setColorMessage("bg-red-700");
          }
        })
        .catch(() => setMessage("HOUVE UM ERRO AO ENVIAR A MENSAGEM"));
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmitSend)}>
      <div className="my-8 flex  flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 text-black">
        
          <input
            {...register("nome")}
            className=" text-base lg:text-lg 2xl:text-xl font-light py-3 md:py-3 lg:py-4 px-4 md:px-4 lg:px-5 rounded-md md:rounded-lg block w-full bg-zinc-200 text-black md:col-span-2"
            placeholder="Nome"
          />
          <input
            {...register("email")}
            className=" text-base lg:text-lg 2xl:text-xl font-light py-3 md:py-3 lg:py-4 px-4 md:px-4 lg:px-5 rounded-md md:rounded-lg block w-full bg-zinc-200 md:col-span-1"
            placeholder="E-mail"
          />
          <input
            {...register("telefone")}
            className=" text-base lg:text-lg 2xl:text-xl font-light py-3 md:py-3 lg:py-4 px-4 md:px-4 lg:px-5 rounded-md md:rounded-lg block w-full bg-zinc-200 md:col-span-1"
            placeholder="Telefone"
          />
      
        
            <textarea
              {...register("mensagem")}
              rows={10}
              className=" text-base lg:text-lg 2xl:text-xl font-light py-3 md:py-3 lg:py-4 px-4 md:px-4 lg:px-5 rounded-md md:rounded-lg block w-full bg-zinc-200 col-span-2"
              placeholder="Fale um pouco sobre o seu negócio."
            ></textarea>
        
      </div>
      <button className="my-3 flex place-items-center gap-2 md:gap-4 bg-yellow-600 transition-all rounded-md text-white text-base lg:text-lg px-4 py-2 md:px-8 lg:px-10 lg:py-2 font-normal uppercase">enviar 
      </button>
      {message != "" ? (
        <div id="response-contact" className="w-full">
          <div
            className={
              "wpcf7-response-output w-full text-white text-sm md:text-base xl:text-lg my-2 p-2 uppercase text-center border-2 border-white border-dashed " +
              colorMessage
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}