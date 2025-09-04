import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
// import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className='p-5 flex justify-between items-center border shadow-md'>
      <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
      />
      <button >Get started</button>
      <UserButton />
    </div>

  )
}

export default Header
