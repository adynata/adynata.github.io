$(function() {

  $('.lion-p > img').click( function(){
    removeContentClass();
    $('.lion-content').css("display", "block");
    toggleHidden();
    document.getElementById('top').scrollIntoView();
    $('.about-lf').click();
  });

  $('.moon-p > img').on("click", function(){
    removeContentClass();
    $('.moon-content').css("display", "block");
    $('#about').click();
    toggleHidden();
    document.getElementById('top').scrollIntoView();
  });

  $('.lion-p-f > img').click( function(){
    removeContentClass();
    $('.lion-content').css("display", "block");
    $('.about-lf').click();
    document.getElementById('top').scrollIntoView();
  });

  $('.moon-p-f > img').on("click", function(){
    removeContentClass();
    $('.moon-content').css("display", "block");
    $('#about').click();
    document.getElementById('top').scrollIntoView();
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
