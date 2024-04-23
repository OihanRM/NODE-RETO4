//import model
Score = require ('./scoreModel');
Player = require ('./playerModel');

exports.index = function(req, res)
{
    Score.find().then(function(scores)
    {
        console.log("Scores retrieved successfully");
        res.json(
        {
            status: "succes",
            message: "Scores retrieved successfully",
            data: scores
        });
        console.log(scores);
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
    try {
        var score = new Score({
            Score: req.body.Score,
            playerID: req.body.playerID
        });
        await score.save();
        res.json({
            message: 'New score created!',
            data: score
        });
    } catch (err) {
        res.json({
            status: 'error',
            message: err.message
        });
    }
}
