import React from 'react'
import './Contato.css'
import imgAdv from '../../img/female-adv.jpg'

const Contato = () => {
    return (
        <>
            <div className="contato-conteiner">
                <div className="foto-conteiner">
                    <img src={imgAdv}></img>
                </div>
                <div className="contato-info-box">
                    <form>
                        <div class="dados">
                            <h2 id='preencha-dados'>Podemos avaliar sua solicitação?</h2>
                            <p id='cont-imediato'>Preencha seus dados e entraremos em contato de imediato.</p>
                        </div>
                        <div className="inputs-dados">
                            <input id='ipt-nome' type="text" placeholder='Seu nome' />
                            <input id='ipt-email' type="text" placeholder='Seu email' />
                            <input id='ipt-telefone' type="text" placeholder='Seu telefone' />
                            <input id='ipt-assunto' type="text" placeholder='Assunto' />
                            <input id='ipt-msg' type="text" placeholder='Mensagem' />
                        </div>
                        <button id='btn-enviar-contato'>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contato