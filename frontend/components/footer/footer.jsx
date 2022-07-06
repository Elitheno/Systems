import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => (
	<footer className={styles.footer}>
		<div className='mx-2'>
      Crafted with ♡ by Elith, in Next.JS
		</div>
		<div className='mx-2'>
			<a
				href='https://github.com/Elitheno'
				target='_blank'
				rel='noopenener noreferrer'>
				<Image src='/ico/mother.png' width={48} height={48}/>{' '}
			</a>
		</div>
	</footer>
);

export default Footer;
