import { useState } from 'react';
import { FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { EMAIL_ADDRESS, SOCIAL_LINKS } from '@/domain/constants';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar el email:', err);
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 pt-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Hablemos
        </h2>
        <p className="text-xl text-center text-[#d0d0d0] mb-12">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="max-w-2xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-white text-center">Conectemos</h3>
          <p className="text-[#d0d0d0] leading-relaxed mb-8 text-center">
            Estoy siempre abierto a discutir nuevos proyectos, ideas creativas 
            o oportunidades para ser parte de tus visiones.
          </p>
          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#d0d0d0] transition-all duration-300 hover:bg-[#121212] hover:border-[#6366f1] hover:translate-x-1"
                aria-label={social.name}
              >
                <span className="flex items-center justify-center text-2xl text-[#d0d0d0] [&>svg]:text-[#d0d0d0]">
                  {social.icon}
                </span>
                <span className="font-medium text-[#d0d0d0]">{social.name}</span>
              </a>
            ))}
            <button
              onClick={copyEmailToClipboard}
              className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-lg text-[#d0d0d0] transition-all duration-300 hover:bg-[#121212] hover:border-[#6366f1] hover:translate-x-1 w-full cursor-pointer"
              aria-label="Copiar email"
              title="Copiar email"
            >
              <span className="flex items-center justify-center text-2xl text-[#d0d0d0] [&>svg]:text-[#d0d0d0]"><HiMail /></span>
              <span className="font-medium select-all flex-1 text-left">{EMAIL_ADDRESS}</span>
              <span className="flex items-center justify-center text-xl text-[#d0d0d0]">
                {emailCopied ? <FaCheck className="text-[#d0d0d0]" /> : <FaCopy className="text-[#d0d0d0]" />}
              </span>
            </button>
            <a
              href={`mailto:${EMAIL_ADDRESS}?subject=Contacto desde Portfolio`}
              className="flex items-center justify-center gap-3 p-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] border-none rounded-lg text-white font-bold text-lg transition-all duration-300 hover:from-[#8b5cf6] hover:to-[#ec4899] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)] hover:scale-105 cursor-pointer"
              aria-label="Enviar mensaje por email"
              title="Enviar mensaje por email"
            >
              <FaPaperPlane className="text-xl text-white drop-shadow-sm" />
              <span className="text-white font-bold drop-shadow-sm">Enviar Mensaje</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

