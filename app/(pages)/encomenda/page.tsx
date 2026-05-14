
export default function EncomendeImovel() {
  
  return (
    <main>
    <section className="py-8">
        <div className="container mx-auto px-4">
            <div className="flex justify-center">
                <div className="w-1/2">
                    <h3 className="my-4 font-medium text-2xl font-reading text-blue-500">Descreva as características do Imóvel que deseja</h3>
                    <form action="" method="post" id="form-orders">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <textarea name="description" id="description" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" placeholder="Descreva as características aqui"></textarea>
                            <input type="text" name="nome" id="nome" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" placeholder="Nome" />
                            <input type="text" name="mobile" id="mobile" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500" placeholder="Celular" />
                            <input type="text" name="phone" id="phone" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500" placeholder="Telefone" />
                            <input type="text" name="email" id="email" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" placeholder="E-mail" />

                            <input type="hidden" name="action" value="orders" />
                            <input type="submit" className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase" />
                            <br />
                        </div>
                        <div id="response-orders" className="w-full"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>
  );
}