$(function() {
  $('#credits').on('click', function() {
    $('.moon-article').css('display', 'none');
    $('.moon-credits').css('display', 'block');
  });

  $('#about').on('click', function() {
    $('.moon-credits').css('display', 'none');
    $('.moon-article').css('display', 'block');
    moonTextFit();
  });

  $(window).on('resize',function() {
    moonTextFit();
    $('.moon-display').css('height', $('.moon-slide').css('width'));
  });

  function moonTextFit() {
    var height = $('.moon-article').css('height').slice(0,-2);
    $('.moon-article').textfill({
      maxFontPixels: 24,
      minFontPixels: 11,
      explicitHeight: height,
      debug: false
    });
  }

  // This is just here because the bx-slider needs to load before it's hidden or it won't function properly. If there's a better way to do this I'd sure like to know.
  $('.moon-display').css('height', $('.moon-slide').css('width'));
  moonTextFit();

  $('.moon-content').css("display", "none");

  $('moon-slide').on("click", function(e) {
    console.log(e.target);
  });




});
