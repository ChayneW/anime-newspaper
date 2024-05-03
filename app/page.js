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

          <div className='w-full grid justify-center my-10'>

            <div className='max-lg:grid lg:flex lg:flex-row w-[60%] mx-auto bg-[#31363F] rounded-md p-5'>
              <div className='relative grid justify-center rounded-lg max-lg:py-5'>
                <Image
                className='rounded-lg'
                  src={'/profile/logo-white.png'}
                  alt='avatar'
                  width={200}
                  height={200}
                />
              </div>

              <div className='px-10'>
                <p className='break-words leading-7 text-xl text-center text-white'>
                  Hi! I&apos;m Chayne (&apos;Shane&apos;), and I&apos;m a Web Developer from South Florida. 
                  After seeing @todd.pham&apos;s page, I was heavily inspired to make this website and these designs.

                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer/>
    </>
  )
}
