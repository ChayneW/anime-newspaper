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
      <nav className='max-container bg-[#121212] py-10'>
        
        {/* small */}
        <div className='max-md:block md:hidden'>
          <div className='flex justify-between'>
            <Button 
              onClick={toggleMenu}
              className='w-[120px] h-[120px]'>
                <Image
                  className=''
                  src={"/red-asterisk.svg"}
                  alt='test logo'
                  height={100} 
                  width={100}
                />
            </Button>

            <div className='self-center pr-10 '>
              <h1 className='text-2xl'>JETSET</h1>
            </div>
          </div>

          {isOpen ? (
            <div>
              {/* TEST PASS */}
              <div className='flex flex-col pt-5'>
                <Link href={'/'}
                  className='py-1 hover:bg-[#5A0202]'
                >
                  HOME /
                </Link>

                <Link href={'/gundam'}
                  className='py-1 hover:bg-[#5A0202]'
                >
                  GUNDAM WING /
                </Link>
                <Link href={'/lakill'}
                  className='py-1 hover:bg-[#5A0202]'
                >
                  KILL LA KILL /
                </Link>

                <Link href={'/titan'}
                  className='py-1 hover:bg-[#5A0202]'
                >
                  ATTACK ON TITAN /
                </Link>
                <Link href={'piece'}
                  className='py-1 hover:bg-[#5A0202]'
                >
                  ONE PIECE /
                </Link>
                <Link href={'jujutsu'}
                  className='py-1 hover:bg-[#5A0202]'
                >
                  JUJUTSU KAISEN /
                </Link>

                <Link href={'/neon'}
                  className='py-1 hover:bg-[#5A0202]'
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
          <div>

          </div>

        </div>


          {/* Large */}
          <div className='hidden md:block'>
              <div className='flex justify-around'>
                <div className='grid'>
                  <div className='space-x-3'>
                    <Link href={'/piece'}>ONE PIECE /</Link>
                    <Link href={'/titan'}>ATTACK ON TITAN /</Link>
                    <Link href={'/gundam'}>GUNDAM WING /</Link>
                  </div>
                  
                  <div className='space-x-3'>
                    <Link href={'/lakill'}>KILL LA KILL /</Link>
                    <Link href={'/neon'}>NEON GENESIS EVANGELION /</Link>
                    <Link href={'/jujutsu'}>JUJUTSU KAISEN</Link>
                  </div>
                </div>
                
                <h1 className='text-3xl font-bold'>JETSET</h1>
                
                <div className='grid grid-cols-2'>
                  <div className=''>
                    <h1>WANT TO CONSULT</h1>
                    <Link href={''}>CONTACT US</Link>
                  </div>
                  {/* <button>Login</button> */}
                  <div className='flex justify-center'>
                    <Button
                      // variant='destructive'
                      className='bg-red-600 rounded-xl h-[90%] w-[70%] text-black font-semibold'
                    >Login</Button>
                  </div>
                </div>

              </div>
            <hr></hr>
        </div>
      </nav>
    </MotionDiv>
   </>  
  )
}

export default Navbar
