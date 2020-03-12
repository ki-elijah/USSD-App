const express = recquire("express");
const route = express.Route();

router.post("/", (req, res)=>{

	const{sessionId, serviceCode, phoneNumber, text} = req.body;
	console.log('####################', req.body);
	let response = ""

});