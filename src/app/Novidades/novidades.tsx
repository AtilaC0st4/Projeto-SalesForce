import Image from "next/image";
import Link from "next/link";

const Novidades = () => {
    return (
        <>
            <div className="content">
                <section >
                    <h2>Veja o que há de novo em nosso portal</h2>
                    <div >

                        <div >
                            <Image src="" alt=""></Image>
                            <p>explicações mais simples para nossos produtos</p>
                            <Link href="#">Mais informações</Link>
                        </div>

                        <div >
                            <Image src="" alt=""></Image>
                            <p>Apresentando o Novo Mascote e a nova Área de Acessibilidade Salesforce</p>
                            <Link href="#">Mais informações</Link>
                        </div>

                        <div >
                            <Image src="" alt=""></Image>
                            <p>Apresentando o Novo Mascote e a nova Área de Acessibilidade Salesforce</p>
                            <Link href="#">Mais informações</Link>
                        </div>

                    </div>
                </section>
            </div>

        </>
    )
}
export default Novidades();