// Search controller
var Search = {
  
  index: function(req, res){
    res.render('search/index');
  },
  
  search: function(req, res, next){
    var data = {
      items: [0, 1, 2, 3, 4, 5],
      numItems: 6,
      searchTerm: req.body.hashtag
    };
    res.render('search/index', data);
  }
};

module.exports = Search;