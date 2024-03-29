import Image from "next/image";
import Link from "next/link";

const Novidades = () => {
    return (
        <>
            <div className="content">
                <section className="novidades" >
                    <h2>Veja o que há de novo em nosso portal</h2>
                    <div className="area_cards">

                        <div className="cards">
                            <div className="area_img">
                            <Image src="/imagens/img_explica.png" 
                            alt=" imagem de um vendedor explicando algo para seu cliente" width={320} height={300}></Image>
                            </div>
                            <p>Explicações mais simples para nossos produtos</p>
                            <Link href="#">Mais informações</Link>
                        </div>

                        <div className="cards">
                            <div className="area_img">
                            <Image src="/imagens/img_camaleao.png" alt="imagem do novo mascote camaleão" width={320} height={225}></Image>
                            </div>
                            <p>Apresentando o Novo Mascote e a nova Área de Acessibilidade Salesforce</p>
                            <Link href="#">Mais informações</Link>
                        </div>
                        <div className="cards">
                            <div className="area_img">
                            <Image src="/imagens/img_chatbot.png" alt="imagem de um robo simbolizando um chatbot" width={320} height={300}></Image>
                            </div>
                            <p>Apresentando o Novo Mascote e a nova Área de Acessibilidade Salesforce</p>
                            <Link href="#">Mais informações</Link>
                        </div>

                    </div>
                </section>  
            </div>

        </>
    )
}
export default Novidades;