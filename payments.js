const credentials = {
	apiKey: '96b6e1080b238bf2792618b6e8545725a7064e3949610e52bcbf07fcf08bdde9',
	username: 'sandbox'
};

const AfricasTalking = require('africastalking')(credentials);

const payments = AfricasTalking.PAYMENTS;

const initiateMobileCheckout = () => {

	const options = {

		productName: 'LakeView Test',

		phoneNumber: '+254727545805',

		currencyCode: 'KES',

		amount: '50',

	}


	payments.mobileCheckout(options)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});

};