//import model
Score = require ('./scoreModel');
Player = require ('./playerModel');

exports.index = function(req, res)
{
    Score.find().then(function(scores)
    {
        console.log("Peticion de todas las puntuaciones recibida");
        res.json(
        {
            status: "succes",
            message: "Scores retrieved successfully",
            data: scores
        });
        console.log("Peticion de todas las puntuaciones servida");
    }).catch(function(err)
    {
        res.json(
        {
            status: "error",
            message: err
        });
    });
}


exports.new = async function(req, res) {
    console.log("Peticion de creacion de puntuacion recibida");
    try {
        var score = new Score({
            Score: req.body.Score,
            player: req.body.player,
        });
        await score.save();
        res.json({
            message: 'New score created!',
            data: score
        });
        console.log("Peticion de creacion de puntuacion servida");
    } catch (err) {
        res.json({
            status: 'error',
            message: err.message
        });
    }
}
