import type { Metadata } from "next";
import Footer from "./Footer/footer";
import Header1 from "./Header/header";



import './css/estilo.css'
import Banner from "./Banner/banner";
import Produtos from "./Produtos/produtos";

export const metadata: Metadata = {
  title: "Criando Rotas com Next",
  description: "Aula05",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      
      <body>
        <Header1 />
        <Banner/>
        <Produtos/>

        {children}
        <Footer />
        </body>
      
    </html>
  );
}
