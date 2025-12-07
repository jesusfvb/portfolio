import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { EMAIL_ADDRESS, SOCIAL_LINKS } from '@/domain/constants';
import ContactForm from './components/ContactForm';

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
    <section id="contact" className="py-24 bg-[#1a1a1a]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Contacto
        </h2>
        <p className="text-xl text-center text-[#a0a0a0] mb-12">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Conectemos</h3>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
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
                  className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-lg text-white transition-all duration-300 hover:bg-[#121212] hover:border-[#6366f1] hover:translate-x-1"
                  aria-label={social.name}
                >
                  <span className="flex items-center justify-center text-2xl">{social.icon}</span>
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
              <div className="flex items-center gap-2 p-4 bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] rounded-lg">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-4 flex-1 text-white transition-colors duration-300 hover:text-[#6366f1]"
                  aria-label="Enviar email"
                >
                  <span className="flex items-center justify-center text-2xl"><HiMail /></span>
                  <span className="font-medium select-all cursor-text">{EMAIL_ADDRESS}</span>
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center justify-center p-2 bg-transparent border border-[rgba(255,255,255,0.1)] rounded-md text-white cursor-pointer transition-all duration-300 hover:bg-[#121212] hover:border-[#6366f1] hover:text-[#6366f1] active:scale-95 text-base"
                  aria-label="Copiar email"
                  title="Copiar email"
                >
                  {emailCopied ? <FaCheck /> : <FaCopy />}
                </button>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

