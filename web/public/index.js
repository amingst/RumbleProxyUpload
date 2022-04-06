const form = document.getElementById('uploader_form')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const data = new FormData(form)
	var newHeaders = new Headers()

	// TODO: make request to secure backend then to rumble

	/*fetch('https://rumble.com/api/simple-upload.php', {
		method: 'POST',
		body: data,
		mode: 'no-cors',
		headers: newHeaders,
	}).then((res) => {
		console.log(res)
		res.text().then((data) => {
			console.log('data: ' + data)
		})
	})*/

	// NOTE: URL Hardcoded!!!!
	fetch('https://localhost:5000/', {
		method: 'POST',
		body: data,
		mode: 'no-cors',
		headers: newHeaders,
	}).then((res) => {
		console.log(res)
		res.text().then((data) => {
			console.log('data: ' + data)
		})
	})
})
