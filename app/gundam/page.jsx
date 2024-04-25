import React from 'react'
import Image from 'next/image'

const GundamPage = () => {
  return (
    <div className='max-container min-h-screen bg-white'>
        <div className='grid'>

            <div className="w-full h-full grid px-10">
                <div className='max-lg:block lg:hidden'>
                    <h1 className='font-archivo max-sm:text-[50px] sm:max-md:text-8xl md:max-lg:text-9xl leading-none text-left'>ENDLESS</h1>
                    <h1 className='font-archivo max-sm:text-[50px] sm:max-md:text-8xl md:max-lg:text-9xl leading-none text-right'>WALTZ</h1>
                </div>

                <div className='w-'>
                    <h1 className='font-semibold font-noto text-xl line-wrap'>日動戦記ガンダムWING』は、池田雅史監督、住沢克之脚本による1995年のメカアニメシリーズ。ガンダムフランチャイズの第6弾で、「アフターコロニー」の時間軸を舞台にしている。オリジナルシリーズと同様、ガンダムウイングのプロットは、地球と地球・月系の軌道コロニーとの間の未来（具体的には、アフターコロニー195年）の戦争を中心に描かれている。</h1>
                </div>
                
                <div className="w-full relative max-md:min-h-[40vh] md:max-xl:min-h-[100vh] xl:min-w-[1000px] xl:min-h-[1000px]">  
                {/* <div className="w-full relative">   */}
                    {/* shows up for screens lg+ */}
                    <Image
                        className=' max-lg:hidden lg:block relative bg-black'
                        // src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNtOXk0cHEzMnE3b2pmc2plMTQ5bXE1ajR6OHVmbGRycTA5MGZnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F8eKDINru1sk0/giphy.gif'
                        src={'/zero-dmg.gif'}
                        alt='gif'
                        fill
                        // style={{objectFit: 'contain'}}
                        style={{objectFit: 'cover'}}
                    />
                    {/* shows up for screens smaller than lg- */}
                    <Image
                        className=' max-lg:block lg:hidden relative bg-black'
                        // src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNtOXk0cHEzMnE3b2pmc2plMTQ5bXE1ajR6OHVmbGRycTA5MGZnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F8eKDINru1sk0/giphy.gif'
                        src={'/zero-dmg.gif'}
                        alt='gif'
                        fill
                        // style={{objectFit: 'contain'}}
                        style={{objectFit: 'cover'}}
                    />
                </div>

                <div className='w-full max-lg:hidden xl:block'>
                    
                    {/* <h1 className='font-archivo text-[220px] font-bold text-left'>ENDLESS</h1> */}
                    <h1 className='max-w-screen font-anton tracking-wide leading-none lg:text-[200px] xl:text-[320px] font-bold text-left'>ENDLESS</h1>
                    
                    {/* <h1 className='font-archivo text-[220px] font-bold text-right'>WALTZ</h1> */}
                    <h1 className='max-w-screen font-anton tracking-wide leading-none lg:text-[200px] xl:text-[320px] font-bold text-right'>WALTZ</h1>
                </div>

                <hr></hr>

                <div className='max-md:grid md:flex justify-between px-10'>
                    {/* production/direction credits */}
                    <div className='grid'>
                        <h1>監督：青木靖直</h1>
                        <h1>脚本：隅沢克之</h1>
                        <h1>© 1997 スタジオ・サンライズ / SUNRISE</h1>
                            
                    </div>

                    {/* music credits */}
                    <div className='grid'>
                        {/* composers */}
                        <h1 className=''>作曲家 永野椎奈、高山みなみ</h1>
                        {/* white reflection */}
                        <h1 className=''>「白い反射」: エンドレスワルツ」オープニングテーマ。</h1>
                        {/* Last Impression */}
                        <h1>「ラスト・インプレッション」: 「エンドレスワルツ 」エンディングテーマ</h1>
                    </div>

                </div>

                {/* <hr></hr> */}

                <div className='max-md:grid md:flex justify-around gap-2 py-2'>
                    <h1 className='text-sm font-semibold max-lg:text-center'>「武器と戦争そのものだけを持って地獄へ行こう！」 ~ デュオ</h1>
                    <h1 className='text-sm font-semibold max-lg:text-center'>「僕はトロワじゃない。物心ついた時から戦場にいた名もなき兵士だ。」 ~ トロワ</h1>
                    <h1 className='text-sm font-semibold max-lg:text-center'>「復讐では何も成し遂げられない。憎しみはさらなる憎しみをもたらすだけだ。」 ~ レレナ </h1>
                    <h1 className='text-sm font-semibold max-lg:text-center'>「名前は他人がつけるもの」 ~ デュオ</h1>
                    <h1 className='text-sm font-semibold max-lg:text-center'>「命を犠牲にした平和が、本当に平和と言えるのかどうか、自分で判断する必要がある。それを知るために、私は悪そのものになる！」 ~ 五飛</h1>
                </div>
                
                <div className='line-wrap py-2'>
                    <h1>2000年11月10日に放送されたOVAの初回放送は、カートゥーンネットワークの歴代2位の高視聴率を記録し、ファニメーションの『ドラゴンボールZ』の自社吹き替え版を上回った。ヘレン・マッカーシーは『500 Essential Anime Movies』で、「巨大ロボットの戦いは相変わらず素晴らしい」、「アートディレクションとデザインは素晴らしい」とコメントしている。</h1>
                </div>
            </div>
        </div>
    
    
    </div>
  )
}

export default GundamPage