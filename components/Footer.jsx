import React from 'react'
import { BsTwitter } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer
      className='w-full bg-[#10181B] h-[100px]'>
      <hr></hr>
      <div className=' bg-[#10181B] max-container rounded-b-xl flex justify-between py-5 px-10'>
        {/* <p>© Ronin Steps</p> */}
        <Image
          id='logo'
          src="https://res.cloudinary.com/db8opthjz/image/upload/v1703042739/chaynedev-high-logo-transparent_aescxi.png"
          height={150}
          width={100} 
          alt='banner'
        />
        <div className='flex gap-4'>
          <Link
            rel=""
            href="https://github.com/ChayneW"
            target="_blank"
            >
              <AiFillGithub size={20}/>
            </Link>
          <Link
            rel=""
            href="https://www.linkedin.com/in/chayne-s-white/"
            target="_blank"
            >
              <BsLinkedin size={20}/>
            </Link>
          <Link
            rel=""
            href="https://twitter.com/CswAutomation"
            target="_blank"
            >
              <BsTwitter size={20}/>
            </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer