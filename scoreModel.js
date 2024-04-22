//filename scoreModel
var mongoose = require('mongoose');

//setup schema
var scoreSchema = mongoose.Schema({
    player: String,
    Score : Number
},{collection: 'score'});

var Score = module.exports = mongoose.model('score', scoreSchema);
