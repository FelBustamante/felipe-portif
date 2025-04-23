
import React from 'react';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  longDescription?: string;
  features?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div 
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-xl z-50 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Fechar modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
            {project.imageUrl ? (
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary">
                <div className="text-6xl text-muted-foreground font-bold">FB</div>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Descrição</h4>
              <p className="text-muted-foreground">
                {project.longDescription || project.description}
              </p>
            </div>
            
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Funcionalidades</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Tecnologias</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-block bg-accent/10 text-accent-foreground px-3 py-1 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-end">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Fechar
            </Button>
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="outline"
                  className="bg-[#333] hover:bg-[#222] text-white"
                >
                  <Github className="mr-2" />
                  Ver no GitHub
                </Button>
              </a>
            )}
            
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <ExternalLink className="mr-2" />
                  Ver Demo
                </Button>
              </a>
            )}
            
            <Button
              onClick={(e) => {
                e.preventDefault();
                onClose();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Solicitar mais informações
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
