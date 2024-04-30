import type { Metadata } from "next";
import './../../public/css/estilo.css';
import { Inter } from "next/font/google";
import Header1 from "./componentes/Header/header";
import Footer from "./componentes/Footer/footer";
import Sidebar from "./componentes/Header/headerResponsivo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SalesForce",
  description: "",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">

      <body className={inter.className}>
        <Header1 />
        <Sidebar/>
        {children}
        <Footer />
      </body>

    </html>
  );
}
