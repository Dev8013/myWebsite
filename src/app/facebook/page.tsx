import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import React from 'react'

const Facebook = () => {
  return (
    <div className='bg-black min-h-[100vh] w-full'>
      <div className='flex flex-col'>
            <Navbar />
            <div className='flex items-center p-4 md:px-8 lg:px-16 xlg:px-32 2xl:px-64 mt-6'>
              <div>
              <div className=''>
                  <div className='rounded-full absolute w-[250px] h-[250px]'>
                    <Image src='/avatar.jpg' alt='' fill className='object-cover rounded-full ring-blue-500 ring-2'/>
                  </div>
              </div>
              </div>
              <div className='flex flex-col'>
                  <div className=''>

                  </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Facebook

