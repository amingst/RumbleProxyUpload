const express = require('express')
const path = require('path')
const http2 = require('http2')
const http2Express = require('http2-express-bridge')
const { readFileSync } = require('fs')

const app = http2Express(express)
const port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.sendFile('index.html')
})

const options = {
	key: readFileSync('KEY'),
	cert: readFileSync('CERT'),
	allowHTTP1: true,
}

const server = http2.createSecureServer(options, app)
//app.listen(port, () => console.log(`Server listening on port ${port}`))
server.listen(port)
