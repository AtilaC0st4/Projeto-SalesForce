'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface LeitorDePaginaProps {
 text: string;
}

const LeitorDePagina: React.FC<LeitorDePaginaProps> = ({ text }) => {
 const [texto, setTexto] = useState<SpeechSynthesisUtterance | null>(null);

 const IniciarLeitor = () => {
    const newTexto = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(newTexto);
    setTexto(newTexto);
    console.log("teste")
 };

 const pausaLeitor = () => {
    if (texto) {
      window.speechSynthesis.pause();
    }

 };

 const resumeLeitor = () => {
    if (texto) {
      window.speechSynthesis.resume();
    }
 };

 const stopLeitor = () => {
    if (texto) {
      window.speechSynthesis.cancel();
      setTexto(null); 
    }
 };

 return (
    <div className='container_leitor'>
      <div className='icons' onClick={IniciarLeitor}> <Image src="/imagens/leitor.png" alt="icone de leitor de página" width={35} height={35}></Image></div>
      <div className='icons' onClick={pausaLeitor}><Image src="/imagens/pause.png" alt="icone de pause" width={35} height={35}></Image></div>
      <div className='icons' onClick={resumeLeitor}><Image src="/imagens/play.png" alt="icone de play" width={35} height={35}></Image></div>
      <div className='icons' onClick={stopLeitor}><Image src="/imagens/stop.png" alt="icone de stop" width={35} height={35}></Image></div>
    </div>
 );
};

export default LeitorDePagina;
