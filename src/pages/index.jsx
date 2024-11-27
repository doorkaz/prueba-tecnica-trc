import React, { useState, useEffect } from 'react'
import { Card, Navbar } from '@/components'
import { useFetchAndLoad } from '@/hooks'
import { getCourses } from '@/services'
import { getFilteredCoursesByTitle } from '@/utilities'

export default function Home () {
  const [courses, setCourses] = useState(null)
  const [searched, setSearched] = useState('') // Maneja el estado del input de búsqueda
  const { loading, callEndpoint } = useFetchAndLoad() // Usa el custom hook 'useFetch para cargar el loading y llamar al servicio

  // Llamado a la API para obtener los cursos
  const getCoursesData = async () => await callEndpoint(getCourses())

  // Guarda el input de búsqueda
  const handleSearchChange = (e) => setSearched(e.target.value)

  useEffect(() => {
    // Almacena directamente en el estado el array de cursos
    getCoursesData().then((result) => setCourses(result.data.data))
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Navbar className='bg-primary h-[10%] px-8 py-6' />
      <main className='bg-secondary-dark min-h-screen h-full px-[40px] sm:px-[80px] pb-12 flex flex-col items-center'>
        <div className='w-full py-2 mb-2'>
          <h1 className='text-start text-2xl'>Prueba técnica TRC Sports</h1>

          {/* Buscador de cursos, se reutiliza el diseño del input de las bases en desarrollo */}
          <div className='flex w-full justify-end'>
            <input
              name='course'
              placeholder='Buscar curso...'
              className='w-full my-1 max-w-[300px] appearance-none border border-button-dark-border rounded py-2 pl-6 pr-4 text-gray-300 bg-secondary-dark h-12 cursor-pointer'
              type='search'
              autoComplete='none'
              value={searched}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        {/* Grid de cursos */}
        {
          loading
            ? 'Cargando...'
            : courses && (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full'>
                {
                  getFilteredCoursesByTitle(courses, searched).map((course) => (
                    <Card key={course.id} props={course} />
                  ))
                }
              </div>
            )
        }
      </main>
    </>
  )
}
