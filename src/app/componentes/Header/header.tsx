import Image from "next/image";
import Link from "next/link";



const Header1 = () => {
    return (
        <>

            <header className="cabecalho">
                <div className="content">
                    <nav className="menu">
                        <a href="./"><Image src="/imagens/Logo.png" alt="Logo salesforce" width={80} height={60}></Image></a>

                        <ul className="menu_rotas">
                            <li>
                                <Link href="#produtos" >Produtos</Link>
                            </li>
                            <li>
                                <Link href="#noticias" >Notícias</Link>
                            </li>
                        </ul>
                        <ul className="menu_entre">
                            <li >
                                <Link href="#contatos" id="txt_sublinhado">Entre em contato</Link>
                            </li>
                            <li> <Link href="/pageLogin/"><div className="btn_login" > <Image src="/imagens/pessoa-2.png" alt="icone de login" width={40} height={40}></Image> <span>Entrar</span> </div></Link></li>
                        </ul>
                    </nav>

                    

                </div>
            </header>

        </>
    )
}

export default Header1;