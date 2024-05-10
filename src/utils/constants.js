import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaDragon,
  FaAdjust,
  FaLinux,
  FaNetworkWired,
  TbLetterN,

} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbLetterZ,
  TbPig,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence, GiGoat, } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "Sobre mi", path: "/about" },
  { text: "Habilidades", path: "/skills" },
  { text: "Proyectos", path: "/projects" },
  { text: "Experiencia", path: "/experience" },
  //{ text: "Blogs", path: "/blogs" },
  { text: "Contacto", path: "/contact" },
  { text: "Resumen", path: "/resume" },
];

export const interestsData = [
  {
    interest: "Ingeniería de Software",
    icon: BsCodeSlash,
  },
  {
    interest: "Pentesting",
    icon: FaHashnode,
  },
  {
    interest: "Internet de las Cosas",
    icon: FcElectronics,
  },
  {
    interest: "Auditorías de Seguridad",
    icon: GiArchiveResearch,
  },
  {
    interest: "Gestión de Incidentes",
    icon: BsFileBarGraph,
  },
  {
    interest: "Desarrollo de Software",
    icon: AiFillCode,
  },
  {
    interest: "Análisis de Malware",
    icon: GiArtificialIntelligence,
  },
  {
    interest: "Seguridad Física y de Acceso",
    icon:BsCodeSlash ,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "Kali Linux",
    icon: FaDragon,
  },
  {
    name: "Security Onion",
    icon: FaAdjust,
  },
  {
    name: "Linux",
    icon: FaLinux,
  },
  {
    name: "Zabbix",
    icon: TbLetterZ,
  },
  {
    name: "Nagios",
    icon: TbLetterN,
  },
  {
    name: "SNORT",
    icon: TbPig,
  },
  {
    name: "WebGoat",
    icon: GiGoat,
  },
  {
    name: "SNMP",
    icon: FaNetworkWired,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Markdown",
    icon: BsMarkdown,
  },
];

export const workData = [
  {
    company: "Universidad de León",
    designation: "Estudiante",
    duration: "Septiembre 2021 - Actualidad",
    companyImg: "Logo-ULE.jpg",
    description: (
      <>
        <ul>
          <li>
          De momento, estoy estudiando en la universidad, aunque investigo acerca
          de muchas cosas cada día y, hasta he desarrollado algún que otro proyecto.
          </li>
          <li>
            ¡Aún así, espero poder desarrollar mucho más mi potencial y poder trabajar
            codo con codo con los mejores!.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Maker Club León",
    designation: "Vicepresidente",
    duration: "Diciembre 2021 - Actualidad",
    companyImg: "Logo-maker.png",
    description: (
      <>
        <ul>
          <li>
          Aquí me podrás encontrar, cacharreando y aprendiendo cosas nuevas.<br />
          o probando y, ¡rezando por que no explote!
          </li>
          <li>
            Aunque tenemos nuestros más y nuestros menos en el club, son todos gente genial<br />
            les tengo mucho aprecio y, se que juntos podemos desarrollar proyectos brutales<br /><br />
            Dani presi, i lof u 😭.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "SOCIAL",
    title: "Maker Club León",
    image: "Logo-maker",
    link: "https://www.instagram.com/makerclubleon/",
    source: "https://www.instagram.com/makerclubleon/",
  },
  {
    type: "PROYECTO",
    title: "Galactic Starcade - Maker",
    image: "Arcade",
    link: null,
    source: null,
  },
  /*{
    type: "WEB-APP",
    title: "Weather App",
    image: "weather-app",
    link: "https://vaheedsk36.github.io/weather-app/",
    source: "https://github.com/vaheedsk36/weather-app",
  },
  {
    type: "WEB-APP",
    title: "Landing Page",
    image: "landing-page",
    link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
    source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
  },
  {
    type: "WEB-APP",
    title: "Guess Game",
    image: "guess-game",
    link: "https://vaheedsk36.github.io/guess-my-number",
    source: "https://github.com/vaheedsk36/guess-my-number",
  },
  {
    type: "WEB-APP",
    title: "Notes App",
    image: "react-notes-app",
    link: "https://vaheedsk36.github.io/react-notes-app/",
    source: "https://github.com/vaheedsk36/react-notes-app",
  },
  {
    type: "WEB-APP",
    title: "Dice Multiplayer",
    image: "dice-multiplayer",
    link: "https://vaheedsk36.github.io/dice-multiplayer",
    source: "https://github.com/vaheedsk36/dice-multiplayer",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "https://vaheedsk36.github.io/Snake-game",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Delta Assistant",
    image: "delta-assistant",
    link: "",
    source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://vaheedsk36.github.io/text-utility-app/",
    source: "https://github.com/vaheedsk36/text-utility-app",
  },*/
];


export const socialMediaLinks = [
  {
    href: "https://github.com/escorpivo",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/victorrr_18/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/victoramigo",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
