'use client';

import React, { useState } from 'react';
import Image from 'next/image';

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
          <div className="area_acessibilidade">

            <div className="area_seta">

              <Image src="/imagens/seta_esquerda.png" alt="ícone de seta para esquerda" width={50} height={50}></Image>

            </div>

            <div className="area_icon_acessibilidade">

              <Image src="/imagens/icone_acessibilidade.png" alt="ícone de acessibilidade" width={50} height={50}></Image>

              <span>Acessibilidade</span>

            </div>

          </div>

        </div>
      ) : (
        <div >
          
          <div className="menu_acessibilidade" >

            <Image src="/imagens/camaleao_icon.png" alt="Mascote camaleão" width={70} height={70}></Image>

            <div className="grupos">

              <div className="container_leitor">

                <Image src="/imagens/leitor.png" alt="icone de leitor de página" width={35} height={35}></Image>

                <Image src="/imagens/pause.png" alt="icone de pause" width={35} height={35}></Image>

                <Image src="/imagens/play.png" alt="icone de play" width={35} height={35}></Image>

                <Image src="/imagens/stop.png" alt="icone de stop" width={35} height={35}></Image>

              </div>
              <span>Leitor de Página</span>

            </div>

            <div className="grupos">

              <Image src="/imagens/mascara.png" alt="icone de mascara de foto" width={35} height={35}></Image>
              <span>Máscara de foco</span>

            </div>

            <div className="grupos">

              <Image src="/imagens/contraste.png" alt="icone de contraste" width={35} height={35}></Image>
              <span>Contraste</span>

            </div>
            <div onClick={toggleDivs} style={{ cursor: 'pointer' }}>
            <Image src="/imagens/seta_direita.png" alt="seta para direita" width={50} height={50}></Image>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickableDivs;
