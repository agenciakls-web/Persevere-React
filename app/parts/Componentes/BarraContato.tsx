import { faPhone } from "@fortawesome/free-solid-svg-icons";
import RedesSociais from "./RedesSociais";
import { ContentLinks } from "@/app/parts/dados/contentLinks";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { usePathname } from "next/navigation";

export default function BarraContato() {
  const namePath = usePathname();

  return (
    <>
      <div
        className={
          "h-10 py-2 w-full  " + (namePath == "/" ? " absolute" : "bg-blue-900")
        }
      >
        <div className="container px-4 mx-auto">
          <div className="justify-between flex items-center gap-10">
            <div className="flex items-center justify-center ">
              <RedesSociais
                cor="text-red-400"
                hover=""
                estilo="flex relative text-base "
              />
            </div>
            <div className="font-normal text-xs md:text-sm flex md:gap-10 uppercase text-white">
              <a href={ContentLinks.whatsapp} target="_blank">
                <div className="flex justify-start items-center text-xs md:text-sm hover:text-red-400">
                  <div className="px-2 text-base">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-red-400 w-5 h-5 sm:w-6 sm:h-6 2xl:w-4 2xl:h-4"
                    />
                  </div>
                  <div>
                    <div className="hidden lg:block">
                      {ContentLinks.phoneShow}
                    </div>
                  </div>
                </div>
              </a>
              <a href={ContentLinks.whatsapp} target="_blank">
                <div className="flex justify-start items-center text-xs md:text-sm hover:text-red-400">
                  <div className="px-2 text-base">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className=" text-red-400 w-5 h-5 sm:w-6 sm:h-6 2xl:w-4 2xl:h-4"
                    />
                  </div>
                  <div>
                    <div className="hidden lg:block">
                      {ContentLinks.whatsappShow}
                    </div>
                  </div>
                </div>
              </a>
              <a href={ContentLinks.whatsapp} target="_blank">
                <div className="flex justify-start items-center text-xs md:text-sm hover:text-red-400">
                  <div className="px-2 text-base">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className=" text-red-400  w-5 h-5 sm:w-6 sm:h-6 2xl:w-4 2xl:h-4"
                    />
                  </div>
                  <div>
                    <div className="hidden lg:block">
                      {ContentLinks.emailShow}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
