$(function() {
  $('.leaflet-marker-icon').on("click", function(e) {
    console.log(e.target);
  });

  $(window).on('resize',function() {
    adjustBionnHead();
    adjustBionnCopy();
  });

  $(window).on('load',function() {
    adjustBionnHead();
    adjustBionnCopy();
  });

  function adjustBionnHead() {
    var height = $('.bionn-head-image img').css("height").slice(0,-2);
    $('.bionn-head').css("height", height);
  }

  function adjustBionnCopy() {
    $('.bionn-copy').textfill({
      maxFontPixels: 16,
      minFontPixels: 12,
      explicitHeight: 370,
      debug: false
    });
  }

});
