import Image from 'next/image'
import Skills from './Skills'


const Projects = () => {
	const projectContent =[
	{
		id:1,
		image:"/images/youshop.png",
		title: "Redux Eccommerce",
		description:'An eCommerce web app powered by Redux Toolkit & TypeScript, seamlessly integrating Stripe for payments and Google login for user convenience. This application also generates downloadable PDF receipts, enhancing the customer shopping experience.',
		tags: ['Next.js', 'Next-auth', 'Redux Toolkit', 'Typescript', 'Stripe', 'Tailwind CSS']
	},
	{
		id:2,
		image:"/images/unicab.png",
		title: "Cab Driver Web-app",
		description:'A web app for cab drivers, powered by PostgreSQL and Prisma, built with Next.js. Users can create accounts, log in securely using NextAuth authentication, and register as drivers. This project harnesses the power of TypeScript and utilizes the sleek design of Tailwind CSS.',
		tags: ['Next.js', 'Next-auth', 'Node', 'Redux Toolkit', 'Typescript', 'Stripe', 'Tailwind CSS']
	},
	{
		id:3,
		image:"/images/weatherapp.png",
		title: "Weather-app",
		description:'A Next.js 13 app leveraging OpenWeatherMap API to provide real-time weather updates and temperatures for various cities. It offers geolocation support to display the nearest city\'s weather and uses Chart.js for temperature comparison in an intuitive bar chart.',
		tags: ['Next.js', 'Open Weather API', 'Geo-location', 'Tailwind CSS']
	},
	{
		id:4,
		image:"/images/matchingGame.png",
		title: "Card Matching Game",
		description:'An engaging card matching game crafted with HTML, CSS, and JavaScript. Test your memory and concentration by matching similar cards while having fun with this interactive game.',
		tags: ['HTML', 'CSS', 'JavaScript']
	},
	{
		id:5,
		image:"/images/tinyTwitter.png",
		title: "Tiny Twitter",
		description:"A React Redux application that empowers users to manage posts with ease. Add, delete, modify, and express your sentiments with likes and dislikes in this user-friendly app, driven by the power of useState.",
		tags: ["React", "CSS"]
	},
	{
		id:6,
		image:"/images/africa.jpeg",
		title: "Art Gallery",
		description:'A world of creativity in our art gallery web app. Powered by React and styled with Tailwind CSS, it showcases captivating artworks from various talented artists, offering a visual feast for art enthusiasts.',
		tags: ['React', 'Tailwind CSS']
	}

	]

	return(
		<div className='md:w-[75%] w-full md:py-8 '>
			<h2 className='pb-8 text-center text-lg font-bold'>Projects</h2>
			<div className='projects'>
			{projectContent.map((project) => (
			 	<div 
			    key={project.id}
			    className=' border p-2 flex flex-col items-center'
			  	>
				 	<Image
				      src={project.image}
				      alt={project.title}
				      width={450}
				      height={350}
				    />
				    <div className='w-full'>
				     	<div className='flex justify-between py-4'>
				        	<h4 className="">{project.title}</h4>
				        	<a href='github.com/muthee-p' className='py-2 mr-4'>
				        		<Image
				        			src='/github.svg'
				        			alt='github'
				        			width={20}
				        			height={20}
				        		/>
				        	</a>
				     	</div>
				     	<p className='font-serif text-gray-800'>{project.description}</p>
				     	{project.tags.map((tag) => (
				       	<div className='inline-flex py-4' key={tag}>
				          <span className='bg-pink-200 text-xs mr-4 rounded-full px-2 py-1'>{tag}</span>
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