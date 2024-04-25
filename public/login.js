document.addEventListener('DOMContentLoaded', function () {
    var nameInput = document.getElementById('name'); 
    var passwordInput = document.getElementById('password');
    var loginForm = document.getElementById('loginForm');
    var loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        var name = nameInput.value;
        localStorage.setItem('name', name); 
        var password = passwordInput.value;

        var data = {
            name: name, 
            password: password
        };

        fetch('http://3.226.201.60:8080/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'user.html';
                console.log('username:', data.name);

            } else {
                loginMessage.textContent = 'Incorrect password or user. Please try again.';
            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
            loginMessage.textContent = 'Error trying to log in. Please try again later.';
        });
    });
});
