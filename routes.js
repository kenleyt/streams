// Local deps
var controllers = require('./controllers');

var Router = {
    
    init: function(app) {
        
        // home page
        app.get('/', controllers.Home.index);
        
        // Users
        app.get('/users', controllers.Users.index);
        
    }
    
};

module.exports = Router;