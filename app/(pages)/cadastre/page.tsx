
export default function Cadastre() {  

  return (
    <main>
    <section className="py-3 md:py-8">
        <div className="container mx-auto px-4 max-w-xl">
            <h3 className="my-4 py-4 text-center font-medium text-2xl font-reading text-blue-500">Envie sua proposta</h3>
            <div className="grid grid-cols-3 justify-center">
                <div className="step-single">
                    <div className="relative mb-2">
                        <div className="step-icon transition delay-300 w-10 h-10 mx-auto rounded-full text-lg flex items-center bg-blue-500 text-white">
                            <span className="text-center w-full">
                                <i className="fa-regular fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block text-xs text-center md:text-sm uppercase text-gray-300">Imóvel</div>
                </div>
                <div className="step-single">
                    <div className="relative mb-2">
                        <div className="absolute flex align-center items-center align-middle content-center">
                            <div className="w-full bg-gray-100 rounded items-center align-middle align-center flex-1">
                                <div className="step-progress transition-all duration-300 w-0 bg-blue-500 py-1 rounded"></div>
                            </div>
                        </div>
                        <div className="step-icon transition delay-300 w-10 h-10 mx-auto rounded-full text-lg flex items-center bg-white border-2 border-gray-100 text-gray-600">
                            <span className="text-center w-full">
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block text-xs text-center md:text-sm uppercase text-gray-300">Cliente</div>
                </div>
                <div className="step-single">
                    <div className="relative mb-2">
                        <div className="absolute flex align-center items-center align-middle content-center">
                            <div className="w-full bg-gray-100 rounded items-center align-middle align-center flex-1">
                                <div className="step-progress transition-all duration-300 w-0 bg-blue-500 py-1 rounded"></div>
                            </div>
                        </div>
                        <div className="step-icon transition delay-300 w-10 h-10 mx-auto rounded-full text-lg flex items-center bg-white border-2 border-gray-100 text-gray-600">
                            <span className="text-center w-full">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block text-xs text-center md:text-sm uppercase text-gray-300">Condições</div>
                </div>
            </div>
        </div>
    </section>
    <section className="py-3 md:py-8">
        <div className="container mx-auto px-4 max-w-xl">
            <div className="w-12/12 form-contact wrapper">
                <form action="/" method="post" id="form-proposal" className="form-wizard js-form-wizard" noValidate encType="multipart/form-data">
                    <div className="step js-step is-active">
                        <h2 className="py-3 font-medium text-xl font-reading text-blue-500">Informações Pessoais</h2>
                        <div className="grid grid-cols-1 md:gap-4">
                            <div className="lg:col-span-2">
                                <span className="px-2">
                                    <input type="radio" id="comprar" name="proposito" value="comprar" /> <label htmlFor="comprar">Comprar</label>
                                </span>
                                <span className="px-2">
                                    <input type="radio" id="alugar" name="proposito" value="alugar" /> <label htmlFor="alugar">Alugar</label>
                                </span>
                            </div>
                            <div className="lg:col-span-2">
                                <input type="text" name="codigo" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="Código do Imóvel" />
                            </div>
                        </div>
                    </div>
                    <div className="step js-step">
                        <h2 className="py-3 font-medium text-xl font-reading text-blue-500">Clientes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                            <div className="lg:col-span-2">
                                <input type="text" name="nome" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="Nome Completo" />
                            </div>
                            <div className="lg:col-span-2">
                                <input type="text" name="email" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="E-mail" />
                            </div>
                            <div>
                                <input type="tel" name="telefone" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="Telefone" id="field-telefone" />
                            </div>
                            <div>
                                <input type="text" name="celular" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="Celular" id="field-celular" />
                            </div>
                            <div>
                                <input type="text" name="cpf" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="CPF" id="field-cpf" />
                            </div>
                            <div>
                                <input type="text" name="rg" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="RG" id="field-rg" />
                            </div>
                            <div>
                                <input type="text" name="nascimento" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="Data de Nascimento" id="field-nascimento" />
                            </div>
                            <div>
                                <input type="text" name="Estado Civil" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="Estado Civil" />
                            </div>
                        </div>
                    </div>
                    <div className="step js-step">
                        <h2 className="py-3 font-medium text-xl font-reading text-blue-500">Escolaridade</h2>
                        <div className="grid grid-cols-1 md:gap-4">
                            <div>
                                <textarea name="message" id="message" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2"placeholder="MENSAGEM"></textarea>
                            </div>
                            <div>
                                <input type="text" name="valido" className="w-full my-2 py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 placeholder:uppercase js-form-control" required placeholder="Proposta válida até" />
                            </div>
                        </div>
                    </div>
                    <div className="input-group text-right">
                        <button type="button" className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase md:inline-block btn-prev js-btn-prev">Anterior</button>
                        <button type="button" className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase md:inline-block js-btn-next" data-step-text="Próximo" data-final-step-text="Enviar">Próximo</button>
                    </div>
                    <div className="progress-bar js-progress-bar"></div>
                    <div className="flex pt-3">
                        <div className="w-full">
                            <div id="response-proposal"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</main>
  );
}