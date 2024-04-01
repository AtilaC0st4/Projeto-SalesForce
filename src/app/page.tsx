import Banner from './componentes/Banner/banner';
import Contatos from './componentes/Contatos/contatos';
import Noticias from './componentes/Noticias/noticias';
import Novidades from './componentes/Novidades/novidades';
import Produtos from './componentes/Produtos/produtos';
import ClickableDivs from './componentes/Menu Acessibilidade/menu_acessibilidade';



 const Home: React.FC = () => { 

  const texts = ["Primeiro texto", "Segundo texto", "Terceiro texto"];
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
  export default Home;