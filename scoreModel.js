//filename scoreModel
var mongoose = require('mongoose');

//setup schema
var scoreSchema = mongoose.Schema({
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'player',
        required: true
    },
    Score : Number,
    name: String
},{collection: 'score'});

var Score = module.exports = mongoose.model('score', scoreSchema);
