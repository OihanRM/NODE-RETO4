
//import model
Player = require ('./playerModel');

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