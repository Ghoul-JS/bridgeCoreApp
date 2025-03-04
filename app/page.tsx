import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/NavBar/Navbar"
import { LandingPage } from "@/components/LandingPage/LandingPage"
import { Services } from "@/components/Services/Services"
import { Footer } from "@/components/Footer/Footer"
// import Wpp from "@/components/Wpp/Wpp"

import Card from "@/components/CardPrueba/Card"
import CarouselSlider from "@/components/Carousel/CarouselSlider"

// import VrilBot from "@/components/VrilBot/VrilBot"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className=" bottom-0 right-0 w-3/4 h-3/4 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-[10%] transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div> */}
      <Card />

      <Navbar />

      <main className="flex-1 relative z-10">
        {/* <LandingPage /> */}

        {/* <Wpp /> */}
        {/* pto wp */}
        {/* <VrilBot /> */}
        <Services id="services"/>
        <CarouselSlider />

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Innovación en Cada Línea de Código
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                En BridgeCore, fusionamos creatividad y tecnología para desarrollar soluciones de software que impulsan
                el éxito de nuestros clientes. Nuestro equipo de expertos está comprometido con la excelencia y la
                innovación en cada proyecto.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Conoce Más Sobre Nosotros</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

