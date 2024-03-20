
import Image from "next/image"

const Noticias = () => {
    return (
        <>
            <div className="content">
                <section>
                    <h2>Novas Noticias</h2>

                    <article>
                        <h3>Nova área de acessibilidade</h3>

                        <div>
                            <p>A Salesforce lançou uma nova área de acessibilidade, focada em tornar suas plataformas mais
                                inclusivas.
                                <br></br>
                                <br></br>
                                Com um mascote em forma de camaleão, simbolizando adaptação e flexibilidade, a empresa busca
                                criar soluções
                                tecnológicas acessíveis para todos os usuários, independentemente de suas necessidades.
                            </p>
                        </div>
                        <div >
                            <Image src="" alt=""></Image>
                            <Image src="" alt=""></Image>
                        </div>

                    </article>

                </section>
            </div>


        </>
    )
}