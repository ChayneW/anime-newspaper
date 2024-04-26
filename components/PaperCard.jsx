'use client'
import React, {Suspense} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LoadingCard from './LoadingCard'

const PaperCard = ({name, gif, page}) => {
  return (
    <Suspense fallback={<LoadingCard/>}>
        <div className={`relative grid justify-center py-4`}>
            <h1 className='text-center py-2 text-white'>{name}</h1>
            <div className='relative w-[380px] h-[500px] p-4'>
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