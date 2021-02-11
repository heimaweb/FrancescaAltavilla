$(function() {
  $.scrollUp({
    scrollImg: { active: true, type: 'background', src: 'img/scrolltotop.png' }
  });
  
  $("#year").text((new Date).getFullYear());
  
});

$(".menu a").click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
});