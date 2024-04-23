
//import model
Player = require ('./playerModel');
Score = require ('./scoreModel');

//handle index actions
exports.index = function(req, res)
{
    console.log("Peticion de todos los jugadores recibida");
    Player.find().then(function(players)
    {
        res.json(
        {
            status: "succes",
            message: "Players retrieved successfully",
            data: players
        });
        console.log("Peticion de todos los jugadores servida");
    }).catch(function(err)
    {
        res.json(
        {
            status: "error",
            message: err
        });
    });
}

exports.indexByName = function(req, res) {
    Player.findOne({ name: req.params.player_name })
        .exec()
        .then(function(player) {
            if (!player) {
                return res.json({
                    status: "error",
                    message: "Player not found"
                });
            }
            
            // Ahora buscamos las puntuaciones asociadas a este jugador
            Score.find({ player: player._id })
                .exec()
                .then(function(scores) {
                    res.json({
                        status: "success",
                        message: "Player and scores found",
                        player: player,
                        scores: scores
                    });
                    console.log("Peticion de Jugador y puntuaciones servida");
                })
                .catch(function(err) {
                    res.json({
                        status: "error",
                        message: err
                    });
                });
        })
        .catch(function(err) {
            res.json({
                status: "error",
                message: err
            });
        });
}

exports.new = function(req, res)
{
    console.log("Peticion de nuevo jugador recibida");
    var newPlayer = new Player();
    newPlayer.name = req.body.name;
    newPlayer.password = req.body.password;
    newPlayer.games = 0;
    newPlayer.avatar = req.body.avatar;
    
    newPlayer.save().then(function()
    {
        res.json(
            {
                message: "New player generated",
                data: newPlayer
            });
        console.log("Peticion de nuevo jugador servida");
    }).catch(function(err)
    {
        res.json(
            {
                status: "error",
                message: err
            });
    });    
}

exports.delete = function(req, res)
{
    console.log("Peticion de borrar jugador recibida");
    Player.deleteOne(
        {
            name: req.params.player_name
        }).then(function()
        {
            res.json(
                {
                    status: "succes",
                    message: "Player deleted"
                });
            console.log("Peticion de borrar jugador servida");
        }).catch(function(err)
        {
            res.json(
                {
                    status: "error",
                    message: err
                });
        });
}
exports.update = function(req, res)
{
    console.log("Peticion de actualizar nombre/contraseña jugador recibida");
    Player.findOne(
        {
            name: req.params.player_name
        }).then(function(player)
        {
            player.name = req.body.name ? req.body.name : player.name;
            player.password = req.body.password ? req.body.password : player.password;

            player.save().then(function()
            {
                res.json(
                    {
                        message: "Player updated",
                        data: player
                    });
                    console.log("Peticion de actualizar nombre/contraseña jugador servida");
            }).catch(function(err)
            {
                res.json(
                    {
                        status: "error",
                        message: err
                    });
            });
    });
}

