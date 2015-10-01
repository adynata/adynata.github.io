$(function() {
  console.log("ready!");

  $('.menu-text').click( function() {
    toggleHidden();
  });

  $('.hot-spot').click( function() {
    console.log("hideable clicked");
    if ($('.hot-spot').hasClass('hideable')) {
      toggleHidden();
    }
  });

  function toggleHidden() {
    var menuText = $('.wrapper').hasClass('hide') ? 'OTHER PROJECTS' : 'CLOSE';
    $('.wrapper').toggleClass('hide', 700);
    $('.hot-spot').toggleClass('hideable');
    $('.menu-text').text(menuText);
  }

});
