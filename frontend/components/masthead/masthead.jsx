import React from 'react';
import Image from 'next/image';

const Masthead = () => (
	<div className='min-h-screen flex flex-col items-center justify-left'>
		<div className='p-12 font-bold z-10 text-snow drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-left flex-col'>
			<h1 className='mb-6 text-4xl xl:text-5xl'> xo.systems </h1>
			<h2 className='mb-6 text-2xl xl:text-3xl'> usher utopia </h2>
		</div>
	</div>
);

export default Masthead;
