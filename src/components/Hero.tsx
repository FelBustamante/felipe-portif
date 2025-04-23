
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = [
    "Desenvolvedor Web",
    "Criador de Soluções Digitais",
    "Apaixonado por Tecnologia"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Felipe Bustamante
        </h1>
        
        <div className="h-8 sm:h-10 md:h-12 overflow-hidden relative">
          <p className={`text-lg sm:text-xl md:text-2xl text-muted-foreground transition-opacity duration-500 ${currentTextIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
            {rotatingTexts[0]}
          </p>
          <p className={`text-lg sm:text-xl md:text-2xl text-muted-foreground absolute top-0 left-0 right-0 transition-opacity duration-500 ${currentTextIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
            {rotatingTexts[1]}
          </p>
          <p className={`text-lg sm:text-xl md:text-2xl text-muted-foreground absolute top-0 left-0 right-0 transition-opacity duration-500 ${currentTextIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
            {rotatingTexts[2]}
          </p>
        </div>
        
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <a 
            href="#projetos" 
            className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Projetos
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50"
        >
          <path 
            d="M12 5L12 19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5"></div>
    </section>
  );
};

export default Hero;
