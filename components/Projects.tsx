import Image from 'next/image'
import Skills from './Skills'


const Projects = () => {
	const projectContent =[
	{
		id:1,
		image:"/images/youshop.png",
		title: "Redux Eccommerce",
		description:'An eCommerce web app powered by Redux Toolkit & TypeScript, seamlessly integrating Stripe for payments and Google login for user convenience. This application also generates downloadable PDF receipts, enhancing the customer shopping experience.',
		tags: ['Next.js', 'Next-auth', 'Redux Toolkit', 'Typescript', 'Stripe', 'Tailwind CSS'],
		page:'https://youshop254.vercel.app/',
		code:'https://github.com/muthee-p/redux-ecommerce'
	},
	{
		id:2,
		image:"/images/unicab.png",
		title: "Cab Driver Web-app",
		description:'A web app for cab drivers, powered by PostgreSQL and Prisma, built with Next.js. Users can create accounts, log in securely using NextAuth authentication, and register as drivers. This project harnesses the power of TypeScript and utilizes the sleek design of Tailwind CSS.',
		tags: ['Next.js', 'Next-auth', 'Typescript', 'Prisma', 'Postgres', 'Tailwind CSS'],
		page:'https://unicab.vercel.app/',
		code:'https://github.com/muthee-p/unicab'
	},
	{
		id:3,
		image:"/images/weatherapp.png",
		title: "Weather-app",
		description:'A Next.js 13 app leveraging OpenWeatherMap API to provide real-time weather updates and temperatures for various cities. It offers geolocation support to display the nearest city\'s weather and uses Chart.js for temperature comparison in an intuitive bar chart.',
		tags: ['Next.js', 'Open Weather API', 'Geo-location', 'Tailwind CSS'],
		page:'https://weather-app-five-lyart.vercel.app/',
		code:'https://github.com/muthee-p/weather-app'
	},
	{
		id:4,
		image:"/images/matchingGame.png",
		title: "Card Matching Game",
		description:'An engaging card matching game crafted with HTML, CSS, and JavaScript. Test your memory and concentration by matching similar cards while having fun with this interactive game.',
		tags: ['HTML', 'CSS', 'JavaScript'],
		page: 'https://muthee-p.github.io/matching_game/',
		code:'https://github.com/muthee-p/matching_game'
	},
	{
		id:5,
		image:"/images/tinyTwitter.png",
		title: "Tiny Twitter",
		description:"A React Redux application that empowers users to manage posts with ease. Add, delete, modify, and express your sentiments with likes and dislikes in this user-friendly app, driven by the power of useState.",
		tags: ["React", "CSS"],
		page:'https://tinytwitter.netlify.app/',
		code: 'https://github.com/muthee-p/Tiny-Twitter'
	},
	{
		id:6,
		image:"/images/africa.jpeg",
		title: "Art Gallery",
		description:'A world of creativity in our art gallery web app. Powered by React and styled with Tailwind CSS, it showcases captivating artworks from various talented artists, offering a visual feast for art enthusiasts.',
		tags: ['React', 'Tailwind CSS'],
		page:'https://africa-gallery.vercel.app/',
		code:'https://github.com/muthee-p/africa-gallery'
	}

	]

	return(
		<div className='md:w-[75%] w-full md:py-8'>
			<h2 className=' border pb-16 pt-8 text-center text-2xl font-bold '
				>&lt;Projects&gt;
			</h2>
			<div className='projects'>
			{projectContent.map((project) => (
			 	<div 
			    key={project.id}
			    className=' rounded-lg border p-2 flex flex-col items-center md:bg-gray-100 bg-gray-200'
			  	>
					<a href={project.page} target="_blank" rel="noopener noreferrer">
						<Image
							src={project.image}
							alt={project.title}
							width={450}
							height={350}
						/>
					</a>
				 	
				    <div className='w-full px-2'>
				     	<div className='flex justify-between py-4'>
				        	<h4 className="">{project.title}</h4>
				        	<a href={project.code} target="_blank" rel="noopener noreferrer" className='py-2 mr-4'>
				        		<Image
				        			src='/github.svg'
				        			alt='github'
				        			width={25}
				        			height={25}
									className='bg-indigo-200 p-1 rounded-full hover:bg-gray-50'
				        		/>
				        	</a>
				     	</div>
				     	<p className=' border-b pb-4 text-xs text-gray-800 leading-6'>{project.description}</p>
				     	{project.tags.map((tag) => (
				       	<div className='inline-flex pb-2 pt-4' key={tag}>
				          <span className='bg-indigo-200 text-gray-900 text-xs mr-4 rounded-full px-2 py-1'>{tag}</span>
				        </div>
						))}
	    			</div>
  				</div>
			))}
		</div>
		<Skills/>
		</div>
	)
	
}
export default Projects