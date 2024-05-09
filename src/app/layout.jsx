import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Víctor Amigo García | Estudiante de Ingenería Informática",
  description:
  "Bienvenido al Portfolio de Víctor. Aquí podrás conocerme un poco más y, si te interesa, hablar conmigo!",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "chakra",
    "hashnode",
    "best portfolio",
    "best portfolio website"
  ],
    icons: [{
    rel: 'icon',
    url: Favicon.src,
  }]
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
