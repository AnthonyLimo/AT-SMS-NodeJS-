//Simple script that allows you to send SMS through the Africa's Talking NoedJS SDK
//Run npm install -g africastalking on your terminal/command line to install the AT package

//Let's begin

const options = {
	apiKey: '5f5194fad3d6677596a17e7345b07976eff561caf0b0bd88a021959edce67232',
	username: 'njugunamadeit'
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