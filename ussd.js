const express = require('express');
const app = express();

const credentials = {
	apiKey: '',
	username: ''
};

const AfricasTalking = require('africastalking')(credentials);

app.get("/", (req, res) => {

	const { sessionId, serviceCode, phoneNumber, text } = req.body;

	let response = '';

	if (text == "") {
		response =  `CON What would you like to check?
		1. My Account 
		2. My phone number`;
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
	} else {
		response = `END Invalid choice`;
	}

});

app.listen(3000, () => {
	console.log("Server started on port 3000");
})