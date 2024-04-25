document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.querySelector('.form-wrapper button[type="submit"]');
    const mensajeError = document.getElementById('mensajeError');

    signUpBtn.addEventListener('click', function (event) {
        event.preventDefault(); 

        const user = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        const repeatPassword = document.getElementById('repeatPassword').value;
        const avatar = document.querySelector('input[name="avatar"]:checked').value;
        console.log(avatar);

        if (password !== repeatPassword) {
            mensajeError.textContent = 'Las contraseñas no coinciden';
            return; 
        }

        const data = {
            name: user,
            password: password,
            avatar: avatar
        };

        fetch('http://3.226.201.60:8080/api/player', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            mensajeExito.textContent = 'Usuario registrado exitosamente!';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
