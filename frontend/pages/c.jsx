import React, {useContext} from 'react';
import Head from 'next/head.js';
import Image from 'next/image.js';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Layout from '../components/layout/layout.jsx';
import AppContext from '../context/app-context.js';

const Cart = () => {
	const appContext = useContext(AppContext);
	const router = useRouter();
	const {cart, isAuthenticated} = appContext;

	return (
		<Layout>
			<Head>
				<title>Cart | Elith</title>
			</Head>

			{cart.items
				? cart.items.map(item => {
					if (item.quantity > 0) {
						return (
							<div
								className='items-one'
								style={{marginBottom: 15}}
								key={item.id}
							>
								<div>
									<span id='item-price'>&nbsp; ${item.price}</span>
									<span id='item-name'>&nbsp; {item.name}</span>
								</div>
								<div>
									<button
										className='m-2 max-w-xs btn-primary'
										onClick={() => appContext.addItem(item)}
										color='link'
									>
                      +
									</button>
									<button
										className='m-2 max-w-xs btn-primary'
										onClick={() => appContext.removeItem(item)}
										color='link'
									>
                      -
									</button>
									<span className='mx-2' id='item-quantity'>
										{item.quantity}x
									</span>
								</div>
							</div>
						);
					}
				})
				: null}
			{isAuthenticated ? (
				cart.items.length > 0 ? (
					<div>
						<div className=''>
							<h3 className='text-xl text-secondary'>Total:</h3>
							<h4>${appContext.cart.total.toFixed(2)}</h4>
						</div>
						{router.pathname === '/restaurants' && (
							<div className=''>
								<Link href='/checkout'>
									<button className='btn-primary'>
										<a>Order</a>
									</button>
								</Link>
							</div>
						)}
					</div>
				) : (
					<>
						{router.pathname === '/c' && (
							<small className='text-columbia-200' onClick={() => window.history.back()}>
                Go back
							</small>
						)}
					</>
				)
			) : (
				<article className='flex flex-col w-full max-w-lg align-bottom m-12'>
				  <h1 className='font-bold text-4xl'>Log in to order, dumbass... </h1>
					<Image src='/img/laindance.gif' width={220} height={505}/>
				</article>
			)}
		</Layout>
	);
};

export default Cart;
