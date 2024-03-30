import Image from "next/image";
import Link from "next/link";

const Footer = () =>{
    return(
        <>
        
            <footer className="rodape">
                
                <section className="rodape_conteudo">

                    <div className="redes">
                    <a href="./"><Image src="/imagens/Logo.png" alt="Logo salesforce" width={100} height={75}></Image></a>
                        <h3>Redes Sociais</h3>
                        <nav className="menu_redes">
                            <li>
                                <Link href="https://www.instagram.com/salesforcebrasil/">
                                    <Image src="/imagens/instagram.png" alt="Logo Do Instagram" width={20} height={20}></Image>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com/salesforce?mibextid=ZbWKwL">
                                    <Image src="/imagens/facebook.png" alt="Logo Do Facebook" width={20} height={20}></Image>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/company/salesforce/">
                                    <Image src="/imagens/linkedin.png" alt="Logo Do Linkedin" width={20} height={20}></Image>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/salesforce">
                                    <Image src="/imagens/youtube.png" alt="Logo Do Youtube" width={20} height={20}></Image>
                                </Link>
                            </li>
                        </nav>
                    </div>

                    <nav className="menu_links">
                        <h3>Links Úteis</h3>
                        <ul>
                        <li>
                            <Link href="./" >Página Inicial</Link> 
                        </li>
                        <li>
                            <Link href="#produtos" >Produtos</Link>
                        </li>
                        <li>
                            <Link href="#noticias" >Notícias</Link>
                        </li>
                    </ul>
                    </nav>

                    <nav className="menu_contato">
                    <h3>Entre em contato</h3>
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