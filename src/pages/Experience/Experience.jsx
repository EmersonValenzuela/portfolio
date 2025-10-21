import React from "react";
import { Code2, Server, GraduationCap, Database, Shield, Cpu } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  achievements,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300 flex-wrap gap-2">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>

        {achievements && achievements.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-cyan-400 font-semibold text-sm">Logros destacados:</p>
            <ul className="space-y-1">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">▸</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Server,
      title: "Asistente de Sistemas",
      company: "SAMITASK SAC",
      period: "Ago 2023 - Actualidad",
      description:
        "Gestiono la infraestructura tecnológica para múltiples clientes corporativos en Perú. Desde el monitoreo de plataformas web hasta la administración de servidores Linux con WHM/cPanel, desarrollo sistemas con PHP, JavaScript y MySQL, garantizando soluciones escalables y seguras para diversos sectores empresariales.",
      achievements: [
        "Superviso disponibilidad y rendimiento de múltiples plataformas web empresariales",
        "Gestiono infraestructura de servidores Linux para diversos clientes",
        "Desarrollo e implemento soluciones web personalizadas por sector",
        "Optimizo rendimiento de bases de datos y aplicaciones corporativas"
      ]
    },
    {
      icon: Code2,
      title: "Desarrollador Web",
      company: "Servitec Peru EIRL",
      period: "Jul 2019 - Ago 2023",
      description:
        "Desarrollé sistemas web completos utilizando buenas prácticas de desarrollo. Responsable del análisis de requisitos, diseño de interfaces y escritura de código eficiente y mantenible.",
      achievements: [
        "Desarrollo del sistema COBIENE para el Ejército",
        "Página web corporativa para estudio de abogados 'Corporativo Planning'",
        "E-commerce completo para tienda Servitec"
      ]
    },
    {
      icon: GraduationCap,
      title: "Asistente de Capacitación",
      company: "I.E. Guillermo E. Billinghurst",
      period: "Mar 2018 - Dic 2018",
      description:
        "Asistente en el Aula de Innovación, brindando soporte técnico y capacitación. Encargado del mantenimiento de equipos y orientación a profesores en nuevas tecnologías de enseñanza.",
      achievements: []
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Experiencia Profesional
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Desarrollando y administrando infraestructura web confiable para empresas"
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default ExperienceSection;