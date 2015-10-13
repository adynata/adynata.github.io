$(function() {
  $('#credits').on('click', function() {
    $('.moon-article').css('display', 'none');
    $('.moon-credits').css('display', 'block');
  });

  $('#about').on('click', function() {
    $('.moon-credits').css('display', 'none');
    $('.moon-article').css('display', 'block');
  });

});
