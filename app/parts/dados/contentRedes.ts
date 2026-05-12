import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { ContentLinks } from "@/app/parts/dados/contentLinks";

const ContentRedes = [
  {
    title: ContentLinks.facebookShow,
    icon: faFacebookSquare,
    link: ContentLinks.facebook,
  },
  {
    title: ContentLinks.instagramShow,
    icon: faInstagram,
    link: ContentLinks.instagram,
  },
  {
    title: ContentLinks.linkedinShow,
    icon: faLinkedin,
    link: ContentLinks.linkedin,
  },
];
export default ContentRedes;
