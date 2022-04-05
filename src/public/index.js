const form = document.getElementById('uploader_form')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const data = new FormData(form)
	var newHeaders = new Headers()

	// TODO: add .then and .catch for response and embeds
	fetch('https://rumble.com/api/simple-upload.php', {
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
