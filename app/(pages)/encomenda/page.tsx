"use client";

import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import React, { useState } from "react";

const OrderForm = () => {
    const [description, setDescription] = useState("");
    const [nome, setNome] = useState("");
    const [mobile, setMobile] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [responseType, setResponseType] = useState("danger");
    const [sending, setSending] = useState(false);

    const promotionAlert = (message: string, action = "danger") => {
        if (!message) {
            message =
                "Um ou mais campos possuem um erro. Verifique e tente novamente.";
        }
        setResponseMessage(message);
        setResponseType(action);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        promotionAlert("Enviando...", "warning");

        if (sending) {
            promotionAlert("Aguarde, salvando seu cadastro...", "warning");
            return;
        }

        setSending(true);

        try {
            const params = new URLSearchParams();
            params.append("description", description);
            params.append("nome", nome);
            params.append("mobile", mobile);
            params.append("phone", phone);
            params.append("email", email);
            params.append("action", "orders");

            const response = await fetch("https://persevere.com.br/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Cache-Control": "no-cache",
                    "X-CSRF-TOKEN": (window as any).csrfToken, // se necessário
                },
                body: params,
            });

            const data = await response.json();
            if (data.status === true) {
                promotionAlert(data.content, "success");
                setDescription("");
                setNome("");
                setMobile("");
                setPhone("");
                setEmail("");
            } else {
                promotionAlert(data.content, "danger");
            }
        } catch (error) {
            promotionAlert("Houve algum erro, tente novamente mais tarde!", "danger");
        } finally {
            setSending(false);
        }
    };

    return (
        <main>
            <HeaderTitle title="Encomenda" />
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="w-1/2">
                            <h3 className="my-4 font-medium text-2xl font-reading text-blue-500">
                                Descreva as características do Imóvel que deseja
                            </h3>
                            <form onSubmit={handleSubmit} id="form-orders">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <textarea
                                        name="description"
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                        cols={30}
                                        rows={5}
                                        placeholder="Descreva as características aqui"
                                    ></textarea>

                                    <input
                                        type="text"
                                        name="nome"
                                        id="nome"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                        placeholder="Nome"
                                    />

                                    <input
                                        type="text"
                                        name="mobile"
                                        id="mobile"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500"
                                        placeholder="Celular"
                                    />

                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500"
                                        placeholder="Telefone"
                                    />

                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                        placeholder="E-mail"
                                    />

                                    <input
                                        type="submit"
                                        value="Enviar"
                                        className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase md:col-span-2"
                                    />
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
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OrderForm;
