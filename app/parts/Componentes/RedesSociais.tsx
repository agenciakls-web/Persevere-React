import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ContentRedes from "../dados/contentRedes";

interface PropsRedesSociais {
    cor: string;
    hover: string;
    estilo: string;
}

export default function RedesSociais({ cor, hover, estilo }: PropsRedesSociais) {
    const iconColor = cor;
    const hoverColor = hover;
    const display = estilo;

    return (
        <div className={` ${iconColor} ${display}  space-x-2 sm:space-x-4 justify-end items-end lg:justify-start `}>
            {
                ContentRedes.map((singleLista) => (
                    <div key={singleLista.link}>
                        <Link href={singleLista.link} target="_blank">
                            <FontAwesomeIcon icon={singleLista.icon} className={`w-5 h-5 sm:w-6 sm:h-6 2xl:w-6 2xl:h-6 transition-all ${hoverColor}  `} />
                        </Link>
                    </div >
                ))
            }
        </div>
    )
}