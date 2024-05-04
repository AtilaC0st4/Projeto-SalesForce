import Image from "next/image";

const Banner = () => {
    return (
        <>
            <div className="content">
                <section className="banner">
                    <div className="txt_banner">
                        <h1>Entregue sucesso agora com o Salesforce Customer 360.</h1>
                        <p>O Customer 360 é a nossa suíte de produtos e serviços que ajuda
                            98% dos clientes a alcançar ou superar suas metas de ROI (retorno sobre investimento).</p>
                        
                    </div>
                    <div className="img_banner">
                    <Image src="/imagens/imgBanner.png"
                        alt="mulher sorrindo com um fundo descrevendo as expectativas do costumer 360"
                        width={600}
                        height={400}>
                    </Image>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Banner;