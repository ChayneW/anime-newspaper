import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='flex justify-around align-middle'>
            
            <div className='flex justify-around gap-4 text-white'>
                <Link href={'/'}>
                    <h1 className='self-center text-white'>Home</h1>
                </Link>

                <Link href={'/gundam'}>
                    <h1 className='self-center text-white'>Gundam Wing</h1>
                </Link>

                <Link href={'/neon'}>
                    <h1 className='self-center text-white'>Neon Genesis Evangelion</h1>
                </Link>

                <Link href={'/titan'}>
                    <h1 className='self-center text-white'>Attack On Titan</h1>
                </Link>
            </div>

            {/* <div>
                <h1 className='text-center  font-achivo text-3xl'>ANIME NEWS:</h1>
            </div> */}

            <div className='flex gap-2'>    
                {/* <h1 className='self-center text-white'>Chayne.dev</h1> */}
                <div className='grid relative w-[50px] h-[50px] py-5'>
                    <Image
                        className='rounded-lg'
                        src={"/chaynedev.png"}
                        alt='test logo'
                        fill
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar