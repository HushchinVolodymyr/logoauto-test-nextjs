import Image from 'next/image';
import lobbyImage from '../public/lobby/main.png'


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
      <main className="flex justify-between max-w-[1281px] h-[400px] px-[28px] mx-auto mt-[86px]">
        <div className="flex-column my-auto">
          <h1 className='flex flex-col text-[50px] text-[#343434] font-rajdhani font-bold mb-[25px]'>Could you be our <span className='text-[#FF2E63]'>next winner?</span></h1>
          <button className='bg-[#346CD9] text-[#FFFFFF] w-[120px] h-[40px] rounded-[5px] mt-[25px]'>Enter now</button>
        </div>
        <div className="flex flex-col justify-end">
          <span className='bg-gradient-to-r from-transparent rotate-45 to-[#346bd95b] h-[400px] w-[400px] z-1 rounded-full absolute mx-auto ml-[250px]'></span>
          <Image src={lobbyImage} alt="lobby-image" className='w-[755px] h-[302px] mb-[25px] block z-0'/>
        </div>
      </main>
    </>
  );
}
