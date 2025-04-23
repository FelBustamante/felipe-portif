
import React from 'react';
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleNav }) => {
  const scrollToSection = (sectionId: string) => {
    toggleNav();
    const section = document.getElementById(sectionId);
    if (section) {
      setTimeout(() => {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  return (
    <div 
      className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-sm z-50 transition-transform duration-300 lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-between items-center mb-8">
          <span className="text-lg font-semibold">Felipe Bustamante</span>
          <button 
            onClick={toggleNav}
            className="text-muted-foreground hover:text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        
        <nav className="flex flex-col space-y-6 mt-8">
          <a 
            href="#sobre" 
            className="text-2xl font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('sobre');
            }}
          >
            Sobre
          </a>
          <a 
            href="#tecnologias" 
            className="text-2xl font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('tecnologias');
            }}
          >
            Tecnologias
          </a>
          <a 
            href="#projetos" 
            className="text-2xl font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projetos');
            }}
          >
            Projetos
          </a>
          <a 
            href="#contato" 
            className="text-2xl font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contato');
            }}
          >
            Contato
          </a>
        </nav>
        
        <div className="mt-auto">
          <div className="flex space-x-4 justify-center">
            <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
