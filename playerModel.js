//filename playerModel.js

var mongoose = require('mongoose');

//setup Schema
var playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        avatar: Number
    },
    password: String,
    games: Number
},{collection: 'player'});

var Player = module.exports = mongoose.model('player', playerSchema);

module.exports.get = function()
{
    return Player.find().exec();
}