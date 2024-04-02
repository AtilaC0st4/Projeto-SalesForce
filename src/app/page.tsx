import Banner from './componentes/Banner/banner';
import Contatos from './componentes/Contatos/contatos';
import Menu_acessibilidade from './componentes/Menu Acessibilidade/menu_acessibilidade';
import Noticias from './componentes/Noticias/noticias';
import Novidades from './componentes/Novidades/novidades';
import Produtos from './componentes/Produtos/produtos';




 const Home: React.FC = () => { 

  const texts = ["Primeiro texto", "Segundo texto", "Terceiro texto"];
  return (
    <>
    <main>
    <Menu_acessibilidade/>
    <Banner/>
    <Novidades/>
    <Produtos/>
    <Noticias/>
    <Contatos/>
    </main>
    </>
  )}
  export default Home;