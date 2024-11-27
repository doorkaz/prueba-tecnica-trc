import React from 'react'
import Image from 'next/image'
import { CourseTag } from '@/components'
import { formatTimestampToDate } from '@/utilities'

export const Card = ({ props }) => {
  return (
    <article key={props.id} className='bg-primary w-full h-full'>
      {/* Imagen del curso */}
      <picture>
        <Image
          src={props.image}
          alt={props.title}
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
          <h2 className='font-bold truncate'>{props.title ? props.title : 'Título'}</h2>
          <small className='ms-auto'>{formatTimestampToDate(props.created_at)}</small>
        </div>

        {/* Descripción */}
        <p className='line-clamp-2'>{props.description ? props.description : 'Descripción'}</p>

        {/* Tags del curso, categoría y docente */}
        <div className='flex flex-wrap gap-2 mt-2'>
          <CourseTag type='category'>{props.category ? props.category : 'unknown'}</CourseTag>
          <CourseTag type='professor'>{props.profesor.full_name ? props.profesor.full_name : 'TRC'}</CourseTag>
        </div>
      </div>
    </article>
  )
}
