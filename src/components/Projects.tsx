import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { Button } from './ui/button';
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
const projectsData: Project[] = [{
  id: 1,
  title: "Calculadora Web",
  description: "Aplicativo de calculadora funcional com operações básicas, desenvolvido com HTML, CSS e JavaScript puro.",
  longDescription: "Uma calculadora web simples e intuitiva que permite realizar operações matemáticas básicas. Desenvolvida com HTML, CSS e JavaScript vanilla, demonstrando boas práticas de desenvolvimento front-end sem dependências externas.",
  features: ["Interface responsiva e amigável", "Operações básicas: adição, subtração, multiplicação e divisão", "Tratamento de erros como divisão por zero", "Design minimalista e moderno"],
  tags: ["HTML", "CSS", "JavaScript"],
  githubUrl: "https://github.com/felipebustamante/calculadora-web",
  imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
}, {
  id: 2,
  title: "Site para Clínica Veterinária",
  description: "Website profissional e responsivo para uma clínica veterinária, com agendamento de consultas e informações sobre serviços.",
  longDescription: "Um site completo para clínica veterinária com funcionalidades de agendamento, apresentação de serviços, equipe, depoimentos e blog integrado. Design responsivo e otimizado para conversão de visitantes em clientes.",
  features: ["Design responsivo para todos os dispositivos", "Sistema de agendamento de consultas", "Galeria de fotos e depoimentos", "Seção de serviços e especialidades", "Otimização SEO para melhor classificação em buscadores"],
  tags: ["React", "Tailwind CSS", "Node.js"],
  githubUrl: "https://github.com/felipebustamante/clinica-vet",
  imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
}, {
  id: 3,
  title: "Sistema de Gestão Financeira",
  description: "CRUD completo para gestão de receitas e despesas, com painel de visualização e relatórios financeiros.",
  longDescription: "Uma aplicação web para controle financeiro pessoal ou de pequenas empresas. Permite cadastrar, editar e excluir transações, categorizá-las e visualizar relatórios detalhados por período, categoria e tipo de transação.",
  features: ["CRUD completo de receitas e despesas", "Categorização de transações", "Filtros avançados para pesquisa", "Gráficos e relatórios financeiros", "Exportação de dados para CSV/PDF"],
  tags: ["React", "TypeScript", "Firebase"],
  githubUrl: "https://github.com/felipebustamante/gestao-financeira",
  imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
}];
const ProjectCard: React.FC<{
  project: Project;
  onClick: () => void;
}> = ({
  project,
  onClick
}) => {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={onClick}>
      <div className="h-48 bg-secondary flex items-center justify-center overflow-hidden">
        {project.imageUrl ? <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" /> : <div className="text-4xl text-muted-foreground">FB</div>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => <span key={tag} className="inline-block bg-accent/10 px-2 py-1 text-xs rounded-md text-red-600">
              {tag}
            </span>)}
        </div>
        
        {project.githubUrl && <div className="flex justify-end">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 text-sm flex items-center gap-1" onClick={e => e.stopPropagation()}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              Ver no GitHub
            </a>
          </div>}
      </div>
    </div>;
};
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };
  return <section id="projetos" className="py-20">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle">
            Aqui estão alguns dos projetos que desenvolvi. Cada um representa 
            uma solução personalizada para necessidades específicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => <ProjectCard key={project.id} project={project} onClick={() => openProjectModal(project)} />)}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Esses são apenas alguns exemplos dos meus trabalhos. 
            Entre em contato para saber mais sobre como posso ajudar em seu próximo projeto.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" onClick={() => {
          document.getElementById('contato')?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            Vamos Conversar
          </Button>
        </div>
      </div>
      
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
    </section>;
};
export default Projects;