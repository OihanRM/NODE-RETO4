document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('password');
    var repeatPasswordInput = document.getElementById('repeatPassword');

    passwordInput.addEventListener('blur', validarContraseña);
    repeatPasswordInput.addEventListener('blur', validarContraseña);

    document.querySelector('form').addEventListener('submit', function (event) {
        var password = passwordInput.value;
        var confirmPassword = repeatPasswordInput.value;

        if (password !== confirmPassword) {
            mostrarError('Las contraseñas no coinciden.');
            event.preventDefault();
            return;
        }
    });

    function validarContraseña() {
        var password = passwordInput.value;
        var confirmPassword = repeatPasswordInput.value;

        if (password !== '' && confirmPassword !== '' && password !== confirmPassword) {
            mostrarError('Las contraseñas no coinciden');
        } else {
            limpiarError();
        }
    }

    function mostrarError(mensaje) {
        document.getElementById('mensajeError').textContent = mensaje;
    }

    function limpiarError() {
        document.getElementById('mensajeError').textContent = '';
    }
});
