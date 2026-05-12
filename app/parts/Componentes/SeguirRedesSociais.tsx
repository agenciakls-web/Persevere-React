import Link from "next/link";
import { ContentLinks } from "@/app/parts/dados/contentLinks";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SeguirRedes() {
  return (
    <section className="bg-[url('/img/siga-nos.png')] md:py-10 lg:py-16 z-10 relative bg-redes bg-cover ">
      <div className="z-20 relative container mx-auto px-4 p-4 flex flex-col">
        <h3 className=" text-center text-white text-base md:text-2xl lg:text-4xl font-bold uppercase mb-4 p-4">
          Siga-nos nas Redes Sociais
        </h3>
        <div className="flex justify-center items-center gap-6 md:gap-8">
          <Link
            href={ContentLinks.facebook}
            target="_blank"
            className="text-white hover:text-blue-900 transition-all"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="h-auto text-2xl md:text-4xl lg:text-5xl mx-2"
            />
          </Link>
          <Link
            href={ContentLinks.instagram}
            target="_blank"
            className="text-white hover:text-blue-900 transition-all"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-auto text-2xl md:text-4xl lg:text-5xl mx-2"
            />
          </Link>
          <Link
            href={ContentLinks.youtube}
            target="_blank"
            className="text-white hover:text-blue-900 transition-all"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="h-auto text-2xl md:text-4xl lg:text-5xl mx-2"
            />
          </Link>
          <Link
            href={ContentLinks.linkedin}
            target="_blank"
            className="text-white hover:text-blue-900 transition-all"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-auto text-2xl md:text-4xl lg:text-5xl mx-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
