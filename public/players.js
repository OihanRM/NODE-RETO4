fetch('http://3.226.201.60:8080/api/score/top')
  .then(response => response.json())
  .then(data => {
    const playerScores = data.data.scores.reduce((acc, score) => {
      if (!acc[score.player] || acc[score.player].Score < score.Score) {
        acc[score.player] = score;
      }
      return acc;
    }, {}); 

    const topPlayers = Object.values(playerScores).slice(0, 3); 

    const topPlayerElements = document.querySelectorAll('.top-player');
    
    topPlayers.forEach((score, index) => {
      const playerElement = topPlayerElements[index];
      const playerNameElement = playerElement.querySelector('h3');
      const playerPointsElement = playerElement.querySelector('p:nth-of-type(2)');
      const playerPlaysElement = playerElement.querySelector('p:nth-of-type(3)'); 
      const playerImageElement = playerElement.querySelector('.player-gold, .player-silver, .player-bronze');
      
      const playerData = data.data.players.find(player => player._id === score.player); 
      const avatarValue = playerData.avatar; 

      let avatarElement;
      if (avatarValue == 1) {
        avatarElement = 'RESOURCES/' + avatarValue + '.png';
      } else {
        avatarElement = 'RESOURCES/' + avatarValue + '.webp';
      }

      fetch(`http://3.226.201.60:8080/api/player/`)
        .then(response => response.json())
        .then(gameData => {
            const playerPlays = playerData.games || 0;
            playerNameElement.textContent = playerData.name;
            playerPointsElement.textContent = `${score.Score} points`;
            playerPlaysElement.textContent = `${playerPlays} games`;
            playerImageElement.style.backgroundImage = `url('${avatarElement}')`; 
        })
        .catch(error => console.error('Error fetching player game data:', error));
    });
  })
  .catch(error => console.error('Error fetching top players:', error));
