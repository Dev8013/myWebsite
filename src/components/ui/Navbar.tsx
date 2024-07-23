import Image from 'next/image'
import React from 'react'
import { Button } from './button'

const Navbar = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between p-2'>
            <div className='flex rounded-full'>
            <Image src='/avatar.jpg' width={80} height={80} alt='' className='w-20 h-20 object-cover ring ring-white rounded-full' /> 
            </div>
            <div className='flex items-center'>
                <h1 className='text-white text-xl'>Really_DevOps <b>facebook</b>
                </h1>
            </div>
            <div className='flex items-center'>
                <Button className='bg-green-500'>Home</Button>
            </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
