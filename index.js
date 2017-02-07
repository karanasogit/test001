'use strict';

const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.status(200).send({ok:1});
});

app.listen(3000, () => {
	console.log('server is running');
});

