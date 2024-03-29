import Image from "next/image";

const Menu = () => {


    return (
        <>
            <div className="bnt_acessibilidade">

                <div className="area_acessibilidade">

                    <div className="area_seta">

                        <Image src="/imagens/seta.png" alt="ícone de seta para esquerda" width={50} height={50}></Image>

                    </div>

                    <div>

                        <Image src="/imagens/icone_acessibilidade.png" alt="ícone de acessibilidade" width={50} height={50}></Image>

                        <span>Acessibilidade</span>

                    </div>

                </div>

            </div>
        </>
    )

}
export default Menu;