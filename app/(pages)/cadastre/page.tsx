"use client";

import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import React, { useState } from "react";

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
            <HeaderTitle title="Cadastre" />
            <section className="py-3 md:py-8">
                <div className="container mx-auto px-4 max-w-xl">
                    <h3 className="my-4 py-4 text-center font-medium text-2xl font-reading text-blue-500">
                        Envie sua proposta
                    </h3>

                    {/* Etapas com linha de progresso */}
                    <div className="grid grid-cols-3 items-center relative">
                        {["Imóvel", "Cliente", "Condições"].map((label, idx) => (
                            <div key={idx} className="flex flex-col items-center relative">
                                {/* Linha de conexão */}
                                {idx < 2 && (
                                    <div
                                        className={`absolute top-5 left-1/2 w-full h-1 transition-all duration-500 ${step > idx ? "bg-blue-500" : "bg-gray-200"
                                            }`}
                                        style={{ zIndex: -1 }}
                                    ></div>
                                )}

                                {/* Bolinha */}
                                <div
                                    className={`step-icon w-10 h-10 mx-auto rounded-full flex items-center justify-center transition-colors duration-500 ${step >= idx
                                            ? "bg-blue-500 text-white"
                                            : "bg-white border-2 border-gray-100 text-gray-600"
                                        }`}
                                >
                                    <span className="text-center w-full">
                                        {idx === 0 && <i className="fa-regular fa-user"></i>}
                                        {idx === 1 && <i className="fa-solid fa-location-dot"></i>}
                                        {idx === 2 && (
                                            <i className="fa-solid fa-graduation-cap"></i>
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
                                <h2 className="py-3 font-medium text-xl font-reading text-blue-500">
                                    Informações Pessoais
                                </h2>
                                <div className="grid grid-cols-1 md:gap-4">
                                    <div>
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
                                            className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500 placeholder:uppercase"
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
                                <h2 className="py-3 font-medium text-xl font-reading text-blue-500">
                                    Clientes
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                    <input
                                        type="text"
                                        name="nome"
                                        placeholder="Nome Completo"
                                        required
                                        className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500"
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="E-mail"
                                        required
                                        className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500"
                                    />
                                    <input
                                        type="tel"
                                        name="telefone"
                                        placeholder="Telefone"
                                        required
                                        className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500"
                                    />
                                    <input
                                        type="text"
                                        name="celular"
                                        placeholder="Celular"
                                        required
                                        className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500"
                                    />
                                    <input
                                        type="text"
                                        name="cpf"
                                        placeholder="CPF"
                                        required
                                        className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500"
                                    />
                                    <input
                                        type="text"
                                        name="rg"
                                        placeholder="RG"
                                        required
                                        className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500"
                                    />
                                    <input
                                        type="text"
                                        name="nascimento"
                                        placeholder="Data de Nascimento"
                                        required
                                        className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500"
                                    />
                                    <input
                                        type="text"
                                        name="estadoCivil"
                                        placeholder="Estado Civil"
                                        required
                                        className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500"
                                    />
                                </div>
                            </div>
                        )}
                        {/* Step 3 */}
                        {step === 2 && (
                            <div className="step" data-step="2">
                                <h2 className="py-3 font-medium text-xl font-reading text-blue-500">
                                    Escolaridade
                                </h2>
                                <div className="grid grid-cols-1 md:gap-4">
                                    <textarea
                                        name="message"
                                        placeholder="MENSAGEM"
                                        className="w-full py-3 px-4 rounded-lg border text-gray-500"
                                        rows={5}
                                    ></textarea>
                                    <input
                                        type="text"
                                        name="valido"
                                        placeholder="Proposta válida até"
                                        required
                                        className="w-full my-2 py-3 px-4 rounded-lg border text-gray-500"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Navegação */}
                        <div className="input-group text-right">
                            {step > 0 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="bg-blue-500 text-gray-100 hover:bg-red-800 rounded-full my-4 py-2 px-10"
                                >
                                    Anterior
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={nextStep}
                                className="bg-blue-500 text-gray-100 hover:bg-red-800 rounded-full my-4 py-2 px-10"
                            >
                                {step < 2 ? "Próximo" : "Enviar"}
                            </button>
                        </div>

                        {/* Mensagem de resposta */}
                        {responseMessage && (
                            <div
                                className={`w-full my-2 p-3 uppercase text-center font-bold rounded ${responseType === "success"
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
