import { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Técnico en Computación e Informática - Módulos I y II",
      school: "IESTP Víctor Raúl Haya de la Torre",
      location: "Barranca, Lima",
      mascot: "🔧",
      year: "2018 - 2019",
      achievements: ["Soporte Técnico Hardware", "Programación Orientada a Objetos"],
      skills: ["Visual Basic", "C#", "SQL Server", "Hardware", "Mantenimiento de PCs"],
      description:
        "Fundamentos técnicos en soporte de hardware y programación. Desarrollo de aplicaciones de escritorio con enfoque en POO y gestión de bases de datos relacionales.",
    },
    {
      degree: "Técnico en Computación e Informática - Módulo III",
      school: "IESTP Gilda Liliana Ballivián Rosado",
      location: "San Juan de Miraflores, Lima",
      mascot: "💻",
      year: "2020",
      achievements: ["Egresado", "Especialización en Desarrollo Web"],
      skills: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "Desarrollo Web"],
      description:
        "Especialización en desarrollo web y tecnologías para internet. Creación de sistemas web dinámicos, administración de bases de datos MySQL y fundamentos del desarrollo full-stack.",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Formación Académica
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Base técnica sólida que fundamenta mi trayectoria profesional en desarrollo y administración de sistemas.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm w-full ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02] shadow-2xl shadow-teal-500/20"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  {edu.location && (
                    <p className="text-sm text-gray-400 ml-8">📍 {edu.location}</p>
                  )}
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Logros
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm transition-all hover:bg-teal-500/20"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Áreas de Conocimiento
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 transition-all hover:bg-blue-500/20 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-20 h-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-6 h-[2px] bg-teal-500/50"></div>
                <div className="absolute top-0 right-0 w-[2px] h-6 bg-teal-500/50"></div>
              </div>
              <div className="absolute bottom-4 left-4 w-20 h-20 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-blue-500/50"></div>
                <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-blue-500/50"></div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;