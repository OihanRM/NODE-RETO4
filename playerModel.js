//filename playerModel.js

var mongoose = require('mongoose');
var validator = require('mongoose-unique-validator');

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

playerSchema.plugin(validator);

var Player = module.exports = mongoose.model('player', playerSchema);


module.exports.get = function()
{
    return Player.find().exec();
}