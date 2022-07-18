import Head from 'next/head';
import Layout from '../components/layout/layout.jsx';
import PersonalLayout from '../components/layout/personal.jsx';

const Reach = () => (
	<Layout>
		<Head>
			<title> Cart | elith.systems </title>
		</Head>
		<PersonalLayout
			title='Reaching out to us'
			description='Our links'
			image='/img/blooming-flowers.gif'
			link='https://github.com/elitheno'
		>
			<section className='mt-4'>
				<h1>
        Hi.
				</h1>
			</section>
		</PersonalLayout>
	</Layout>
);

export default Reach;
