$(document).ready(function() {

  $('body').addClass('ready');
  $('.display-content').addClass('on');

  var $toggle       = $('.toggle-wrapper input'),
      $label_light  = $('h4.light'),
      $label_dark   = $('h4.dark'),
      $app_window   = $('.app-window'),
      $menubar      = $('.menubar');

  $toggle.click(function() {
    if ($toggle.is(':checked')) {
      $label_dark.addClass('highlight');
      $label_light.removeClass('highlight');
      $app_window.addClass('dark');
      $menubar.addClass('dark');
      $('body').addClass('dark');
    }
    else {
      $label_light.addClass('highlight');
      $label_dark.removeClass('highlight');
      $app_window.removeClass('dark');
      $menubar.removeClass('dark');
      $('body').removeClass('dark');
    }
  });

  var $nav = $('nav');

  // Show nav on scroll
  $nav.headroom({
    offset: 740,
    classes: {
      initial: 'headroom',
      top: 'unpinned',
      notTop: 'pinned'
    },
  });

  var $mbp = $('.macbook');

  // Remove mbp on mobile to save resources
  if ($(window).width() < 768) {
   $mbp.remove();
  }

});
