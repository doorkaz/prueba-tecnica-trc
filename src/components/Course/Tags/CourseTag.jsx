import { CategoryIcon, ProfessorIcon } from '@/components'

// Carga los tags que pueda tener una Card de un Course según su tipo
export const CourseTag = ({ type, children }) => {
  const Tag = () => {
    // Según el type decide que retornar, si un tag de categoría o un tag de docente
    if (type === 'category') {
      return <><CategoryIcon /><span className='truncate'>{children}</span></>
    } else if (type === 'professor') {
      return <><ProfessorIcon /><span className='truncate'>Docente: {children}</span></>
    } else {
      return <p>Error de tipo</p>
    }
  }

  return (
    <div className='flex items-center gap-1 bg-gray-700 px-2 py-1 rounded-full text-sm text-gray-200 truncate'>
      <Tag />
    </div>
  )
}
