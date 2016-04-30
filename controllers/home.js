// home controller

var Home = {
    
    index: function(req, res){
      res.render('index', { title: 'Streams' });
    }
    
};

module.exports = Home;