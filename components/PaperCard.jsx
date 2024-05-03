'use client'
import React, {useState, Suspense} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LoadingCard from './LoadingCard'

const PaperCard = ({name, gif, page}) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    return (
        <div className={`relative grid justify-center py-4`}>

            <div className='relative z-0 w-[380px] h-[500px] p-4 max-md:p-6'>
                <div className='absolute z-10 top-[10%] right-5 rounded-lg bg-gray-900 opacity-70 p-2' >
                    <Image
                        className=''
                        src={'/arrow-diagonal.svg'}
                        width={30}
                        height={30}
                        loading='lazy'
                    />
                </div>

                <div className='absolute z-10 bottom-[10%] left-5 bg-gray-400 rounded-lg px-2'>
                    <h1 className='font-bitter text-center font-bold py-2 text-white'>{name}</h1>
                </div>
                
                <Link
                    href={`/${page}`}
                >
                    <Image
                        className='rounded-xl'
                        src={`/${gif}`}
                        fill
                        priority
                        objectFit='cover'
                        onLoad={handleImageLoad}
                    />
                    {imageLoaded ? null : <div className="absolute inset-0 flex justify-center items-center"><LoadingCard/></div>}
                </Link>
            </div>
        </div>

    )
    }

export default PaperCard