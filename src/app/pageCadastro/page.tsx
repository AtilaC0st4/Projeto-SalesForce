'use client';
import Image from "next/image";
import Link from "next/link";



const Login: React.FC = () => {

    return (
        <>
        
            <section className="cadastro" >

                <div className="area_cadastro">

                    <div className="txt_cadastro">

                        <Image src="/imagens/Logo.png" alt="Logo salesforce" width={65} height={50}></Image>

                        <span id="span_bemvindo">
                            Pronto para desbloquear todo o potencial da Salesforce? Cadastre-se agora e inicie sua jornada para o sucesso empresarial!</span>

                        <span id="span_cadastro">Já é parte da nossa comunidade? Faça <Link href="/pageLogin/">login</Link> e mergulhe nas suas soluções personalizadas.</span>

                    </div>


                    <div className="inputs_cadastro">

                        <form action="" method="post" className="cadastro_forms">

                            <label htmlFor="nome">Nome Completo
                                <input type="text" name="nome" id="nome" />
                            </label>

                            <label htmlFor="data_nascimento">Data de Nascimento
                                <input type="date" name="data_nascimento" id="data_nascimento" />
                            </label>

                            <div>

                                <span>Sexo:</span>

                                <label htmlFor="male">Masculino:
                                    <input type="radio" id="male" name="gender" value="male" />
                                </label>

                                <label htmlFor="female">Feminino:
                                    <input type="radio" id="female" name="gender" value="female" />
                                </label>

                                <label htmlFor="other">Outro:
                                    <input type="radio" id="other" name="gender" value="other" />
                                </label>

                            </div>


                            <label htmlFor="cpf">Cpf
                                <input type="text" name="cpf" id="cpf" />
                            </label>


                            <label htmlFor="telefone">Telefone
                                <input type="tel" name="telefone" id="telefone" />
                            </label>

                            <label htmlFor="email">E-mail
                                <input type="email" name="email" id="email" />
                            </label>

                            <label htmlFor="usuario">Nome de Usuário
                                <input type="text" name="usuario" id="usuario" />
                            </label>

                            <label htmlFor="senha">Senha
                                <input type="password" name="senha" id="senha" />
                            </label>


                            <button>Fazer Cadastro</button>

                        </form>
                    </div>

                </div>

            </section>


        </>
    )
}
export default Login;