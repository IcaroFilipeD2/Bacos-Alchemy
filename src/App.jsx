import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContentHighlight from './components/ContentHighlight'
import RecipeOfTheDay from './components/RecipeOfTheDay'
import Carousel from './components/Carousel'
import ResourceSection from './components/ResourceSection'
import Footer from './components/Footer'
import './App.css'
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContentHighlight />
      <div className="content">
        <RecipeOfTheDay />
        <div style={{ margin: '15px 0' }}>
          <Carousel />
        </div>
      </div>

      <ResourceSection />
      <Footer />
    </div>
  );
}

export default App;
