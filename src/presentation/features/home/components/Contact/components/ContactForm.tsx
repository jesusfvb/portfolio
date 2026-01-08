import { useState } from "react";
import type { FormErrors, FormData } from "@/domain/interfaces";
import { ValidationService } from "@/domain/services/validation.service";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar en tiempo real solo si el campo ya fue tocado
    if (touched[name as keyof typeof touched]) {
      let error = "";
      switch (name) {
        case "name":
          error = ValidationService.validateName(value);
          break;
        case "email":
          error = ValidationService.validateEmail(value);
          break;
        case "message":
          error = ValidationService.validateMessage(value);
          break;
      }
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validar cuando el campo pierde el foco
    let error = "";
    switch (name) {
      case "name":
        error = ValidationService.validateName(value);
        break;
      case "email":
        error = ValidationService.validateEmail(value);
        break;
      case "message":
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
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por tu mensaje! Te contactaré pronto.");
    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-medium text-white">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tu nombre"
          className={`font-inherit rounded-lg border bg-[#1a1a1a] px-3.5 py-3.5 text-base text-white transition-colors duration-300 focus:outline-none ${
            touched.name && errors.name
              ? "border-[#ef4444] focus:border-[#ef4444] focus:ring-[3px] focus:ring-[rgba(239,68,68,0.1)]"
              : "border-[rgba(255,255,255,0.1)] focus:border-[#6366f1]"
          }`}
          aria-invalid={touched.name && errors.name ? "true" : "false"}
          aria-describedby={
            touched.name && errors.name ? "name-error" : undefined
          }
        />
        {touched.name && errors.name && (
          <span
            id="name-error"
            className="mt-1 flex items-center gap-1 text-sm text-[#ef4444]"
            role="alert"
          >
            {errors.name}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="nombre.apellido@correo.com"
          className={`font-inherit rounded-lg border bg-[#1a1a1a] px-3.5 py-3.5 text-base text-white transition-colors duration-300 focus:outline-none ${
            touched.email && errors.email
              ? "border-[#ef4444] focus:border-[#ef4444] focus:ring-[3px] focus:ring-[rgba(239,68,68,0.1)]"
              : "border-[rgba(255,255,255,0.1)] focus:border-[#6366f1]"
          }`}
          aria-invalid={touched.email && errors.email ? "true" : "false"}
          aria-describedby={
            touched.email && errors.email ? "email-error" : undefined
          }
        />
        {touched.email && errors.email && (
          <span
            id="email-error"
            className="mt-1 flex items-center gap-1 text-sm text-[#ef4444]"
            role="alert"
          >
            {errors.email}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-medium text-white">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tu mensaje..."
          className={`font-inherit min-h-[120px] resize-y rounded-lg border bg-[#1a1a1a] px-3.5 py-3.5 text-base text-white transition-colors duration-300 focus:outline-none ${
            touched.message && errors.message
              ? "border-[#ef4444] focus:border-[#ef4444] focus:ring-[3px] focus:ring-[rgba(239,68,68,0.1)]"
              : "border-[rgba(255,255,255,0.1)] focus:border-[#6366f1]"
          }`}
          aria-invalid={touched.message && errors.message ? "true" : "false"}
          aria-describedby={
            touched.message && errors.message ? "message-error" : undefined
          }
        ></textarea>
        {touched.message && errors.message && (
          <span
            id="message-error"
            className="mt-1 flex items-center gap-1 text-sm text-[#ef4444]"
            role="alert"
          >
            {errors.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="font-inherit cursor-pointer self-start rounded-lg border-none bg-linear-to-r from-[#6366f1] to-[#8b5cf6] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)]"
      >
        Enviar Mensaje
      </button>
    </form>
  );
};

export default ContactForm;
