'use client'
import React, {Suspense} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LoadingCard from './LoadingCard'

const PaperCard = ({name, gif, page}) => {
  return (
    <Suspense fallback={<LoadingCard/>}>
        <div className={`relative grid justify-center py-4`}>

            <div className='relative z-0 w-[380px] h-[500px] p-4'>
                <div className='absolute z-10 top-[10%] right-10 bg-blue-400 rounded-lg px-2' >
                    <h1 className='text-center font-bold py-2 text-white'>test</h1>
                </div>

                <div className='absolute z-10 bottom-[10%] left-10 bg-gray-400 rounded-lg px-2'>
                    <h1 className='text-center font-bold py-2 text-white'>{name}</h1>
                </div>
                
                <Link
                    href={`/${page}`}
                >
                    <Image
                    className='rounded-xl'
                    src={`/${gif}`}
                    fill
                    objectFit='cover'
                    />
                </Link>
            </div>
        </div>
    </Suspense>
  )
}

export default PaperCard