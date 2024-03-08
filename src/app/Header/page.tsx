import Link from "next/link";

const Header1 = () => {
    return (
        <>
            <header>
            <nav className="menu">
            <Link href="index.html"></Link>
            <ul>
                <li><Link href="index.html">Página Inicial</Link></li>
                <li><Link href="#">Produtos</Link></li>
                <li><Link href="#">Notícias<Link></li>
            </ul>
            <ul>
                <li><Link className="Txt_sublinhado" href="#">Entre em contato</Link></li>
                <li><div className="btn_entre"><span>Entre</span></div></li>
            </ul>
        </nav>
            </header>
        </>
    )
}

export default Header1;