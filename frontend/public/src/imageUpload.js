form.addEventListener('submit', event => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('avatar', event.target[0].files[0]);
    fetch('http://localhost:7755/api/avatar', {method: 'post', body: formData})
    .then(res => res.json())
    .then(res => {
        avatar.src = `http://localhost:7755${res.payload.url}`;
        console.log(res.payload)
    })
    .catch(console.log);
});