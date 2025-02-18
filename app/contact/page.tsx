"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/NavBar/Navbar"
import { Footer } from "@/components/Footer/Footer"
import { useRef } from 'react';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_vyhuujn', 'template_eswyah5', form.current, 'nupALPb0boK3rwJkL')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your email was sent",
        showConfirmButton: false,
        timer: 1500,
      });
    
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-white">Contáctanos</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4" onSubmit={sendEmail} ref={form}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-200">
                    Nombre
                  </label>
                  <Input id="user_name" placeholder="Tu nombre" name="user_name" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-200">
                    Email
                  </label>
                  <Input
                    id="user_email"
                    placeholder="tu@email.com"
                    type="email"
                    name="user_email"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-200">
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Tu mensaje" name="message" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enviar Mensaje</Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact