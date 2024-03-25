import type { Metadata } from "next";
import Footer from "./Footer/footer";
import Header1 from "./Header/header";
import './css/estilo.css';
import Banner from "./Banner/banner";
import Produtos from "./Produtos/produtos";
import Novidades from "./Novidades/novidades";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});

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
        <Banner/>
        <Novidades/>
        <Produtos/>

        {children}
        <Footer />
        </body>
      
    </html>
  );
}
