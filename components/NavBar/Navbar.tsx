"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/Switch";

export const NavItems = ({
  mobile = false,
  lang,
  dictionary: t,
}: {
  mobile?: boolean;
  lang: "en" | "es";
  dictionary: any; // Ajusta el tipo según tu estructura
}) => {
  const router = useRouter();
  const pathname = usePathname();

  if (!t) return <div>Loading...</div>; // O un loader más estilizado

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className={mobile ? "hidden" : "text-2xl font-bold text-white"}
        >
          BridgeCore
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <LanguageSwitcher />
        <Button variant="ghost" asChild className="text-white hover:text-white">
          <a href="/" onClick={(e) => handleScroll(e, "services")}>
            {t.inicio}
          </a>
        </Button>
        <Button variant="ghost" asChild className="text-white hover:text-white">
          <a href="#services" onClick={(e) => handleScroll(e, "services")}>
            {t.services}
          </a>
        </Button>
        <Button variant="ghost" asChild className="text-white hover:text-white">
          <Link href="/about">{t.about}</Link>
        </Button>
        <Button variant="ghost" asChild className="text-white hover:text-white">
          <Link href="/contact">{t.contact}</Link>
        </Button>
      </div>
    </div>
  );
};

export function Navbar({
  lang,
  dictionary,
}: {
  lang: "en" | "es";
  dictionary: any;
}) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-black backdrop-blur-sm" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="hidden md:flex justify-between space-x-4 w-full">
          <NavItems lang={lang} dictionary={dictionary} />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-blue-900/95 text-white">
            <nav className="flex flex-col space-y-4 mt-6">
              <NavItems lang={lang} dictionary={dictionary} mobile />
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
