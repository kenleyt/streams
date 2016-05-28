// Search controller

// local dependecies
var Helpers = require('../helpers')
var Search = {
  
  index: function(req, res){
    res.render('search/index');
  },
  
  search: function(req, res, next){
    var hashtag = req.body.hashtag;
    var client = Helpers.getTwitterClient();
    var params = {
      q: hashtag
    };
    
    client.get('search/tweets' , params, function(err, tweets ) {
      console.log(tweets);
        var data = {
          searchTerm: req.body.hashtag
        };
          if (tweets) {
            
          data.items = tweets.statuses,
          data.numItems = data.items.length;
          }
        
      res.render('search/index', data);
    });
  }
};
   
    

module.exports = Search;