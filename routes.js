// Local deps
var controllers = require('./controllers');

var Router = {

    init: function(app) {

        // Home page
        app.get('/', controllers.Home.index);
        
        // About page
        app.get('/about', controllers.About.index);

        // Users
        app.get('/users', controllers.Users.index);
        
    }

};

module.exports = Router;