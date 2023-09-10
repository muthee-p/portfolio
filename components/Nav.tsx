import Image from 'next/image'

const Nav = () => {
  const githubUrl ='https://github.com/muthee-p';
  const linkedinUrl =' https://www.linkedin.com/in/muthee-p/';
	return(
	<nav className=' fixed md:static z-50 md:z-2 backdrop-blur w-full md:px-24 px-2 py-4 top-0 inline-flex justify-between'>
        <Image 
          src='/profile.png'
          alt='profile pic'
          width={40}
          height={40}
          className='rounded-full'
          />
        <div className='inline-flex md:gap-8 gap-4 items-center'>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className=''>
				        		<Image
				        			src='/github.svg'
				        			alt='github'
				        			width={25}
				        			height={25}
									className=''
				        		/>
				        	</a>

        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className=''>
          <Image 
            src='/linkedin.svg'
            alt='linkedin'
            width={35}
            height={35}
            className=''
          />
        </a>
       
          
        </div>
      </nav>
	)
	
}
export default Nav