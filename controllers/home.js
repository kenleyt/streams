// Home controller
var Home = {

  index: function(req, res) {
    res.render('home/index', { title: 'Streams' });
  }

};

module.exports = Home;
