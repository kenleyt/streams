// Local dependencies
var controllers = require('./controllers');

var Router = {

    init: function(app) {

        // Home page
        app.get('/', controllers.Home.index);

        // About page
        app.get('/about', controllers.About.index);

        
        // Search
        app.get('/search', controllers.Search.index);
        app.post('/search', controllers.Search.index);
    }

};

module.exports = Router;
