import Image from 'next/image'

export default function Home() {
  return (
    <main className='max-container min-h-screen bg-white'>
      <div className='w-full grid px-5'>
        <h1 className='text-3xl font-bold'>心の奥底では、もう二度と愛することはできないと思っている。私はすべてを失った,</h1> 
        <h1 className='text-3xl font-bold'>私はすべてを失った,  愛するものすべてを</h1>
      </div>

      <div className='flex'>
        <div className='grid'>
          <p className='font-noto pl-10 text-center text-3xl font-bold [writing-mode:vertical-lr]'>
          エスケープ・トゥ・ザ・ビギニング 鷺巣詩郎監督 庵野秀明（総監督、第26話監督）
          </p>
        </div>
      
        <div className="w-full grid px-10">

          {/* <h1 className='font-roman text-[110px] text-end'>OPENING OF DREAM</h1> */}
          <h1 className='font-roman text-8xl text-center'>OPENING OF DREAM</h1>
          {/* <div className="relative w-[1050px] h-[1000px]"> */}
          <div className="relative min-w-[1000px] min-h-[1000px]">
            <Image
              className='relative justify-end bg-black'
              // src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNtOXk0cHEzMnE3b2pmc2plMTQ5bXE1ajR6OHVmbGRycTA5MGZnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F8eKDINru1sk0/giphy.gif'
              src={'/neon-evan.gif'}
              alt='gif'
              fill
              // style={{objectFit: 'contain'}}
              style={{objectFit: 'cover'}}
            
            />
          </div>
        </div>

      </div>
      
      <div className='grid justify-end pl-5 pr-10'>
        <h1 className='font-roman text-[90px] text-center'>THE END OF EVANGELION</h1>
        {/* <div className='flex w-full '> */}
          <h1 className='font-noto font-bold text-[56px] text-center'>鷺巣詩郎 - 夢のオープニング SHIRO SAGISU</h1>
          {/* <h1 className='font-roman text-[58px]'>SHIRO SAGISU</h1> */}
        {/* </div> */}
        <p className='font-noto font-semibold text-xl'>2. 1997年7月19日に公開されたアニメ映画「新世紀エヴァンゲリオン」は、TVアニメ化されなかった第25話「AIR」（空気）と第26話「心はあなたと」で構成されている。</p>
      </div>
    </main>
  )
}
