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
  });

  function moonTextFit() {
    var height = $('.moon-article').css('height').slice(0,-2);
    $('.moon-article').textfill({
      maxFontPixels: 24,
      minFontPixels: 11,
      explicitHeight: height,
      debug: true
    });
  }

  // This is just here because the bx-slider needs to load before it's hidden or it won't function properly. If there's a better way to do this I'd sure like to know.
  setTimeout(function() {
    $('.moon-content').css("display", "none");
  }, 700);

});
