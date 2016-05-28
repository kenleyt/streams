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
      q: hashtag,
      lang: 'en', // only english tweets
      result_type: 'mixed' , //mostpopular + recent
      count: 30 // max num of tweets
    };
    
    client.get('search/tweets' , params, function(err, tweets ) {
      if (err){
      console.log(err);
      next(err);
      };
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