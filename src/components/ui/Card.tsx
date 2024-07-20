import Image from 'next/image'
import React from 'react'
import ViewCounter from './ViewCounter'
//Todo imsert the link for discord and email
const Card = () => {
  return (
    <div>
      <div className='flex items-center gap-4 bg-gray-700 rounded-md'>
        <div className='flex p-4 items-center'>
            <Image alt='' src='/avatar.jpg' height={120} width={120} className='rounded-md w-30 h-30'/>
        </div>
        <div className='flex flex-col pr-4'>
            <div className='flex items-center'>
                <Image alt='' src='/mail.png' width={60} height={60}/>
                <span className='text-white font-semibold text-lg'>Contact</span>
            </div>
            <div className='flex flex-col ml-4 gap-2 mb-4'>
                <span className='text-white text-sm'>Discord: Really_DevOps</span>
                <span  className='text-white text-sm'>Email: bhardwajdev269@gmail.com</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
