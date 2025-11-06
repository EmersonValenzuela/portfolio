import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useMemo, memo } from "react";
import PropTypes from "prop-types";
import { FaReact } from "react-icons/fa";
import {
  SiVuedotjs,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiVuetify,
  SiLaravel,
  SiVisa,
  SiChartdotjs,
  SiNetlify,
  SiMysql,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";


// ==== CONSTANTS =============================================================
const CARD_SCALE_FACTOR = 0.05;
const SCROLL_OFFSET = ["start start", "end end"];
const PROJECT_BADGE_TRANSITION = { type: "spring", stiffness: 400 };
const HOVER_ANIMATION = { y: -3 };

const PROJECTS_DATA = [
  {
    id: "starcheck",
    title: "Starcheck — Portal de Compras",
    description: "Portal web que complementa el módulo de Compras de Starsoft mediante APIs REST para extraer datos de OC/OS. flujos de aprobación y reportes avanzados personalizados.",
    src: "starcheck.png",
    link: "/images/starcheck.png",
    color: "#2d9cdb",
    githubLink: "https://github.com/SAMITASK/starsoft_api",
    liveLink: "",
    mediaType: "image",
    technologies: [
      { name: "Vue.js", icon: <SiVuedotjs className="w-4 h-4 text-[#41B883]" /> },
      { name: "ApexChartJs", icon: <SiChartdotjs className="w-4 h-4 text-[#F05340]" /> },
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#F05340]" /> },
      { name: "MS SQL Server", icon: <DiMsqlServer className="w-4 h-4 text-[#CC2927]" /> },
    ]
  },
  {
    id: "cosmic-bowling",
    title: "Sistema de Reservas Cosmic Bowling",
    description: "Plataforma web de reservas online para Cosmic Bowling. Permite a los usuarios reservar pistas de bowling de manera fácil y rápida, con sistema de gestión de horarios y disponibilidad en tiempo real.",
    src: "cosmicbowling.webm",
    link: "/videos/cosmicbowling.mp4",
    color: "#8f89ff",
    githubLink: "https://github.com/SystemsGV/CosmicBowling.git",
    liveLink: "https://reservascosmicbowling.com.pe/",
    mediaType: "video",
    technologies: [
      { name: "Bootstrap", icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F0DB4F]" /> },
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#F05340]" /> },
      { name: "Niubiz", icon: <SiVisa className="w-4 h-4 text-[#3B5CCC]" /> },
    ]
  },
  {
    id: "influencers",
    title: "Sistema de Gestión de Influencers",
    description: "Dashboard analítico con autenticación vía SMS (Firebase), seguimiento en tiempo real de ventas por influencers, ranking TOP 10, y gráficos interactivos de rendimiento y conversión.",
    src: "influencers.png",
    link: "/images/influencers.png",
    color: "#fff",
    githubLink: "https://github.com/SAMITASK/Influencers.git",
    liveLink: "",
    mediaType: "image",
    technologies: [
      { name: "VueJs", icon: <SiVuedotjs className="w-4 h-4 text-[#41B883]" /> },
      { name: "Vuetify", icon: <SiVuetify className="w-4 h-4 text-[#1867C0]" /> },
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#F05340]" /> },
      { name: "Mysql", icon: <SiMysql className="w-4 h-4 text-[#00618A]" /> },
    ]
  },
  {
    id: "certificates",
    title: "Sistema de Generación Certificados 📜",
    description: "Genera certificados personalizados en lote para cursos, webinars y matrículas. Sube plantillas, importa estudiantes desde Excel y descarga PDFs con QR de validación.",
    src: "dozer.png",
    link: "/images/dozer.png",
    color: "#efb810",
    githubLink: "https://github.com/EmersonValenzuela/certificates.git",
    liveLink: "",
    mediaType: "image",
    technologies: [
      { name: "Bootstrap", icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F0DB4F]" /> },
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4 text-[#F05340]" /> },
    ]
  },
  {
    id: "brolem",
    title: "Catalogo de Productos Brolem 🫘",
    description: "Catálogo web bilingüe (inglés/coreano) para Brolem, empresa con más de 20 años de experiencia en granos andinos y legumbres. Muestra productos con descripciones detalladas e información de contacto para pedidos.",
    src: "netlify.png",
    link: "/images/netlify.png",
    color: "#22c55e",
    githubLink: "https://github.com/BrolemDev/ProductsBrolem",
    liveLink: "https://productsbrolem.netlify.app/",
    mediaType: "image",
    technologies: [
      { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
      { name: "Netlify", icon: <SiNetlify className="w-4 h-4 text-[#05BDBA]" /> },
    ]
  }
];

const useResolutionStyles = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      document.documentElement.style.setProperty(
        "--project-scale",
        isTargetResolution ? "0.85" : "1"
      );
      document.documentElement.style.setProperty(
        "--project-margin",
        isTargetResolution ? "-5vh" : "0"
      );
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);
};

// Componente de tecnología memoizado
const TechBadge = memo(({ tech }) => (
  <motion.div
    className="flex items-center gap-1.5 bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-1.5 hover:bg-gray-700/80 transition-all duration-300"
    whileHover={{ scale: 1.05, y: -2 }}
    transition={PROJECT_BADGE_TRANSITION}
  >
    <span className="transform hover:scale-110 transition-transform duration-300">
      {tech.icon}
    </span>
    <span className="text-xs md:text-sm text-gray-300 font-medium">
      {tech.name}
    </span>
  </motion.div>
));

TechBadge.displayName = "TechBadge";

TechBadge.propTypes = {
  tech: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
};

// Componente de media memoizado
const ProjectMedia = memo(({ mediaType, url, title, color }) => {
  const MediaContent = useMemo(() => {
    if (mediaType === "video") {
      return (
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <source src={url} type="video/mp4" />
        </motion.video>
      );
    }

    return (
      <motion.img
        src={url}
        alt={title}
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
    );
  }, [mediaType, url, title]);

  return (
    <div className="w-full md:w-[55%] h-[200px] md:h-[400px] lg:h-[510px] relative overflow-hidden">
      {MediaContent}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: color, mixBlendMode: "overlay" }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
});

ProjectMedia.displayName = "ProjectMedia";

ProjectMedia.propTypes = {
  mediaType: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

// Componente de enlace externo memoizado
const ExternalLink = memo(({ href, color, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2"
    whileHover={HOVER_ANIMATION}
    transition={PROJECT_BADGE_TRANSITION}
  >
    {icon}
    <span className="text-xs md:text-sm font-medium" style={{ color }}>
      {label}
    </span>
  </motion.a>
));

ExternalLink.displayName = "ExternalLink";

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

// Componente de flecha de scroll animada
const ScrollArrow = memo(({ color }) => (
  <motion.div
    className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
    initial={{ opacity: 0, y: -10 }}
    animate={{
      opacity: [0.4, 1, 0.4],
      y: [0, 10, 0]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 34 34"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="7 13 12 18 17 13"></polyline>
      <polyline points="7 6 12 11 17 6"></polyline>
    </svg>
  </motion.div>
));

ScrollArrow.displayName = "ScrollArrow";

ScrollArrow.propTypes = {
  color: PropTypes.string.isRequired,
};

// Card component optimizado y memoizado
const Card = memo(({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  technologies,
  mediaType = "image",
  isLast = false,
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const cardStyle = useMemo(() => ({
    scale,
    top: `calc(-5vh + ${i * 25}px)`,
    transform: `scale(var(--project-scale, 1))`,
    marginTop: "var(--project-margin, 0)",
  }), [scale, i]);

  const githubIcon = useMemo(() => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ), [color]);

  const globeIcon = useMemo(() => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ), [color]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={cardStyle}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          <ProjectMedia
            mediaType={mediaType}
            url={url}
            title={title}
            color={color}
          />

          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
                <div className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                  Proyecto {i + 1}
                </div>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md mb-4">
                {description}
              </p>

              <div className="mt-4">
                <h3 className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-3 font-semibold">
                  Tecnologías
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <TechBadge key={tech.name} tech={tech} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />
              <div className="flex items-center gap-4">
                <ExternalLink
                  href={githubLink}
                  color={color}
                  icon={githubIcon}
                  label="Repositorio"
                />
                {liveLink && (
                  <ExternalLink
                    href={liveLink}
                    color={color}
                    icon={globeIcon}
                    label="Sitio Web"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Flecha de scroll - solo si no es el último proyecto */}
        {!isLast && <ScrollArrow color={color} />}
      </motion.div>
    </div>
  );
});

Card.displayName = "Card";

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  technologies: PropTypes.array.isRequired,
  mediaType: PropTypes.string,
  isLast: PropTypes.bool,
};

// Main component
export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: SCROLL_OFFSET,
  });

  useResolutionStyles();

  const projectCards = useMemo(
    () => PROJECTS_DATA.map((project, i) => {
      const targetScale = 1 - (PROJECTS_DATA.length - i) * CARD_SCALE_FACTOR;
      const isLast = i === PROJECTS_DATA.length - 1;

      return (
        <Card
          key={project.id}
          i={i}
          url={project.link}
          title={project.title}
          color={project.color}
          description={project.description}
          progress={scrollYProgress}
          range={[i * 0.25, 1]}
          targetScale={targetScale}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          technologies={project.technologies}
          mediaType={project.mediaType}
          isLast={isLast}
        />
      );
    }),
    [scrollYProgress]
  );

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projectCards}
        </section>
      </main>
    </ReactLenis>
  );
}