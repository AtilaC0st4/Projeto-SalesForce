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
                        <button className="btn_conheca">Conheça mais</button>
                    </div>
                    <Image src="/imagens/imgBanner.png"
                        alt="mulher sorrindo com um fundo descrevendo as expectativas do costumer 360"
                        className="img_banner"
                        width={700}
                        height={500}>
                    </Image>
                </section>
            </div>
        </>
    )
}

export default Banner;