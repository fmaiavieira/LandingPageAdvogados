import React from "react";
import "./Especialidade.css"
import CardEspecialidade from "../CardEspecialidade"
import img1 from "../../imagens/registro_marcas.png"
import img2 from "../../imagens/martelo.png"
import img3 from "../../imagens/direito_medico.png"
import img4 from "../../imagens/direito_digital.png"
import img5 from "../../imagens/direito_civil.png"
import img6 from "../../imagens/consumidor.png"
import img7 from "../../imagens/empresarial.png"
import img8 from "../../imagens/familia.png"

const Especialidade = (props) => {  
const especialidades = [
    {
        text: "Registro de Marcas",
        img: img1
    },
    {
        text: "Correspondência Jurídica",
        img: img2
    },  
    {
        text: "Direito Médico",
        img: img3
    },
    {
        text: "Direito Digital",
        img: img4
    }, 
    {
        text: "Direito Civil",
         img: img5
    },
    {
         text: "Direito do Consumidor",
         img: img6
    },  
    {
         text: "Direito Empresarial",
         img: img7
    },
    {
         text: "Família e Sucessões",
         img: img8
    },       
    ];

    const CardList = especialidades.map((especialidade) => 
    {
        return <CardEspecialidade text={especialidade.text} img={especialidade.img} />
    })

    return(

    <div className="row">
        {CardList} 
    </div>
    );
}

export default Especialidade;
