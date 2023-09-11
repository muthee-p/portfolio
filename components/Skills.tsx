const Skills = () =>{
	return(
		<div className="w-full md:pt-16 pb-8 ">
			<h2 className=' border py-12 text-center text-2xl font-bold'
				>&lt;Skills&gt;</h2>
	      	<div className='flex justify-between md:gap-4 gap-2 md:px-12'>
	       
		       	<div className='p-2 rounded-xl w-1/3 text-center bg-indigo-200 text-gray-900 leading-loose'>
			        <h4 className="">Front-end skills</h4>
			        <p>HTML</p>
			        <p>CSS</p>
			        <p>JavaScript</p>
			        <p>ReactJs</p>
			        <p>React Native</p>
			        <p>Tailwind</p>
			        <p>Next Js</p>
		       	</div>
	       		<div className='p-2 w-1/3 text-center bg-indigo-200 text-gray-900 rounded-xl leading-loose'>
			        <h4 className="">Back-end Skills</h4>
			        <p>Node</p>
			        <p>Typescript</p>
			        <p>MongoDb</p>
			        <p>PostGress</p>
			        <p>Mysql</p>
			        <p>Redux</p>
			        <p>Expess</p>
			        <p>Prisma</p>
	      	 	</div>
	       		<div className='p-2 rounded-lg w-1/3 text-center bg-indigo-200 text-gray-900 leading-loose'>
			        <h4 className="">Tools</h4>
			        <p>Git</p>
			        <p>Figma</p>
	       		</div>
	       	</div>
      </div>
	)
}

export default Skills