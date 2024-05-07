document.addEventListener('DOMContentLoaded', function () 
{
    var name=localStorage.getItem('name');
    console.log(name);
    $.ajax({
        url: 'http://3.226.201.60:8080/api/player/' + name,
        type: 'GET',
        success: function (data) {
            document.getElementById('nombreUsuario').innerText = data.player.name;
            document.getElementById('partidas').innerText = data.player.games;
            let array = [];
            for (let i = 0; i < data.scores.length; i++) {
                array.push(data.scores[i].Score);
            }
            let highscore = 0;
            if(array.length != 0)
            {
                highscore = Math.max(...array);
            }
            document.getElementById('puntuacion').innerText = highscore;
            
            var avatarValue = data.player.avatar;
            console.log(avatarValue);
            if (avatarValue == 1)
            {
                var avatarElement =  'RESOURCES/' + avatarValue + '.png';
            }else
            {
                var avatarElement =  'RESOURCES/' + avatarValue + '.webp';
            }


            document.getElementById('profileImg').src = avatarElement; 
            
        },
        error: function (xhr, status, error) {
            console.error('Error al obtener los datos del usuario:', error);
        }
    });
});
