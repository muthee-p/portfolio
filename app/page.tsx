import Image from 'next/image'
import Projects from '@components/Projects'
import Nav from '@components/Nav'
import SideBar from '@components/SideBar'

export default function Home() {
  return (
    <div>

    <Nav/>

    <main className="flex min-h-screen text-sm flex-col items-center justify-between md:px-8">
      
      <div className='pt-32 md:pt-8 z-20 bg-[#813e38] p-8 w-full flex flex-col md:flex-row items-center justify-around'>
        <div className=' px-2 md:px-0 pb-8 md:pb-0 leading-loose'>
          <Image 
            src='/hi.svg'
            alt='Hello hand'
            width={30}
            height={30}
            className='invert shake ml-4'
            />
            <h1 className='text-gray-200 pl-4'>Hello, I'm</h1>
            <h4 className='text-5xl text-gray-200 py-4'>&lt;PRUDENCE MUTHEE /&gt;</h4>
            <p className='text-gray-200 font-bold pl-4 text-base'>A Full Stack Developer.</p>
            <button className='ml-4 py-2 px-4 border w-44 rounded-full mt-8 bg-indigo-200 '>
              <a href='mailto:pruemu9@gmail.com' target="_blank" className=''>pruemu9@gmail.com
              </a>
            </button>
        </div>
         <Image 
          src='/profile.png'
          alt='profile pic'
          width={300}
          height={300}
          className='rounded-full shake'
          />
      </div>


      <div className='px-2 bg-white z-10 flex flex-col w-full md:flex-row mb-60 '>
        
        <Projects />
        <SideBar />
      </div>

      

    </main>
<div className=' w-full fixed bottom-0 z-0 md:px-8 px-2'>
    <div className='flex flex-col items-center justify-center p-12 bg-indigo-300 leading-loose'>
        <Image 
          src='/hi.svg'
          alt='Hello hand'
          width={30}
          height={30}
          className='shake'
          />
          
        <p>I'm <span className='font-semibold'>always</span> up for a chat.</p>
        <p><span className='font-semibold'>Pop</span> me an email.</p>   
      </div>
      </div>
    </div>
  )
}
