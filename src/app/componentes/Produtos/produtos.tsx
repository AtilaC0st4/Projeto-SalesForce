import Image from "next/image"
import TextToSpeech from "../teste2/teste2"


const Produtos: React.FC = () => {
    return (
        <>
            <section className="produtos" id="produtos">
                <h2>Produtos</h2>
                <div className="container_produtos">
                    <div className="conteudo_produtos">

                        <div className="txt_produtos">
                            <Image src="/imagens/img_costumer.png" alt="Logo customer 360" width={400} height={65}></Image>

                            <p>O Customer 360 da Salesforce é uma plataforma que reúne informações de clientes
                                de diversas fontes para criar um perfil completo de cada cliente.Isso ajuda as empresas
                                a entender melhor seus clientes e oferecer experiências personalizadas,
                                melhorando seus relacionamentos e impulsionando o engajamento.</p>
                        </div>

                        <div className="img_produtos">
                            <Image src="/imagens/img_produtos.png"
                                alt="Imagem do costumer 360 em volta de uma mulher" width={500} height={500}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Produtos;    