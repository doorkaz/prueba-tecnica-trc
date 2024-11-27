import React from 'react'
import Image from 'next/image'
import { CourseTag } from '@/components'
import { containsHTML, formatTimestampToDate } from '@/utilities'

export const Card = ({ props }) => {
  const image = props.image ? props.image : ''
  const title = props.title ? props.title : 'Título'
  const createdAt = formatTimestampToDate(props.created_at)
  const category = props.category ? props.category : 'unknown'
  const professor = props.profesor.full_name ? props.profesor.full_name : 'TRC'

  // Renderiza la description, si es HTML se usa como tal, si no se usa un paragraph
  const description = () => {
    const descriptionValue = props.description ? props.description : 'Descripción'

    // Revisa si la descripcion contiene HTML, renderiza usando dangerouslySetInnerHTML
    if (containsHTML(descriptionValue)) {
      return <div className='line-clamp-2' dangerouslySetInnerHTML={{ __html: descriptionValue }} />
    }

    return (<p className='line-clamp-2'>{description}</p>)
  }

  return (
    <article key={props.id} className='bg-primary w-full h-full'>
      {/* Imagen del curso */}
      <picture>
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-[160px] xl:h-[200px] object-cover'
          loading='lazy'
        />
      </picture>

      {/* Contenedor de la información */}
      <div className='flex flex-col p-4 w-full'>
        <div className='flex w-full'>
          {/* Título y fecha de creación */}
          <h2 className='font-bold truncate'>{title}</h2>
          <small className='ms-auto'>{createdAt}</small>
        </div>

        {/* Descripción */}
        {description()}

        {/* Tags del curso, categoría y docente */}
        <div className='flex flex-wrap gap-2 mt-2'>
          <CourseTag type='category'>{category}</CourseTag>
          <CourseTag type='professor'>{professor}</CourseTag>
        </div>
      </div>
    </article>
  )
}
