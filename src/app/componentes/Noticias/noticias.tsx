
import Image from "next/image"

const Noticias = () => {
    return (
        <>

            <section className="noticias">



                <h2>Novas Noticias</h2>

                <article className="area_noticias">

                    

                    <div className="content" id="content_noticias" >
                        
                    <h3>Nova área de acessibilidade</h3>
                       
                        <div className="container_noticia">
                            <p>A Salesforce lançou uma nova área de acessibilidade, focada em tornar suas plataformas mais
                                inclusivas.
                            </p>
                            <Image src="/imagens/noticias_img1.png" alt="area de acessibilidade salesforce" width={575} height={175}></Image>

                            
                        </div>
                        <div className="container_noticia">
                            
                            <p>
                                Com um mascote em forma de camaleão, simbolizando adaptação e flexibilidade, a empresa busca
                                criar soluções
                                tecnológicas acessíveis para todos os usuários, independentemente de suas necessidades.
                            </p>
                            <Image src="/imagens/camaleo_img.png" alt="mascote camaleão" width={340} height={180}></Image>
                        </div>
                    </div>
                </article>


            </section>


        </>
    )
}
export default Noticias;