import React from 'react'
import Image from 'next/image'

const OnePiecePage = () => {
  return (
    <div className='max-container min-h-screen w-full bg-white p-4 py-10'>
        {/* title */}
        <div className='grid w-full h-full border-4 border-black'>
            <div>
                <h1 className='font-roman text-center text-[200px]'>WANTED</h1>
            </div>
            <div className='border-2 border-black'>
                <p>JAPANESE: with the damage to the city of egghead, we are asking for assistance in trying to finally apprehend the infamous criminal Monkey D. Luffy </p>
            </div>

            {/* units used: lg */}
            <div className='max-lg:grid lg:flex lg:flex-row border-2 border-black gap-2'>
                <div className='grid max-lg:w-[100%] lg:w-1/3'>
                    
                    <div className='relative w-[100%] h-[400px]'>
                        <Image
                            className='bg-black'
                            src={'/piece/luffy-rise.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                        
                        />
                        {/* <Image
                            className='bg-black'
                            src={'/piece/luffy-rise.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                        
                        /> */}
                    </div>

                    <p>with the damage to the city of egghead, we are asking for assistance in trying to finally apprehend the infamous criminal Monkey D. Luffy </p>
                </div>
                <div className='grid max-lg:w-[100%] lg:w-2/3'>
                    <p>with the damage to the city of egghead, we are asking for assistance in trying to finally apprehend the infamous criminal Monkey D. Luffy </p>
                    
                    <div className='relative w-[100%] h-[400px]'>
                        <Image
                            className='bg-black'
                            src={'/piece/luffy-punch.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                        
                        />
                        {/* <Image
                            className='bg-black'
                            src={'/piece/luffy-rise.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                        
                        /> */}
                    </div>
                </div>
                
            </div>

            <div className='border-2 border-black'>
                <p className='font-bold'>ENGLISH: with the damage to the city of egghead, we are asking for assistance in trying to finally apprehend the infamous criminal Monkey D. Luffy </p>
            </div>

            <div className='grid border-2 border-black py-4'>
                <div className=' flex gap-2 justify-center'>
                    <Image
                        className=''
                        src={'/piece/berrysymbol.png'}
                        width={120}
                        height={50}
                        priority
                    />
                    <h1 className='font-roman font-bold text-center text-[150px]'>3,000,000,000</h1>
                </div>

                <div className='text-center'>
                    <h1 className='font-roman font-bold text-[100px]'>DEAD OR ALIVE</h1>
                </div>
            </div>

            <div className='max-lg:grid lg:flex lg:flex-row border-2 border-black gap-2'>
                
                <div className='grid max-lg:w-[100%] lg:w-2/3'>
                    <p>with the damage to the city of egghead, we are asking for assistance in trying to finally apprehend the infamous criminal Monkey D. Luffy </p>
                    <div className='relative w-[100%] h-[400px]'>
                        <Image
                            className='bg-black'
                            src={'/piece/luffy-punch.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                        
                        />
                        {/* <Image
                            className='bg-black'
                            src={'/piece/luffy-rise.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                        
                        /> */}
                    </div>
                
                </div>

                <div className='grid max-lg:w-[100%] lg:w-1/3'>
                    <div className='relative w-[100%] h-[400px]'>
                        <Image
                            className='bg-black'
                            src={'/piece/luffy-charge.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                        
                        />
                        {/* <Image
                            className='bg-black'
                            src={'/piece/luffy-rise.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                        
                        /> */}
                    </div>
                    <p>with the damage to the city of egghead, we are asking for assistance in trying to finally apprehend the infamous criminal Monkey D. Luffy </p>
                
                </div>

            </div>
            


        </div>
    </div>
  )
}

export default OnePiecePage