$(document).ready(function(){
  $('.plus').on('click', function(e) {
    e.preventDefault();
    $('.tweetList').toggleClass('tweetListOpen');
    $('.tweet').toggleClass('tweetOpen');
    $('.plus').toggleClass('plusOpen').find('i').toggleClass('fa-plus fa-minus');
  });
});
