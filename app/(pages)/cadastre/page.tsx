"use client";

import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import {
  faGraduationCap,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ProposalForm = () => {
  const [step, setStep] = useState(0);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState("danger");
  const [sending, setSending] = useState(false);

  const proposalAlert = (message: string, action = "danger") => {
    if (!message) {
      message =
        "Um ou mais campos possuem um erro. Verifique e tente novamente.";
    }
    setResponseMessage(message);
    setResponseType(action);
  };
  const validateStep = () => {
    const form = document.getElementById("form-proposal") as HTMLFormElement;
    const requiredFields = form.querySelectorAll(
      `.step[data-step="${step}"] [required]`,
    );
    let valid = true;
    requiredFields.forEach((field: any) => {
      if (!field.value || field.value.trim() === "") {
        field.classList.add("border-red-700");
        valid = false;
      } else {
        field.classList.remove("border-red-700");
      }
    });
    return valid;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    if (step === 2) {
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (sending) {
      proposalAlert("Aguarde, salvando seu cadastro...", "warning");
      return;
    }

    proposalAlert("Enviando...", "warning");
    setSending(true);

    try {
      const form = document.getElementById("form-proposal") as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch("https://persevere.com.br/api/proposal", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status === true) {
        proposalAlert(data.content, "success");
        form.reset();
        setStep(0);
      } else {
        proposalAlert(data.content, "danger");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      proposalAlert("Houve algum erro, tente novamente mais tarde!", "danger");
    } finally {
      setSending(false);
    }
  };
  return (
    <main className="text-gray-500">
      <HeaderTitle title="Cadastre seu imóvel" />
      <section className="py-3 md:py-8">
        <div className="container mx-auto px-4 max-w-xl">
          <h3 className="my-4 py-4 text-center font-medium text-lg md:text-2xl font-reading text-blue-500">
            Cadastre seu imóvel
          </h3>

          {/* Etapas com linha de progresso */}
          <div className="grid grid-cols-3 items-center relative">
            {["Imóvel", "Cliente", "Condições"].map((label, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                {/* Linha de conexão */}
                {idx < 2 && (
                  <div
                    className={`absolute top-5 left-1/2 w-full h-1 transition-all duration-500 ${
                      step > idx ? "bg-blue-500" : "bg-gray-200"
                    }`}
                    style={{ zIndex: -1 }}
                  ></div>
                )}

                {/* Bolinha */}
                <div
                  className={`step-icon w-8 h-8 md:w-10 md:h-10 mx-auto rounded-full flex items-center justify-center transition-colors duration-500 ${
                    step >= idx
                      ? "bg-blue-500 text-white"
                      : "bg-white border-2 border-gray-100 text-gray-600"
                  }`}
                >
                  <span className="text-center w-full">
                    {idx === 0 && (
                      <FontAwesomeIcon
                        icon={faUser}
                        className="fa-regular fa-user"
                      />
                    )}
                    {idx === 1 && (
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="fa-solid fa-location-dot"
                      />
                    )}
                    {idx === 2 && (
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        className="fa-solid fa-graduation-cap"
                      />
                    )}
                  </span>
                </div>

                {/* Texto abaixo */}
                <div className="hidden md:block text-xs text-center md:text-sm uppercase text-gray-500 mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Formulário */}
      <section className="py-3 md:py-8">
        <div className="container mx-auto px-4 max-w-xl">
          <form id="form-proposal" className="form-wizard">
            {/* Step 1 */}
            {step === 0 && (
              <div className="step is-active" data-step="0">
                <h2 className="py-3 font-medium text-base md:text-xl font-reading text-blue-500">
                  Informações Pessoais
                </h2>
                <div className="grid grid-cols-1 md:gap-4">
                  <div className="text-base md:text-xl">
                    <span className="px-2">
                      <input
                        type="radio"
                        id="comprar"
                        name="proposito"
                        value="comprar"
                        required
                      />{" "}
                      <label htmlFor="comprar">Comprar</label>
                    </span>
                    <span className="px-2">
                      <input
                        type="radio"
                        id="alugar"
                        name="proposito"
                        value="alugar"
                        required
                      />{" "}
                      <label htmlFor="alugar">Alugar</label>
                    </span>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="codigo"
                      className="w-full my-2 py-3 px-2 md:px-4 text-sm md:text-base rounded-lg border text-gray-500 placeholder:uppercase"
                      placeholder="Código do Imóvel"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <div className="step" data-step="1">
                <h2 className="py-3 font-medium text-base md:text-xl font-reading text-blue-500">
                  Clientes
                </h2>
                <div className="step js-step">
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                    <div className="lg:col-span-2">
                      <input
                        type="text"
                        name="nome"
                        className="w-full my-2 py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control"
                        required
                        placeholder="Nome Completo"
                      />
                    </div>

                    <div className="lg:col-span-2">
                      <input
                        type="text"
                        name="email"
                        className="w-full my-2 py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control"
                        required
                        placeholder="E-mail"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="telefone"
                        className="w-full my-2 py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control"
                        required
                        placeholder="Telefone"
                        id="field-telefone"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="celular"
                        className="w-full my-2 py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control"
                        required
                        placeholder="Celular"
                        id="field-celular"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="cpf"
                        className="w-full my-2 py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control"
                        required
                        placeholder="CPF"
                        id="field-cpf"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="rg"
                        className="w-full my-2 py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control"
                        required
                        placeholder="RG"
                        id="field-rg"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="nascimento"
                        className="w-full my-2 py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control"
                        required
                        placeholder="Data de Nascimento"
                        id="field-nascimento"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="Estado Civil"
                        className="w-full my-2 py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control"
                        required
                        placeholder="Estado Civil"
                      />
                    </div>
                  </div>
                </div>

                <div className="step js-step">
                  <h2 className="py-3 font-medium text-base md:text-xl font-reading text-blue-500">
                    Escolaridade
                  </h2>

                  <div className="grid grid-cols-1 md:gap-4">
                            <select name="escolaridade" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required>
                                <option selected value="" disabled>Selecionar</option>
                                <option value="1">Ensino Fundamental (Cursando)</option>
                                <option value="2">Ensino Fundamental (Completo)</option>
                                <option value="3">Ensino Médio (Cursando)</option>
                                <option value="4">Ensino Médio (Completo)</option>
                                <option value="5">Ensino Superior (Cursando)</option>
                                <option value="6">Ensino Superior (Completo)</option>
                            </select>
                    <div>
                      <input
                        type="text"
                        name="valido"
                        className="w-full my-2 py-3 px-2 md:px-4 rounded-lg text-sm md:text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control"
                        required
                        placeholder="Proposta válida até"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Step 3 */}
            {step === 2 && (
              <div className="step" data-step="2">
                <h2 className="py-3 font-medium text-base md:text-xl font-reading text-blue-500">
                  Escolaridade
                </h2>
                <div className="grid grid-cols-1 md:gap-4">
                  <textarea
                    name="message"
                    placeholder="MENSAGEM"
                    className="w-full py-2 md:py-3 px-2 md:px-4 text-sm md:text-lg rounded-lg border text-gray-500"
                    rows={5}
                  ></textarea>
                  <input
                    type="text"
                    name="valido"
                    placeholder="Proposta válida até"
                    required
                    className="w-full my-2 py-2 md:py-3 px-2 md:px-4 text-sm md:text-lg rounded-lg border text-gray-500"
                  />
                </div>
              </div>
            )}

            {/* Navegação */}
            <div className="input-group text-right flex justify-center md:justify-end gap-4">
              {step > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-blue-500 text-gray-100 hover:bg-red-800 rounded-full text-sm md:text-base py-1 px-8 md:my-4 md:py-2 md:px-10"
                >
                  Anterior
                </button>
              )}
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-gray-100 hover:bg-red-800 rounded-full text-sm md:text-base py-1 px-8 md:my-4 md:py-2 md:px-10"
              >
                {step < 2 ? "Próximo" : "Enviar"}
              </button>
            </div>

            {/* Mensagem de resposta */}
            {responseMessage && (
              <div
                className={`w-full my-2 p-3  uppercase text-center font-bold rounded ${
                  responseType === "success"
                    ? "bg-green-600 text-white"
                    : responseType === "warning"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-600 text-white"
                }`}
              >
                {responseMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default ProposalForm;
