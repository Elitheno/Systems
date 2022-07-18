import Layout from '../components/layout/layout.jsx';
import PersonalLayout from '../components/layout/personal.jsx';

const Trust = () => (
	<Layout>
		  <PersonalLayout
			title='Your trust in us'
			description="Elith invests in bold ideas, global leaders, and the convening and campaign power of people.
          For more than two decades, we&apos;ve worked across borders, disciplines, and technologies
          to fuel a movement to realize the full potential of the internet."
			link='Learn more'
			image='/img/ibm_office.jpg'
		>
			<section className='mt-4 items-center align-center w-auto md:w-4/6'>
				<h1 className='text-4xl md:text-6xl font-bold'> Our mission </h1>
				<br/>
				<o>
          Unlike most other corps, elith.systems is founded on praxis for viewing & ushering beauty
          unto the world - utopia.
				</o>
				<br/>
				<o>
          We are a smol team of talented engineers, hackers, designers with just as much of a passion
          for electronics as you. Aiming to bring you the best quality schematics, electronics
          & (hopefully) some ideas for your next projects!
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
		</PersonalLayout>
	</Layout>
);

export default Trust;

