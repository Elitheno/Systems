import Head from 'next/head.js';
import {useRouter} from 'next/router.js';
import Layout from '../components/layout/layout.jsx';

const About = () => {
	const router = useRouter();
	return (
		<Layout>
			<Head>
				<title>elith.systems</title>
				<meta name='description' content='about the wonderful elith.systems~'/>
			</Head>
			<article className='flex flex-col items-center space-around'>
				<section id='hero' className='h-4/3 md:h-[26rem] flex flex-col justify-center align-left w-full p-12 bg-[url("/img/bg2.jpg")]'>
					<h1 className='font-bold md:mt-[84px] text-snow text-4xl md:text-6xl my-4'>
            Annoucing 1.0 of our EMP spec
					</h1>
					<button className='m-2 max-w-xs btn-primary' onClick={() => router.push('/t')}>
            Learn more here
					</button>
				</section>
				<div className='bg-background-dark w-full text-center align-center md:w-4/6 flex flex-col p-5 text-snow mt-[-32px]'>
					<o className='font-sans'>
            We are a smol team of talented engineers, hackers, designers with just as much of a passion
            for electronics as you. Aiming to bring you the best quality schematics, electronics
            &amp; (hopefully) some ideas for your next projects!
					</o>
					<a className='mt-5 text-amarath-300'href='#'> Learn more about us → </a>
				</div>
				<section className='mt-4 items-center align-center w-auto md:w-4/6'>
					<h1 className='text-4xl md:text-6xl font-bold'> Our mission </h1>
					<br/>
					<o>
            Unlike most other corps, elith.systems is founded on praxis for viewing & ushering beauty
            unto the world - utopia.
					</o>
					<br/>
					<o>
            We believe in helping people see & usher beauty within; in our case, electronics
            & stand firm in the belief that the knowledge to create such beauty shouldn't be
            gatekept by price tags, obscene liscencing, and <b>certainly</b> not people.
            To do so would be spiritually ugly, which is the thing that we <em>hate</em> the most.
					</o>
					<br/>
					<h1 className='text-4xl md:text-6xl my-2 font-bold'>
            So what is our alternative?
					</h1>
					<br/>
					<o>
					</o>
				</section>
			</article>
		</Layout>
	);
};

export default About;

