export function Agende () {
    return (
        <section className="bg-gray-100 py-14 font-brandon">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
            <div className="lg:w-7/12 text-center lg:text-left ">
                <h3 className="text-blue-500 text-2xl md:text-3xl uppercase py-2 font-medium">Agende uma visita sem compromisso!</h3>
                <p className="text-orange text-xl md:text-2xl">Nós temos os melhores imóveis disponíveis para você!</p>
            </div>
            <div className="lg:w-5/12">
                <a href="https://wa.me/5521991257878?text=Ol%C3%A1,%20vim%20pelo%20site!" className="conversion" target="_blank">
                    <button type="button" className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-full my-4 py-2 px-16 block text-base md:text-lg mx-auto uppercase">Solicite um orçamento</button>
                </a>
            </div>
        </div>
    </div>
</section>
    );
}