import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/NavBar/Navbar"; // Asegúrate de que la ruta sea correcta
import Footer from "@/components/Footer/Footer";
import { Services } from "@/components/Services/Services";
import CarouselSlider from "@/components/Carousel/CarouselSlider";
import VrilBot from "@/components/VrilBot/VrilBot";
import Card from "@/components/CardPrueba/Card";
import { getDictionary } from "@/context/dictionary";

export default async function Home({
  params,
}: {
  params: { lang: "en" | "es" };
}) {
  const lang = params.lang;
  const t = (await getDictionary(lang)).Home;
  const dict = await getDictionary(lang); // Pasa el diccionario completo a los componentes

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-gray-100 overflow-hidden">
      <Card lang={lang} />
      <Navbar lang={lang} dictionary={dict.Nav} />
      <main className="flex-1 relative z-10">
        <Services id="services" lang={lang} />
        <CarouselSlider lang={lang} />
        <VrilBot />
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                {t.title}
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                {t.text}
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                {t.button}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dictionary={dict.Footer} />
    </div>
  );
}
