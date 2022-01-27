(function () {
  var startingTime = new Date().getTime();
  // Load the script
  var script = document.createElement('SCRIPT');
  script.src =
    'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

  // Poll for jQuery to come into existance
  var checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
    } else {
      window.setTimeout(function () {
        checkReady(callback);
      }, 20);
    }
  };

  // Start polling...
  checkReady(function ($) {
    $(function () {
      var endingTime = new Date().getTime();
      var tookTime = endingTime - startingTime;
      console.log('jQuery is loaded, after ' + tookTime + ' milliseconds!');
    });
  });

  $(document).ready(function () {
    $('.multi-item-carousel').carousel({
      interval: 2500,
    });
    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.

    $('.multi-item-carousel .carousel-item').each(function () {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
      } else {
        $(this)
          .siblings(':first')
          .children(':first-child')
          .clone()
          .appendTo($(this));
      }
    });

    //this code makes dropdown occur on hover rather than on click
    $('.fontfamily .dropdown').hover(
      function () {
        $(this)
          .find('.dropdown-menu#mainnavmenu')
          .first()
          .stop(true, true)
          .slideDown(150);
      },
      function () {
        $(this)
          .find('.dropdown-menu#mainnavmenu')
          .first()
          .stop(true, true)
          .slideUp(105);
      }
    );
    $('.acepmpfinaldrop .dropdown').hover(
      function () {
        $(this)
          .find('.dropdown-menu#acedropmenu')
          .first()
          .stop(true, true)
          .slideDown(150);
      },
      function () {
        $(this)
          .find('.dropdown-menu#acedropmenu')
          .first()
          .stop(true, true)
          .slideUp(105);
      }
    );
  });
  $('#serviceList').click(function () {
    $(this)
      .find('.servicedrop')
      .toggleClass('icon-chevron-down icon-chevron-up');
  });
})();

$(function () {
  $('#boxesspacing').on('click', function () {
    $(this).toggleClass('fas fa-arrow-up fas fa-arrow-down');
  });
});

$(document).ready(function () {
  $('#accordionExample .collapse')
    .on('shown.bs.collapse', function () {
      $(this)
        .parent()
        .find('.fa-plus')
        .removeClass('fa-plus')
        .addClass('fa-minus');
    })
    .on('hidden.bs.collapse', function () {
      $(this)
        .parent()
        .find('.fa-minus')
        .removeClass('fa-minus')
        .addClass('fa-plus');
    });
});

$(document).ready(function () {
  $('#accordionExample .collapse')
    .on('shown.bs.collapse', function () {
      $(this).find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
    })
    .on('hidden.bs.collapse', function () {
      $(this).find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
    });
});
