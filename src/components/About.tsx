import React from 'react';
const About = () => {
  return <section id="sobre" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-4xl">Sobre Mim</h2>
            <p className="text-muted-foreground mb-4 text-left">Olá! Sou Felipe Bustamante, um desenvolvedor web apaixonado pela criação de experiências digitais modernas e funcionais.</p>
            <p className="text-muted-foreground mb-4 text-left">
              Minha jornada no desenvolvimento web começou com uma curiosidade sobre como as coisas funcionam na internet. Essa curiosidade evoluiu para uma paixão por criar soluções digitais que ajudam pessoas e empresas a alcançarem seus objetivos.
            </p>
            <p className="text-muted-foreground mb-4 text-base mx-0 my-0 font-thin text-left">Especializo-me em desenvolvimento front-end e back- end, com foco em criar interfaces intuitivas e sistemas robustos. Meu objetivo é sempre entregar soluções que não apenas atendam às necessidades, mas que também proporcionem uma experiência excepcional.</p>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default About;