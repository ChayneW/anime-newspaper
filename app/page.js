'use client'
import React, {Suspense} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {newsPapers} from '../data/constants'
import LoadingCard from '@/components/LoadingCard'
import PaperCard from '@/components/PaperCard'
import { FaInstagram } from "react-icons/fa";
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <>
      <main className='max-container min-h-screen'>
        <div className='grid'>

          <div className='max-xl:grid max-xl:justify-center xl:flex xl:justify-between p-10 gap-2'>
            <h1 className='font-poppins text-3xl text-left text-white'>Breaking News:</h1>
            
            <div className=''>
              <Link 
                href="https://www.instagram.com/todd.pham?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="flex gap-2 align-baseline"
                target="_blank"
                >
                  <Image
                    src={'/instagram.svg'}
                    width={20}
                    height={20}
                    loading='lazy'
                  />
                  <p className='font-poppins text-white'>Inspired by @todd.pham</p>
                </Link>
              </div>
            </div>
          
          <div className='grid xl:grid-cols-3'>
            {newsPapers.map((paper, _index) => (
                <PaperCard
                  key={_index}
                  name={paper?.name}
                  gif={paper?.gif}
                  page={paper?.page}
                />
              ))}
          </div>

          <div className=''>

          </div>

        </div>
      </main>
      <Footer/>
    </>
  )
}
