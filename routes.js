// Local deps
var controllers = require('./controllers');

var Router = {
    
    init: function(app) {
        
        // about page
        
        app.get('/about', controllers.About.index);
        
        // home page
        app.get('/', controllers.Home.index);
        
        // Users
        app.get('/users', controllers.Users.index);
        
    }
    
};

module.exports = Router;