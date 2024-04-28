import Image from 'next/image'

const JujutsuPage = () => {
  return (
    <div className='max-container min-h-screen w-full bg-white p-4 py-10'>
        
        <div className='grid w-full h-full gap-10'>
            {/* calmity */}
            <div className='grid justify-center'>
                <h1 className='font-archivo font-bold leading-none tracking-wide text-[200px]'>カラミティ</h1>
            </div>

            {/* sukana */}
            {/* <div className='relative w-[100%] h-[400px] rotate-2 overflow-hidden px-32'>
                <Image
                    className=''
                    src={'/jujutsu/sukana-arrow.gif'}
                    alt='gif'
                    fill
                    // style={{objectFit: 'contain'}}
                    style={{objectFit: 'cover'}}
                />
            </div> */}
            <div className='relative w-full h-[400px] overflow-hidden'>
                <div className="absolute inset-0 bg-black transform skew-x-12 scale-x-[-1]">
                    <Image
                        src={'/jujutsu/gojo-domain.gif'}
                        alt='gif'
                        fill
                        // style={{objectFit: 'contain'}}
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>

            {/* text */}
            <div className='relative'>

                <div className='grid absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                    {/* <h1 className='font-noto font-semibold text-red-600 text-6xl'>渋谷事件</h1> */}
                    <h1 className='font-noto font-bold text-red-600 text-6xl'>SHIBUYA</h1>
                    <h1 className='font-noto font-semibold text-red-600 text-6xl'>INCIDENT</h1>
                    <p className='font-noto font-semibold text-red-600 text-2xl'> アーク</p>
                    {/* <div className="w-16 h-16 bg-gray-300 rounded-xl rotate-12"></div> */}
                </div>
                {/* main */}
                <div className='relative z-0 w-full h-[300px]'>
                    <Image
                        className=''
                        src={'/jujutsu/shibuya-arc-black.gif'}
                        alt='gif'
                        fill
                        // style={{objectFit: 'contain'}}
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>

            {/* gojo */}
            {/* <div className='relative w-full h-[400px] -rotate-2 overflow-hidden px-32'>
                <Image
                    className='bg-black'
                    src={'/jujutsu/gojo-domain.gif'}
                    alt='gif'
                    fill
                    style={{objectFit: 'contain'}}
                    // style={{objectFit: 'cover'}}
                />
            </div> */}

            <div className='relative w-full h-[400px] overflow-hidden'>
                <div className="absolute inset-0 bg-black transform -skew-x-12">
                    <Image
                        src={'/jujutsu/sukana-arrow.gif'}
                        alt='gif'
                        fill
                        // style={{objectFit: 'contain'}}
                        style={{objectFit: 'cover'}}
                    />
                </div>
            </div>

            <div className='grid justify-center'>
                <h1 className='font-archivo font-bold leading-none tracking-wide text-[150px]'>CALMITY</h1>
            </div>

        </div>

      
    </div>
  )
}

export default JujutsuPage