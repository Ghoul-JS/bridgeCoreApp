import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingPage({
  lang,
  dictionary: t,
}: {
  lang: "en" | "es";
  dictionary: any;
}) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-white">{t.title}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
              {t.span1}
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-2xl/relaxed">
            {t.text}
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
            {t.button}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
