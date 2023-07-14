import '../styles/Navbar.css';
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Baco's Alchemy</div>
      <ul className="navbar-links">
        <li className="navbar-link">Home</li>
        <li className="navbar-link">Receitas</li>
        <li className="navbar-link">Dicas e Truques</li>
        <li className="navbar-link">Ferramentas</li>
        <li className="navbar-link">Produtos</li>
        <li className="navbar-link">Sobre nós</li>
      </ul>
    </nav>
  );
}

export default Navbar;
