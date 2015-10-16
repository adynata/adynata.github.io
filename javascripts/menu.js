$(function() {

  $('.lion-p > img').click( function(){
    removeContentClass();
    console.log("clicked lion");
    $('.lion-content').css("display", "block");
    toggleHidden();

  });

  $('.moon-p > img').on("click", function(){
    removeContentClass();
    $('.moon-content').css("display", "block");
    toggleHidden();
  });

  $('.lion-p-f > img').click( function(){
    removeContentClass();
    console.log("clicked lion");
    $('.lion-content').css("display", "block");
  });

  $('.moon-p-f > img').on("click", function(){
    removeContentClass();
    $('.moon-content').css("display", "block");
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
