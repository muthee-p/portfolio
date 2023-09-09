'use client'

import {useState} from 'react'

const SideBar = () => {
  const [contact, setContact] = useState('false');
  const [about, setAbout] = useState('true')

  const handleAbout = () => {
    setAbout(!about)
  }
   const handleContact = () => {
    setContact(!contact)
  }

  return (
    <div className='w-[25%] p-4 fixed right-0'> 
      <div >
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-orange-500'>About</h4>
          <button onClick={handleAbout} className=''>
              <span className='text-red-500'> {about ? 'v': '>'}
              </span>
          </button>
        </div>
      <p className={`${about ? 'block': 'hidden'}`}>Im tuetwk teunsgt vduyev yioen. ydyiek nudiro, hhdui, hdiodhnem, iqpmdgr, yokmbdfds, huteamhdytr, huoutr</p>
      </div>

      <div>
        <div className='flex justify-between w-full pb-4'>
          <h4 className='text-orange-500'>Contact</h4>
          <button onClick={handleContact}>
            <span className='text-red-500 font-mono'> {contact ? 'v': '>'}
              </span>
          </button>
        </div>
      
      <p className={`${contact ? 'block': 'hidden'}`}>
        pruemu9@gmail.com</p>
      
      </div>
   
    </div>
    )
}

export default SideBar