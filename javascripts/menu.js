$(function() {

  $('.lion-p > img').click( function(){
    removeContentClass();
    $('.lion-content').css("display", "block");
    toggleHidden();
    $('.about-lf').click();
  });

  $('.moon-p > img').on("click", function(){
    removeContentClass();
    $('.moon-content').css("display", "block");
    $('#about').click();
    toggleHidden();
  });

  $('.lion-p-f > img').click( function(){
    removeContentClass();
    $('.lion-content').css("display", "block");
    $('.about-lf').click();

  });

  $('.moon-p-f > img').on("click", function(){
    removeContentClass();
    $('.moon-content').css("display", "block");
    setTimeout(function() {
      var viewportSize = ($('.moon-content').width() ) + 15;
      $("li.slide.item").width(viewportSize);
      $(".bx-viewport").height(viewportSize);
    }, 1000);
    $('#about').click();
  });

  function removeContentClass() {
    // set all other features to display: none
    $('.lion-content').css("display", "none");
    $('.moon-content').css("display", "none");
    $('.bionn-content').css("display", "none");
    $('.about-content').css("display", "none");
    $('.menu-content').css("display", "none");

  }

  function toggleHidden() {
    var menuText = $('.wrapper').hasClass('hide') ? 'PROJECTS' : 'CLOSE';
    $('.wrapper').toggleClass('hide show', 700);
    $('.hot-spot').toggleClass('hideable');
    $('.menu-text').text(menuText);
  }


});
