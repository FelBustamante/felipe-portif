
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';

interface NavLinkProps {
  href: string;
  title: string;
  onClick: (e: React.MouseEvent) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
  >
    {title}
  </a>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile nav is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);
  
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-background/90 shadow-sm backdrop-blur-md py-3" 
          : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a 
            href="#" 
            className="text-lg font-semibold"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Felipe Bustamante
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="#sobre" title="Sobre" onClick={scrollToSection('sobre')} />
            <NavLink href="#tecnologias" title="Tecnologias" onClick={scrollToSection('tecnologias')} />
            <NavLink href="#projetos" title="Projetos" onClick={scrollToSection('projetos')} />
            <NavLink href="#contato" title="Contato" onClick={scrollToSection('contato')} />
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              className="ml-4 text-muted-foreground hover:text-foreground"
              onClick={toggleNav}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <MobileNav isOpen={isNavOpen} toggleNav={toggleNav} />
    </>
  );
};

export default Navigation;
