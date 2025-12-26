import { EMAIL_ADDRESS, SOCIAL_LINKS } from "@/domain/constants/contact.constants";
import { useState } from "react";
import { FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar el email:", err);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="container">
        <h2 className="mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pt-4 text-center text-4xl font-bold text-transparent md:text-5xl">
          Hablemos
        </h2>
        <p className="mb-12 text-center text-xl text-[#d0d0d0]">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="mx-auto mt-12 max-w-2xl">
          <h3 className="mb-4 text-center text-2xl font-semibold text-white">
            Conectemos
          </h3>
          <p className="mb-8 text-center leading-relaxed text-[#d0d0d0]">
            Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o
            oportunidades para ser parte de tus visiones.
          </p>
          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] p-4 text-[#d0d0d0] transition-all duration-300 hover:translate-x-1 hover:border-[#6366f1] hover:bg-[#121212]"
                aria-label={social.name}
              >
                <span className="flex items-center justify-center text-2xl text-[#d0d0d0] [&>svg]:text-[#d0d0d0]">
                  {social.icon}
                </span>
                <span className="font-medium text-[#d0d0d0]">
                  {social.name}
                </span>
              </a>
            ))}
            <button
              onClick={copyEmailToClipboard}
              className="flex w-full cursor-pointer items-center gap-4 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] p-4 text-[#d0d0d0] transition-all duration-300 hover:translate-x-1 hover:border-[#6366f1] hover:bg-[#121212]"
              aria-label="Copiar email"
              title="Copiar email"
            >
              <span className="flex items-center justify-center text-2xl text-[#d0d0d0] [&>svg]:text-[#d0d0d0]">
                <HiMail />
              </span>
              <span className="flex-1 text-left font-medium select-all">
                {EMAIL_ADDRESS}
              </span>
              <span className="flex items-center justify-center text-xl text-[#d0d0d0]">
                {emailCopied ? (
                  <FaCheck className="text-[#d0d0d0]" />
                ) : (
                  <FaCopy className="text-[#d0d0d0]" />
                )}
              </span>
            </button>
            <a
              href={`mailto:${EMAIL_ADDRESS}?subject=Contacto desde Portfolio`}
              className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-none bg-linear-to-r from-[#6366f1] to-[#8b5cf6] p-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-[#8b5cf6] hover:to-[#ec4899] hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)]"
              aria-label="Enviar mensaje por email"
              title="Enviar mensaje por email"
            >
              <FaPaperPlane className="text-xl text-white drop-shadow-sm" />
              <span className="font-bold text-white drop-shadow-sm">
                Enviar Mensaje
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
