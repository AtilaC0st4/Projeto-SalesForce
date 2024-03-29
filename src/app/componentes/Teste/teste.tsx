'use client'; 

import React, { useState } from 'react';

const ClickableDivs: React.FC = () => {
 // Estado para controlar a visibilidade das divs
 const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);

 // Função para alternar a visibilidade das divs
 const toggleDivs = () => {
    setIsFirstDivVisible(!isFirstDivVisible);
 };

 return (
    <div>
      {isFirstDivVisible ? (
        <div onClick={toggleDivs} style={{ cursor: 'pointer' }}>
          Div 1 (Clique para alternar)
        </div>
      ) : (
        <div onClick={toggleDivs} style={{ cursor: 'pointer' }}>
          Div 2 (Clique para alternar)
        </div>
      )}
    </div>
 );
};

export default ClickableDivs;
