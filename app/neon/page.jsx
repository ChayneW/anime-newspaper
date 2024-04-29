import Image from 'next/image'

const NeonPage = () => {
  return (
    <main className='max-container min-h-screen bg-white py-5'>
      <div className='w-full grid px-5'>
        <h1 className='text-3xl font-bold'>心の奥底では、もう二度と愛することはできないと思っている。私はすべてを失った, 私はすべてを失った, 愛するものすべてを</h1> 
        {/* <h1 className='text-3xl font-bold'>私はすべてを失った, 愛するものすべてを</h1> */}
      </div>

      <div className='max-xl:grid xl:flex'>
        {/* <div className=''> */}
          <p className='font-noto max-xl:px-5 xl:pl-10 text-center text-[26px] font-bold xl:[writing-mode:vertical-lr]'>
            エスケープ・トゥ・ザ・ビギニング 鷺巣詩郎監督 庵野秀明（総監督、第26話監督）
          </p>
        {/* </div> */}
      
        <div className="w-full h-full grid px-10">

          <h1 className='font-roman max-lg:text-5xl lg:text-7xl xl:text-8xl text-center'>OPENING OF DREAM</h1>
          <div className="relative max-xl:min-w-[100%] max-md:min-h-[50vh] md:max-xl:min-h-[100vh] xl:min-w-[1000px] xl:min-h-[1000px]">
            <Image
              className='relative justify-end bg-black'
            //   src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNtOXk0cHEzMnE3b2pmc2plMTQ5bXE1ajR6OHVmbGRycTA5MGZnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F8eKDINru1sk0/giphy.gif'
              src={'/neon-evan.gif'}
              alt='gif'
              fill
              loading='lazy'
              // style={{objectFit: 'contain'}}
              style={{objectFit: 'cover'}}
            
            />
          </div>
        </div>
      </div>
      
      <div className='grid justify-center xl:justify-end px-5 xl:pl-5 xl:pr-10'>
        {/* <h1 className='font-roman text-[90px] text-center'>THE END OF EVANGELION</h1> */}
        <h1 className='font-roman leading-none max-lg:text-5xl lg:text-7xl xl:text-[90px] text-center lx:text-right'>THE END OF EVANGELION</h1>
        {/* <h1 className='font-noto font-bold text-[56px] text-center'>鷺巣詩郎 - 夢のオープニング SHIRO SAGISU</h1> */}
        <h1 className='font-noto leading-none line-clamp  font-bold max-xl:text-4xl xl:text-[56px] text-center'>鷺巣詩郎 - 夢のオープニング SHIRO SAGISU</h1>
        {/* <h1 className='font-roman text-[58px]'>SHIRO SAGISU</h1> */}
        {/* </div> */}
        <p className='font-noto font-semibold text-xl'>2. 1997年7月19日に公開されたアニメ映画「新世紀エヴァンゲリオン」は、TVアニメ化されなかった第25話「AIR」（空気）と第26話「心はあなたと」で構成されている。</p>
      </div>
    </main>
  )
}

export default NeonPage