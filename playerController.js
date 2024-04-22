
//import model
Player = require ('./playerModel');
Score = require ('./scoreModel');

//handle index actions
exports.index = function(req, res)
{
    Player.find().then(function(players)
    {
        console.log("Players retrieved successfully");
        res.json(
        {
            status: "succes",
            message: "Players retrieved successfully",
            data: players
        });
        console.log(players);
    }).catch(function(err)
    {
        res.json(
        {
            status: "error",
            message: err
        });
    });
}

exports.new = function(req, res) {
    var newPlayer = new Player();
    newPlayer.name = req.body.name;
    newPlayer.password = req.body.password;

    newPlayer.save().then(function(savedPlayer) {
        // Guardar la puntuación una vez que se haya guardado el jugador
        var newScore = new Score();
        newScore.score = 0;
        newScore.playerID = savedPlayer._id; // Asignar el ID del jugador guardado
        return newScore.save(); // Devolver la promesa para encadenarla
    }).then(function(savedScore) {
        // Respuesta al cliente
        res.json({
            message: "New player and score generated",
            data: {
                player: newPlayer,
                score: savedScore
            }
        });
    }).catch(function(err) {
        // Manejo de errores
        res.json({
            status: "error",
            message: err
        });
    });
};




