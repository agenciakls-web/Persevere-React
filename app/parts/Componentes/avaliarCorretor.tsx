{
  /* PAGE COMENTADA PARA EVITAR ERROS DE ROTEAMENTO
    "use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";

const Avaliar = () => {
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
                "https://persevere.com.br/api/evaluates",
                params,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Cache-Control": "no-cache",
                        "X-CSRF-TOKEN": (window as any).csrfToken,
                    },
                }
            );

            if (response.data.status === true) {
                promotionAlert(response.data.content, "success");
                reset();
            } else {
                promotionAlert(response.data.content, "danger");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            <HeaderTitle title="Avaliar Corretor" />
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center text-gray-500">
                        <div className="w-1/2">
                            <h3 className="my-4 font-medium text-2xl font-reading text-blue-500">
                                Avaliar Corretor
                            </h3>
                            <form onSubmit={handleSubmit(onSubmit)} id="form-evaluates">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="radio"
                                            value="Regular"
                                            {...register("status", { required: "Selecione um status" })}
                                            className="mx-2"
                                            id="status-regular"
                                        />
                                        <label htmlFor="status-regular">Regular</label>
                                        <input
                                            type="radio"
                                            value="Bom"
                                            {...register("status", { required: "Selecione um status" })}
                                            className="mx-2"
                                            id="status-bom"
                                        />
                                        <label htmlFor="status-bom">Bom</label>
                                        <input
                                            type="radio"
                                            value="Excelente"
                                            {...register("status", { required: "Selecione um status" })}
                                            className="mx-2"
                                            id="status-excelente"
                                        />
                                        <label htmlFor="status-excelente">Excelente</label>
                                    </div>

                                    <input
                                        type="text"
                                        {...register("email", {
                                            required: "E-mail é obrigatório",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "E-mail inválido",
                                            },
                                        })}
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                        placeholder="E-mail"
                                    />

                                    <input
                                        type="text"
                                        {...register("nome", { required: "Nome do corretor é obrigatório" })}
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                        placeholder="Nome do Corretor"
                                    />

                                    <input
                                        type="submit"
                                        value="Enviar"
                                        className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase md:col-span-2"
                                    />
                                </div>

                                <p className="text-center text-sm">
                                    Ao enviar concordo com os termos de uso e política de
                                    privacidade, para contatar os próximos anunciantes e afirmo
                                    ter mais de 18 anos
                                </p>

                                {messageToShow && (
                                    <div
                                        className={`w-full my-2 p-3 uppercase text-center font-bold rounded ${responseType === "success"
                                                ? "bg-green-600 text-white"
                                                : responseType === "warning"
                                                    ? "bg-yellow-500 text-white"
                                                    : "bg-red-600 text-white"
                                            }`}
                                    >
                                        {messageToShow}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Avaliar;

    
    
    */
}
