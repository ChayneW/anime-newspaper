'use client'
import { useState } from 'react'
import Image from 'next/image'
import LoadingCard from '@/components/LoadingCard';

const NeonPage = () => {

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };


  return (
    <main className='max-container min-h-screen bg-white py-5'>
      <div className='w-full grid px-5'>
        <h1 className='text-3xl font-bold'>心の奥底では、もう二度と愛することはできないと思っている。私はすべてを失った, 私はすべてを失った, 愛するものすべてを</h1> 
      </div>

      <div className='max-xl:grid xl:flex'>
          <p className='font-noto max-xl:px-5 xl:pl-10 text-center text-[26px] font-bold xl:[writing-mode:vertical-lr]'>
            エスケープ・トゥ・ザ・ビギニング 鷺巣詩郎監督 庵野秀明（総監督、第26話監督）
          </p>
      
        <div className="w-full h-full grid px-10">

          <h1 className='font-roman max-lg:text-5xl lg:text-7xl xl:text-8xl text-center'>OPENING OF DREAM</h1>
          <div className="relative max-xl:min-w-[100%] max-md:min-h-[50vh] md:max-xl:min-h-[100vh] xl:min-w-[1000px] xl:min-h-[1000px]">
            <Image
              className='relative justify-end bg-black'
              src={'/neon/neon-evan.gif'}
              alt='gif'
              fill
              priority
              // style={{objectFit: 'contain'}}
              style={{objectFit: 'cover'}}
              onLoad={handleImageLoad}
            />
            {imageLoaded ? null : <div className="absolute inset-0 flex justify-center items-center"><LoadingCard/></div>}
          </div>
        </div>
      </div>
      
      <div className='grid justify-center xl:justify-end px-5 xl:pl-5 xl:pr-10'>
        <h1 className='font-roman leading-none max-lg:text-5xl lg:text-7xl xl:text-[90px] text-center lx:text-right'>THE END OF EVANGELION</h1>
        <h1 className='font-noto leading-none line-clamp  font-bold max-xl:text-4xl xl:text-[56px] text-center'>鷺巣詩郎 - 夢のオープニング SHIRO SAGISU</h1>
        <p className='font-noto font-semibold text-xl'>2. 1997年7月19日に公開されたアニメ映画「新世紀エヴァンゲリオン」は、TVアニメ化されなかった第25話「AIR」（空気）と第26話「心はあなたと」で構成されている。</p>
      </div>
    </main>
  )
  }

export default NeonPage