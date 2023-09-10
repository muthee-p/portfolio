import Image from 'next/image'
import Projects from '@components/Projects'
import Nav from '@components/Nav'
import SideBar from '@components/SideBar'

export default function Home() {
  return (
    <div>

    <Nav/>

    <main className="flex min-h-screen text-sm flex-col items-center justify-between md:px-8">
      
    

      <div className='pt-32 md:pt-8 z-20 bg-rose-400 p-8 w-full flex flex-col md:flex-row items-center justify-around'>
        <div className=' px-2 md:px-0 pb-8 md:pb-0'>
          <Image 
            src='/hi.svg'
            alt='Hello hand'
            width={30}
            height={30}
            className='rounded-full'
            />
            <h1>Hello World, I'm</h1>
            <h4 className='text-5xl'>&lt;PRUDENCE MUTHEE /&gt;</h4>
            <p>A Full Stack Developer</p>
            <p>Contact: pruemu9@gmail</p>
        </div>
         <Image 
          src='/profile.png'
          alt='profile pic'
          width={300}
          height={300}
          className='rounded-full'
          />
      </div>


      <div className='px-2 bg-white z-10 flex flex-col w-full md:flex-row mb-48 '>
        
        <Projects />
        <SideBar />
      </div>

      

    </main>
<div className=' w-full fixed bottom-0 z-0 md:px-8 px-2'>
    <div className='flex items-center justify-center p-8 bg-teal-400'>
        <Image 
          src='/hi.svg'
          alt='Hello hand'
          width={30}
          height={30}
          className='rounded-full'
          />
      </div>
      </div>
    </div>
  )
}
