jQuery(function ($) {
  $(document).on('scroll', function () {
    var top = $(document).scrollTop();
    $('#header').addClass('header-scroll');

    if (top < 5) {
      $('#header').removeClass('header-scroll');
    }
  })

})
