
export default function Contato() {
  return (
   <main>
    <section className="py-8" id="#contato">
        <div className="container mx-auto px-4">
            <h3 className="my-4 font-medium text-2xl font-reading text-blue-500">Entre em contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                    <form action="" method="post" id="form-contact">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="nome" id="nome" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" placeholder="NOME">
                            <input type="text" name="email" id="email" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500" placeholder="E-MAIL">
                            <input type="text" name="phone" id="phone" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500" placeholder="TELEFONE">
                            <select name="motivo" id="motivo" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2">
                                <option selected="selected" disabled="">MOTIVO DO CONTATO</option>
                                <option value="Atendimento ao consumidor - SAC">Atendimento ao consumidor - SAC</option>
                                    <option value="Imprensa">Imprensa</option>
                                    <option value="Reclamações">Reclamações</option>
                                    <option value="Sugestões">Sugestões</option>
                                    <option value="Elogios">Elogios</option>
                                    <option value="Reportar Erro ou Problema">Reportar Erro ou Problema</option>
                                    <option value="Outro Motivo">Outro Motivo</option>
                            </select>
                            <textarea name="mensagem" id="mensagem" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" cols="30" rows="5" placeholder="MENSAGEM"></textarea>
                            <input type="hidden" name="action" value="contact">
                            <input type="submit" className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase">
                            <br>
                        </div>
                        <div id="response-contact" className="w-full"></div>
                    </form>
                </div>
                <div>
                    <div className="text-xl text-black rounded-xl font-brandon">
                        <div className="border-red-700 border-blue-500 border-2 rounded-xl text-lg p-6 my-3 md:mt-0">
                            <div className="text-xl pb-2">
                                <h3 className="font-bold uppercase">Informações de contato</h3>
                                <p>Entre em contato conosco também pelas informações abaixo:</p>
                            </div>
                            <a href="tel:+552126340075" target="_blank">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">Telefone:</div>
                                        <div>(21) 2634-0075</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://wa.me/5521991257878?text=Ol%C3%A1,%20vim%20pelo%20site!" target="_blank">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">WhatsApp:</div>
                                        <div>(21) 99125-7878</div>
                                    </div>
                                </div>
                            </a>
                            <a href="mailto:contato@persevere.com.br" target="_blank">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">E-mail:</div>
                                        <div>contato@persevere.com.br</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://goo.gl/maps/rRD1rMnrD6xJRQmA8" target="_blank">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="fa-regular fa-map"></i>
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">Endereço:</div>
                                        <div>Rua Prof. Cardoso de Menezes, QD 115 - LT 6 - Loja 1, Bairro: Jardim Atlântico - Itaipuaçu - Maricá/RJ - CEP: 24935-425</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/persevereimoveis" target="_blank">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="fab fa-facebook-square"></i>
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold uppercase">Facebook:</div>
                                        <div>/persevereimoveis</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/persevere.imoveis/" target="_blank">
                                <div className="flex justify-start items-center pt-4 pb-6 rounded-lg hover:bg-gray-100">
                                    <div className="px-6 text-4xl text-blue-500">
                                        <i className="fab fa-instagram"></i>
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
        </div>
    </section>
</main>
  );
}
