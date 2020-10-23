import React from "react";
import "./InfosEscritorio.css";

function InfosEscritorio(){
    return(
        <div className="InfosEscritorio">
            <img className="InfosImagem" src="" alt=""/>
            <div className="InfosDescricao">
                <svg></svg>
                <p>Solidez se constrói com ética, compromisso com o cliente e resultados.</p>
                <p>A MBL possui sistemas que acompanham e registram as informações, coordenando-as com as dos órgãos judiciários de todo Brasil. Isso permite que os dados dos clientes sejam atualizados em tempo real, favorecendo a oferta de um serviço customizado e de elevada qualidade, refletida em resultados:</p>
                <div className="DescricaoDados">
                    <div>
                        <p>19</p>
                        <p>anos de experiência</p>
                    </div>
                    <div>
                        <p>372</p>
                        <p>clientes satisfeitos</p>
                    </div>
                    <div>
                        <p>92%</p>
                        <p>de êxito nos casos</p>
                    </div>
                    <div>
                        <p>4</p>
                        <p>milhões de reais em economia em acordo para os clientes</p>
                    </div>
                </div>
                <button>Mais sobre nós</button>
            </div>

            <div className="CardInfraestrutura">
                <img src="https://mbl.adv.br/wp-content/uploads/2020/05/002-2.jpg" alt=""/>
                <div>
                    <h3>Nossa Estrutura</h3>
                    <p>Sabemos a importância do atendimento, principalmente, em situações complexas. O nosso escritório possui estrutura totalmente planejada para atender nossos clientes com excelência, conforto e segurança.</p>
                </div>
            </div>

            <div className="CardInfraestrutura">
                <img src="https://mbl.adv.br/wp-content/uploads/2020/05/003-1.jpg" alt=""/>
                <div>
                    <h3>Atendimento Dinâmico</h3>
                    <p>Por WhatsApp, Skype, pessoalmente, telefone, e-mail. O nosso time está à sua disposição para lhe atender de imediato.</p>
                </div>
            </div>
        </div>
    )
}

export default InfosEscritorio;