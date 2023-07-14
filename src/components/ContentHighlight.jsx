import React from 'react';
import '../styles/ContentHighlight.css';

function ContentHighlight() {
  return (
    <section className="content-highlight">
      <div className="highlight-header">
        <h2 className="highlight-title">Receitas especiais</h2>
        <p className="highlight-description">Experimente uma mistura explosiva das receitas do Cheff. Não perca essa explosão de sabores!</p>
      </div>
      <div className="highlight-container">
        <div className="highlight-card">
          <div className="card-content">
            <h3 className="card-title">Rock n' Rum</h3>
            <p className="card-description">Uma mistura ousada de rum, limão e especiarias. Perfeito para agitar sua noite!</p>
            <button className="card-button">Ver Receita</button>
          </div>
        </div>
        <div className="highlight-card">
          <div className="card-content">
            <h3 className="card-title">Whiskey Riot</h3>
            <p className="card-description">Uma explosão de sabores defumados com toques de whiskey e mel. Uma verdadeira festa para o paladar!</p>
            <button className="card-button">Ver Receita</button>
          </div>
        </div>
        <div className="highlight-card">
          <div className="card-content">
            <h3 className="card-title">Gin Symphony</h3>
            <p className="card-description">Uma sinfonia refrescante de gin, limão e ervas aromáticas. Uma experiência única para os sentidos!</p>
            <button className="card-button">Ver Receita</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentHighlight;
