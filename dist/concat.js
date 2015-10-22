$(document).ready(function() {
  $('button').click(function() {
    $(this).toggleClass('expanded').siblings('div').slideToggle();
  });
});

$(document).ready(function() {
   $('.slickslide').slick({
     dots: true,
     arrows: false,
     infinite: true,
     speed: 300,
   });
 });

$(document).ready(function(){
  $('.plus').on('click', function(e) {
    e.preventDefault();
    $('.tweetList').toggleClass('tweetListOpen');
    $('.tweet').toggleClass('tweetOpen');
    $('.plus').toggleClass('plusOpen').find('i').toggleClass('fa-plus fa-minus');
  });
});
