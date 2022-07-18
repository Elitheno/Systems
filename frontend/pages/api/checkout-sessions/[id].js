import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async function handler(request, response) {
	const id = request.query.id;
	try {
		if (!id.startsWith('cs_')) {
			throw new Error('Incorrect CheckoutSession ID.');
		}

		const checkout_session = await stripe.checkout.sessions.retrieve(id);

		response.status(200).json(checkout_session);
	} catch (error) {
		response.status(500).json({statusCode: 500, message: error.message});
	}
}
