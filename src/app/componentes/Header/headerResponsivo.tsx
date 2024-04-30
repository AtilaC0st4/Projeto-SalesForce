"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

if (isOpen == true){
var img = '/imagens/contraste.png'
}else {
 var  img = '/imagens/Logo.png'
}

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <header className='sidebar'>
        

      <a href="./"><Image src={img} alt="Logo salesforce" width={80} height={60}></Image></a>

        <button onClick={toggle}>
          {/* Imagem ou ícone para abrir o menu */}
          <img src="/path/to/your/image.png" alt="Open Menu" />
        </button>

        <div
          className={`sidebar ${isOpen ? 'open' : 'closed'}`}
          style={{
            opacity: `${isOpen ? "1" : "0"}`,
            top: `${isOpen ? "0" : "-100%"}`,
          }}
        >
          <button onClick={toggle}>
            {/* Ícone para fechar o menu */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
            </svg>
          </button>



          <ul>
            <li>
              <Link href="#produtos" >Produtos</Link>
            </li>
            <li>
              <Link href="#noticias" >Notícias</Link>
            </li>
          </ul>
        </div>

      </header>
    </>
  );
};

export default Sidebar;
