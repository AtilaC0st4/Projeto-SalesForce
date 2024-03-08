import type { Metadata } from "next";
import Footer from "./Footer/page";
import Header1 from "./Header/page";

import './css/estilo.css'

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
        {children}
        <Footer />
        </body>
      
    </html>
  );
}
