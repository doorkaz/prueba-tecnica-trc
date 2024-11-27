import axios from 'axios'
import { loadAbort } from '@/utilities'

// Servicio para obtener todos los cursos desde la API
export const getCourses = () => {
  const controller = loadAbort()
  const URL = 'https://class.trcsports.com/api/courses'

  // Retorna una promesa de AxiosResponse, con un controller y su signal
  return {
    call: axios.get(URL, { signal: controller.signal }),
    controller
  }
}
