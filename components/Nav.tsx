import Image from 'next/image'

const Nav = () => {
	return(
	<nav className='w-full px-24 py-4 top-0 inline-flex justify-between'>
        <Image 
          src='/profile.png'
          alt='profile pic'
          width={40}
          height={40}
          className='rounded-full'
          />
        <div className='inline-flex gap-4'>
        <Image 
          src='/github.svg'
          alt='github'
          width={25}
          height={25}
          className='rounded-full'
          />
          <Image 
          src='/linkedin.svg'
          alt='linkedin'
          width={25}
          height={25}
          className='rounded-full'
          />
        </div>
      </nav>
	)
	
}
export default Nav