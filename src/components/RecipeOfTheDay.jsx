import React from 'react';
import ingredientesImg from '../images/ingredientes.jpg';
import '../styles/RecipeOfTheDay.css';

function RecipeOfTheDay() {
  return (
    <div className="recipe-of-the-day">
      <div className="image-container">
          <img src={ingredientesImg} alt="Ingredientes" className="ingredientes-image" />
      </div>
      <div className="text-container">
        <h2 className="recipe-title">Receita do Dia</h2>
        <h3 className="recipe-name">Tropical Sunset</h3>
        <div className="ingredients-instructions-container">
          <div className="section-container">
            <h4 className="section-title">Ingredientes</h4>
            <ul className="ingredients-list">
              <li>50 ml de rum</li>
              <li>30 ml de suco de abacaxi</li>
              <li>20 ml de suco de laranja</li>
              <li>15 ml de xarope de maracujá</li>
              <li>Gelo a gosto</li>
              <li>Fatia de abacaxi e cereja para decorar</li>
            </ul>
          </div>
          <div className="section-container">
            <h4 className="section-title">Modo de Preparo</h4>
            <ol className="instructions-list">
              <li>Em uma coqueteleira, adicione o rum, suco de abacaxi, suco de laranja e xarope de maracujá.</li>
              <li>Adicione gelo suficiente.</li>
              <li>Agite vigorosamente por cerca de 10 segundos para misturar bem os ingredientes e resfriar o coquetel.</li>
              <li>Coe a mistura em um copo baixo ou taça previamente gelada.</li>
              <li>Decore com uma fatia de abacaxi e uma cereja.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeOfTheDay;
