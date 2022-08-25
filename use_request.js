const request = require("supertest")
request("https://icanhazdadjoke.com")
.get('/slack')
.end(function(err, res) {
	if (err) throw err;
	console.log(res.body.attachments);
});
