'use client'
import React, {Suspense} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {newsPapers} from '../data/constants'
import LoadingCard from '@/components/LoadingCard'
import PaperCard from '@/components/PaperCard'
import { FaInstagram } from "react-icons/fa";
import Footer from '@/components/Footer'
import { MotionDiv, variants } from '../components/MotionDiv'
import { AnimatePresence } from 'framer-motion'


export default function Home() {

  return (
    <>
      <AnimatePresence>
        <MotionDiv
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{
            // using index of card as a index timer to sequentially show cards:
            delay: .8,
            ease: 'easeInOut',
            duration: .5
          }}
        >
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
                  <MotionDiv
                  key={_index}
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                  // using index of card as a index timer to sequentially show cards:
                  delay: _index * 0.25,
                  ease: 'easeInOut',
                  duration: .5,
                  layout: {
                      duration: .5,
                      type: "spring",
                  }
                  }}
                  >
                    <PaperCard
                      key={_index}
                      name={paper?.name}
                      gif={paper?.gif}
                      page={paper?.page}
                    />
                  </MotionDiv>
                  ))}
              </div>

              <div className='w-full grid justify-center my-10'>
              <MotionDiv
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  transition={{
                  // using index of card as a index timer to sequentially show cards:
                  delay: 1,
                  ease: 'easeInOut',
                  duration: .5,
                  layout: {
                      duration: .5,
                      type: "spring",
                  }
                  }}
                  >
                <div className='max-lg:grid lg:flex lg:flex-row w-[60%] mx-auto bg-[#31363F] rounded-xl p-5'>
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
                    <p className='break-words leading-7 max-md:text-sm md:text-xl text-center text-white'>
                      Hi! I&apos;m Chayne (&apos;Shane&apos;), and I&apos;m a Web Developer from South Florida. 
                      After seeing @todd.pham&apos;s page, I was heavily inspired to make this website and these designs.
                      <br></br>
                      <br></br>
                      Hope you enjoy it!
                    </p>
                  </div>

                </div>
              </MotionDiv>
              </div>

            </div>
          </main>
          <Footer/>
        </MotionDiv>
      </AnimatePresence>
    </>
  )
}
