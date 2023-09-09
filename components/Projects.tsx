import Image from 'next/image'

const Projects = () => {
	return(
		<div className='w-[75%]'>
			<div className='flex gap-2'>
				<div className='border p-2 w-1/2'>
					<Image
						src='/images/youshop.png'
						alt='You shop'
						width={300}
						height={200}
					/>
					<div>
						<h4>Redux Ecommerce</h4>
						<p>an Ecommerce webapp built in redux Toolkit. 
							intergrated with Stripe payment and google login. 
							genarates a downloadable pdf receipt after purchase.
						</p>
						<div>
							<span className='bg-pink-200 rounded-full px-2 py-1'>Next.js</span>
							<span className='bg-pink-200 rounded-full px-2 py-1'>Redux Toolkit</span>
							<span className='bg-pink-200 rounded-full px-2 py-1'>Typescript</span>
							<span className='bg-pink-200 rounded-full px-2 py-1'>Stripe</span>

						</div>
					</div>
				</div>

				<div className='border p-2 w-1/2'>
					<Image
						src='/images/weatherapp.png'
						alt='You shop'
						width={300}
						height={200}
					/>
					<div>
						<h4>Weather-App</h4>
						<p>
							A wether app that shows weather in your nearest city, and popular cities. 
							also alows you to search the wether in other cities
						</p>
						<div>
							<span className='bg-pink-200 rounded-full px-2 py-1'>Next.js</span>
							<span className='bg-pink-200 rounded-full px-2 py-1'>Open Weather API</span>
							<span className='bg-pink-200 rounded-full px-2 py-1'>Geo-location</span>
						</div>
					</div>
				</div>
		</div>

		<div className='flex gap-2'>

			<div className='border p-2 w-1/2'>
				<Image
					src='/images/matchingGame.png'
					alt='You shop'
					width={300}
					height={200}
				/>
				<div>
					<h4>Card Matching Game</h4>
					<p>
						A card matching game made in HTML, CSS & JavaScript
					</p>
					<div>
						<span className='bg-pink-200 rounded-full px-2 py-1'>HTML</span>
						<span className='bg-pink-200 rounded-full px-2 py-1'>CSS</span>
						<span className='bg-pink-200 rounded-full px-2 py-1'>JavaScript</span>
					</div>
				</div>
			</div>

			<div className='border p-2 w-1/2'>
				<Image
					src='/images/tinyTwitter.png'
					alt='You shop'
					width={300}
					height={200}
				/>
				<div>
					<h4>Tiny Twitter</h4>
					<p>
						React Redux app
					</p>
					<div>
						<span className='bg-pink-200 rounded-full px-2 py-1'>HTML</span>
						<span className='bg-pink-200 rounded-full px-2 py-1'>CSS</span>
						<span className='bg-pink-200 rounded-full px-2 py-1'>ReactJs</span>
					</div>
				</div>
			</div>

		</div>

		<div className='border p-2 w-1/2'>
			<Image
				src='/images/africa.jpeg'
				alt='Africa Gallery'
				width={300}
				height={200}
			/>
			<div>
				<h4>Art Gallery</h4>
				<p>
					An art Gallery
				</p>
				<div>
					<span className='bg-pink-200 rounded-full px-2 py-1'>HTML</span>
					<span className='bg-pink-200 rounded-full px-2 py-1'>CSS</span>
					<span className='bg-pink-200 rounded-full px-2 py-1'>ReactJs</span>
				</div>
			</div>
		</div>
	</div>
	)
	
}
export default Projects