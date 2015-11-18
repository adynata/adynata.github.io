$(function() {

  // $( ".logo" ).load( "partials/logo.svg");
  $( ".social-links" ).load( "partials/social_links.html");
  // $( ".moon-content").load( "partials/moon.html")

  $( ".about-content" ).load( "partials/about.html");

  // $( ".project-elements" ).load( "partials/project_menu.html" )


  $('.menu-text').click( function() {
    toggleHidden();
  });

  $('.hot-spot').click( function() {
    console.log("hideable clicked");
    if ($('.hot-spot').hasClass('hideable')) {
      toggleHidden();
    }
  });

  $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
  });

  function toggleHidden() {
    var menuText = $('.wrapper').hasClass('hide') ? 'PROJECTS' : 'CLOSE';
    $('.wrapper').toggleClass('hide show', 700);
    $('.hot-spot').toggleClass('hideable');
    $('.menu-text').text(menuText);
  }

  var
    $launch = $('.contact'),
    $modal = $('.contact-modal');

  $launch.click( function() {
    console.log("clicked contact");
  });
  // bind a handler to launch the modal
  $launch.on('click', function( e ) {
    e && e.preventDefault();

    // pre-transition setup
    $modal.css('display', 'block');

    // setTimeout to wait for the pre-transition setup to complete
    window.setTimeout(function() {
      $modal.addClass('open');
    }, 0);
  });

  $('.project').click( function(){
    // removeContentClass();
    console.log("clicked lion");
    // $('.about-content').css("display", "block");

    // toggleHidden();

  });
  // bind a close handler for the modal
  $modal.on('click', '.close', function( e ) {
    e && e.preventDefault();

    // post-transition tear-down
    $modal.removeClass('open').one('transitionend', function() {
      $(this).css('display', 'none');
    });
  });

  $('.about').on('click', function() {
    removeContentClass();
    $('.about-content').css("display", "block");
  });

  $('.projects').on('click', function() {
    removeContentClass();
    $('.menu-content').css("display", "block");
  });


  function removeContentClass() {
    // set all other features to display: none
    $('.lion-content').css("display", "none");
    $('.moon-content').css("display", "none");
    $('.bionn-content').css("display", "none");
    $('.menu-content').css("display", "none");
    $('.about-content').css("display", "none");

  }

});
