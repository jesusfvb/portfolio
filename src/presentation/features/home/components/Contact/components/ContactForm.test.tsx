import { describe, test, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@/test/utils'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  describe('Renderizado inicial', () => {
    test('debería renderizar todos los campos del formulario', () => {
      render(<ContactForm />)

      expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
      expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument()
    })

    test('debería tener todos los campos vacíos inicialmente', () => {
      render(<ContactForm />)

      expect(screen.getByLabelText('Nombre')).toHaveValue('')
      expect(screen.getByLabelText('Email')).toHaveValue('')
      expect(screen.getByLabelText('Mensaje')).toHaveValue('')
    })

    test('no debería mostrar errores inicialmente', () => {
      render(<ContactForm />)

      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })
  })

  describe('Validación del campo Nombre', () => {
    test('debería mostrar error si el nombre está vacío después de blur', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.click(nameInput)
      await user.tab() // Blur

      await waitFor(() => {
        expect(screen.getByText('El nombre es requerido')).toBeInTheDocument()
      })
    })

    test('debería mostrar error si el nombre tiene menos de 2 caracteres', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.type(nameInput, 'A')
      await user.tab()

      await waitFor(() => {
        expect(screen.getByText('El nombre debe tener al menos 2 caracteres')).toBeInTheDocument()
      })
    })

    test('debería mostrar error si el nombre excede 50 caracteres', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      const longName = 'A'.repeat(51)
      await user.type(nameInput, longName)
      await user.tab()

      await waitFor(() => {
        expect(screen.getByText('El nombre no puede exceder 50 caracteres')).toBeInTheDocument()
      })
    })

    test('debería mostrar error si el nombre contiene caracteres inválidos', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.type(nameInput, 'Juan123')
      await user.tab()

      await waitFor(() => {
        expect(screen.getByText('El nombre solo puede contener letras y espacios')).toBeInTheDocument()
      })
    })

    test('debería aceptar nombre válido sin mostrar error', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.type(nameInput, 'Juan Pérez')
      await user.tab()

      await waitFor(() => {
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()
      })
    })

    test('debería limpiar el error cuando el nombre se vuelve válido', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      
      // Primero crear error
      await user.type(nameInput, 'A')
      await user.tab()
      await waitFor(() => {
        expect(screen.getByText('El nombre debe tener al menos 2 caracteres')).toBeInTheDocument()
      })

      // Luego corregir
      await user.clear(nameInput)
      await user.type(nameInput, 'Juan')

      await waitFor(() => {
        expect(screen.queryByText(/nombre debe tener/i)).not.toBeInTheDocument()
      })
    })
  })

  describe('Validación del campo Email', () => {
    test('debería mostrar error si el email está vacío después de blur', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const emailInput = screen.getByLabelText('Email')
      await user.click(emailInput)
      await user.tab()

      await waitFor(() => {
        expect(screen.getByText('El email es requerido')).toBeInTheDocument()
      })
    })

    test('debería mostrar error si el formato del email es inválido', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const emailInput = screen.getByLabelText('Email')
      await user.type(emailInput, 'correo-invalido')
      await user.tab()

      await waitFor(() => {
        expect(screen.getByText('Por favor ingresa un email válido')).toBeInTheDocument()
      })
    })

    test('debería aceptar email válido sin mostrar error', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const emailInput = screen.getByLabelText('Email')
      await user.type(emailInput, 'correo@example.com')
      await user.tab()

      await waitFor(() => {
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()
      })
    })

    test('debería validar formatos de email complejos', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const emailInput = screen.getByLabelText('Email')
      await user.type(emailInput, 'nombre.apellido+tag@dominio.co.uk')
      await user.tab()

      await waitFor(() => {
        expect(screen.queryByText(/email válido/i)).not.toBeInTheDocument()
      })
    })
  })

  describe('Validación del campo Mensaje', () => {
    test('debería mostrar error si el mensaje está vacío después de blur', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const messageInput = screen.getByLabelText('Mensaje')
      await user.click(messageInput)
      await user.tab()

      await waitFor(() => {
        expect(screen.getByText('El mensaje es requerido')).toBeInTheDocument()
      })
    })

    test('debería mostrar error si el mensaje tiene menos de 10 caracteres', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const messageInput = screen.getByLabelText('Mensaje')
      await user.type(messageInput, 'Hola')
      await user.tab()

      await waitFor(() => {
        expect(screen.getByText('El mensaje debe tener al menos 10 caracteres')).toBeInTheDocument()
      })
    })

    test('debería mostrar error si el mensaje excede 1000 caracteres', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const messageInput = screen.getByLabelText('Mensaje')
      const longMessage = 'A'.repeat(1001)
      await user.type(messageInput, longMessage)
      await user.tab()

      await waitFor(() => {
        expect(screen.getByText('El mensaje no puede exceder 1000 caracteres')).toBeInTheDocument()
      })
    })

    test('debería aceptar mensaje válido sin mostrar error', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const messageInput = screen.getByLabelText('Mensaje')
      await user.type(messageInput, 'Este es un mensaje válido de prueba')
      await user.tab()

      await waitFor(() => {
        expect(screen.queryByText(/mensaje debe tener/i)).not.toBeInTheDocument()
      })
    })
  })

  describe('Validación en tiempo real (touched fields)', () => {
    test('no debería mostrar errores mientras el usuario escribe (antes del blur)', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.type(nameInput, 'A')

      // No debe mostrar error aún (campo no ha sido touched)
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    test('debería validar en tiempo real después del primer blur', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      
      // Primer blur - marca como touched
      await user.type(nameInput, 'A')
      await user.tab()
      
      await waitFor(() => {
        expect(screen.getByText('El nombre debe tener al menos 2 caracteres')).toBeInTheDocument()
      })

      // Ahora debe validar en tiempo real mientras escribe
      await user.click(nameInput)
      await user.clear(nameInput)
      await user.type(nameInput, 'Juan')

      await waitFor(() => {
        expect(screen.queryByText(/nombre debe tener/i)).not.toBeInTheDocument()
      })
    })
  })

  describe('Submit del formulario', () => {
    test('debería prevenir submit si hay campos inválidos', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i })
      await user.click(submitButton)

      // Debe mostrar todos los errores
      await waitFor(() => {
        expect(screen.getByText('El nombre es requerido')).toBeInTheDocument()
        expect(screen.getByText('El email es requerido')).toBeInTheDocument()
        expect(screen.getByText('El mensaje es requerido')).toBeInTheDocument()
      })

      // Form debe permanecer sin enviar
    })

    test('debería enviar el formulario con datos válidos', async () => {
      const user = userEvent.setup()
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
      
      render(<ContactForm />)

      // Llenar formulario con datos válidos
      await user.type(screen.getByLabelText('Nombre'), 'Juan Pérez')
      await user.type(screen.getByLabelText('Email'), 'juan@example.com')
      await user.type(screen.getByLabelText('Mensaje'), 'Este es un mensaje de prueba válido')

      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i })
      await user.click(submitButton)

      // Debe loggear los datos
      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith('Formulario enviado:', {
          name: 'Juan Pérez',
          email: 'juan@example.com',
          message: 'Este es un mensaje de prueba válido'
        })
      })

      consoleSpy.mockRestore()
    })

    test('debería resetear el formulario después de submit exitoso', async () => {
      const user = userEvent.setup()
      
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      const emailInput = screen.getByLabelText('Email')
      const messageInput = screen.getByLabelText('Mensaje')

      // Llenar formulario
      await user.type(nameInput, 'Juan Pérez')
      await user.type(emailInput, 'juan@example.com')
      await user.type(messageInput, 'Este es un mensaje de prueba válido')

      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i })
      const consoleSpy = vi.spyOn(console, 'log')
      
      await user.click(submitButton)

      // Esperar a que se procese el submit
      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalled()
      })

      // Los campos deben estar vacíos
      expect(nameInput).toHaveValue('')
      expect(emailInput).toHaveValue('')
      expect(messageInput).toHaveValue('')

      // No debe haber errores visibles
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
      
      consoleSpy.mockRestore()
    })

    test('debería marcar todos los campos como touched al hacer submit', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const submitButton = screen.getByRole('button', { name: /enviar mensaje/i })
      await user.click(submitButton)

      // Todos los errores deben aparecer (todos los campos touched)
      await waitFor(() => {
        expect(screen.getByText('El nombre es requerido')).toBeInTheDocument()
        expect(screen.getByText('El email es requerido')).toBeInTheDocument()
        expect(screen.getByText('El mensaje es requerido')).toBeInTheDocument()
      })
    })
  })

  describe('Atributos de accesibilidad', () => {
    test('debería tener aria-invalid="true" en campos con error', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.click(nameInput)
      await user.tab()

      await waitFor(() => {
        expect(nameInput).toHaveAttribute('aria-invalid', 'true')
      })
    })

    test('debería tener aria-invalid="false" en campos válidos', () => {
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      expect(nameInput).toHaveAttribute('aria-invalid', 'false')
    })

    test('debería vincular mensajes de error con aria-describedby', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.click(nameInput)
      await user.tab()

      await waitFor(() => {
        expect(nameInput).toHaveAttribute('aria-describedby', 'name-error')
        expect(screen.getByText('El nombre es requerido')).toHaveAttribute('id', 'name-error')
      })
    })

    test('debería tener role="alert" en mensajes de error', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.click(nameInput)
      await user.tab()

      await waitFor(() => {
        const errorMessage = screen.getByText('El nombre es requerido')
        expect(errorMessage).toHaveAttribute('role', 'alert')
      })
    })

    test('todos los inputs deberían tener labels asociados', () => {
      render(<ContactForm />)

      expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
      expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()
    })

    test('debería usar noValidate en el formulario', () => {
      render(<ContactForm />)

      const form = screen.getByRole('button', { name: /enviar mensaje/i }).closest('form')
      expect(form).toHaveAttribute('noValidate')
    })
  })

  describe('Estilos y clases CSS', () => {
    test('debería aplicar estilos de error a campos inválidos', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.click(nameInput)
      await user.tab()

      await waitFor(() => {
        expect(nameInput).toHaveClass('border-[#ef4444]')
      })
    })

    test('debería aplicar estilos normales a campos válidos', () => {
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      expect(nameInput).toHaveClass('border-[rgba(255,255,255,0.1)]')
    })
  })

  describe('Interacción con el usuario', () => {
    test('debería permitir escribir en todos los campos', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      const emailInput = screen.getByLabelText('Email')
      const messageInput = screen.getByLabelText('Mensaje')

      await user.type(nameInput, 'Juan')
      await user.type(emailInput, 'juan@test.com')
      await user.type(messageInput, 'Mensaje de prueba largo')

      expect(nameInput).toHaveValue('Juan')
      expect(emailInput).toHaveValue('juan@test.com')
      expect(messageInput).toHaveValue('Mensaje de prueba largo')
    })

    test('debería permitir borrar y volver a escribir', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      
      await user.type(nameInput, 'Juan')
      expect(nameInput).toHaveValue('Juan')

      await user.clear(nameInput)
      expect(nameInput).toHaveValue('')

      await user.type(nameInput, 'Pedro')
      expect(nameInput).toHaveValue('Pedro')
    })
  })

  describe('Edge cases', () => {
    test('debería manejar espacios en blanco correctamente', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.type(nameInput, '   ')
      await user.tab()

      await waitFor(() => {
        expect(screen.getByText('El nombre es requerido')).toBeInTheDocument()
      })
    })

    test('debería validar emails con múltiples dominios', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const emailInput = screen.getByLabelText('Email')
      await user.type(emailInput, 'test@sub.domain.com')
      await user.tab()

      await waitFor(() => {
        expect(screen.queryByText(/email válido/i)).not.toBeInTheDocument()
      })
    })

    test('debería manejar caracteres especiales en el mensaje', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const messageInput = screen.getByLabelText('Mensaje')
      await user.type(messageInput, '¡Hola! ¿Cómo estás? #test @user 123')
      await user.tab()

      await waitFor(() => {
        expect(screen.queryByText(/mensaje debe tener/i)).not.toBeInTheDocument()
      })
    })

    test('debería validar nombre con caracteres acentuados', async () => {
      const user = userEvent.setup()
      render(<ContactForm />)

      const nameInput = screen.getByLabelText('Nombre')
      await user.type(nameInput, 'José María')
      await user.tab()

      await waitFor(() => {
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()
      })
    })
  })
})
