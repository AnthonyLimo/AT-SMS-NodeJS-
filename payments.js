const credentials = {
	apiKey: 'ENTER_YOUR_APIKEY_HERE',
	username: 'ENTER_YOUR_USERNAME_HERE'
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