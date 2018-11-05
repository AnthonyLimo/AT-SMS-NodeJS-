//Simple script that allows you to send SMS through the Africa's Talking NoedJS SDK
//Run npm install -g africastalking on your terminal/command line to install the AT package

//Let's begin

const options = {
	apiKey: 'ENTER_YOUR_API_KEY_HERE',
	username: 'ENTER_YOUR_USERNAME_KEY_HERE'
};

const AfricasTalking = require('africastalking')(options);

sms = AfricasTalking.SMS;

const opts = {
	to: ['+254727545805'],
	message: "Hello world"
};

sms.send(opts)
	.then( response => {
		console.log(response)
	})
	.catch( error => {
		console.log(error)
	});