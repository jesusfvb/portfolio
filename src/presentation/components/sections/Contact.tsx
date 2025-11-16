import { useState } from 'react';
import './Contact.css';
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
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Conectemos</h3>
            <p>
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas 
              o oportunidades para ser parte de tus visiones.
            </p>
            <div className="social-links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
            <div className="email-container">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="email-link"
                aria-label="Enviar email"
              >
                <span className="social-icon"><HiMail /></span>
                <span className="email-address">{EMAIL_ADDRESS}</span>
              </a>
              <button
                onClick={copyEmailToClipboard}
                className="copy-email-btn"
                aria-label="Copiar email"
                title="Copiar email"
              >
                {emailCopied ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tu nombre"
                className={touched.name && errors.name ? 'input-error' : ''}
                aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
              />
              {touched.name && errors.name && (
                <span id="name-error" className="error-message" role="alert">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="nombre.apellido@correo.com"
                className={touched.email && errors.email ? 'input-error' : ''}
                aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
              />
              {touched.email && errors.email && (
                <span id="email-error" className="error-message" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                placeholder="Tu mensaje..."
                className={touched.message && errors.message ? 'input-error' : ''}
                aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
              ></textarea>
              {touched.message && errors.message && (
                <span id="message-error" className="error-message" role="alert">
                  {errors.message}
                </span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

