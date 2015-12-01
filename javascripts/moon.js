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
    $('.moon-display').css('height', $('.moon-slide').css('width'));
    moonTextFit();
  });

  $(window).on('load',function() {
    $('.moon-display').css('height', $('.moon-slide').css('width'));
    moonTextFit();
  });

  function moonTextFit() {
    var height = $('.moon-article').css('height').slice(0,-2);
    $('.moon-article').textfill({
      maxFontPixels: 24,
      minFontPixels: 12,
      explicitHeight: height,
      debug: false
    });
  }

  $('.thumbs img').on("click", function(e) {
    // take the border off of all thumbs
    $('.thumbs img').css('border', '2px black solid');
    // put the border on the active thumb
    $(e.target).css('border', '2px white solid');
    $('.moon-slide').removeClass('active-moon');
    //display the selected thumb
    $('.moon-slide').css('z-index', '0');
    var parent = $(e.target).parent().attr('id');
    $('#' + parent.slice(0,-2)).addClass('active-moon');
    $('#' + parent.slice(0,-2)).css('z-index', '31');
  });

  function clickRight() {
    var currentMoon = $('.active-moon').attr('id');
    var currentMoonNumber = Math.floor(currentMoon.slice(-1));
    if (currentMoonNumber === 8) {
      setNewMoon(1);
    } else {
      setNewMoon(currentMoonNumber + 1);
    }
  }

  function clickLeft() {
    var currentMoon = $('.active-moon').attr('id');
    var currentMoonNumber = Math.floor(currentMoon.slice(-1));
    if (currentMoonNumber === 1) {
      setNewMoon(8);
    } else {
      setNewMoon(currentMoonNumber - 1);
    }
  }



  function setNewMoon(num) {
    $('.moon-slide').removeClass('active-moon');
    $('.moon-slide').css('z-index', '0');
    $('.thumbs img').css('border', '2px black solid');
    $('#moon-' + num ).css('z-index', '31');
    $('#moon-' + num ).addClass('active-moon');
    $('#moon-' + num + "-t img").css('border', '2px white solid');
  }

  setTimeout(function() {
    $('.moon-display').css('height', $('.moon-slide').css('width'));
    moonTextFit();
    $('.moon-content').css("display", "none");
  }, 600);

  $("#chevron-right").on("click", function() {
    clickRight();
  });

  $("#chevron-left").on("click", function() {
    clickLeft();
  });

  $('#moon-1').addClass('active-moon');
  setNewMoon(1);

});
