import { Button } from '@/components/ui/button'
import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'
import React from 'react'

const Facebook = () => {
  return (
    <div className='bg-black min-h-[100vh] w-full'>
      <div className='flex flex-col'>
            <Navbar />
            <div className='flex gap-8 p-4 md:px-8 lg:px-16 xlg:px-32 2xl:px-64 mt-6'>
              <div className='flex flex-col gap-4'>
              <div className='w-[250px] h-[250px]'>
                  <div className='absolute w-[250px] h-[250px]'>
                    <Image src='/avatar.jpg' alt='' fill className='object-cover rounded-full ring-blue-500 ring-2'/>
                  </div>
              </div>
              <div className='text-white mt-4'>
                <h1 className='text-lg font-semibold'>Dev Bhardwaj</h1>
                <span className='text-lg'>^-^</span>
                <Button className='bg-green-500 mt-2 w-full'>GitHub</Button>
              </div>
              </div>
              <div className='flex flex-col '>
                  <div className=''>
                      <div className='relative h-[250px] w-full'>
                          <Image src='/nt.jpg' alt='' fill className='object-cover ring-1 ring-white rounded-md' />
                      </div>
                  </div>
                  <div className='text-white mt-8 flex flex-col'>
                    <h1 className='text-xl'>Description of the project: </h1>
                    <div className='flex'>
                    <span className='text-lg mt-1'>-></span>
                      <p className='text-sm p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae corrupti dolor libero doloremque animi nam fugit, ipsam ut neque veritatis officia molestiae, culpa exercitationem tempore voluptates ab. Doloribus, incidunt?</p>
                    </div>
                    <div className='text-white mt-2'>
                      <h1 className='text-xl'>Things i used:</h1>
                        <div className='flex items-center'>
                          <span className='text-lg'>-></span>
                            <Image alt='' src='/react.png' width={80} height={80} className='w-20 h-20' />
                            <Image alt='' src='/react.png' width={80} height={80} className='w-20 h-20' />
                        </div>
                    </div>
                    
                  </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Facebook

