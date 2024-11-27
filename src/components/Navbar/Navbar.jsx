import React from 'react'
import Image from 'next/image'

export const Navbar = ({ className }) => {
  const logoUrl = 'https://app.trcsports.com/_next/static/media/logo-white.45ee4e6e.svg'
  return (
    <nav className={className}>
      <div className='flex align-center w-full h-full'>
        <Image
          src={logoUrl}
          alt='trc'
          width={0}
          height={0}
          sizes='100vw'
          className='w-[120px] h-auto'
          priority
        />
      </div>
    </nav>
  )
}
