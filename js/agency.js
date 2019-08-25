(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Subscribe Form Submission
  $('#postToGoogle').click(function() {
    var subName = $("#subName").val();
    var subEmail = $("#subEmail").val();
    $.ajax({
      url:
        "https://docs.google.com/forms/d/e/1FAIpQLSd3tPmMyhPmlEbzpAewoKgwNhJt8UlmHs37XRYtRbnbMMzNcw/formResponse",
      data: {
        emailAddress: subEmail,
        "entry.984160747": subName
      },
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function() {
          $("#form").hide();
          $("#successMessage").show();
        },
        200: function() {
          $("#form").hide();
          $("#successMessage").show();
        }
      }
    });
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict