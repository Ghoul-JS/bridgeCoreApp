import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/NavBar/Navbar"
import { Footer } from "@/components/Footer/Footer"

const About = () => {
  return (
    <>
      <Navbar />
      <section id="about" className="z-[10] w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Innovación en Cada Línea de Código
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En BridgeCore, fusionamos creatividad y tecnología para desarrollar soluciones de software que impulsan el
              éxito de nuestros clientes. Nuestro equipo de expertos está comprometido con la excelencia y la innovación
              en cada proyecto.
            </p>
            <ul className="list-disc text-left text-gray-400 space-y-2 mt-4">
              <li>Más de 10 años de experiencia en el sector tecnológico</li>
              <li>Equipo multidisciplinario de desarrolladores, diseñadores y expertos en UX</li>
              <li>Metodologías ágiles para una entrega rápida y eficiente</li>
              <li>Compromiso con la calidad y la satisfacción del cliente</li>
            </ul>
            {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-6">Conoce Más Sobre Nosotros</Button> */}
          </div>
        </div>
      </section>
      <div className="z-[-1]  flex flex-col items-center h-full bg-black text-gray-100 overflow-hidden">
      <div className="inset-0 z-0">
        <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className=" bottom-0 right-0 w-3/4 h-3/4 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className=" top-1/2 left-[10%] transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default About