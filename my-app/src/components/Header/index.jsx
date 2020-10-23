import React from 'react';
import logoImagem from './logo-mbl.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <div className="logo">
        <img src={logoImagem} alt=""/>
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="menu-item active"><a href="https://google.com" >Home</a></li>
          <li className="menu-item"><a href="https://google.com">Sobre</a></li>
          <li className="menu-item">
            <a href="https://google.com">Atuação</a>
            <ul className="submenu">
              <li><a href="https://google.com">Registro de Marcas</a></li>
              <li><a href="https://google.com">Correspondência Jurídica</a></li>
              <li><a href="https://google.com">Direito Médico</a></li>
              <li><a href="https://google.com">Direito Digital</a></li>
              <li><a href="https://google.com">Direito Civil</a></li>
              <li><a href="https://google.com">Direito do Consumidor</a></li>
              <li><a href="https://google.com">Direito Empresarial</a></li>
            </ul>
          </li>
          <li className="menu-item"><a href="https://google.com">Equipe</a></li>
          <li className="menu-item"><a href="https://google.com">Atualizações</a></li>
          <li className="menu-item">
            <a href="https://google.com">FAQ</a>
            <ul className="submenu">
              <li><a href="https://google.com">Dúvidas Frequentes</a></li>
              <li><a href="https://google.com">Registro de Marcas</a></li>
            </ul>
          </li>
          <li className="menu-item"><a href="https://google.com">Contato</a></li>
          <li className="menu-item button">
            <a href="https://google.com">Áreas relevantes</a>
            <ul className="submenu">
              <li><a href="https://google.com">Registro de Marcas</a></li>
              <li><a href="https://google.com">Correspondente Jurídico</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;