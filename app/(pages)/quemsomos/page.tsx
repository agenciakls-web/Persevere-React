import Image from "next/image";

export default function QuemSomos() {
  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="block lg:flex lg:flex-row-reverse items-center">
            {/* Imagem da Loja */}
            <div className="lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
              <div className="relative w-full h-75 md:h-112.5">
                <Image
                  alt="Nossa Loja"
                  src="/img/loja.jpeg" // Certifique-se de que a imagem esteja na pasta public/img/
                  fill
                  className="object-cover rounded-lg shadow-md"
                  priority
                />
              </div>
            </div>

            {/* Texto Institucional */}
            <div className="lg:w-1/2 px-2">
              <div className="text-base text-justify md:text-left md:text-xl text-zinc-700 font-reading leading-relaxed">
                <p className="py-2">
                  Somos uma empresa perseverante e inovadora, pertencente a um
                  grupo empresarial que atua e investe no mercado imobiliário há
                  20 anos.
                </p>
                <p className="py-2">
                  Investimos no aprimoramento de nossos colaboradores e
                  enxergamos os desafios como grandes oportunidades de
                  aprendizado e crescimento.
                </p>
                <p className="py-2">
                  Temos como marca registrada nosso forte DNA Empreendedor,
                  voltado para proporcionar a realização dos sonhos dos nossos
                  clientes e parceiros estratégicos, operando competentemente na
                  Compra, Venda, Locação e Construção de Imóveis (Residenciais e
                  Comerciais). Dispondo de uma variada e qualificada Carteira de
                  Imóveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Missão */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h3 className="text-2xl text-blue-500 uppercase font-brandon font-bold">
            Missão
          </h3>
          <div className="text-lg md:text-xl text-zinc-700 mt-4 leading-relaxed">
            <p className="py-2">
              Nossa missão é satisfazer as necessidades de nossos estimados
              clientes, preservando os fatores éticos e morais que são as
              premissas básicas dos nossos negócios, destacados pela excelência
              no atendimento aos nossos clientes, com respeito, seriedade,
              profissionalismo e credibilidade em nossas operações, aplicando a
              melhoria contínua em nossos processos internos. Tendo como nossa
              meta principal sermos uma empresa diferenciada e inovadora, bem
              como, uma grande referência no mercado imobiliário.
            </p>
            <p className="py-4 text-blue-600">
              <strong>Tenha Fé e PERSEVERE!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Seção Redes Sociais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-center uppercase text-xl md:text-3xl mb-8 font-bold text-blue-500">
            SIGA-NOS NAS REDES SOCIAIS
          </h3>
          <div className="py-4 flex gap-8 md:gap-16 justify-center items-center">
            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 md:h-14 fill-blue-500"
                viewBox="0 0 23.811 23.81"
              >
                <path
                  d="M62.252,29.548V48.242a.405.405,0,0,0-.037.084,2.888,2.888,0,0,1-2.99,2.473q-2.546,0-5.091,0c-.6,0-.857-.258-.857-.866V41.727c0-.6.257-.857.866-.858.7,0,1.395,0,2.093,0,.082,0,.165-.007.256-.011v-1.99h-.265c-.721,0-1.442,0-2.162,0a.71.71,0,0,1-.787-.793q0-1.325,0-2.65a.81.81,0,0,1,.891-.895c.69,0,1.379,0,2.069,0h.247v-2c-.787,0-1.554,0-2.32,0a2.794,2.794,0,0,0-2.888,2.889c0,.868,0,1.736,0,2.6,0,.59-.256.844-.851.845-.7,0-1.41,0-2.115,0-.081,0-.162.009-.243.014v1.989h.269c.7,0,1.41,0,2.115,0a.725.725,0,0,1,.826.828q0,4.138,0,8.276a.724.724,0,0,1-.827.826q-4.51,0-9.02,0a3.251,3.251,0,0,1-.714-.073A2.887,2.887,0,0,1,38.444,47.8q0-7.893,0-15.785c0-.721-.008-1.442,0-2.162a2.892,2.892,0,0,1,1.976-2.71c.189-.064.386-.1.579-.153H59.7a.562.562,0,0,0,.106.04,2.766,2.766,0,0,1,2.066,1.439A7.059,7.059,0,0,1,62.252,29.548ZM54.7,42.279V49.4h.241q2.138,0,4.278,0a1.518,1.518,0,0,0,1.634-1.643q0-8.858,0-17.715a1.517,1.517,0,0,0-1.634-1.643q-8.869,0-17.739,0a2.024,2.024,0,0,0-.528.064,1.5,1.5,0,0,0-1.1,1.583q0,8.846,0,17.692A1.523,1.523,0,0,0,41.509,49.4h8.347V42.278c-.808,0-1.6,0-2.387,0a.734.734,0,0,1-.833-.828q0-1.581,0-3.162a.733.733,0,0,1,.831-.829c.713,0,1.426,0,2.139,0h.268c0-.672-.009-1.314,0-1.955a5.663,5.663,0,0,1,.084-1.016,4.159,4.159,0,0,1,4.044-3.359c1.03-.019,2.061-.006,3.092,0a.722.722,0,0,1,.818.813q0,1.592,0,3.185a.715.715,0,0,1-.8.806c-.721,0-1.442,0-2.162,0h-.262v1.529h.259c.728,0,1.457,0,2.185,0a.713.713,0,0,1,.778.764q.01,1.65,0,3.3a.708.708,0,0,1-.742.752c-.247.009-.5,0-.744,0C55.857,42.28,55.285,42.279,54.7,42.279Z"
                  transform="translate(-38.441 -26.99)"
                ></path>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 md:h-14 fill-blue-500"
                viewBox="0 0 23.763 23.766"
              >
                <path
                  d="M62.57,32.477v12.81a12.931,12.931,0,0,1-.288,1.33,5.928,5.928,0,0,1-5.69,4.143q-5.9.017-11.81,0a5.724,5.724,0,0,1-3.453-1.1,5.888,5.888,0,0,1-2.521-5.012q0-5.743,0-11.485a6.7,6.7,0,0,1,.089-1.177,5.776,5.776,0,0,1,3.707-4.566A11.95,11.95,0,0,1,44.284,27h12.81c.167.03.333.057.5.088a5.81,5.81,0,0,1,4.549,3.693A11.98,11.98,0,0,1,62.57,32.477Zm-1.994,6.405h.009c0-1.934,0-3.867,0-5.8a3.906,3.906,0,0,0-.358-1.778,3.859,3.859,0,0,0-3.663-2.314c-3.921-.014-7.842-.006-11.764,0a5.044,5.044,0,0,0-.692.054,3.9,3.9,0,0,0-3.3,3.7c-.026,4.045-.011,8.09-.013,12.135a3.515,3.515,0,0,0,.35,1.571,3.891,3.891,0,0,0,3.726,2.328q5.812.008,11.624,0a5.744,5.744,0,0,0,.785-.056,3.919,3.919,0,0,0,3.29-3.667C60.6,43,60.576,40.939,60.576,38.882Z"
                  transform="translate(-38.807 -27)"
                ></path>
                <path
                  d="M136.666,118.942a5.94,5.94,0,1,1-5.9-5.969A5.954,5.954,0,0,1,136.666,118.942Zm-5.936-3.984a3.955,3.955,0,1,0,3.951,3.954A3.949,3.949,0,0,0,130.73,114.958Z"
                  transform="translate(-118.844 -107.032)"
                ></path>
                <path
                  d="M283.979,87.279a1.481,1.481,0,0,1-.022-2.962,1.481,1.481,0,1,1,.022,2.962Z"
                  transform="translate(-265.65 -80.356)"
                ></path>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 md:h-14 fill-blue-500"
                viewBox="0 0 32.831 23"
              >
                <path
                  d="M65.667,91.6c-.061.278-.117.558-.183.835a6.387,6.387,0,0,1-6.105,4.937c-3.578.039-7.157.013-10.735.015-3.076,0-6.153.008-9.229,0a6.419,6.419,0,0,1-6.336-4.769,6.673,6.673,0,0,1-.225-1.674q-.03-5.047-.007-10.094a6.406,6.406,0,0,1,6.313-6.429c4.016-.044,8.033-.013,12.049-.015,2.628,0,5.255-.008,7.884,0a6.437,6.437,0,0,1,6.346,4.762c.092.336.154.681.23,1.021Q65.667,85.893,65.667,91.6ZM49.24,95.461q4.871,0,9.741,0a5.461,5.461,0,0,0,.894-.048,4.524,4.524,0,0,0,3.868-4.593q0-4.9,0-9.806a4.523,4.523,0,0,0-4.652-4.687c-1.25-.006-2.5,0-3.749,0q-7.948,0-15.894,0a4.519,4.519,0,0,0-4.682,4.689q0,4.9,0,9.806a4.993,4.993,0,0,0,.1,1.048,4.5,4.5,0,0,0,4.53,3.59C42.681,95.467,45.961,95.461,49.24,95.461Z"
                  transform="translate(-32.837 -74.392)"
                ></path>
                <path
                  d="M165.973,137.283c0-1.687,0-3.375,0-5.062a1.055,1.055,0,0,1,.5-1.033,1.034,1.034,0,0,1,1.139.119q4.074,2.571,8.156,5.127a1.061,1.061,0,0,1,.6.881,1.032,1.032,0,0,1-.594.949q-2.68,1.63-5.352,3.272c-.946.579-1.9,1.155-2.838,1.74a1.02,1.02,0,0,1-1.113.1,1.031,1.031,0,0,1-.5-1C165.975,140.678,165.973,138.981,165.973,137.283Zm7.62.059-5.681-3.571v7.048Z"
                  transform="translate(-153.708 -125.844)"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
