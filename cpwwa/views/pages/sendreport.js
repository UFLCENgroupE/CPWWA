 //testing geocody
	var request = require('request');
	
	
	testgeocody(addr){
		var apiWithKey = 'https://geocody.expeditedaddons.com/?api_key=&address=';
		var address = addr;
		var countryLang = '&country_code=US&language_code=en';
		
		request(apiWithKey+address+countryLang, function (error, response, body) {
		
		console.log('Status:', response.statusCode);
		console.log('Headers:', JSON.stringify(response.headers));
		console.log('Response:', body);
		
		};
