'use client'

import {useState} from 'react'
import Image from 'next/image'

const SideBar = () => {
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [cv, setCv] = useState(false);
  const [follow, setFollow] = useState(false);

  const handleAbout = () => {
    setAbout(!about);
  }
   const handleContact = () => {
    setContact(!contact);
  }
  const handleCv =() =>{
    setCv(!cv);
  }
  const handleFollow = () =>{
    setFollow(!follow);
  }

  return (
    <div className='md:w-[25%] w-full md:px-8 p-4 md:mt-[2.6rem] md:fixed md:right-0 md:top-0 comp2'> 
      <div className='pb-2'>
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-[#813e38]'>About</h4>
          <button onClick={handleAbout} className=''>
              <span className='text-red-500'> {about ? 
                <Image
                      src='/arrow.svg'
                      alt='github'
                      width={20}
                      height={20}
                    />:
               <Image
                src='/right.svg'
                alt='github'
                width={20}
                height={20}
              />
                  }
              </span>
          </button>
        </div>
      <div className={`${about ? 'block': 'hidden'}`}>
        <p >I am a passionate developer with a love for crafting elegant and efficient solutions to complex problems. 
        </p>
        <p className='py-2'>My journey in the world of coding began with a curiosity-driven exploration and has evolved into a full-blown career. 
        </p>
        <p>With a strong foundation in various programming languages and technologies, I thrive on turning ideas into reality through clean, maintainable code.
        </p>
        <p className='pt-2'>I also have a string passion for problem solving and derive immense satisfaction from the process of finding solutions. Being part of the dynamic tech industry, keeps me on my toes, constantly learning about new tech and staying engaged in my work.</p>
      </div>
      </div>

      <div className='py-2'>
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-[#813e38]'>Contact</h4>
          <button onClick={handleContact}>
            <span className='text-red-500 font-mono'> 
              {contact ? 
                <Image
                      src='/arrow.svg'
                      alt='github'
                      width={20}
                      height={20}
                    />: 
                <Image
                src='/right.svg'
                alt='github'
                width={20}
                height={20}
              />
                  }
              </span>
          </button>
        </div>
      
      <p className={`${contact ? 'block': 'hidden'}`}>
        <a href='mailto:pruemu9@gmail.com' target="_blank"
         className=' hover:text-indigo-300'>pruemu9@gmail.com
        </a>
      </p>
      
      </div>

      <div className='py-2'>
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-[#813e38]'>Resumé</h4>
          <button onClick={handleCv}>
            <span className='text-red-500 font-mono'> 
              {cv ? 
                <Image
                      src='/arrow.svg'
                      alt='github'
                      width={20}
                      height={20}
                    />: 
                <Image
                src='/right.svg'
                alt='github'
                width={20}
                height={20}
              />
                  }
              </span>
          </button>
        </div>
      
      <p className={`${cv? 'block': 'hidden'}`}>
        <a href='https://docs.google.com/document/d/1mP1rAD5Tt6Wyx-Qq_ogftmV3IFaax0VSmcKx1cwnU2M/edit?usp=sharing' target="_blank"
         className=' hover:text-indigo-300'>View Resumé
        </a>
         . 
        <a href='/cv.pdf' download='Prudence-Resume.pdf'  
          className='disabled underline hover:text-indigo-300'
        >Download Resumé
        </a>

      </p>
      
      </div>

      <div className='py-2'>
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-[#813e38]'>Follow</h4>
          <button onClick={handleFollow}>
            <span className='text-red-500 font-mono'> 
              {follow ? 
                <Image
                      src='/arrow.svg'
                      alt='github'
                      width={20}
                      height={20}
                    />: 
                <Image
                src='/right.svg'
                alt='github'
                width={20}
                height={20}
              />
                  }
              </span>
          </button>
        </div>
      
      <p className={`${follow? 'block': 'hidden'}`}>
        <a href='https://twitter.com/PrudenceMuthee' target="_blank" rel="noopener noreferrer" 
          className='text-indigo-300'
        >Twitter</a> .

        <a href='https://dribbble.com/muthee-p' target="_blank" rel="noopener noreferrer" 
          className='text-rose-500'
        > Dribble</a>
        </p>
      
      </div>
   
    </div>
    )
}

export default SideBar