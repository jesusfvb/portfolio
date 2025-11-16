import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import type { FormErrors, FormData } from '@/domain/interfaces';
import { EMAIL_ADDRESS, SOCIAL_LINKS } from '@/domain/constants';
import { ValidationService } from '@/application/services/validation.service';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar en tiempo real solo si el campo ya fue tocado
    if (touched[name as keyof typeof touched]) {
      let error = '';
      switch (name) {
        case 'name':
          error = ValidationService.validateName(value);
          break;
        case 'email':
          error = ValidationService.validateEmail(value);
          break;
        case 'message':
          error = ValidationService.validateMessage(value);
          break;
      }
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validar cuando el campo pierde el foco
    let error = '';
    switch (name) {
      case 'name':
        error = ValidationService.validateName(value);
        break;
      case 'email':
        error = ValidationService.validateEmail(value);
        break;
      case 'message':
        error = ValidationService.validateMessage(value);
        break;
    }
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Marcar todos los campos como tocados
    const allTouched = {
      name: true,
      email: true,
      message: true,
    };
    setTouched(allTouched);

    // Validar todos los campos
    const nameError = ValidationService.validateName(formData.name);
    const emailError = ValidationService.validateEmail(formData.email);
    const messageError = ValidationService.validateMessage(formData.message);

    const newErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };

    setErrors(newErrors);

    // Si hay errores, no enviar el formulario
    if (nameError || emailError || messageError) {
      return;
    }

    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
  };

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
    <section id="contact" className="py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
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
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-white">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tu nombre"
                className={`px-3.5 py-3.5 bg-[#1a1a1a] border rounded-lg text-white font-inherit text-base transition-colors duration-300 focus:outline-none ${
                  touched.name && errors.name
                    ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[3px] focus:ring-[rgba(239,68,68,0.1)]'
                    : 'border-[rgba(255,255,255,0.1)] focus:border-[#6366f1]'
                }`}
                aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
              />
              {touched.name && errors.name && (
                <span id="name-error" className="text-[#ef4444] text-sm mt-1 flex items-center gap-1" role="alert">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="nombre.apellido@correo.com"
                className={`px-3.5 py-3.5 bg-[#1a1a1a] border rounded-lg text-white font-inherit text-base transition-colors duration-300 focus:outline-none ${
                  touched.email && errors.email
                    ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[3px] focus:ring-[rgba(239,68,68,0.1)]'
                    : 'border-[rgba(255,255,255,0.1)] focus:border-[#6366f1]'
                }`}
                aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
              />
              {touched.email && errors.email && (
                <span id="email-error" className="text-[#ef4444] text-sm mt-1 flex items-center gap-1" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-white">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                placeholder="Tu mensaje..."
                className={`px-3.5 py-3.5 bg-[#1a1a1a] border rounded-lg text-white font-inherit text-base transition-colors duration-300 focus:outline-none resize-y min-h-[120px] ${
                  touched.message && errors.message
                    ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[3px] focus:ring-[rgba(239,68,68,0.1)]'
                    : 'border-[rgba(255,255,255,0.1)] focus:border-[#6366f1]'
                }`}
                aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
              ></textarea>
              {touched.message && errors.message && (
                <span id="message-error" className="text-[#ef4444] text-sm mt-1 flex items-center gap-1" role="alert">
                  {errors.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="self-start px-8 py-3.5 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 border-none font-inherit bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)]"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

