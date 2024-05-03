"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen == true) {
    var img = '/imagens/close.png'
  } else {
    var img = '/imagens/menu.png'
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <header className='sidebar'>

        <section className='cabecalho_sidebar'>
        <div className="content" id='sidebar_btns'>

          <button className='btnSidebar' onClick={toggle}>
            {/* Imagem ou ícone para abrir o menu */}
            <img src={img} alt="Open Menu" />
          </button>

          <a href="./"><Image src="/imagens/Logo.png" alt="Logo salesforce" width={80} height={60}></Image></a>

          <button><Image src="/imagens/pessoa.png" alt="Icone de fazer login" width={50} height={50}></Image></button>


        </div>

        </section>


        <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

          <ul>
            <li>
              <Link href="#produtos" >Produtos</Link>
            </li>
            <li>
              <Link href="#noticias" >Notícias</Link>
            </li>
          </ul>
        </nav>


      </header>
    </>
  );
};

export default Sidebar;
