import Image from 'next/image';

import lobbyImage from '../public/lobby/main.png'
import comp01 from '../public/comp/01.png'
import comp02 from '../public/comp/02.png'
import comp03 from '../public/comp/03.png'
import comp04 from '../public/comp/04.png'
import arrow from '../public/comp/arrow.svg'

import icon01 from '../public/icons/01.svg'
import icon02 from '../public/icons/02.svg'
import icon03 from '../public/icons/03.svg'
import icon04 from '../public/icons/04.svg'
import arr from '../public/icons/arr.svg'

import about from '../public/about/01.png'
import dots from '../public/about/dots.svg'

import winnner01 from '../public/winners/01.png'
import winnner02 from '../public/winners/02.png'
import winnner03 from '../public/winners/03.png'
import winnner04 from '../public/winners/04.png'



export default function Home() {
  return (
    <>
      <header className="flex justify-between px-[55px] lg:px-16 max-w-[1280px] mx-auto items-center mt-[5px]">
        <h1 className="font-rajdhani font-bold text-[#252A34] text-3xl">LOGO<span className="text-[#FF2E63]">AUTO</span></h1>
        <nav className="w-[644px] text-[14px] flex justify-between font-sans font-semibold">
          <a href="#!">Latest Competitions</a>
          <a href="#!">Entry Lists</a>
          <a href="#!">Live Draws</a>
          <a href="#!">Winners</a>
          <a href="#!">Gift Cards</a>
          <a href="#!">How it Works</a>
        </nav>
        <div className="w-[182px] flex justify-between font-sans font-semibold text=[16px]">
          <a href="#!" className="text-[#FF2E63] flex justify-center items-center">Login</a>
          <a href="#!" className="text-[#FFFFFF] bg-[#FF2E63] w-[110px] h-[40px] flex justify-center items-center rounded-[5px]">Register</a>
        </div>
      </header>
      <main>

        <div className="flex justify-between max-w-[1281px] h-[400px] px-[28px] mx-auto mt-[86px]">
          <div className="flex-column my-auto">
            <h1 className='flex flex-col text-[50px] text-[#343434] font-rajdhani font-bold mb-[25px]'>Could you be our <span className='text-[#FF2E63]'>next winner?</span></h1>
            <button className='bg-[#346CD9] text-[#FFFFFF] w-[120px] h-[40px] rounded-[5px] mt-[25px]'>Enter now</button>
          </div>
          <div className="flex flex-col justify-end">
            <span className='bg-gradient-to-r from-transparent rotate-45 to-[#346bd95b] h-[400px] w-[400px] z-1 rounded-full absolute mx-auto ml-[250px]'></span>
            <Image src={lobbyImage} alt="lobby-image" className='w-[755px] h-[302px] mb-[25px] block z-0' />
          </div>
        </div>

        <div className='max-w-[1280px] mt-[84px] mx-auto x-[55px] flex flex-col'>
          <h1 className='font-rajdhani font-bold text-[36px] '>Latest Competitions</h1>
          <div className='mt-[40px] flex justify-between '>
            <div className='w-[270px] h-[283px] rounded-[10px] shadow-lg'>
              <Image src={comp01} alt='comp01'></Image>
              <div className='pl-[20px] pt-[20px]'>
                <h2 className='font-rajdhani font-bold text-[20px] '>2020 Audi S5 Coupe</h2>
                <h1 className='font-rajdhani font-bold text-[#FF2E63] text-[30px] '>$19.99<span className='font-rajdhani font-medium text-[#999999] text-[20px] ml-[7px] line-through'>$54.68</span></h1>
                <div className='flex justify-between w-[250px] h-[19px] items-center'>
                  <h3 className='text-[#343434] font-sans text-[14px] '>5878 tickets remaining</h3>
                  <a href="#!" className='bg-[#346CD9] w-[40px] h-[40px] rounded-tl-[10px] rounded-br-[10px] flex justify-center relative bottom-[1px]'><Image src={arrow} alt='arrow' className='m-auto'></Image></a>
                </div>
              </div>
            </div>
            <div className='w-[270px] h-[283px] rounded-[10px] shadow-lg'>
              <Image src={comp02} alt='comp02'></Image>
              <div className='px-[20px] pt-[20px]'>
                <h2 className='font-rajdhani font-bold text-[20px]'>2016 Ford Mustang GT</h2>
                <h1 className='font-rajdhani font-bold text-[#FF2E63] text-[30px]'>$7.99<span className='font-rajdhani font-medium text-[#999999] text-[20px] ml-[7px] line-through'>$9.68</span></h1>
                <div className='flex justify-between w-[250px] h-[19px] items-center'>
                  <h3 className='text-[#343434] font-sans text-[14px]'>3290 tickets remaining</h3>
                  <a href="#!" className='bg-[#346CD9] w-[40px] h-[40px] rounded-tl-[10px] rounded-br-[10px] flex justify-center relative bottom-[1px]'><Image src={arrow} alt='arrow' className='m-auto '></Image></a>
                </div>
              </div>
            </div>
            <div className='w-[270px] h-[283px] rounded-[10px] shadow-lg'>
              <Image src={comp03} alt='comp03'></Image>
              <div className='px-[20px] pt-[20px]'>
                <h2 className='font-rajdhani font-bold text-[20px]'>2020 Bugatti Chiron</h2>
                <h1 className='font-rajdhani font-bold text-[#FF2E63] text-[30px]'>$0.99<span className='font-rajdhani font-medium text-[#999999] text-[20px] ml-[7px] line-through'>$1.39</span></h1>
                <div className='flex justify-between w-[250px] h-[19px] items-center'>
                  <h3 className='text-[#343434] font-sans text-[14px]'>4014 tickets remaining</h3>
                  <a href="#!" className='bg-[#346CD9] w-[40px] h-[40px] rounded-tl-[10px] rounded-br-[10px] flex justify-center relative bottom-[1px]'><Image src={arrow} alt='arrow' className='m-auto '></Image></a>
                </div>
              </div>
            </div>
            <div className='w-[270px] h-[283px] rounded-[10px] shadow-lg'>
              <Image src={comp04} alt='comp04'></Image>
              <div className='px-[20px] pt-[20px]'>
                <h2 className='font-rajdhani font-bold text-[20px]'>2019 Porsche 911 Carrera</h2>
                <h1 className='font-rajdhani font-bold text-[#FF2E63] text-[30px]'>$1.99<span className='font-rajdhani font-medium text-[#999999] text-[20px] ml-[7px] line-through'>$2.99</span></h1>
                <div className='flex justify-between w-[250px] h-[19px] items-center'>
                  <h3 className='text-[#343434] font-sans text-[14px]'>484 tickets remaining</h3>
                  <a href="#!" className='bg-[#346CD9] w-[40px] h-[40px] rounded-tl-[10px] rounded-br-[10px] flex justify-center relative bottom-[1px]'><Image src={arrow} alt='arrow' className='m-auto '></Image></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-[1280px] px-[55px] mx-auto mt-[84px]'>
          <h1 className='text-[36px] font-rajdhani font-bold text-[#343434] flex justify-center'>How it works</h1>
          <div className='mt-[60px] flex justify-between'>
            <div className='w-[250px] h-[181px] flex flex-col items-center'>
              <Image src={icon01} alt='icons-01'></Image>
              <h3 className='mt-[30px] h-[87px] w-[250px] text-center font-sans text-[16px] text-[#343434] font-regular leading-tight'>Choose a competition and how many entries you would like</h3>
            </div>
            <Image src={arr} alt='arr' className='h-[20px] w-[32px] mt-[21px]'></Image>
            <div className='w-[250px] h-[181px] flex flex-col items-center'>
              <Image src={icon02} alt='icons-02'></Image>
              <h3 className='mt-[30px] h-[87px] w-[250px] text-center font-sans text-[16px] text-[#343434] font-regular leading-tight '>Answer the qualifying question <span className='font-semibold'>(be sure to answer correctly!)</span> and complete paymen</h3>
            </div>
            <Image src={arr} alt='arr' className='h-[20px] w-[32px] mt-[21px]'></Image>
            <div className='w-[250px] h-[181px] flex flex-col items-center'>
              <Image src={icon03} alt='icons-03'></Image>
              <h3 className='mt-[30px] h-[87px] w-[250px] text-center font-sans text-[16px] text-[#343434] font-regular leading-tight tracking-tighter'>Tickets for all correct answers are entered into the draw, streamed LIVE on Facebook using Google’s random number generator</h3>
            </div>
            <Image src={arr} alt='arr' className='h-[20px] w-[32px] mt-[21px]'></Image>
            <div className='w-[250px] h-[181px] flex flex-col items-center'>
              <Image src={icon04} alt='icons-04'></Image>
              <h3 className='mt-[30px] h-[87px] w-[250px] text-center font-sans text-[16px] text-[#343434] font-regular leading-tight'>If you win, we may try to contact you whilst live on Facebook, so be prepared!</h3>
            </div>
          </div>
        </div>

        <div className='bg-[#346CD9]/[.12] mt-[84px]'>
          <div className='max-w-[1280px] h-[400px] m-auto flex justify-between'>
            <div className='flex flex-col justify-center items-center w-[640px]'>
              <h1 className='font-sans font-semibold text-[#343434] text-[20px] text-center w-[400px]'>"Unbelievable this is a dream come true, no way would I ever think I would own a car like this. What great blokes. Thank you very much! 5 star from me!!!"</h1>
              <h2 className='mt-[29px] font-sans font-regular text-[16px]'>Danny Churchman</h2>
              <Image src={dots} alt='dots' className='mt-[40px]'></Image>
            </div>
            <Image src={about} alt='about' className='w-[640px] '></Image>
          </div>
        </div>

        <div className='max-w-[1280px] px-[55px] mx-auto mt-[84px]'>
          <h1 className='font-rajdhani font-bold text-[#343434] text-[36px]'>Latest Winners</h1>
          <div className='mt-[45px] flex justify-between'>
            <div className='w-[270px] h-[288px] shadow-lg'>
              <Image src={winnner01} alt='winer01' className='h-[200px]'></Image>
              <div className='pt-[20px] pl-[20px]'>
                <h1 className='font-rajdhani font-bold text-[20px] text-[#252A34]'>Ferrari 458</h1>
                <h2 className='font-sans font-regular text-[14px] text-[#343434]'>12 November 2020</h2>
              </div>
            </div>
            <div className='w-[270px] h-[288px] shadow-lg'>
              <Image src={winnner02} alt='winer02' className='h-[200px]'></Image>
              <div className='pt-[20px] pl-[20px]'>
                <h1 className='font-rajdhani font-bold text-[20px] text-[#252A34]'>Aquila Gullwing</h1>
                <h2 className='font-sans font-regular text-[14px] text-[#343434]'>9 November 2020</h2>
              </div>
            </div>
            <div className='w-[270px] h-[288px] shadow-lg'>
              <Image src={winnner03} alt='winer03' className='h-[200px]'></Image>
              <div className='pt-[20px] pl-[20px]'>
                <h1 className='font-rajdhani font-bold text-[20px] text-[#252A34]'>2020 Audi S5 Coupe</h1>
                <h2 className='font-sans font-regular text-[14px] text-[#343434]'>5 November 2020</h2>
              </div>
            </div>
            <div className='w-[270px] h-[288px] shadow-lg'>
              <Image src={winnner04} alt='winer04' className='h-[200px]'></Image>
              <div className='pt-[20px] pl-[20px]'>
                <h1 className='font-rajdhani font-bold text-[20px] text-[#252A34]'>Ferrari Purosangue SUV</h1>
                <h2 className='font-sans font-regular text-[14px] text-[#343434]'>25 September 2020</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className='h-[70px] bg-[#346CD9] mt-[84px]'>
          <div className='max-w-[1280px] h-[70px] px-[55px] mx-auto flex justify-between items-center'>
            <h1 className='font-rajdhani font-bold text-[30px] text-[#fff]'>LogooAuto</h1>
            <nav className='flex gap-[30px] items-center'>
              <a href="#!" className='font-sans font-semibold text-[14px] text-[#fff]'>Latest Competitions</a>
              <a href="#!" className='font-sans font-semibold text-[14px] text-[#fff]'>Entry Lists</a>
              <a href="#!" className='font-sans font-semibold text-[14px] text-[#fff]'>Live Draws</a>
              <a href="#!" className='font-sans font-semibold text-[14px] text-[#fff]'>Winners</a>
              <a href="#!" className='font-sans font-semibold text-[14px] text-[#fff]'>Gift Cards</a>
              <a href="#!" className='font-sans font-semibold text-[14px] text-[#fff]'>How it Works</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
