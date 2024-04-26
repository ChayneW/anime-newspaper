'use client'
import React, {Suspense} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {newsPapers} from '../data/constants'
import LoadingCard from '@/components/LoadingCard'

export default function Home() {

  return (
    <main className='max-container min-h-screen'>
      <div className='grid'>
        
        <div className='grid xl:grid-cols-3'>
          {newsPapers.map((paper, _index) => (
            <Suspense fallback={<LoadingCard/>}>
              <div key={_index} className={`relative grid justify-center py-4`}>
                <h1 className='text-center py-2 text-white'>{paper.name}</h1>
                <div className='relative w-[380px] h-[500px] p-4'>
                  <Link
                    href={`/${paper.page}`}
                  >
                    <Image
                      className='rounded-xl'
                      src={`/${paper.gif}`}
                      fill
                      objectFit='cover'
                    />
                  </Link>
                </div>
              </div>
            </Suspense>
          ))}
          {/* <LoadingCard/> */}
        </div>

      </div>
    </main>
  )
}
