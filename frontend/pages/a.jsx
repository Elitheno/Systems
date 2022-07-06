import Head from 'next/head';
import Layout from '../components/layout/layout.jsx';

const About = () => (
	<Layout>
		<Head>
			<title>elith.systems</title>
			<meta name='description' content='about the wonderful elith.systems~'/>
		</Head>
		<article className='p-12 m-auto flex flex-col space-around'>
			<h1 className='font-bold text-4xl md:text-6xl my-4'>
        Who we are
			</h1>
			<p>
        Idk. Who are we? Who is anyone?
			</p>
		</article>
	</Layout>
);

export default About;

