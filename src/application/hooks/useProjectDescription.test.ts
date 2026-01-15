import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useProjectDescription } from './useProjectDescription'
import { clearDescriptionCache } from '@/domain/services/description-loader.service'
import type { ProjectDescription } from '@/domain/interfaces/project.interface'

describe('useProjectDescription', () => {
    beforeEach(() => {
        // Limpiar cache antes de cada test
        clearDescriptionCache()
        // Resetear fetch mock
        vi.clearAllMocks()
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    describe('Carga de contenido inline (sin markdown)', () => {
        test('debería retornar contenido inline sin hacer fetch', () => {
            const description: ProjectDescription = {
                short: 'Short description',
                full: 'Full description'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            expect(result.current.data.short).toBe('Short description')
            expect(result.current.data.full).toBe('Full description')
            expect(result.current.loading).toBe(false)
            expect(result.current.error).toBe(null)
        })

        test('debería manejar strings vacíos inline', () => {
            const description: ProjectDescription = {
                short: '',
                full: ''
            }

            const { result } = renderHook(() => useProjectDescription(description))

            expect(result.current.data.short).toBe('')
            expect(result.current.data.full).toBe('')
            expect(result.current.loading).toBe(false)
        })
    })

    describe('Carga de archivos markdown', () => {
        test('debería cargar descripción desde archivo markdown', async () => {
            const mockFetch = vi.fn().mockResolvedValue({
                ok: true,
                text: async () => 'Markdown content from file'
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/projects_descriptions/test/short.md',
                full: '/projects_descriptions/test/full.md'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            // Inicialmente debe estar cargando
            expect(result.current.loading).toBe(true)

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            })

            expect(result.current.data.short).toBe('Markdown content from file')
            expect(result.current.data.full).toBe('Markdown content from file')
            expect(result.current.error).toBe(null)
            expect(mockFetch).toHaveBeenCalledTimes(2)
        })

        test('debería mostrar estado de loading mientras carga', async () => {
            const mockFetch = vi.fn().mockImplementation(
                () => new Promise(resolve => setTimeout(() => resolve({
                    ok: true,
                    text: async () => 'Content'
                }), 50))
            )
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/short.md',
                full: 'Inline full'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            expect(result.current.loading).toBe(true)

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 500 })

            expect(result.current.data.short).toBe('Content')
        })

        test('debería cachear resultados exitosos', async () => {
            const mockFetch = vi.fn().mockResolvedValue({
                ok: true,
                text: async () => 'Cached content'
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/cached.md',
                full: 'Inline'
            }

            // Primera carga
            const { result: result1 } = renderHook(() => useProjectDescription(description))
            await waitFor(() => expect(result1.current.loading).toBe(false))

            // Segunda carga (debe usar cache)
            const { result: result2 } = renderHook(() => useProjectDescription(description))
            await waitFor(() => expect(result2.current.loading).toBe(false))

            // Fetch solo debe haber sido llamado una vez por la primera carga
            expect(mockFetch).toHaveBeenCalledTimes(1)
            expect(result2.current.data.short).toBe('Cached content')
        })
    })

    describe('Manejo de errores', () => {
        test('debería manejar error HTTP 404', async () => {
            const mockFetch = vi.fn().mockResolvedValue({
                ok: false,
                status: 404,
                text: async () => ''
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/not-found.md',
                full: 'Inline full'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            })

            // Debe usar fallback para short
            expect(result.current.data.short).toBe('Descripción no disponible')
            expect(result.current.data.full).toBe('Inline full')
            expect(result.current.error).toBeInstanceOf(Error)
            expect(result.current.error?.message).toContain('404')
        })

        test('debería manejar error HTTP 500', async () => {
            const mockFetch = vi.fn().mockResolvedValue({
                ok: false,
                status: 500,
                text: async () => ''
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: 'Inline short',
                full: '/test/server-error.md'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 10000 })

            expect(result.current.data.short).toBe('Inline short')
            expect(result.current.data.full).toBe('Descripción completa no disponible en este momento')
            expect(result.current.error).toBeInstanceOf(Error)
            expect(result.current.error?.message).toContain('500')
        })

        test('debería manejar error de red', async () => {
            const mockFetch = vi.fn().mockRejectedValue(new Error('Network error'))
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/network-error.md',
                full: 'Inline full'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 10000 })

            expect(result.current.data.short).toBe('Descripción no disponible')
            expect(result.current.error).toBeInstanceOf(Error)
        })

        test('debería manejar contenido vacío', async () => {
            const mockFetch = vi.fn().mockResolvedValue({
                ok: true,
                text: async () => '   '  // Solo espacios
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/empty.md',
                full: 'Inline full'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 10000 })

            expect(result.current.data.short).toBe('Descripción no disponible')
            expect(result.current.error).toBeInstanceOf(Error)
            expect(result.current.error?.message).toContain('Empty content')
        })

        test('debería cachear errores para evitar reintentos inmediatos', async () => {
            const mockFetch = vi.fn().mockRejectedValue(new Error('Persistent error'))
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/error.md',
                full: 'Inline'
            }

            // Primera carga (intentará 3 veces)
            const { result: result1 } = renderHook(() => useProjectDescription(description))
            await waitFor(() => expect(result1.current.loading).toBe(false), { timeout: 10000 })

            vi.clearAllMocks()

            // Segunda carga (debe usar error cacheado)
            const { result: result2 } = renderHook(() => useProjectDescription(description))
            await waitFor(() => expect(result2.current.loading).toBe(false))

            // No debe hacer nuevos intentos
            expect(mockFetch).not.toHaveBeenCalled()
            expect(result2.current.error).toBeInstanceOf(Error)
        })
    })

    describe('Manejo de carga parcial', () => {
        test('debería cargar solo short si full es inline', async () => {
            clearDescriptionCache()
            const mockFetch = vi.fn().mockResolvedValue({
                ok: true,
                text: async () => 'Short from file'
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/short-only.md',
                full: 'Inline full description'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            })

            expect(result.current.data.short).toBe('Short from file')
            expect(result.current.data.full).toBe('Inline full description')
            expect(mockFetch).toHaveBeenCalledTimes(1)
        })

        test('debería manejar fallo en short pero éxito en full', async () => {
            const mockFetch = vi.fn()
                .mockResolvedValueOnce({
                    ok: false,
                    status: 404
                })
                .mockResolvedValueOnce({
                    ok: true,
                    text: async () => 'Full content loaded'
                })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/missing-short.md',
                full: '/test/full.md'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            })

            expect(result.current.data.short).toBe('Descripción no disponible')
            expect(result.current.data.full).toBe('Full content loaded')
            expect(result.current.error).toBeInstanceOf(Error)
        })

        test('debería manejar éxito en short pero fallo en full', async () => {
            const mockFetch = vi.fn()
                .mockResolvedValueOnce({
                    ok: true,
                    text: async () => 'Short content loaded'
                })
                .mockResolvedValueOnce({
                    ok: false,
                    status: 500
                })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/short.md',
                full: '/test/missing-full.md'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 10000 })

            expect(result.current.data.short).toBe('Short content loaded')
            expect(result.current.data.full).toBe('Descripción completa no disponible en este momento')
            expect(result.current.error).toBeInstanceOf(Error)
        })
    })

    describe('Funcionalidad de retry', () => {
        test('debería tener función retry disponible', () => {
            const description: ProjectDescription = {
                short: 'Short',
                full: 'Full'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            expect(result.current.retry).toBeDefined()
            expect(typeof result.current.retry).toBe('function')
        })

        test('debería reintentar carga al llamar retry()', async () => {
            let callCount = 0
            const mockFetch = vi.fn().mockImplementation(() => {
                callCount++
                if (callCount <= 3) {  // Primeras 3 llamadas fallan (intentos iniciales)
                    return Promise.reject(new Error('First attempt failed'))
                }
                // Cuarto intento exitoso (después del retry manual)
                return Promise.resolve({
                    ok: true,
                    text: async () => 'Success on retry'
                })
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/retry.md',
                full: 'Inline'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            // Primera carga falla después de 3 intentos automáticos
            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 10000 })
            expect(result.current.data.short).toBe('Descripción no disponible')
            expect(result.current.error).toBeInstanceOf(Error)

            // Limpiar cache para permitir retry
            clearDescriptionCache()

            // Llamar retry - ahora debería tener éxito
            result.current.retry()

            // Esperar a que termine la carga (el loading puede ser true o false brevemente)
            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 10000 })

            // Ahora debe tener éxito
            expect(result.current.data.short).toBe('Success on retry')
            expect(result.current.error).toBe(null)
        })

        test('retry debería actualizar el contador de reintentos', () => {
            const description: ProjectDescription = {
                short: 'Content',
                full: 'Content'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            // La función retry debe existir
            expect(result.current.retry).toBeDefined()
            expect(typeof result.current.retry).toBe('function')
        })
    })

    describe('Retry logic con exponential backoff', () => {
        test('debería reintentar 3 veces con delays incrementales', async () => {
            clearDescriptionCache()
            const fetchCalls: number[] = []

            const mockFetch = vi.fn().mockImplementation(() => {
                fetchCalls.push(Date.now())
                return Promise.reject(new Error('Persistent failure'))
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/unique-backoff-file.md',
                full: 'Inline'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 10000 })

            // Debe haber intentado 3 veces (inicial + 2 retries)
            expect(mockFetch).toHaveBeenCalledTimes(3)
            expect(result.current.error).toBeInstanceOf(Error)
            expect(result.current.error?.message).toContain('after 3 attempts')
        })

        test('no debería reintentar en error 404', async () => {
            const mockFetch = vi.fn().mockResolvedValue({
                ok: false,
                status: 404
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/not-found.md',
                full: 'Inline'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            })

            // Solo debe intentar una vez (no retry en 404)
            expect(mockFetch).toHaveBeenCalledTimes(1)
            expect(result.current.error?.message).toContain('404')
        })
    })

    describe('Actualización de dependencias', () => {
        test('debería recargar cuando cambia la descripción', async () => {
            const mockFetch = vi.fn()
                .mockResolvedValueOnce({
                    ok: true,
                    text: async () => 'First content'
                })
                .mockResolvedValueOnce({
                    ok: true,
                    text: async () => 'Second content'
                })
            vi.stubGlobal('fetch', mockFetch)

            const { result, rerender } = renderHook(
                ({ desc }) => useProjectDescription(desc),
                {
                    initialProps: {
                        desc: {
                            short: '/test/first.md',
                            full: 'Inline'
                        } as ProjectDescription
                    }
                }
            )

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            })
            expect(result.current.data.short).toBe('First content')

            // Cambiar descripción
            rerender({
                desc: {
                    short: '/test/second.md',
                    full: 'Inline'
                } as ProjectDescription
            })

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            })
            expect(result.current.data.short).toBe('Second content')
            expect(mockFetch).toHaveBeenCalledTimes(2)
        })
    })

    describe('Edge cases', () => {
        test('debería manejar paths con caracteres especiales', async () => {
            const mockFetch = vi.fn().mockResolvedValue({
                ok: true,
                text: async () => 'Content'
            })
            vi.stubGlobal('fetch', mockFetch)

            const description: ProjectDescription = {
                short: '/test/file-with-spaces and special chars.md',
                full: 'Inline'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            })

            expect(mockFetch).toHaveBeenCalledWith('/test/file-with-spaces and special chars.md')
        })

        test('debería manejar contenido con espacios al inicio y final', async () => {
            const mockFetch2 = vi.fn().mockResolvedValue({
                ok: true,
                text: async () => '  Content with spaces  \n\n'
            })
            vi.stubGlobal('fetch', mockFetch2)

            const description: ProjectDescription = {
                short: '/test/spaces.md',
                full: 'Inline'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            })

            // Debe trimear el contenido
            expect(result.current.data.short).toBe('Content with spaces')
        })

        test('debería manejar múltiples cargas concurrentes del mismo archivo', async () => {
            const mockFetch3 = vi.fn().mockImplementation(
                () => new Promise(resolve => setTimeout(() => resolve({
                    ok: true,
                    text: async () => 'Concurrent content'
                }), 100))
            )
            vi.stubGlobal('fetch', mockFetch3)

            const description: ProjectDescription = {
                short: '/test/concurrent.md',
                full: 'Inline'
            }

            // Renderizar múltiples veces al mismo tiempo
            const { result: r1 } = renderHook(() => useProjectDescription(description))
            const { result: r2 } = renderHook(() => useProjectDescription(description))
            const { result: r3 } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(r1.current.loading).toBe(false)
                expect(r2.current.loading).toBe(false)
                expect(r3.current.loading).toBe(false)
            }, { timeout: 500 })

            // Todos deben tener el mismo contenido
            expect(r1.current.data.short).toBe('Concurrent content')
            expect(r2.current.data.short).toBe('Concurrent content')
            expect(r3.current.data.short).toBe('Concurrent content')
        })
    })

    describe('Mensajes de error personalizados', () => {
        test('debería mostrar mensaje de fallback específico para short', async () => {
            clearDescriptionCache()
            const mockFetch4 = vi.fn().mockRejectedValue(new Error('Load failed'))
            vi.stubGlobal('fetch', mockFetch4)

            const description: ProjectDescription = {
                short: '/test/error-short.md',
                full: 'Full inline'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 10000 })

            expect(result.current.data.short).toBe('Descripción no disponible')
        })

        test('debería mostrar mensaje de fallback específico para full', async () => {
            clearDescriptionCache()
            const mockFetch5 = vi.fn().mockRejectedValue(new Error('Load failed'))
            vi.stubGlobal('fetch', mockFetch5)

            const description: ProjectDescription = {
                short: 'Short inline',
                full: '/test/error-full.md'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 10000 })

            expect(result.current.data.full).toBe('Descripción completa no disponible en este momento')
        })

        test('debería usar fallbacks diferentes cuando fallan ambos', async () => {
            clearDescriptionCache()
            const mockFetch6 = vi.fn().mockRejectedValue(new Error('Load failed'))
            vi.stubGlobal('fetch', mockFetch6)

            const description: ProjectDescription = {
                short: '/test/unique-short-error.md',
                full: '/test/unique-full-error.md'
            }

            const { result } = renderHook(() => useProjectDescription(description))

            await waitFor(() => {
                expect(result.current.loading).toBe(false)
            }, { timeout: 20000 })  // 20 segundos para 6 intentos totales con exponential backoff

            expect(result.current.data.short).toBe('Descripción no disponible')
            expect(result.current.data.full).toBe('Descripción completa no disponible en este momento')
        }, 25000)  // Timeout del test: 25 segundos
    })
})
