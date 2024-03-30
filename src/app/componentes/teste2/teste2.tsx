'use client';

import React, { useState } from 'react';


interface TextToSpeechProps {
 text: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
 const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

 const speakText = () => {
    const newUtterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(newUtterance);
    setUtterance(newUtterance);
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

 return (
    <div>
      <button onClick={speakText}>Iniciar Fala</button>
      <button onClick={pauseText}>Pausar Fala</button>
      <button onClick={resumeText}>Continuar Fala</button>
    </div>
 );
};

export default TextToSpeech;