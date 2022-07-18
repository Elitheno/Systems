const PersonalLayout = props => (
	<article className='flex flex-col items-center space-around'>
		<section id='hero' className='h-1/3 md:h-[8rem] flex flex-col justify-center align-left w-full p-12 bg-[url("/img/ibm_office.jpg")]'>
		</section>
		<div className='m-4 bg-background-dark w-full align-center md:w-4/6 flex flex-col p-5 text-snow mt-[-32px]'>
			<h1 className='text-4xl font-bold'>
				{props.title}
			</h1>
			<br/>
			<o>
				{props.description}
			</o>
			<a className='mt-5 text-amarath-300'href='#'> {props.link} </a>
		</div>
		{props.children}
	</article>
);

export default PersonalLayout;
