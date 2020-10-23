import React from "react";
import "./CardEspecialidade.css"

const CardEspecialidade = (props) => {
  return (
    <div class="column">
      <div class="card">
        <img src ={props.img} />
        <h3>{props.text}</h3>
      </div>
  </div>
  )

}

export default CardEspecialidade;