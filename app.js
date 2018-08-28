var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    //mongoose = require('mongoose'),
    Task = require('./api/models/testModel'); //created model loading here
    //bodyParser = require('body-parser');


// mongoose instance connection url connection
//mongoose.Promise = global.Promise;

//mongoose.connect('mongodb+srv://application:application@cluster0-zht8z.mongodb.net/test?retryWrites=true');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

var routes = require('./api/routes/testRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
