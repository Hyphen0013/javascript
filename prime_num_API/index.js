const http = require('http');
const url = require('url');
const primes = require('./primes.js');


const server = http.createServer((req, res) => {
	const { pathname, query } = url.parse(req.url, true);

	if (pathname === '/primes') {
		const result = primes.nthPrime(query.n || 0);
		res.setHeader('Content-Type', 'application/json');
		res.write(JSON.stringify(result));
		res.end();
	} else {
		res.statusCode = 400;
		res.write('Not Found');
		res.end();
	}
});

server.listen(8080)