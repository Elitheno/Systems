import React, {useState} from 'react';
import styles from './header.module.css';
import {RiArrowDownSFill} from 'react-icons/ri';

const Header = () => {
	const [expand, toggleExpand] = useState(false);
	const rotateButtonStyle = {
		transform: expand ? 'rotate(180deg)' : '',
		transition: 'transform 150ms ease', // smooth transition
	};

	return (
		<header className='flex md:flex-row p-2 m-auto space-between'>
			{!expand ? (
				<nav className='flex-row mx-2'>
					<a href='/' className='text-2xl font-bold'>
						{' '}
						xo.systems{' '}
					</a>{' '}
					<a href='/a'> about </a> <a href='/t'> trust &amp; safety </a>{' '}
					<a href='/cart'> cart </a> <a> More </a>
					<button
						onClick={() => toggleExpand(!expand)}
						style={rotateButtonStyle}
					>
						<RiArrowDownSFill />
					</button>
				</nav>
			) : (
				<nav className='w-1/2 z-2'>
					<button
						onClick={() => toggleExpand(false)}
						className={styles.closeBtn}
					>
						<RiArrowDownSFill />
					</button>
					<ul>
						<caption> items </caption>
						<li>
							<a href='?=emps'> EMPs </a>
						</li>
						<li>
							<a href='?=taser'> tasers </a>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
