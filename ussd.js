const express = require('express');
const app = express();


//user credentials to allow airtime sending

const credentials = {
	apiKey: '',
	username: ''
}

const AfricasTalking = require('africastalking')(credentials);
const airtime = AfricasTalking.AIRTIME;
const sms = AfricasTalking.SMS;

//Setting get route

app.get("/", (req, res) => {
	res.render('ussd', res.locals.commonData);
});

//Setting post route and USSD methods

app.post("/", (req, res) => {

	//const sessionId = req.body.sessionId;
	//const serviceCode = req.body.serviceCode;
	//const phoneNumber = req.body.phoneNumber;
	//const text = req.body.text;

	console.log(req);

	//USSD logic

	let response = '';

	if (text == "") {
		response =  `CON What would you like to check?
		1. My Account 
		2. My phone number
		3. Send airtime
		4. Give yourself a shout out!`;
	} else if (text == "1") {
		response = `CON Choose the information that you would like to view
		1. Account number
		2. Account balance`;
	} else if (text == "2") {
		response = `END Your phone number is ${phoneNumber}`;
	} else if (text == "1*1") {
		const accountNumber = "ACC001";
		response = `END Your account number is ${accountNumber}`;
	} else if (text == "1*2") {
		const accountBalance = 1222;
		response = `END Your account balance for account number ${accountNumber} is KES ${accountBalance}`;
	} else if (text == "3") {

		//Sends airtime to the number that is running the USSD

		const recipient1 = {
			to: phoneNumber,
			amount: "KES 50"
		};

		const options = {
			recipient: recipient1
		};

		airtime.send(options)
			.then(resp => {
				console.log(resp);
			})
			.catch(error => {
				console.log(error)
			});


	} else if (text == "4") {


		const smsOptions = {
			to: ['+254727545805'],
			message: "Hey, wassup!"
		};

		sms.send(smsOptions)
			.then(resp => {
				console.log(resp);
			})
			.catch(error => {
				console.log(error);
			});

		response = `END Just hit you up!`;
	}

});

//Start server on specified port

app.listen(3000, () => {
	console.log("Server started on port 3000");
});