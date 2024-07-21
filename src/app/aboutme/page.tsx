import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='bg-black min-h-[100vh] w-full'>
      <div className='flex flex-col p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <div className='w-full h-[400px] mt-8 relative'>
          <div className='absolute w-full h-[300px] flex ring-2 ring-white border-1 rounded-md'>
            <Image src='/nt.jpg' alt='' fill className='rounded-md object-cover' />
          </div>
          <div className='absolute bottom-0 left-[42%] w-[200px] h-[200px]'>
            <Image alt='' src='/avatar.jpg' fill className='rounded-full object-cover border-2 ring-2 ring-white' />
          </div>
        </div>
        <div className='flex '>
          <div className='flex flex-col'>
            <div className='mb-2 px-6'>
              <h1 className='text-white font-semibold text-lg'>Dev Bhardwaj</h1>
            </div>
            <div className='flex items-center gap-4 px-6'>
              <Button className='bg-green-500'>Follow</Button>
              <Button className='bg-yellow-500'>Support</Button>
            </div>
            <div className='flex flex-col  text-white mt-4'>
              <div className='flex items-center gap-2'>
                <Image src='/people.png' alt='' width={60} height={60} />
                <span>59 Followers</span>
              </div>
              <div className='flex items-center gap-2'>
                <Image src='/location.png' alt='' width={60} height={60} />
                <span>India</span>
              </div>
              <div className='flex items-center gap-2'>
                <Image src='/mail.png' alt='' width={60} height={60} />
                <span>mail@gmail.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <Image src='/link.png' alt='' width={60} height={60} />
                <Link href='https//:www.foe.net'>www.foe.net</Link>

              </div>
            </div>
          </div>
          <div className='flex mt-5 justify-end'>
            <div className='flex m-4 ring-1 ring-white rounded-md p-4 mt-4'>
              <div className=''>
                <h1 className='text-white'>My Projects: </h1>
                <div className='grid grid-cols-3 mt-4 items-center gap-4'>
                  <Button className="bg-gray-500 hover:bg-red-500 hover:text-white">facebook-2.0</Button>
                  <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">AI-MOCKER-Interview</Button>
                  <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">Front-End-Society-App</Button>
                  <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">lamasocial</Button>
                  <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">Halo Community</Button>
                  <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">cu-front-end</Button>
                  <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">Music player</Button>
                </div>
              </div>
            </div>
            <div className='hidden md:flex m-4'>
            <div className=' p-4'>
                  <div>
                    <h1 className='text-white'>Things i Like: </h1>
                  </div>
                  <div>
                    <h1 className='text-white'>Things i don't Like: </h1>
                  </div>
                  <div>
                    <h1 className='text-white'>Anime i like: </h1>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
