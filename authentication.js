module.exports = {

	verification(req, res, next) {
		// hanya ujicoba
		let authHeader = req.headers['authorization'];
		if(!authHeader){
			console.log("Not Authorized");
			return res.status(401).send({
				status: "401",
                error: "Not Authorized"
			});
		}

        if (authHeader.split(' ')[0] !== 'Bearer') {
			console.log("Not Authorized");
			return res.status(401).send({
				status: "401",
                error: "Not Authorized"
			});
		}

		let apiKey = authHeader.split(' ')[1];

		if (!apiKey) {
			console.log("Not Authorized");
			return res.status(401).send({
				status: "401",
                error: "Not Authorized"
			});
		}

        if(apiKey == '12345678'){
            next();
			return
        }
	},
}