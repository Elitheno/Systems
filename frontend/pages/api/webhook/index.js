export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(request, response) {
	if (request.method === 'POST') {
		let event;

		try {
			const rawBody = await buffer(request);
			const signature = request.headers['stripe-signature'];

			event = stripe.webhooks.constructEvent(
				rawBody.toString(),
				signature,
				process.env.STRIPE_WEBHOOK_SECRET,
			);
		} catch (error) {
			console.log(`❌ Error message: ${error.message}`);
			response.status(400).json({message: `Webhook Error: ${error.message}`});
			return;
		}

		if (event.type === 'checkout.session.completed') {
			console.log('💰  Payment received!');
		} else {
			console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
		}

		// Return a response to acknowledge receipt of the event.
		res.json({received: true});
	} else {
		response.setHeader('Allow', 'POST');
		response.status(405).json({message: 'Method not allowed'});
	}
}
