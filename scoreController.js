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


exports.new = function(req, res)
{
    var score = new Score();
    score.Score = 0;
    score.playerID = req.body.playerID;
    score.save(function(err)
    {
        if(err)
        {
            res.json(err);
        }
        res.json(
        {
            message: 'New score created!',
            data: score
        });
    });
}