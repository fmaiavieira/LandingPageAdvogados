import React from 'react';
import "./Footer.css"
import logo from './assets/logo.png';

function Footer (){

    return(

        <>
            <section className="footer">
            
                <section className="dadosDeContato">

                    <div className="NossoEndereco">
                        <img src="" alt=""/>
                        <div className="divTexto">
                            <h4>Nosso Endereço</h4>
                            <span>Av. Advogado - L5, Conj.355</span>
                            <span>São Paulo, SP, Brasil</span>
                        </div>
                    </div>
                    
                    <div className="telefone">
                        <img src="" alt=""/>
                        <div className="divTexto">
                            <h4>Telefone</h4>
                            <span>+ 55 (11) 3333-2222</span>
                            <span>+ 55 (11) 93333-2222</span>
                            <span>contato@advogado.com.br</span>
                        </div>
                    </div>

                    <div className="horarioDeFuncionamento">
                        <img src="" alt=""/>
                        <div className="divTexto">
                            <h4>Horário De Funcionamento</h4>
                            <span>Atendimento de segunda a sexta</span>
                            <span>de 9h às 18h, em nosso escritório</span>
                        </div>
                    </div>

                </section>

                <section className="localizacao">

                </section>

                <section className="menuERedes">

                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>

                    <div className="menu">

                        <h3 className="tituloMenu">Menu</h3>

                        <span ></span>

                        <div className="opcoesMenu" >

                            <div className="links">

                                <span>Home</span>
                                <span>Sobre</span>
                                <span>Atuação</span>

                            </div>

                            <div className="links">
                                <span>Equipe</span>
                                <span>Atualizações</span>
                                <span>Contato</span>
                            </div>

                        </div>

                    </div>

                    <div className="Redes">
                        <h3 className="tituloRedes">Redes Sociais</h3>
                        <div>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                    </div>

                    <div className="direitos">
                        <p>© 2020 Todos os direitos reservados.</p>
                    </div>

                </section>

            </section>

        </>

    )

}

export default Footer
