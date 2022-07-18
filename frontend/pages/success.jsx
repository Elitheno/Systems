import {useEffect} from 'react';
import useSWR from 'swr';

const Success = () => {
	const {
		query: {session_id},
	} = useRouter();

	const {data, error} = useSWR(
		() => `/api/checkout_sessions/${session_id}`,
		fetcher,
	);

	useEffect(() => {
		if (data) {
			shootFireworks();
			clearCart();
			const confettiSettings = {target: 'confetti-canvas'};
			const confetti = new ConfettiGenerator(confettiSettings);
			confetti.render();

			return () => confetti.clear();
		}
	}, [data]);

	return (
		<Layout>
			<canvas id='confetti-canvas'></canvas>
			<div className='w-3/2 bg-success text-snow'>
				<h1 className='text-4xl md:text-6xl font-bold'>
          Your order has been made!
				</h1>
			</div>
		</Layout>
	);
};

export default Success;
