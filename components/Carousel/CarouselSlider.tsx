"use client";

import Carousel from "@/components/ui/carousel";

import melodine from "@/public/melodine.png"

const CarouselDemo = () => {
  const slideData = [
    {
      title: "Melodine",
      button: "Explora el Contenido",
      src: melodine.src,
      url: "https://melodina.vercel.app/es"
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: melodine.src,
      url: "/"
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: melodine.src,
      url: "/"
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: melodine.src,
      url: "/"
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-white">
          Proyectos
        </h2>
      <Carousel slides={slideData} />
    </div>
  );
}

export default CarouselDemo