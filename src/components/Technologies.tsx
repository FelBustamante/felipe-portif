
import React from 'react';
import { Badge } from './ui/badge';

interface TechnologyProps {
  name: string;
  icon: React.ReactNode;
}

const Technology: React.FC<TechnologyProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-muted rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="text-4xl text-primary mb-3">{icon}</div>
      <h3 className="text-lg font-medium text-foreground">{name}</h3>
    </div>
  );
};

const Technologies = () => {
  const technologies = [
    {
      name: 'HTML',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
        </svg>
      ),
    },
    {
      name: 'CSS',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M8 8h8" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      name: 'React',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 7a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5Z" />
          <path d="M17.67 10a2.5 2.5 0 1 0 0 4" />
          <path d="M6.33 10a2.5 2.5 0 1 1 0 4" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 6l4 6-4 6H8l-4-6 4-6h8z" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.9 12.6 8.8 4.4c.3-.7 1.3-.7 1.6 0l3.9 8.2" />
          <path d="m4.9 12.6-2.3 4c-.3.6.1 1.3.8 1.3h15.6" />
          <path d="M19 17.9c.7 0 1.1-.7.8-1.3l-6.9-14c-.2-.4-.7-.6-1.1-.4-.2.1-.3.2-.4.4l-6.9 14c-.3.6.1 1.3.8 1.3H19z" />
        </svg>
      )
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-muted/50 dark:bg-background/50">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">Tecnologias</h2>
          <p className="section-subtitle">
            Ferramentas e tecnologias que utilizo para criar soluções web modernas e eficientes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Technology key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium mb-4">Outras tecnologias e ferramentas</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['TypeScript', 'Next.js', 'Git', 'Redux', 'MongoDB', 'Express', 'Figma', 'SASS'].map((tech) => (
              <Badge key={tech} variant="outline" className="bg-white/50 dark:bg-muted/50 py-1.5 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
