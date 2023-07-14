import React from 'react';
import '../styles/ResourceSection.css';
import { FaMagic, FaCalendarAlt } from 'react-icons/fa';

function ResourceSection() {
  return (
    <section className="resource-section">
      <div className="resource-container">
        <div className="resource-card card-trick">
          <div className="resource-icon">
            <FaMagic />
          </div>
          <div className="resource-content">
            <h3 className="resource-title">Truque do Mês</h3>
            <p className="resource-description">Descubra um truque incrível para aprimorar suas habilidades de bartending e impressionar seus convidados.</p>
          </div>
        </div>
        <div className="resource-card card-event">
          <div className="resource-icon">
            <FaCalendarAlt />
          </div>
          <div className="resource-content">
            <h3 className="resource-title">Evento em Destaque</h3>
            <p className="resource-description">Não perca o evento especial deste mês! Junte-se a nós para uma noite de diversão e coquetéis memoráveis.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourceSection;
