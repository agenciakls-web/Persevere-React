"use client";

export default function TrabalheConosco() {
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div>
                            <h3 className="my-4 font-medium text-2xl font-reading text-blue-500">
                                Cadastrar Currículo
                            </h3>
                            <form action="" method="post" id="form-works">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="nome"
                                        id="nome"
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                        placeholder="Nome"
                                    ></input>
                                    <input
                                        type="text"
                                        name="mobile"
                                        id="mobile"
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500"
                                        placeholder="Celular"
                                    ></input>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500"
                                        placeholder="Telefone"
                                    ></input>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                        placeholder="E-mail"
                                    ></input>
                                    <input
                                        type="text"
                                        name="linkedin"
                                        id="url"
                                        className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"
                                        placeholder="URL do Linkedin"
                                    ></input>
                                    <input
                                        type="file"
                                        name="url"
                                        className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase  md:col-span-2 js-form-control"
                                        id="curriculo-works"
                                    ></input>
                                    <input
                                        type="submit"
                                        className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase  md:col-span-2"
                                    ></input>
                                </div>
                                <div id="response-works" className="w-full"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
