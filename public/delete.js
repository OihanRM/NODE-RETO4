document.addEventListener('DOMContentLoaded', function () {
    var name = localStorage.getItem('name');
    var playerID = localStorage.getItem('playerID');
    $('#delete').click(function(event) {
        event.preventDefault();

        var modal = document.getElementById("deleteModal");
        modal.style.display = "block";

        var span = document.getElementsByClassName("close");
        for (var i = 0; i < span.length; i++) {
            span[i].onclick = function() {
                modal.style.display = "none";
            };
        }

        $('#modal-confirm_delete').click(function() {
            $.ajax({
                url: 'http://3.226.201.60:8080/api/delete/' + playerID,
                type: 'DELETE',
                success: function(response) {
                    window.location.href = 'index.html';
                },
                error: function(xhr, status, error) {
                    console.error("Error al eliminar jugador:", status, error);
                }
            });
        });

        $('#modal-quit_delete').click(function() {
            modal.style.display = "none";
        });
    });
});
