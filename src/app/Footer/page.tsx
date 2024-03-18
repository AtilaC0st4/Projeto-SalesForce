import Image from "next/image";
import Link from "next/link";

const Footer = () =>{
    return(
        <>
            <footer className="rodape">
                <section className="rodape_conteudo">

                    <div>
                    <Image src="/imagens/Logo.png" alt="Logo salesforce" width={50} height={40}></Image>
                        <h3>Redes Sociais</h3>
                        <nav>
                            <li>
                                <Link href="">
                                    <Image src="" alt=""></Image>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Image src="" alt=""></Image>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Image src="" alt=""></Image>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Image src="" alt=""></Image>
                                </Link>
                            </li>
                        </nav>
                    </div>

                    <nav>
                        <h3>Links Úteis</h3>
                        <ul>
                        <li>
                            <Link href="" >Página Inicial</Link> 
                        </li>
                        <li>
                            <Link href="" >Produtos</Link>
                        </li>
                        <li>
                            <Link href="" >Notícias</Link>
                        </li>
                    </ul>
                    </nav>

                    <nav>
                        <ul>
                            <li>
                                <Link href="tel:5508008911887">Ligue 0800 891 1887</Link>
                            </li>
                            <li>
                                <Link href="mailto:salesforce@salesforce.com">salesforce@salesforce.com</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <span>©2023 InovaTech. Todos os direitos reservados. Inovação em cada solução.</span>
            </footer>
        </>
    )
}

export default Footer;