;(function( $, undefined ) {
  'use strict';

  var
    $launch = $('.launch'),
    $modal = $('.contact-modal')

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

  // bind a close handler for the modal
  $modal.on('click', '.close', function( e ) {
    e && e.preventDefault();

    // post-transition tear-down
    $modal.removeClass('open').one('transitionend', function() {
      $(this).css('display', 'none');
    });
  });
}(jQuery));
