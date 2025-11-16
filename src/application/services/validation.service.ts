export class ValidationService {
  static validateName(name: string): string {
    if (!name.trim()) {
      return 'El nombre es requerido';
    }
    if (name.trim().length < 2) {
      return 'El nombre debe tener al menos 2 caracteres';
    }
    if (name.trim().length > 50) {
      return 'El nombre no puede exceder 50 caracteres';
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name.trim())) {
      return 'El nombre solo puede contener letras y espacios';
    }
    return '';
  }

  static validateEmail(email: string): string {
    if (!email.trim()) {
      return 'El email es requerido';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Por favor ingresa un email válido';
    }
    return '';
  }

  static validateMessage(message: string): string {
    if (!message.trim()) {
      return 'El mensaje es requerido';
    }
    if (message.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres';
    }
    if (message.trim().length > 1000) {
      return 'El mensaje no puede exceder 1000 caracteres';
    }
    return '';
  }
}

