import Image from 'next/image'

const KillPage = () => {
  return (
    <div className='max-container min-h-screen w-full bg-white p-4'>
        <div className='grid w-full border-4 border-black p-4'>
            
            <div className='px-5'>
                <h1>このシリーズは、父親を殺した犯人を捜す浮浪児の少女、馬渡龍子の姿を描いている。彼女は、本能字学園の鉄の意志を持つ生徒会長、鬼龍院皐月や、彼女の母親である鬼龍院羅暁のファッション帝国と激しく対立することになる。</h1>
                <h1 className='font-roman max-xl:text-[5rem] xl:text-[180px] text-center tracking-wide leading-none'>
                    THE CLIMB
                </h1>
            </div>

            <div className='flex flex-row gap-5'>
                <div className="relative w-[50%] h-[300px]">
                    <Image
                        src={'/kill-start.gif'}
                        fill
                        // objectFit='cover'
                        style={{objectFit: 'cover'}}
                    />
                </div>
                <div className="relative w-[50%] h-[300px]">
                    <Image
                        className='bg-black'
                        src={'/kill-satsuki-stare.gif'}
                        fill
                        // objectFit='cover'
                        style={{objectFit: 'contain'}}

                    />
                </div>
            </div>
            
            <div className='py-5'>
                <div className='relative w-[100%] h-[50vh]'>
                {/* <div className='relative w-[100%] h-[300px]'> */}
                    <Image
                        className='bg-black'
                        src={'/kill-transform.gif'}
                        // src={'/kill-fight.gif'}
                        fill
                        // objectFit='cover'
                        // style={{objectFit: 'contain'}}
                        style={{objectFit: 'contain'}}
                    />

                </div>
            </div>

            <div className='pb-5'>
                <div className='max-xl:grid xl:flex xl:flex-row max-xl:gap-4 xl:gap-5'>
                    
                    <div className='relative max-xl:w-[100%] xl:w-1/3 h-[400px]'>
                        
                        {/* image for larger screens */}
                        <Image
                            className='max-xl:hidden xl:grid justify-center'
                            src={'/kill-mako-fight.gif'}
                            fill
                            // objectFit='cover'
                            style={{objectFit: 'cover'}}
                            // style={{objectFit: 'contain'}}
                        />

                        {/* image for smaller screen */}
                        <Image
                            className='max-xl:block xl:hidden grid bg-black justify-center'
                            src={'/kill-mako-fight.gif'}
                            fill
                            // objectFit='cover'
                            // style={{objectFit: 'cover'}}
                            style={{objectFit: 'contain'}}
                        />
                    </div>
                    <div className='relative max-xl:w-[100%] xl:w-2/3 h-[400px]'>
                        <Image
                            className='max-xl:hidden xl:block'
                            // src={'/kill-transform.gif'}
                            src={'/kill-fight.gif'}
                            fill
                            style={{objectFit: 'cover'}}
                            // style={{objectFit: 'contain'}}
                        />
                        <Image
                            className='max-xl:block xl:hidden bg-black'
                            // src={'/kill-transform.gif'}
                            src={'/kill-fight.gif'}
                            fill
                            // style={{objectFit: 'cover'}}
                            style={{objectFit: 'contain'}}
                        />

                    </div>
                </div>
            </div>


        </div>

        
      
    </div>
  )
}

export default KillPage