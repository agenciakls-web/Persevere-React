"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [responseMessage, setResponseMessage] = useState<string>("");
  const [responseType, setResponseType] = useState("danger");

  const promotionAlert = (message: string, action = "danger") => {
    if (!message) {
      message =
        "Um ou mais campos possuem um erro. Verifique e tente novamente.";
    }
    setResponseMessage(message);
    setResponseType(action);
  };

  const onSubmit = async (data: any) => {
    promotionAlert("Enviando...", "warning");

    try {
      const params = new URLSearchParams(data);

      const response = await axios.post(
        "https://persevere.com.br/api/contact",
        params,
      );

      if (response.data.status === true) {
        promotionAlert(response.data.content, "success");
        reset();
      } else {
        promotionAlert(response.data.content, "danger");
      }
    } catch (error) {
      promotionAlert("Houve algum erro, tente novamente mais tarde!", "danger");
    }
  };

  // Pega o primeiro erro de validação, se existir
  const firstValidationError =
    (Object.values(errors)[0]?.message as string) || "";

  // Decide qual mensagem mostrar: erro de validação ou resposta da API
  const messageToShow = firstValidationError || responseMessage;

  return (
    <main>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h3 className="my-4 font-medium text-2xl font-reading text-blue-500">
            Entre em contato
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
            <div>
              <form id="form-contact" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    {...register("nome", { required: "Nome é obrigatório" })}
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                    placeholder="NOME"
                  />

                  <input
                    type="email"
                    {...register("email", { required: "E-mail é obrigatório" })}
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500"
                    placeholder="E-MAIL"
                  />

                  <input
                    type="text"
                    {...register("phone")}
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500"
                    placeholder="TELEFONE"
                  />

                  <select
                    {...register("motivo", { required: "Selecione um motivo" })}
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                  >
                    <option value="">MOTIVO DO CONTATO</option>
                    <option value="Atendimento ao consumidor - SAC">
                      Atendimento ao consumidor - SAC
                    </option>
                    <option value="Imprensa">Imprensa</option>
                    <option value="Reclamações">Reclamações</option>
                    <option value="Sugestões">Sugestões</option>
                    <option value="Elogios">Elogios</option>
                    <option value="Reportar Erro ou Problema">
                      Reportar Erro ou Problema
                    </option>
                    <option value="Outro Motivo">Outro Motivo</option>
                  </select>

                  <textarea
                    {...register("mensagem", {
                      required: "Mensagem é obrigatória",
                    })}
                    className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                    placeholder="MENSAGEM"
                  ></textarea>

                  <input
                    type="hidden"
                    {...register("action")}
                    value="contact"
                  />

                  <input
                    type="submit"
                    className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase"
                  />
                </div>

                {/* Mensagem única */}
                {messageToShow && (
                  <div
                    className={`w-full my-2 p-3 uppercase text-center font-reading font-bold border-2 border-white border-dashed ${
                      responseType === "success"
                        ? "bg-green-500 text-white"
                        : responseType === "warning"
                          ? "bg-yellow-500 text-black"
                          : "bg-orange-500 text-white"
                    }`}
                  >
                    {messageToShow}
                  </div>
                )}
              </form>
            </div>
            <div className="text-xl text-black rounded-xl font-brandon">
              <div className="border-orange-500 border-2 rounded-xl text-lg p-6 my-3 md:mt-0">
                <div className="text-xl pb-2">
                  <h3 className="font-bold uppercase">
                    Informações de contato
                  </h3>
                  <p>
                    Entre em contato conosco também pelas informações abaixo:
                  </p>
                </div>

                {/* Telefone */}
                <a href="tel:+552126340075" target="_blank" rel="noreferrer">
                  <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                    <div className="px-6 text-4xl text-blue-500">
                      <FontAwesomeIcon
                        icon={faPhone}
                        aria-hidden="true"
                        className="text-blue-500 h-10 w-10"
                      ></FontAwesomeIcon>
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">Telefone:</div>
                      <div>(21) 2634-0075</div>
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5521991257878?text=Ol%C3%A1,%20vim%20pelo%20site!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-500">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        aria-hidden="true"
                        className="text-blue-500 h-10 w-10"
                      ></FontAwesomeIcon>
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">WhatsApp:</div>
                      <div>(21) 99125-7878</div>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contato@persevere.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-500">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        aria-hidden="true"
                        className="text-blue-500 h-10 w-10"
                      ></FontAwesomeIcon>
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">E-mail:</div>
                      <div>contato@persevere.com.br</div>
                    </div>
                  </div>
                </a>

                {/* Endereço */}
                <a
                  href="https://goo.gl/maps/rRD1rMnrD6xJRQmA8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                    <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-500">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        aria-hidden="true"
                        className="text-blue-500 h-10 w-10"
                      ></FontAwesomeIcon>
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">Endereço:</div>
                      <div>
                        Rua Prof. Cardoso de Menezes, QD 115 - LT 6 - Loja 1,
                        Bairro: Jardim Atlântico - Itaipuaçu - Maricá/RJ - CEP:
                        24935-425
                      </div>
                    </div>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/persevereimoveis"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                     <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-500">
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        aria-hidden="true"
                        className="text-blue-500 h-10 w-10"
                      ></FontAwesomeIcon>
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">Facebook:</div>
                      <div>/persevereimoveis</div>
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/persevere.imoveis/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                     <div className="px-4 md:px-6 text-xl md:text-4xl text-blue-500">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        aria-hidden="true"
                        className="text-blue-500 h-10 w-10"
                      ></FontAwesomeIcon>
                    </div>
                    <div>
                      <div className="py-1 font-bold uppercase">Instagram:</div>
                      <div>@persevereimoveis</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
