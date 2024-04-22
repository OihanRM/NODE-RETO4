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


//routes
router.route('/player')
.get(playerController.index)
.post(playerController.new)

//export 
module.exports = router;