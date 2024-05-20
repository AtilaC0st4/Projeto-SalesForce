'use client';


import React, { useState } from 'react';

const Contatos = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        empresa: '',
        segmento: '',
        telefone: '',
        email: '',
        finalidade: '',
        perguntas: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        
        const formDataJson = JSON.stringify(formData);
    
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: formDataJson
        };
    
        
        fetch('    ', requestOptions)
           .then(response => response.json())
           .then(data => console.log(data))
           .catch(error => console.error('Erro:', error));
    };
    
    return (
        <>

            <section className="contatos" id="contatos">

                <div className="content">

                    <h2>Entre em contato</h2>

                    <p>Se você tiver alguma dúvida ou quiser solicitar um orçamento, por favor preencha o formulário abaixo,
                        entre em contato conosco ligando para o número <a href={`tel:0800 891 1887}`}>0800 891 1887</a> ou envie um e-mail para <a href={`mailto:salesforce@salesforce.com`}>salesforce@email.com</a>.</p>

                    <form onSubmit={handleSubmit}>
                        <section className="formulario" >

                            <div className="linha_campo">

                                <div className="area_campo">

                                    <label htmlFor="nome">Nome</label>
                                    <input placeholder="nome" type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange} required></input>

                                </div>

                                <div className="area_campo">

                                    <label htmlFor="sobrenome">Sobrenome</label>
                                    <input placeholder="Sobrenome" type="text" name="sobrenome" id="sobrenome" value={formData.sobrenome} onChange={handleChange} required></input>

                                </div>

                            </div>

                            <div className="linha_campo">

                                <div className="area_campo">

                                    <label htmlFor="empresa">Empresa</label>
                                    <input placeholder="Empresa" type="text" name="empresa" id="empresa" value={formData.empresa} onChange={handleChange} required></input>

                                </div>

                                <div className="area_campo">

                                    <label htmlFor="segmento">Segmento</label>
                                    <input placeholder="Segmento" type="text" name="segmento" id="segmento" value={formData.segmento} onChange={handleChange} required></input>
                                </div>

                            </div>

                            <div className="linha_campo">

                                <div className="area_campo">

                                    <label htmlFor="Telefone">Telefone</label>
                                    <input placeholder="Telefone" type="text" name="Telefone" id="Telefone" value={formData.telefone} onChange={handleChange} required></input>

                                </div>

                                <div className="area_campo">

                                    <label htmlFor="email">E-mail</label>
                                    <input placeholder="E-mail" type="email" name="email" id="email" value={formData.email} onChange={handleChange} required></input>

                                </div>

                            </div>

                            <div className="linha_campo">
                                <div className="area_campo">

                                    <label htmlFor="finalidade">Finalidade do Contato</label>
                                    <input placeholder="Finalidade do contato" type="text" name="finalidade" id="finalidade" value={formData.finalidade} onChange={handleChange} required></input>

                                </div>
                            </div>

                            <div className="linha_campo">



                                <div className="area_campo" id="perguntas" >

                                    <label htmlFor="perguntas">Perguntas ou comentários</label>
                                    <textarea placeholder="perguntas ou comentários" name="perguntas" value={formData.perguntas} onChange={handleChange} ></textarea>

                                </div>

                            </div>
                        </section>

                        <button className="btn_forms" type="submit">Enviar</button>

                    </form>
                </div>

            </section >

        </>
    )
}

export default Contatos;