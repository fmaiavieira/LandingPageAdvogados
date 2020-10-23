import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-item">
        <h2>Estrutura, seriedade e segurança</h2>
        <p>Três pilares fundamentais para você escolher seu escritório jurídico</p>
        <a href="https://google.com" className="link-button">Conheça a Nossa Estrutura</a>
      </div>
    </div>
  )
}

export default Banner;