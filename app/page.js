'use client'
import React, {Suspense} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {newsPapers} from '../data/constants'
import LoadingCard from '@/components/LoadingCard'
import PaperCard from '@/components/PaperCard'
import { FaInstagram } from "react-icons/fa";

export default function Home() {

  return (
    <main className='max-container min-h-screen'>
      <div className='grid'>

        <div className='flex justify-between p-10'>
          <h1 className='font-poppins text-3xl text-left text-white'>Breaking News:</h1>
          
          <div>
            <Link 
              href="https://www.instagram.com/todd.pham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="flex gap-2 align-baseline"
              target="_blank"
              >
                <Image
                  src={'/instagram.svg'}
                  width={20}
                  height={20}
                />
                <p className='font-poppins text-white'>Inspired by @todd.pham</p>
              </Link>
            </div>
            {/* <FaInstagram size={20}/> */}
            

        </div>
        
        <div className='grid xl:grid-cols-3'>
          {newsPapers.map((paper, _index) => (
              <PaperCard
                key={_index}
                name={paper.name}
                gif={paper.gif}
                page={paper.page}
              />
            ))}
            {/* <Suspense key={_index} fallback={<LoadingCard/>}>
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
            </Suspense> */}
            
          {/* <LoadingCard/> */}
        </div>

      </div>
    </main>
  )
}
