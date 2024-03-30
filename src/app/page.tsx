import Banner from './componentes/Banner/banner';
import Contatos from './componentes/Contatos/contatos';
import Noticias from './componentes/Noticias/noticias';
import Novidades from './componentes/Novidades/novidades';
import Produtos from './componentes/Produtos/produtos';
import ClickableDivs from './componentes/Teste/teste';



export default function Home() {
  return (
    <>
    <main>
      <ClickableDivs></ClickableDivs>


    

    
    <Banner/>
    <Novidades/>
    <Produtos/>
    <Noticias/>
    <Contatos/>
    </main>
    </>
  )}