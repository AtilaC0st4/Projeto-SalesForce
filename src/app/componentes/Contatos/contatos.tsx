const Contatos = () => {



    return (
        <>

            <section className="contatos">

                <div className="content">

                    <h2>Entre em contato</h2>

                    <p>Se você tiver alguma dúvida ou quiser solicitar um orçamento, por favor preencha o formulário abaixo,
                        entre em contato conosco ligando para o número <a href={`tel:0800 891 1887}`}>0800 891 1887</a> ou envie um e-mail para <a href={`mailto:salesforce@salesforce.com`}>salesforce@email.com</a>.</p>

                    <form className="formulario" action="">

                        <div className="linha_campo">

                            <div className="area_campo">

                                <label htmlFor="nome">Nome</label>
                                <input placeholder="nome" type="text" name="nome" id="nome" required></input>

                            </div>

                            <div className="area_campo">

                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input placeholder="Sobrenome" type="text" name="sobrenome" id="sobrenome" required></input>

                            </div>

                        </div>

                        <div className="linha_campo">

                            <div className="area_campo">

                                <label htmlFor="empresa">Empresa</label>
                                <input placeholder="Empresa" type="text" name="empresa" id="empresa" required></input>

                            </div>

                            <div className="area_campo">

                                <label htmlFor="segmento">Segmento</label>
                                <input placeholder="Segmento" type="text" name="segmento" id="segmento" required></input>
                            </div>

                        </div>

                        <div className="linha_campo">

                            <div className="area_campo">

                                <label htmlFor="Telefone">Telefone</label>
                                <input placeholder="Telefone" type="text" name="Telefone" id="Telefone" required></input>

                            </div>

                            <div className="area_campo">

                                <label htmlFor="email">E-mail</label>
                                <input placeholder="E-mail" type="email" name="email" id="email" required></input>

                            </div>

                        </div>

                        <div className="linha_campo">

                            <div className="area_campo">

                                <label htmlFor="perguntas">Perguntas ou comentários</label>
                                <textarea placeholder="perguntas ou comentários" name="perguntas" id="perguntas"></textarea>

                            </div>

                        </div>

                        <button type="submit">enviar</button>

                    </form>
                </div>

            </section >

        </>
    )
}

export default Contatos;