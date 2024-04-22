
//import model
Player = require ('./playerModel');

//handle index actions
exports.index = function(req, res)
{
    Player.get().then(function(players)
    {
        res.json(
        {
            status: "succes",
            message: "Players retrieved successfully",
            data: players
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

exports.new = function(req, res)
{
    var newPlayer = new Player();
    console.log(req.body.name+"<--------------------------------------------------------------------------------");
    newPlayer.name = req.body.name ? req.body.name : newPlayer.name;
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