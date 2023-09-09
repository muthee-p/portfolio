import Image from 'next/image'
import Car from '@components/Car'
import Projects from '@components/Projects'
import Nav from '@components/Nav'
import SideBar from '@components/SideBar'

export default function Home() {
  return (
    <div>

    <Nav/>

    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Car />
    

      <div>
        <h4>HI I'M PRUDENCE</h4>
        <p>A Full Stack Developer</p>
      </div>
      <div className='flex'>
        <Projects />
        <SideBar />
      </div>

      <div className='flex justify-between gap-4'>
       <div className='p-2 border w-1/3'>
        <h4>FrontEnd skills</h4>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>ReactJs</p>
        <p>React Native</p>
        <p>Tailwind</p>
        <p>Next Js</p>
       </div>
       <div className='p-2 border w-1/3'>
        <h4>Backend Skills</h4>
        <p>Node</p>
        <p>Typescript</p>
        <p>MongoDb</p>
        <p>PostGress</p>
        <p>Mysql</p>
        <p>Redux</p>
        <p>Expess</p>
        <p>Prisma</p>
       </div>
       <div className='p-2 border w-1/3'>
        <h4>Tools</h4>
        <p>Git</p>
        <p>Figma</p>
       </div>
      </div>

    </main>
    </div>
  )
}
