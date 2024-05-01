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
        <div className="content" >

          <div className='sidebar_container'>

          <a href="./"><Image src="/imagens/Logo.png" alt="Logo salesforce" width={80} height={60}></Image></a>

          <button className='btnSidebar' onClick={toggle}>
            {/* Imagem ou ícone para abrir o menu */}
            <img src={img} alt="Open Menu" />
          </button>
          </div>
          
        </div>
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
