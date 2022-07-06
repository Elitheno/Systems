import {RiGithubLine as GHIcon} from 'react-icons/ri';
import {gql} from '@apollo/client';
import Layout from '../components/layout/layout.jsx';
import Masthead from '../components/masthead/masthead.jsx';
import StoreList from '../components/store/list.jsx';
import styles from '../styles/Home.module.css';
import client from '../lib/apollo.js';

const Home = props => (
	<Layout>
		<Masthead />
		<article className=''>
			<section className='flex flex-col w-full md:w-2/3 h-1/2 text-center md:text-left p-12'>
				<h2 className='font-bold text-4xl md:text-6xl py-4'>
            A different kind of electronics company.
				</h2>
				<p>
            We specialise in open-source hardware development, aiming to create unique,
            high-quality and affordable electronics.
            All of which are open sourced, which you can build yourself at home!
				</p>

			</section>
			<section className='flex flex-col w-full md:w-3/2 h-1/2 text-left md:text-right p-12'>
				<h2 className='font-bold text-4xl md:text-6xl py-4'>
            What we currently offer
				</h2>
				<div className={styles.container}>
					<StoreList products={props.products}/>
				</div>
			</section>
			<section className='flex flex-col w-full md:w-2/3 h-1/2 text-center md:text-left p-12'>
				<h2 className='font-bold text-4xl md:text-6xl py-4'>
            Elith's business is no different. 🌱
				</h2>
				<p>
            Elith has always taken its people-first mindset in terms of social cybernetics.
            Here, that hasn't changed at all! All our schematics are free, and available for viewing
            on <a href='https://github.com/Elitheno'> GitHub! <GHIcon/> </a>
				</p>
			</section>
		</article>
	</Layout>
);

export async function getStaticProps() {
	const {data} = await client.query({
		query: gql`
			{
			  products {
			    data {
			      attributes {
			        name
			        description
			        price
			        stock
              slug
              images {
                data {
                  attributes {
                    url
                  }
                }
              }
			      }
			    }
			  }
			}
		`,
	});

	return {
		props: {
			products: data.products.data,
		},
	};
}

export default Home;

