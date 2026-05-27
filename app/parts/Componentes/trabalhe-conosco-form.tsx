{/* 
    "use client";
    
    import HeaderTitle from "@/app/parts/estrutura/headerTitle";
    import React, { useState } from "react";
    
    export default function CurriculoForm() {
        const [nome, setNome] = useState("");
        const [mobile, setMobile] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [linkedin, setLinkedin] = useState("");
        const [file, setFile] = useState<File | null>(null);
    
        const [responseMessage, setResponseMessage] = useState("");
        const [responseType, setResponseType] = useState("danger");
        const [sending, setSending] = useState(false);
    
        // Função de alerta (equivalente ao promotionAlert)
        const promotionAlert = (message: string, action = "danger") => {
            if (!message) {
                message =
                    "Um ou mais campos possuem um erro. Verifique e tente novamente.";
            }
            setResponseMessage(message);
            setResponseType(action);
        };
    
        // Envio do formulário
        const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault();
            promotionAlert("Enviando...", "warning");
    
            if (sending) {
                promotionAlert("Aguarde, salvando seu cadastro...", "warning");
                return;
            }
    
            setSending(true);
    
            try {
                const formData = new FormData();
                formData.append("nome", nome);
                formData.append("mobile", mobile);
                formData.append("phone", phone);
                formData.append("email", email);
                formData.append("linkedin", linkedin);
                if (file) formData.append("url", file);
                formData.append("action", "works");
    
                const params = new URLSearchParams(formData as any);
    
                const response = await fetch("https://persevere.com.br/api/works", {
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
                    // resetar campos
                    setNome("");
                    setMobile("");
                    setPhone("");
                    setEmail("");
                    setLinkedin("");
                    setFile(null);
                } else {
                    promotionAlert(data.content, "danger");
                }
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                promotionAlert("Houve algum erro, tente novamente mais tarde!", "danger");
            } finally {
                setSending(false);
            }
        };
    
        return (
            <main>
                <HeaderTitle title="Trabalhe Conosco" />
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center">
                            <div>
                                <h3 className="my-4 font-medium text-2xl font-reading text-blue-500">
                                    Cadastrar Currículo
                                </h3>
                                <form id="form-works" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                            type="text"
                                            name="linkedin"
                                            id="url"
                                            value={linkedin}
                                            onChange={(e) => setLinkedin(e.target.value)}
                                            className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                            placeholder="URL do Linkedin"
                                        />
                                        <input
                                            type="file"
                                            name="url"
                                            id="curriculo-works"
                                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                                            className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase md:col-span-2 js-form-control"
                                        />
                                        <input
                                            type="submit"
                                            value="Enviar"
                                            className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase md:col-span-2"
                                        />
                                    </div>
    
                                    {/* Mensagem de resposta */}
                                    /*{responseMessage && (
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
    }

    */