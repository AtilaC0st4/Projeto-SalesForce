import Image from "next/image"


const Produtos = () => {
    return (
        <>
            <div className="content">
                <section className="produtos">
                    <h2>Produtos</h2>
                    <div >
                        <div>
                            <Image src="/imagens/img_customer.png" alt="Logo customer 360" width={500} height={100}></Image>
                            <p>O Customer 360 da Salesforce é uma plataforma que reúne informações de clientes
                                de diversas fontes para criar um perfil completo de cada cliente.Isso ajuda as empresas
                                a entender melhor seus clientes e oferecer experiências personalizadas,
                                melhorando seus relacionamentos e impulsionando o engajamento.</p>
                        </div>
                        <Image src="/imagens/img_produtos.png" alt="Imagem do costumer 360 em volta de uma mulher" width={500} height={500}></Image>
                    </div>
                    <button >Conheça mais</button>
                </section>
            </div>
        </>
    )
}

export default Produtos;