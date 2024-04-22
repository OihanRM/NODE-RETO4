//filename playerModel.js

var mongooser = require('mongoose');

//setup Schema
var playerSchema = mongooser.Schema({
    name: {
        type: String,
        required: true
    },
    password: String
});

var Player = module.exports = mongooser.model('player', playerSchema);

module.exports.get = function()
{
    return Player.find().exec();
}