import { useEffect, useState } from 'react'

// Hook que llama un endpoint y se preocupa de cancelar llamadas no utilizadas
export const useFetchAndLoad = () => {
  // Maneja el estado de la carga de los datos
  const [loading, setLoading] = useState(false)
  let controller // AbortController

  // Carga el resultado de una llamada a un endpoint
  const callEndpoint = async (axiosCall) => {
    // Cada llamada debe devolver un objeto con un call y opcionalmente un controller
    if (axiosCall.controller) controller = axiosCall.controller
    setLoading(true)

    let result = {}
    try {
      // Asigna el resultado de la llamada al endpoint
      result = await axiosCall.call
    } catch (err) {
      setLoading(false)
      throw err
    }

    setLoading(false)
    return result
  }

  // En caso de haber una nueva llamada al mismo servicio mientras
  // ya existe una, se cancela la llamada
  const cancelCall = () => {
    setLoading(false)
    controller && controller.abort()
  }

  // Limpia cualquier llamada en curso si el componente se deja de usar
  useEffect(() => {
    return () => {
      cancelCall()
    }
  }, [])

  return { loading, callEndpoint }
}
