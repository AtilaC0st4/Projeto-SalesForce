'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TextToSpeech from '../teste2/teste2';

const ClickableDivs: React.FC = () => {
  
  const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);

  
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

                <TextToSpeech text='
                Entregue sucesso agora com o Salesforce Customer 360. 
                O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI (retorno sobre investimento).

                Veja que há de novo no nosso Portal:

                Explicações mais simples para nossos produtos;
                Apresentação do Novo Mascote e a nova Área de Acessibilidade Salesforce;
                Reformulação do ChatBot para melhor atendê-los.

                Produtos:

                O Customer 360 da Salesforce é uma plataforma que reúne informações de clientes de diversas fontes para criar um perfil completo de cada cliente. 
                Isso ajuda as empresas a entender melhor seus clientes e oferecer experiências personalizadas, melhorando seus relacionamentos e impulsionando o engajamento.



                Novas Notícias:

                Nova Área de Acessibilidade:

                A Salesforce lançou uma nova área de acessibilidade, focada em tornar suas plataformas mais inclusivas. 
                Com um mascote em forma de camaleão, simbolizando adaptação e flexibilidade, a empresa busca criar soluções tecnológicas acessíveis para todos os usuários, 
                independentemente de suas necessidades.

                Entre em Contato:

                Se você tiver alguma dúvida ou quiser solicitar um orçamento, por favor preencha o formulário abaixo, entre em contato conosco ligando para o número 0800 891 1887
                 ou envie um e-mail para email salesforce@email.com .


                '></TextToSpeech>

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
