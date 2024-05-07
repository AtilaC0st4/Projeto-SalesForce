'use client';
import Image from "next/image";
import Link from "next/link";



const Login: React.FC = () => {

    return (
        <>
            <section className="login" >

                <div className="area_login">

                    <div className="txt_login">

                        <Image src="/imagens/Logo.png" alt="Logo salesforce" width={65} height={50}></Image>

                        <span id="span_bemvindo">Bem-vindo à Salesforce! Conecte-se para explorar um mundo de possibilidades empresariais.</span>

                        <span id="span_cadastro">Novo por aqui? <Link href="/pageCadastro/">Cadastre-se</Link> agora para começar a aproveitar todos os benefícios da Salesforce!</span>

                    </div>


                    <div className="inputs_login">

                        <form action="" method="post" className="autentica">

                                <label htmlFor="usuario">Nome de Usuário
                                <input type="text" name="usuario" id="usuario" />
                                </label>
                            
                                <label htmlFor="senha">Senha
                                <input type="password" name="senha" id="senha" />
                                </label>

                                <button>Fazer Login</button>

                        </form>
                    </div>

                </div>

            </section>


        </>
    )
}
export default Login;