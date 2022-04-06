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
	key: readFileSync('key.pem'),
	cert: readFileSync('cert.pem'),
	allowHTTP1: true,
}

const web = http2.createSecureServer(options, app)
web.listen(port, () => console.log(`Server listening on port ${port}`))
