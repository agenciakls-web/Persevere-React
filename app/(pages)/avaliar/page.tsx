
export default function Avaliar() {

    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">

                    <div className="flex justify-center">
                        <div className="w-1/2">
                            <h3 className="my-4 font-medium text-2xl font-reading text-blue-500">Avaliar Corretor</h3>
                            <form action="" method="post" id="form-evaluates">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input type="radio" name="status" value="Regular" className="mx-2" id="status-regular" /><label>Regular</label>
                                        <input type="radio" name="status" value="Bom" className="mx-2" id="status-bom" /><label>Bom</label>
                                        <input type="radio" name="status" value="Excelente" className="mx-2" id="status-excelente" /><label>Excelente</label>
                                    </div>
                                    <input type="text" name="email" id="email" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" placeholder="E-mail" />
                                    <input type="text" name="nome" id="nome" className="w-full py-3 px-4 rounded-lg text-lg font-medium border text-gray-500 md:col-span-2" placeholder="Nome do Corretor" />
                                    <input type="submit" className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-full my-4 py-2 px-10 block text-base uppercase  md:col-span-2" />
                                </div>
                                <p className="text-center text-sm">Ao enviar concordo com os termos de uso e política de privacidade, para contatar os próximos anunciantes e afirmo ter mais de 18 anos</p>
                                <div id="response-evaluates" className="w-full"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}