import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contato</h3>
        <ul>
          <li>Email: Bacosalchmy101@gmail.com</li>
          <li>Instagram: @Mr.D_Alchemy</li>
          <li>Telefone: (69) 2466-6777</li>
        </ul>
      </div>
      <div className="footer-sponsors">
        <h3>Marcas Patrocinadoras</h3>
        <ul>
          <li>Nectar & Ambrosia</li>
          <li>Red Hot Chilli Shots</li>
          <li>Whiskey N' Roses</li>
          <li>Baco Exu do BBQ</li>
          <li>O Rappa Delícias</li>
          <li>Arkham Absinthe</li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Baco's Alchemy. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
