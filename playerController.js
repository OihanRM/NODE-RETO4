
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

exports.new = function(req, res)
{
    var newPlayer = new Player();
    newPlayer.name = req.body.name;
    newPlayer.password = req.body.password;

    newPlayer.save().then(function()
    {
        res.json(
            {
                message: "New player generated",
                data: newPlayer
            });
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

