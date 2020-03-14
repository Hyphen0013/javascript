const http = require('http');
const url = require('url');
// const { Worker } = require('wroker-thread');
const Worker = require("worker-thread");

const server = http.createServer((req, res) => {
	const { pathname, query } = url.parse(req.url, true);

	if (pathname === '/primes') {

		const worker = new Worker('./primes.js', { workerData: { n: query.n || 0 } });

		worker.on('error', () => {
			res.statusCode = 500;
			res.write('Oops there was an error...');
			res.end();
		});


		let result;
		worker.on('message', (message) => {
			result = message;
		});

		worker.on('exit', () => {

			res.setHeader('Content-Type', 'application/json');
			res.write(JSON.stringify(result));
			res.end();
		});

	} else {
		res.statusCode = 400;
		res.write('Not Found');
		res.end();
	}
});

server.listen(8080)