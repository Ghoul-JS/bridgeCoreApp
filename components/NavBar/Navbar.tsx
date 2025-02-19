"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname, useRouter } from "next/navigation"; 

const NavItems = ({ mobile = false }: { mobile?: boolean }) => {
  const router = useRouter(); 
  const pathname = usePathname(); 

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string, router: ReturnType<typeof useRouter>, pathname: string) => {
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
      <div>
        <Link href="/" className={mobile ? "hidden " : "text-2xl font-bold text-white"}>
          BringCore
        </Link>
      </div>

      <div>
        <Link href="/" className={mobile ? "text-2xl font-bold text-white" : "hidden"}>
          BringCore
        </Link>

        <Button variant="ghost" asChild className={mobile ? "text-white w-full justify-start" : "text-white hover:text-white"}>
          <a href="#services" onClick={(e) => handleScroll(e, "services", router, pathname)}>
            Services
          </a>
        </Button>
        
        <Button variant="ghost" asChild className={mobile ? "text-white w-full justify-start" : "text-white hover:text-white"}>
          <Link href="/about">About</Link>
        </Button>
        <Button variant="ghost" asChild className={mobile ? "text-white w-full justify-start" : "text-white hover:text-white"}>
          <Link href="/contact">Contact</Link>
        </Button>
      </div>

    </div>
  )
}


export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-black backdrop-blur-sm" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className=":hiden text-2xl font-bold text-white">

        </Link>
        <div className="hidden md:flex justify-between space-x-4 w-full">
          <NavItems />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-blue-900/95 text-white">
            <nav className="flex flex-col space-y-4 mt-6">
              <NavItems mobile />
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
