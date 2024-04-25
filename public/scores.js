fetch('http://3.226.201.60:8080/api/score/top')
  .then(response => response.json())
  .then(data => {
    const tbody = document.getElementById('topPlayersTableBody');

    tbody.innerHTML = '';

    data.data.scores.slice(0, 10).forEach((score, index) => {
      const row = document.createElement('tr');

      const positionCell = document.createElement('td');
      positionCell.textContent = index + 1;
      positionCell.style.fontWeight = 'bold';
      const playerNameCell = document.createElement('td');
      const playerScoreCell = document.createElement('td');
      playerScoreCell.textContent = score.Score;

      row.appendChild(positionCell);
      row.appendChild(playerNameCell);
      row.appendChild(playerScoreCell);

      tbody.appendChild(row);

      const player = data.data.players.find(player => player._id === score.player);
      if (player) {
        playerNameCell.textContent = player.name;
      }
    });
  })
  .catch(error => {
    console.error('Error al obtener los mejores puntajes:', error);
  });
