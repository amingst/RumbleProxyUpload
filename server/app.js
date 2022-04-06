const express = require('express')
const path = require('path')
const http2 = require('http2')
const http2Express = require('http2-express-bridge')
const { readFileSync } = require('fs')

const app = http2Express(express)
const port = process.env.PORT || 4000

app.post('/', (req, res) => {
	console.log(req.body)
})

const options = {
	key: readFileSync('key.pem'),
	cert: readFileSync('cert.pem'),
	allowHTTP1: true,
}

const server = http2.createSecureServer(options, app)
//app.listen(port, () => console.log(`Server listening on port ${port}`))
server.listen(port, () => console.log(`Server listening on port ${port}`))
