// App javascript

var initializeDates = function() {
  $('.tweet-item-time [data-date]').each(function(i, el) {
    var $el = $(el),
      date = moment(new Date($el.attr('data-date')));
      $el.html(date.fromNow());
  });

  // Execute every 60 seconds
  setInterval(initializeDates, 60000);
};

var initializeGrid = function(){
    $('.tweets-container').masonry({
    itemSelector: '.tweet-item-container'
  });
};

$(document).ready(function() {
  initializeGrid();
});

