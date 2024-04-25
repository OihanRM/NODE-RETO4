//Filename api-routes.js

// Intialize express router
let router = require('express').Router();


// Set default API response
router.get('/', function(req, res)
{
    res.json(
    {
        status: 'API Trabajando',
        message: 'Bienvenido al mejor WS del mundo'
    });
});

const { get } = require('mongoose');

//import Content controller
var playerController = require('./playerController');
var scoreController = require('./scoreController');



//routes
router.route('/player')
.get(playerController.index)
.post(playerController.new)

router.route('/player/:player_name')
.delete(playerController.delete)
.put(playerController.update)
.get(playerController.indexByName)

router.route('/login')
.post(playerController.login)

router.route('/score/top')
.get(playerController.indexTop10)

router.route('/score')
.get(scoreController.index)
.post(scoreController.new)

router.route('/delete/:player_id')
.delete(playerController.deletePlayer)



//export 
module.exports = router;