import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Builder, Problem Solver
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="developer illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hola, soy <span className="font-bold">Emerson Valenzuela</span>,
                desarrollador web peruano con experiencia en la creación de
                sistemas modernos, escalables y centrados en la experiencia del
                usuario. Trabajo principalmente con{" "}
                <span className="font-bold">JavaScript, Laravel y Vue.js</span>,
                construyendo soluciones que impactan directamente en procesos
                empresariales y productos digitales.
              </p>

              <p className="text-white">
                He desarrollado proyectos a medida para empresas, herramientas
                internas, dashboards administrativos, sistemas de reclamos,
                integraciones con APIs y plataformas web completas. También me
                desempeño como freelance, apoyando a equipos que necesitan
                avanzar rápido con software confiable.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Me considero un profesional que aprende constantemente y que
                    busca construir soluciones que realmente agreguen valor.
                    Disfruto optimizar procesos, diseñar interfaces claras y
                    crear productos que simplifican la vida de las personas.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Emerson Valenzuela – Web Developer, Perú
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
