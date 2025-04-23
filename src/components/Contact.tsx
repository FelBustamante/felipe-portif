import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Instagram, Linkedin } from 'lucide-react';
const Contact = () => {
  return <section id="contato" className="py-20 bg-muted">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Tem um projeto em mente ou deseja saber mais sobre meu trabalho? 
            Preencha o formulário abaixo e entrarei em contato o mais breve possível.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <Input type="text" id="name" className="w-full px-4 py-3 rounded-md border border-input bg-background" placeholder="Seu nome" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <Input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-input bg-background" placeholder="seu@email.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none" placeholder="Como posso ajudar você?"></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors" onClick={e => {
              e.preventDefault();
              alert('Para ativar esta funcionalidade, por favor conecte o projeto ao Supabase usando a integração nativa do Lovable.');
            }}>
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="bg-white dark:bg-muted/50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary flex-shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <a href="mailto:febustamante1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      febustamante1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <a href="tel:+5512997125136" className="text-muted-foreground hover:text-primary transition-colors">
                      +55 (12) 99712-5136
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary flex-shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">
                      São Paulo, SP - Brasil
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium mb-4">Me encontre nas redes sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;