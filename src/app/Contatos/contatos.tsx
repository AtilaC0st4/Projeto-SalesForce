const Contatos = () => {

    

    return (
        <>

            <section className="contatos">

                <div className="content">

                    <h2>Entre em contato</h2>

                    <p>Se você tiver alguma dúvida ou quiser solicitar um orçamento, por favor preencha o formulário abaixo,
                        entre em contato conosco ligando para o número <a href={`tel:0800 891 1887}`}>0800 891 1887</a> ou envie um e-mail para <a href={`mailto:salesforce@salesforce.com`}>salesforce@email.com</a>.</p>

                    <form  className="formulario" action="">
                        
                            <label htmlFor="nome">Nome</label>
                            <input placeholder="nome" type="text" name="nome" id="nome" required></input>

                            <label htmlFor="empresa">Empresa</label>
                            <input placeholder="empresa" type="text" name="empresa" id="empresa" required></input>

                            <label htmlFor="segmento">Segmento</label>
                            <input placeholder="segmento" type="text" name="segmento" id="segmento" required></input>
                        
                        
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input placeholder="sobrenome" type="text" name="sobrenome" id="sobrenome" required></input>

                            <label htmlFor="telefone">Telefone</label>
                            <input placeholder="Telefone" type="text" name="Telefone" id="Telefone" required></input>

                            <label htmlFor="email">email</label>
                            <input placeholder="email" type="email" name="email" id="email" required></input>
                       
                       
                            <label htmlFor="perguntas">perguntas ou comentários</label>
                            <textarea placeholder="perguntas ou comentários" name="perguntas" id="perguntas"></textarea>

                            <button type="submit">enviar</button>
                        
                    </form>
                </div>

            </section >

        </>
    )
}

export default Contatos;