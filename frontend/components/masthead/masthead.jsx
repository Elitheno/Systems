import React from 'react';
import Image from 'next/image';

const Masthead = () => (
	<div className='flex flex-col items-center justify-left'>
		<div className='p-12 font-bold z-10 text-center flex-1 flex items-center justify-left flex-col md:flex-row'>
			<img className='w-1/2 min-w-[220px] h-56' src='/ico/mother.png' alt='mother icon'/>
			<section>
				<h1 className='mb-6 text-left text-4xl xl:text-5xl'>
          elith.
					<br/>
          systems
				</h1>
				<h2 className='mb-6 text-2xl xl:text-3xl'> usher utopia </h2>
			</section>
		</div>
		<hr className='w-2/3 border-fuzzywuzzy border-[0.75px]'/>
	</div>
);

export default Masthead;
