document.addEventListener('DOMContentLoaded', function () {
    var name = localStorage.getItem('name');
    console.log(name);

    $('#editar').click(function(event) {
        event.preventDefault();

        var modal = document.getElementById("myModal");
        modal.style.display = "block";

        var modifyNameBtn = document.getElementById("modify-name");
        var modifyPasswordBtn = document.getElementById("modify-password");

        modifyNameBtn.onclick = function() {
            modal.style.display = "none";
            var nameModal = document.getElementById("nameModal");
            nameModal.style.display = "block";
        };

        modifyPasswordBtn.onclick = function() {
            modal.style.display = "none";
            var passwordModal = document.getElementById("passwordModal");
            passwordModal.style.display = "block";
        };

        var span = document.getElementsByClassName("close");
        for (var i = 0; i < span.length; i++) {
            span[i].onclick = function() {
                modal.style.display = "none";
                document.getElementById("nameModal").style.display = "none";
                document.getElementById("passwordModal").style.display = "none";
            };
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.getElementById("nameModal").style.display = "none";
                document.getElementById("passwordModal").style.display = "none";
            }
        }
    });
    $('#modal-confirm_nombre').click(function() {
        var newName = document.getElementById("new-name").value;    
        if (newName !== "") {
            $.ajax({
                url: 'http://3.226.201.60:8080/api/player/' + name,
                type: 'PUT',
                data: { name: newName },
                success: function(response) {
                    localStorage.setItem('name', newName);
                    name = newName;
                    console.log(newName);
                    window.location.href = 'user.html';
                },
                error: function(xhr, status, error) {
                    console.error("Error al modificar el nombre:", status, error);
                }
            });
        }
    });

    $('#modal-confirm_contrasena').click(function() {
        var newPassword = document.getElementById("new-password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
    
        if (newPassword !== "" && confirmPassword !== "" && newPassword === confirmPassword) {
            $.ajax({
                url: 'http://3.226.201.60:8080/api/player/' + name,
                type: 'PUT',
                data: { password: newPassword },
                success: function(response) {
                    localStorage.setItem('password', newPassword);
                    password = newPassword;
                    console.log(newPassword);
                    window.location.href = 'user.html';
                },
                error: function(xhr, status, error) {
                    console.error("Error al modificar la contraseña:", status, error);
                }
            });
        } else if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
        }
    });
}); 
