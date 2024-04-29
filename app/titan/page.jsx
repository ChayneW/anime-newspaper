import React from 'react'
import Image from 'next/image'

const TitanPage = () => {
  return (
    <div className='max-container min-h-screen w-full h-full bg-[#f6f6f6] py-5'>
      <div className='grid'>
        {/* title */}
        {/* <div className='border-8 border-black'> */}
        <div className='p-2 relative'>
          <div className='border-4 border-[#3E3E3E]'>
            <h1 className='leading-none tracking-wide border-black font-archivo max-md:text-5xl md:max-xl:text-8xl xl:text-[200px] text-center'>
              TATAKAE!
            </h1>
            <div className='max-xl:hidden xl:block absolute top-[30%] right-0 bg-[#f6f6f6] px-4'>
              <h1 className='font-archivo max-xl:text-md xl:text-2xl'>April 25, 2024</h1>
            </div>
            <div className='max-xl:block xl:hidden grid'>
              <h1 className='font-archivo text-center max-xl:text-md xl:text-2xl'>April 25, 2024</h1>
            </div>

          </div>

        </div>

        <div className='mx-2 border-4 border-[#3E3E3E]'>
          <h1 className='font-semibold text-center text-wrap text-2xl'>When Levi and his subordinates uncover a conspiracy to hinder their efforts led by none other than the royalty itself, Erwin and his supporters decide to stage a revolution to ensure that their plans to drive away the Titans from the walls can be executed without further interference.</h1>
        </div>

        <div className='relative mx-2 border-black min-w-screen max-xl:h-[60vh] xl:h-[80vh]'>
          
          {/* Text container */}
          <div className='absolute z-10 bg-[#f6f6f6] top-[2%] left-[2%] px-2'>
            <h1 className='font-archivo text-xl'>ROYAL GOVERNMENT ARC</h1>
          </div>

          {/* Image container */}
          <div className='relative z-0 min-w-screen max-xl:h-[60vh] xl:h-[80vh]'>
            <Image
              src={'/levi-run-2.gif'}
              alt='gif'
              // layout='fill'
              fill
              loading='lazy'
              objectFit='cover'
            />
          </div>

        </div>
      </div>

      <div className='grid border-4 border-black m-2'>

        <div className='grid justify-center'>
          <h1 className='font-noto font-bold text-center text-wrap px-5 max-xl:text-xl xl:text-2xl'>リヴァイたちはケニーの軍勢から逃れるが、エルヴィンは捕らえられ、死刑を宣告される。しかし、彼の支持者たちが流した巨人によるウォール・ローズへの侵入というデマにより、臣民を守ろうとしない貴族の姿勢が露呈し、軍は反乱を起こす。一方、エレンの仲間たちは、真の君主であるヒストリアの父ロッド・レイスによって、洞窟に囚われていたエレンを救出する準備を進める。</h1>
        </div>

        {/* <div className='flex justify-around'> */}
        <div className='grid lg:grid-cols-4 justify-around gap-4 py-4'>
          <h1 className='text-xs font-semibold max-lg:text-center'>&quot;Stay Alive. That&apos;s An Order.&quot;
            <br></br>
            <br></br>
            &quot;As Long As We Continue To Fight, We Are Not Defeated!&quot;
            <br></br>
            <br></br>
            &quot;If You Win, You Live. If You Lose, You Die. If You Don&apos;t Fight, You Can&apos;t Win!&quot;
          </h1>
          
          <h1 className='text-xs font-semibold max-lg:text-center'>
            Zeke: Wait, Eren. Stop it! You can&apos;t do this! What the hell are you thinking? (Begins to run towards Ymir and Eren) YMIR! I GAVE YOU A COMMAND! YOU HAVE TO OBEY MY WILL!
            <br></br>
            <br></br>
            Eren: You&apos;ve been guiding me this whole time, haven&apos;t you?<br></br><br></br>
          </h1>
          <h1 className='text-xs font-semibold max-lg:text-center'>
            Tatakae, Tatakae, TATAKAE!
            <br></br>
            Eren: &quot;It Doesn&apos;t Matter How Strong The Opposition Is. It Doesn&apos;t Matter How Fearsome The World Is, It Doesn&apos;t Matter How Cruel The World Is. Fight!&quot;
            <br></br>
            <br></br>
            &quot;You really enjoy making life hell, don&apos;t you, Eren? Fine. We&apos;ll do things your way! I&apos;ll see this through to the end!&quot;
          </h1>
          
          <h1 className='text-xs font-semibold max-lg:text-center'>
            &quot;I... don&apos;t want to die. And... I want power too. But... Oh. I think... I just got it... Why he did that... Heh, heh, heh, heh. Every last person I&apos;ve seen... Was the same way... Whether it was booze... Women... Or even God... Family... the King... Dreams... Children... Power... They couldn&apos;t keep going... unless they were drunk on something. They were all... slaves to something... Even him. (hacking coughs wrack his body, bringing up blood) Wh - what are you?! A hero?!&quot;</h1>
          {/* <h1 className='text-xs font-semibold max-lg:text-center'>&quot;I... don't want to die. And... I want power too. But... Oh. I think... I just got it... Why he did that... Heh, heh, heh, heh. Every last person I've seen... Was the same way... Whether it was booze... Women... Or even God... Family... the King... Dreams... Children... Power... They couldn't keep going... unless they were drunk on something. They were all... slaves to something... Even him. (hacking coughs wrack his body, bringing up blood) Wh - what are you?! A hero?!&quot;</h1> */}
        </div>

      </div>

      {/* bottom container = large and - */}
      <div className='w-full max-lg:grid lg:hidden'>

        <div className='relative min-w-full h-[50vh]'>
          <Image
            // width={100}
            // height={100}
            src={'/levi-run-1.gif'}
            alt='gif'
            fill
            loading='lazy'
            // objectFit='cover'
            style={{objectFit:'cover'}}
          />
        </div>

        <div className='grid border-4 border-black'>
          <div className='grid gap-2 px-4'>
              
            <h1 className='font-noto font-bold text-center text-wrap px-5 max-xl:text-xl xl:text-2xl'>スカウトたちの生き残りをかけた戦いに注目。TATAKAE！</h1>
            
            <div className='grid gap-4'>
              <div>
                <h1 className='text-xs font-semibold max-lg:text-center'>なんて美しい日なんだろう...もっと早く気づいていれば...</h1>
                <br></br>
                <h1 className='text-xs font-semibold max-lg:text-center'>自分のために生きる</h1>
                <br></br>
                <h1 className='text-xs font-semibold max-lg:text-center text-wrap'>わかるでしょ？ある日突然、あなたの大切な人はみんな死んでしまう。それは単純に受け入れられないことだ。それはあなたを狂わせかねない現実だ。</h1>
              </div>
              
              <div>
                <h1 className='text-xs font-semibold max-lg:text-center'>他人の目を気にして、一生自分らしくない自分でいるつもり？君は君のままでいいんだ。だから、自分の言葉で話そう。</h1>
                <br></br>
                <h1 className='text-xs font-semibold max-lg:text-center'>誰もが何かに酔わなければ突き進むことができなかった......誰もが何かの奴隷だった。</h1>
                <br></br>
                <h1 className='text-xs font-semibold max-lg:text-center'>この世界は残酷で、そしてとても美しい。</h1>
              </div>

              <div>
                <h1 className='text-xs font-semibold max-lg:text-center'>怪物の上に立つためには、人間性を捨てなければならない。戦うとき、私たちは火と火になる。</h1>
                <br></br>
                <h1 className='text-xs font-semibold max-lg:text-center'>勝てば生きるし、負ければ死ぬ。戦わなければ勝てない。</h1>
                <br></br>
                <h1 className='text-xs font-semibold max-lg:text-center'>死んでしまえば、君のことも思い出せない。だから何があっても勝つ。何があっても、私は生きる！</h1>
              </div>

            </div>
            <div className='grid'>
              <h1 className='text-xs font-semibold max-lg:text-center'>
                ケニーの魔の手から解放されたリヴァイたちだったが、エルヴィンが投獄されたことで事態は一転。巨人潜入のデマが民衆に反乱の種をまき、貴族の支配が揺らぐ。一方、エレンの仲間たちは囚われの身となったエレンを救い出そうと奔走する。
                影の洞窟の奥深くで、エレンはロッド・ライスに見守られながら、もつれた先祖の因縁と向き合う。
              </h1>
              <br></br>
              <h1 className='text-xs font-semibold max-lg:text-center'>
                そこで、埋もれていた真実が浮かび上がり、欺瞞と犠牲の遺産が明らかになる。始祖の巨人の力が拮抗する中、同盟は崩壊の危機に瀕する。
                秘密が解き明かされ、運命が交錯する中、舞台は激動の衝突へと移る。忠誠心が試され、生存競争が頂点に達するにつれて犠牲が払われる。敵味方の境界が曖昧になり、人類の運命が天秤にかけられる、裏切りと贖罪の手に汗握る物語に心構えを。</h1>
            </div>
          </div>
        </div>

      </div>



      <div className='max-lg:hidden lg:flex border-4 border-black m-2'>
          <div className='max-lg:w-full lg:w-1/3'>

            <div className='relative w-full h-[100%]'>
              <Image
                src={'/levi-run-1.gif'}
                alt='gif'
                layout='fill'
                loading='lazy'
                // objectFit='cover'
                style={{objectFit:'cover'}}
              />
            </div>

          </div>

          <div className='max-lg:w-full lg:w-2/3'>
            <div className='grid gap-2 px-4'>
              
              <h1 className='font-noto font-bold text-center text-wrap px-5 max-xl:text-xl xl:text-2xl'>スカウトたちの生き残りをかけた戦いに注目。TATAKAE！</h1>
              
              <div className='grid grid-cols-3 gap-4'>
                <div>
                  <h1 className='text-xs font-semibold max-lg:text-center'>なんて美しい日なんだろう...もっと早く気づいていれば...</h1>
                  <br></br>
                  <h1 className='text-xs font-semibold max-lg:text-center'>自分のために生きる</h1>
                  <br></br>
                  <h1 className='text-xs font-semibold max-lg:text-center text-wrap'>わかるでしょ？ある日突然、あなたの大切な人はみんな死んでしまう。それは単純に受け入れられないことだ。それはあなたを狂わせかねない現実だ。</h1>
                </div>
                
                <div>
                  <h1 className='text-xs font-semibold max-lg:text-center'>他人の目を気にして、一生自分らしくない自分でいるつもり？君は君のままでいいんだ。だから、自分の言葉で話そう。</h1>
                  <br></br>
                  <h1 className='text-xs font-semibold max-lg:text-center'>誰もが何かに酔わなければ突き進むことができなかった......誰もが何かの奴隷だった。</h1>
                  <br></br>
                  <h1 className='text-xs font-semibold max-lg:text-center'>この世界は残酷で、そしてとても美しい。</h1>
                </div>

                <div>
                  <h1 className='text-xs font-semibold max-lg:text-center'>怪物の上に立つためには、人間性を捨てなければならない。戦うとき、私たちは火と火になる。</h1>
                  <br></br>
                  <h1 className='text-xs font-semibold max-lg:text-center'>勝てば生きるし、負ければ死ぬ。戦わなければ勝てない。</h1>
                  <br></br>
                  <h1 className='text-xs font-semibold max-lg:text-center'>死んでしまえば、君のことも思い出せない。だから何があっても勝つ。何があっても、私は生きる！</h1>
                </div>

              </div>
              <div>
                <h1 className='text-xs font-semibold max-lg:text-center'>
                  ケニーの魔の手から解放されたリヴァイたちだったが、エルヴィンが投獄されたことで事態は一転。巨人潜入のデマが民衆に反乱の種をまき、貴族の支配が揺らぐ。一方、エレンの仲間たちは囚われの身となったエレンを救い出そうと奔走する。
                  影の洞窟の奥深くで、エレンはロッド・ライスに見守られながら、もつれた先祖の因縁と向き合う。
                </h1>
                <br></br>
                <h1 className='text-xs font-semibold max-lg:text-center'>
                  そこで、埋もれていた真実が浮かび上がり、欺瞞と犠牲の遺産が明らかになる。始祖の巨人の力が拮抗する中、同盟は崩壊の危機に瀕する。
                  秘密が解き明かされ、運命が交錯する中、舞台は激動の衝突へと移る。忠誠心が試され、生存競争が頂点に達するにつれて犠牲が払われる。敵味方の境界が曖昧になり、人類の運命が天秤にかけられる、裏切りと贖罪の手に汗握る物語に心構えを。</h1>
              </div>

            </div>
            
          </div>
          {/*  */}


      </div>

    </div>
  )
}

export default TitanPage