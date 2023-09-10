'use client'

import {useState} from 'react'
import Image from 'next/image'

const SideBar = () => {
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [cv, setCv] = useState(false)

  const handleAbout = () => {
    setAbout(!about)
  }
   const handleContact = () => {
    setContact(!contact)
  }
  const handleCv =() =>{
    setCv(!cv)
  }

  return (
    <div className='md:w-[25%] w-full md:p-8 p-4 md:pt-16 md:fixed md:right-0 md:top-0 comp2'> 
      <div className='py-2'>
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-orange-500'>About</h4>
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
      </div>
      </div>

      <div className='py-2'>
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-orange-500'>Contact</h4>
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
        pruemu9@gmail.com</p>
      
      </div>

      <div className='py-2'>
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-orange-500'>Resumé</h4>
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
        CV</p>
      
      </div>

      <div className='py-2'>
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-orange-500'>Follow</h4>
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
        Twitter Dribble</p>
      
      </div>
   
    </div>
    )
}

export default SideBar