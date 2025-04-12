import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import BgAnimated from "@/components/BgAnimated/BgAnimated";
import { useLang } from "@/components/LangProvider/LangProvider";
import { getDictionary } from "@/context/dictionary";

const About = () => {
  const { lang } = useLang();
  return (
    <>
      <Navbar lang={lang} />
      <section
        id="about"
        className="z-[10] w-full py-12 md:py-24 lg:py-32 bg-black"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Innovación en Cada Línea de Código
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En BridgeCore, fusionamos creatividad y tecnología para
              desarrollar soluciones de software que impulsan el éxito de
              nuestros clientes. Nuestro equipo de expertos está comprometido
              con la excelencia y la innovación en cada proyecto.
            </p>
            <ul className="list-disc text-left text-gray-400 space-y-2 mt-4">
              <li>Más de 10 años de experiencia en el sector tecnológico</li>
              <li>
                Equipo multidisciplinario de desarrolladores, diseñadores y
                expertos en UX
              </li>
              <li>Metodologías ágiles para una entrega rápida y eficiente</li>
              <li>Compromiso con la calidad y la satisfacción del cliente</li>
            </ul>
            {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-6">Conoce Más Sobre Nosotros</Button> */}
          </div>
        </div>
      </section>
      <BgAnimated />
      <Footer lang={lang} />
    </>
  );
};

export default About;
