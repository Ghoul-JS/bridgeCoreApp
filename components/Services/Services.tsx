import { Smartphone, Globe, Cpu, Code } from "lucide-react";
import { getDictionary } from "@/context/dictionary";

// Definimos solo los iconos, los datos vendrán del JSON
const serviceIcons = [Smartphone, Globe, Cpu, Code];

export async function Services({
  id,
  lang,
}: {
  id?: string;
  lang: "en" | "es";
}) {
  const t = await getDictionary(lang);

  // Accedemos a la sección Service del JSON
  const serviceData = t.Service;

  // Combinamos los iconos con los datos del JSON
  const services = serviceData.service.map((item: any, index: any): any => ({
    ...item,
    icon: serviceIcons[index % serviceIcons.length],
  }));

  return (
    <section id={id} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-white">
          {serviceData.title}
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
              <h3 className="text-xl font-bold text-center text-gray-100">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
