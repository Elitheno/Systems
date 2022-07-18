import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async function handler(request, response) {
	if (request.method === 'POST') {
		try {
			const session = await stripe.checkout.sessions.create({
				mode: 'payment',
				payment_method_types: ['card'],
				line_items: request?.body?.items ?? [],
				success_url: `${request.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${request.headers.origin}/c`,
			});

			response.status(200).json(session);
		} catch (error) {
			response.status(500).json({message: error.message});
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).json({message: 'Method not allowed'});
	}
}
