const Skills = () =>{
	return(
		<div>
			<h2 className='pb-8 text-center text-lg font-bold'>Skills</h2>
	      	<div className='flex justify-between gap-4 w-full md:p-12 '>
	       
		       	<div className='p-2 border w-1/3 text-center'>
			        <h4>FrontEnd skills</h4>
			        <p>HTML</p>
			        <p>CSS</p>
			        <p>JavaScript</p>
			        <p>ReactJs</p>
			        <p>React Native</p>
			        <p>Tailwind</p>
			        <p>Next Js</p>
		       	</div>
	       		<div className='p-2 border w-1/3 text-center'>
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
	       		<div className='p-2 border w-1/3 text-center'>
			        <h4>Tools</h4>
			        <p>Git</p>
			        <p>Figma</p>
	       		</div>
	       	</div>
      </div>
	)
}

export default Skills