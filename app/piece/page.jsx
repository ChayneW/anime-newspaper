import React from 'react'
import Image from 'next/image'

const OnePiecePage = () => {
  return (
    <div className='max-container min-h-screen w-full bg-white p-4 py-10'>
        {/* title */}
        <div className='grid w-full h-full border-4 border-black'>
            <div>
                <h1 className='font-roman font-bold leading-none tracking-wide text-center max-xs:text-[3rem] xs:max-md:text-[5rem] md:max-xl:text-[120px] xl:text-[200px]'>WANTED</h1>
            </div>
            <div className='border-2 border-black py-2'>
                <p className='font-bold font-noto text-center'>エッグヘッド市への被害もあり、悪名高き犯罪者モンキー・D・ルフィの逮捕に向け、ご協力をお願いします。</p>
            </div>

            {/* units used: lg */}
            <div className='max-lg:grid lg:flex lg:flex-row border-2 border-black gap-2'>
                <div className='grid max-lg:w-[100%] lg:w-1/3 gap-2'>
                    
                    <div className='relative w-[100%] h-[400px]'>
                        {/* <Image
                            className='max-lg:hidden lg:block bg-black'
                            src={'/piece/luffy-rise.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'cover'}}
                            priority
                        /> */}
                        <Image
                            className=' bg-black'
                            src={'/piece/luffy-rise.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                            priority
                        />
                    </div>
                    <p className='py-2'>ルッチ一味がエッグヘッドへの侵攻を開始する中、シャカは対処の準備を始める。しかしアトラスは命令を無視し、ルッチと戦おうとしてダメージを受ける。その場所に到着すると、怒ったルフィがルッチとの戦闘に備える</p>
                </div>

                <div className='grid max-lg:w-[100%] lg:w-2/3 gap-2'>
                    <p>ルッチたちがエッグヘッドへの侵攻を開始すると、シャカはそれに対処する準備を始める。しかしアトラスは命令を無視し、ルッチと戦おうとしてダメージを受ける。その場所に到着すると、怒ったルフィがルッチとの戦闘に備える。</p>
                    <h1>戦いが始まる...。</h1>

                    <div className='relative w-[100%] h-[400px]'>
                        <Image
                            className='max-lg:block lg:hidden bg-black'
                            src={'/piece/luffy-punch.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'contain'}}
                            priority
                        />
                        <Image
                            className='max-lg:hidden lg:block bg-black'
                            src={'/piece/luffy-punch.gif'}
                            alt='luffy-gif'
                            fill
                            style={{objectFit:'cover'}}
                            priority
                        />
                    </div>
                </div>
                
            </div>

            <div className='border-2 border-black'>
                <p className='font-bold font-anton text-md text-center'>With the damage to the island of egghead, we are asking for assistance in trying to finally apprehend the infamous criminal Monkey D. Luffy </p>
            </div>

            <div className='grid border-2 border-black py-4'>
                <div className=' flex gap-2 justify-center place-content-center'>
                    <div className='relative max-xl:w-[10%] xl:w-[120px] max-xl:h-[100%] xl:h-[100%]'>
                        <Image
                            className='grid '
                            src={'/piece/berrysymbol.png'}
                            fill
                            style={{objectFit: 'contain'}}
                            priority
                        />
                    </div>
                    <h1 className='font-roman text-black leading-none font-bold text-center max-xs:text-[2rem] xs:max-md:text-[3rem] md:max-xl:text-[5rem] xl:text-[150px]'>3,000,000,000</h1>
                </div>

                <div className='text-center'>
                    <h1 className='font-roman text-black leading-none font-bold max-xs:text-[2rem] xs:max-md:text-[3rem] md:max-xl:text-[4rem] xl:text-[100px]'>DEAD OR ALIVE</h1>
                </div>
            </div>

            <div className='w-full max-lg:grid lg:flex border-2'>
                <div className='h-full max-lg:w-full lg:w-2/3 border-2 border-black'>
                    <div className='relative w-full h-[400px]'>
                        <Image
                            className='max-lg:hidden lg:block '
                            src={'/piece/luffy-gang.gif'}
                            fill
                            style={{objectFit: 'cover'}}
                            priority
                        
                        />
                        <Image
                            className='max-lg:block lg:hidden bg-black '
                            src={'/piece/luffy-gang.gif'}
                            fill
                            style={{objectFit: 'cover'}}
                            priority
                        />
                    </div>
                    <p className='text-wrap'>
                        サカズキは、麦わらの一味がエッグヘッドでベガパンクと手を組んでいることを知る。彼はルッチとCP0エージェントをサポートするためにキザルを送る。ルッチは命令に背き、ルフィと戦う。二人は覚醒した姿に変身する。ベガパンクはルフィの悪魔の実のユニークさを説明し、太陽神ニカと結びつける。戦桃丸が到着し、セラフィムの助けを借りてルフィを助けるが、ルッチの攻撃で気絶してしまう。
                        <br></br>
                        <br></br>
                        戦いは激化し、敵は全力で戦い、エッグヘッド島は破壊に支配され、大量の被害が発生し、市民は命からがら逃げ出す。この凶悪な犯罪者たちを止めなければならない！
                    </p>
                </div>

                <div className='max-lg:w-full lg:w-1/3 border-2 border-black'>
                    <p className='text-center font-bold text-xl'>BEAT LOUDLY, HEARTBEAT!</p>
                    <br></br>
                    
                    <div className='grid grid-cols-2 gap-2'>
                        <h1>死は決して謝罪ではない</h1>
                        <h1>気をつけないと死ぬぞ</h1>
                        <h1>お嬢さん、死のうなんて思う馬鹿がいるか？</h1>
                        <h1>...そんなの怖いと思うか？</h1>
                    </div>

                    <br></br>

                    <p className='text-center'>ルフィとルッチの戦いは続き、ルフィがルッチを圧倒する。残りの麦わらの一味は、ベガパンクからあるデビルフルーツの力が輸血によって再現できることを知る。</p>

                    <div className='relative w-full h-[400px] p-4'>
                        <Image
                            className='max-lg:hidden lg:block p-4'
                            src={'/piece/luffy-charge.gif'}
                            fill
                            style={{objectFit: 'cover'}}
                            priority
                        />
                        <Image
                            className='max-lg:block lg:hidden bg-black p-4 '
                            src={'/piece/luffy-charge.gif'}
                            fill
                            style={{objectFit: 'cover'}}
                            priority
                        />
                    </div>
                </div>

            </div>
            
            <div>
                <p className='font-bold font-noto text-center'>この悪名高い犯罪者と麦わらの一味の逮捕につながる情報があれば、遠慮なく海兵隊に知らせてほしい！もはや我々の権威に挑戦することは許されないのだ!</p>
            </div>
        </div>
    </div>
  )
}

export default OnePiecePage