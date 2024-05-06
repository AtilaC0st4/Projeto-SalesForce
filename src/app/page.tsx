import Banner from './componentes/Banner/banner';
import Contatos from './componentes/Contatos/contatos';
import Menu_acessibilidade from './componentes/Menu Acessibilidade/menu_acessibilidade';
import Noticias from './componentes/Noticias/noticias';
import Novidades from './componentes/Novidades/novidades';
import Produtos from './componentes/Produtos/produtos';
import Header1 from "./componentes/Header/header";
import Footer from "./componentes/Footer/footer";
import Sidebar from "./componentes/Header/headerResponsivo";





 const Home: React.FC = () => { 

  const texts = ["Primeiro texto", "Segundo texto", "Terceiro texto"];
  return (
    <>
    <main>
    <Header1 />
    <Sidebar/>
    <Menu_acessibilidade/>
    <Banner/>
    <Novidades/>
    <Produtos/>
    <Noticias/>
    <Contatos/>
    <Footer/>
    </main>
    </>
  )}
  export default Home;