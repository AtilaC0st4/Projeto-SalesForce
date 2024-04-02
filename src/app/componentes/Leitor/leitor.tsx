'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TextToSpeechProps {
 text: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
 const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

 const speakText = () => {
    const newUtterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(newUtterance);
    setUtterance(newUtterance);
    console.log("hello word!")
 };

 const pauseText = () => {
    if (utterance) {
      window.speechSynthesis.pause();
    }

 };

 const resumeText = () => {
    if (utterance) {
      window.speechSynthesis.resume();
    }
 };

 const stopText = () => {
    if (utterance) {
      window.speechSynthesis.cancel();
      setUtterance(null); // Reset the utterance state
    }
 };

 return (
    <div className='container_leitor'>
      <div className='icons' onClick={speakText}> <Image src="/imagens/leitor.png" alt="icone de leitor de página" width={35} height={35}></Image></div>
      <div className='icons' onClick={pauseText}><Image src="/imagens/pause.png" alt="icone de pause" width={35} height={35}></Image></div>
      <div className='icons' onClick={resumeText}><Image src="/imagens/play.png" alt="icone de play" width={35} height={35}></Image></div>
      <div className='icons' onClick={stopText}><Image src="/imagens/stop.png" alt="icone de stop" width={35} height={35}></Image></div>
    </div>
 );
};

export default TextToSpeech;
