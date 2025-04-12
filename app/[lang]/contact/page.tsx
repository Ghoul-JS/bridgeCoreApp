"use client";

import { useLang } from "@/components/LangProvider/LangProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useRef } from "react";
import { getDictionary } from "@/context/dictionary";
import { useParams, usePathname } from "next/navigation";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Config } from "tailwind-merge";

const Contact = async () => {
  const form = useRef<HTMLFormElement | null>(null);

  const { lang } = useLang();
  const t = (await getDictionary(lang)).Contact;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_vyhuujn",
        "template_eswyah5",
        form.current,
        "nupALPb0boK3rwJkL",
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your email was sent",
      showConfirmButton: false,
      timer: 1500,
    });

    form.current?.reset();
  };

  return (
    <>
      <Navbar lang={lang} />
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-white">
            {t.title}
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4" onSubmit={sendEmail} ref={form}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-200"
                  >
                    {t.name}
                  </label>
                  <Input
                    id="user_name"
                    placeholder=""
                    name="user_name"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor=""
                    className="text-sm font-medium text-gray-200"
                  >
                    {t.email}
                  </label>
                  <Input
                    id="user_email"
                    placeholder=""
                    type="email"
                    name="user_email"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-200"
                >
                  {t.message}
                </label>
                <Textarea
                  id="message"
                  placeholder="Tu mensaje"
                  name="message"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {t.submit}{" "}
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer lang={lang} />
    </>
  );
};

export default Contact;
