import React, {useState, useContext} from 'react';
import Link from 'next/link';
import {RiArrowDownSFill, RiShoppingCart2Line as CartIcon} from 'react-icons/ri';
import {logout} from '../../lib/auth.js';
import AppContext from '../../context/app-context.js';
import styles from './header.module.css';

const Header = () => {
	const [expand, toggleExpand] = useState(false);
	const {user, setUser} = useContext(AppContext);
	const rotateButtonStyle = {
		transform: expand ? 'rotate(180deg)' : '',
		transition: 'transform 150ms ease', // Smooth transition
	};

	return (
		<header className='flex flex-col justify-center p-2 h-24 space-between'>
    	<nav className='flex-row mx-2 m-auto'>
				<nav className='flex-start m-auto'>
					<a href='/' className='text-2xl font-bold'>
						{' '}
            elith.systems{' '}
					</a>{' '}
					<a className='mx-2' href='/a'> about </a> <a className='mx-2' href='/t'> trust &amp; safety </a>{' '}
					<a className='mx-2' href='/c'> cart </a> <a className='mx-2' href='/r'> contact </a> <a className='mx-2'> More </a>
					<button
						onClick={() => toggleExpand(!expand)}
						style={rotateButtonStyle}
					>
						<RiArrowDownSFill />
					</button>
					{user ? (
						<h5>{user.username}</h5>
					) : (
						<Link href='/s'>
							<a className='nav-link'> Sign up</a>
						</Link>
					)}
					{user ? (
						<Link href='/'>
							<a
								className='nav-link'
								onClick={() => {
									logout();
									setUser(null);
								}}
							>
                  Logout
							</a>
						</Link>
					) : (
						<Link href='/l'>
							<a className='nav-link'>Sign in</a>
						</Link>
					)}
				</nav>
			</nav>
			{!expand ? (
				<></>
			) : (
				<nav className='flex flex-row w-1/2'>
					<ul className='px-2'> {/* Items */}
						<b className='bold underline'> items </b>
						<li>
							<a href='?=emp4'> EMPs </a>
						</li>
						<li>
							<a href='?=taser'> tasers </a>
						</li>
					</ul>
					<ul className='px-2'> {/* Services */}
						<b className='bold underline'> service </b>
						<li>
							<a href='?=emps'> specs </a>
						</li>
						<li>
							<a href='?=taser'> schematics </a>
						</li>
					</ul>
					<ul className='px-2'> {/* Info */}
						<b className='bold underline'> info </b>
						<li>
							<a href='?=emps'> support </a>
						</li>
						<li>
							<a href='?=taser'> src code </a>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
