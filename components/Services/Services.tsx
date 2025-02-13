import { Smartphone, Globe, Cpu, Code } from "lucide-react"

const services = [
  { title: "Desarrollo Móvil", icon: Smartphone, description: "Aplicaciones intuitivas y potentes" },
  { title: "Soluciones Web", icon: Globe, description: "Plataformas escalables y responsivas" },
  { title: "Automatización", icon: Cpu, description: "Optimización de procesos empresariales" },
  { title: "Consultoría IT", icon: Code, description: "Asesoramiento tecnológico experto" },
]

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-white">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="p-2 bg-blue-500/10 rounded-full">
                <service.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-100">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

