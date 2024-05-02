'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

import React, {useState, useEffect} from 'react'
import { MotionDiv, variants } from '../components/MotionDiv'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    console.log('toggleMenu activated')
    // setIsOpen((prevOpen) => !prevOpen)
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <>
    <MotionDiv 
      className=''
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        // using index of card as a index timer to sequentially show cards:
        delay: .5,
        ease: 'easeInOut',
        duration: .5
      }}
      >
      <nav className='max-container py-10'>
        
        {/* small */}
        <div className='max-md:block md:hidden px-10'>
          <div className='flex justify-between self-center'>
            <Button 
              onClick={toggleMenu}
              className='grid self-center'
              >
                <Link href={'/'}>
                  <h1 className='text-3xl font-bold text-white'>ARCANA</h1>
                </Link>
            </Button>

            <div className='self-center'>
                <Image
                  className='rounded-lg'
                  src={"/chaynedev.png"}
                  alt='test logo'
                  height={100} 
                  width={80}
                />
            </div>
          </div>

          {isOpen ? (
            <div>
              {/* TEST PASS */}
              <div className='flex flex-col pt-5 text-white'>
                <Link href={'/'}
                  className='py-1 hover:text-black hover:bg-white'
                >
                  HOME /
                </Link>

                <Link href={'/gundam'}
                  // className='py-1 hover:bg-[#5A0202]'
                  className='py-1 hover:text-black hover:bg-white '
                >
                  GUNDAM WING /
                </Link>
                <Link href={'/lakill'}
                  className='py-1 hover:text-black hover:bg-white '
                >
                  KILL LA KILL /
                </Link>

                <Link href={'/titan'}
                  className='py-1 hover:text-black hover:bg-white '
                >
                  ATTACK ON TITAN /
                </Link>
                <Link href={'piece'}
                  className='py-1 hover:text-black hover:bg-white '
                >
                  ONE PIECE /
                </Link>
                <Link href={'jujutsu'}
                  className='py-1 hover:text-black hover:bg-white '
                >
                  JUJUTSU KAISEN /
                </Link>

                <Link href={'/neon'}
                  className='py-1 hover:text-black hover:bg-white '
                >
                  NEON GENESIS EVANGELION /
                </Link>
              </div>
            </div>  
          ) : (
            null
          // <div>
          //   TEST FAILED
          // </div>
          )}
        </div>


        {/* Large */}
        <div className='hidden md:block'>

            <div className='flex justify-around py-2'>
              <div className='grid'>
                <div className='space-x-3 text-white'>
                  <Link className="hover:text-black hover:bg-white" href={'/piece'}>ONE PIECE /</Link>
                  <Link className="hover:text-black hover:bg-white" href={'/titan'}>ATTACK ON TITAN /</Link>
                  <Link className="hover:text-black hover:bg-white" href={'/jujutsu'}>JUJUTSU KAISEN /</Link>
                </div>
                
                <div className='space-x-3 text-white'>
                  <Link className="hover:text-black hover:bg-white" href={'/gundam'}>GUNDAM WING /</Link>
                  <Link className="hover:text-black hover:bg-white" href={'/lakill'}>KILL LA KILL /</Link>
                  <Link className="hover:text-black hover:bg-white" href={'/neon'}>NEON GENESIS EVANGELION /</Link>
                </div>
              </div>
              
              <Link href={'/'} className='self-center'>
                <h1 className='text-3xl font-bold text-white'>ARCANA</h1>
              </Link>
            </div>
          <hr></hr>
        </div>
      </nav>
    </MotionDiv>
   </>  
  )
}

export default Navbar
