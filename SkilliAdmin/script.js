$('#colorpicker').on('input', function () {
  $('#hexcolor').val(this.value);
});
$('#hexcolor').on('input', function () {
  $('#colorpicker').val(this.value);
});

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

$(document).ready(function () {
  $('#addfeature').on('click', function () {
    $('#new-field').append(
      "<div class='form-group row ml-0'><label for='exampleInputEmail1' class='generalparagraph2'>Add feature</label><input type='text' class='form-control' id='' placeholder='Describe feature'/></div>"
    );
  });
  $('#removefeature').on('click', function () {
    $('#new-field').children().last().remove();
  });
});
$(document).ready(function () {
  $('#newfaq').on('click', function () {
    $('#new-faq-field').append(
      "<div class=''><label for='faq-entry-question' class='generalparagraph2 my-3'>Faq Entry</label><input type='text' class='form-control' id='faq-entry-question' placeholder='What is the Name of your Pet Dog?'/></div>"
    );
  });
});
$(document).ready(function () {
  $('#imageInput').on('change', function () {
    $input = $(this);
    if ($input.val().length > 0) {
      fileReader = new FileReader();
      fileReader.onload = function (data) {
        $('.image-preview').attr('src', data.target.result);
      };
      fileReader.readAsDataURL($input.prop('files')[0]);
      $('.image-button').css('display', 'none');
      $('.image-preview').css('display', 'block');
      $('.change-image').css('display', 'block');
    }
  });

  $('.change-image').on('click', function () {
    fileReader = new FileReader();
    fileReader.onload = function (data) {
      $('.image-preview').attr('src', data.target.result);
    };
  });
});
$(document).ready(function () {
  $('#imageInput2').on('change', function () {
    $input = $(this);
    if ($input.val().length > 0) {
      fileReader = new FileReader();
      fileReader.onload = function (data) {
        $('.image-preview2').attr('src', data.target.result);
      };
      fileReader.readAsDataURL($input.prop('files')[0]);
      $('.image-button2').css('display', 'none');
      $('.image-preview2').css('display', 'block');
      $('.change-image2').css('display', 'block');
    }
  });

  $('.change-image').on('click', function () {
    $control = $(this);
    $('#imageInput').val('');
    $preview = $('.image-preview');
    $preview.attr('src', '');
    $preview.css('display', 'none');
    $control.css('display', 'none');
    $('.image-button').css('display', 'block');
  });
});

$('#upfile1').click(function () {
  $('#imageInput').trigger('click');
});
$('#upfile2').click(function () {
  $('#imageInput2').trigger('click');
});
$('#upfile3').click(function () {
  $('#file3').trigger('click');
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

jQuery(function ($) {
  var contentList = $('#draggablecontentList');

  contentList.sortable({
    // Only make the .panel-heading child elements support dragging.
    // Omit this to make then entire <li>...</li> draggable.
    handle: '.draggablehandle',
    update: function () {
      $('.panel', contentList).each(function (index, elem) {
        var $listItem = $(elem),
          newIndex = $listItem.index();

        // Persist the new indices.
      });
    },
  });
});
jQuery(function ($) {
  var contentList = $('#draggablecontentList2');

  contentList.sortable({
    // Only make the .panel-heading child elements support dragging.
    // Omit this to make then entire <li>...</li> draggable.
    handle: '.draggablehandle2',
    update: function () {
      $('.panel2', contentList).each(function (index, elem) {
        var $listItem = $(elem),
          newIndex = $listItem.index();

        // Persist the new indices.
      });
    },
  });
});
jQuery(function ($) {
  var contentList = $('#draggablecontentList3');

  contentList.sortable({
    // Only make the .panel-heading child elements support dragging.
    // Omit this to make then entire <li>...</li> draggable.
    handle: '.draggablehandle3',
    update: function () {
      $('.panel3', contentList).each(function (index, elem) {
        var $listItem = $(elem),
          newIndex = $listItem.index();

        // Persist the new indices.
      });
    },
  });
});

$(function () {
  $('#titlecontent').hide();
  $('#imagecontent').hide();
  $('#videocontent').hide();
  $('#audiocontent').hide();
  $('#filecontent').hide();
  $('#externallink').hide();
  $('#customcontent').hide();
  //
  $('#checkedvideo').click(function () {
    if ($(this).is(':checked')) {
      $('#titlecontent').show();
      $('#videocontent').show();
      $('#customcontent').show();
      $('#audiocontent').hide();
      $('#imagecontent').hide();
      $('#filecontent').hide();
    }
  });
  $('#checkedaudio').click(function () {
    if ($(this).is(':checked')) {
      $('#titlecontent').show();
      $('#audiocontent').show();
      $('#customcontent').show();
      $('#videocontent').hide();
      $('#imagecontent').hide();
      $('#filecontent').hide();
    }
  });
  $('#checkedimage').click(function () {
    if ($(this).is(':checked')) {
      $('#titlecontent').show();
      $('#imagecontent').show();
      $('#customcontent').show();
      $('#videocontent').hide();
      $('#filecontent').hide();
      $('#audiocontent').hide();
    }
  });
  $('#checkedfile').click(function () {
    if ($(this).is(':checked')) {
      $('#titlecontent').show();
      $('#filecontent').show();
      $('#customcontent').show();
      $('#imagecontent').hide();
      $('#videocontent').hide();
      $('#audiocontent').hide();
    }
  });
});

// information post

$(document).ready(function () {
  //
  $('.eventcategory').hide();
  $('.jobcontent').hide();
  $('.downloadcategory').hide();
  $('.articlecontent').hide();
  $('#noexternalurltoggle').click(function () {
    if ($(this).is(':checked')) {
      $('#sitetemplate').hide();
    }
  });
  $('#yesexternalurltoggle').click(function () {
    if ($(this).is(':checked')) {
      $('#sitetemplate').show();
    }
  });

  $('#checkedarticle').click(function () {
    if ($(this).is(':checked')) {
      $('.articlecontent').hide();
    }
  });
  $('#yesexternalurltoggle').click(function () {
    if ($(this).is(':checked')) {
      $('#sitetemplate').show();
    }
  });

  $('#checkedarticle').click(function () {
    if ($(this).is(':checked')) {
      $('.articlecontent').show();
      $('.eventcategory').hide();
      $('.jobcontent').hide();
      $('.downloadcategory').hide();
    }
  });

  $('#checkedevent').click(function () {
    if ($(this).is(':checked')) {
      $('.articlecontent').hide();
      $('.eventcategory').show();
      $('.jobcontent').hide();
      $('.downloadcategory').hide();
    }
  });

  $('#checkedjoboffer').click(function () {
    if ($(this).is(':checked')) {
      $('.articlecontent').hide();
      $('.eventcategory').hide();
      $('.jobcontent').show();
      $('.downloadcategory').hide();
    }
  });

  $('#checkeddownload').click(function () {
    if ($(this).is(':checked')) {
      $('.articlecontent').hide();
      $('.eventcategory').hide();
      $('.jobcontent').hide();
      $('.downloadcategory').show();
    }
  });
});

$(function () {
  $('.uploadviaurl').hide();
  $('.uploadviafile').hide();

  $('.uploadvialink').click(function () {
    if ($(this).is(':checked')) {
      $('.uploadviaurl').show();
      $('.uploadviafile').hide();
    }
  });
  $('.uploadcheckbox').click(function () {
    if ($(this).is(':checked')) {
      $('.uploadviaurl').hide();
      $('.uploadviafile').show();
    }
  });
});

$(function () {
  $('.audio-preview').hide();

  $('#uploadAudioInput').click(function () {
    $('.audio-preview').show();
  });
});

$(function () {
  $('.showdependencies').hide();
  // $('.showwhendependencyisfree').hide();
  $('.showwhendependencyispremium').hide();

  $('#toggledependency').change(function () {
    if ($('#toggledependency').val() == 'Free, but enrollment is required') {
      $('.showdependencies').show();
      $('.showwhendependencyisfree').hide();
      $('.showwhendependencyispremium').hide();
    }
    if ($('#toggledependency').val() == 'Free') {
      $('.showwhendependencyisfree').show();
      $('.showwhendependencyispremium').hide();
    }
    if ($('#toggledependency').val() == 'Premium') {
      $('.showwhendependencyispremium').show();
      $('.showwhendependencyisfree').hide();
    }
    if (
      $('#toggledependency').val() == 'Free' ||
      $('#toggledependency').val() == 'Premium'
    ) {
      $('.showdependencies').hide();
      $('.selfenrollmenttrue').hide();
    }
    if (
      $('#toggledependency').val() == 'Free' ||
      $('#toggledependency').val() == 'Premium'
    ) {
      $('.showdependencies').hide();
    }
  });
  $('.selfenrollmenttrue').hide();

  $('#selfenrollmentdependency').change(function () {
    if ($('#selfenrollmentdependency').val() == 'Yes') {
      $('.selfenrollmenttrue').show();
      $('.selfenrollmentfalse').hide();
    } else {
      $('.selfenrollmentfalse').show();
      $('.selfenrollmenttrue').hide();
    }
  });
  $('.enrollwithurl').hide();
  $('#enrollmenttype').change(function () {
    if ($('#enrollmenttype').val() == 'Enroll with site login') {
      $('.enrollwithurl').hide();
    }
    if ($('#enrollmenttype').val() == 'Enroll without site login') {
      $('.enrollwithurl').show();
    }
  });
});

// plans and pricing modal dependencies
$(function () {
  $('.cutoffaccessdate').hide();
  $('.cutoffaccessdate').hide();

  // $('.daysafterenrollment').hide();
  $('#toggleexpiredate').change(function () {
    if ($('#toggleexpiredate').val() == 'Yes by days after enrollment') {
      $('.daysafterenrollment').show();
      $('.cutoffaccessdate').hide();
    }
    if ($('#toggleexpiredate').val() == 'Yes by specific date') {
      $('.cutoffaccessdate').show();
      $('.daysafterenrollment').hide();
    }
    if ($('#toggleexpiredate').val() == 'No') {
      $('.cutoffaccessdate').hide();
      $('.daysafterenrollment').hide();
    }
  });
});

$(function () {
  $('.showifpaid').hide();
  $('#toggleinstallmentfee').change(function () {
    if ($('#toggleinstallmentfee').val() == 'Yes') {
      $('.showifpaid').hide();
    }
    if ($('#toggleinstallmentfee').val() == 'No') {
      $('.showifpaid').show();
    }
  });
});

$(function () {
  // $('#activityschedule').hide();
  // $('#prerequistactivity').hide();
  $('#requestsesstiontoggle').change(function () {
    if ($(this).is(':checked')) {
      $('#activityschedule').hide();
      $('#prerequistactivity').hide();
    }
    if (!$(this).is(':checked')) {
      $('#activityschedule').show();
      $('#prerequistactivity').show();
    }
  });
});

$(function () {
  $('#numberofrequests').hide();
  $('#prerequisiteactivitytoggle').change(function () {
    if ($(this).is(':checked')) {
      $('#numberofrequests').show();
    }
    if (!$(this).is(':checked')) {
      $('#numberofrequests').hide();
    }
  });
});
$(function () {
  $('#activityscheduletoggledependency').hide();
  $('#activityscheduletoggle').change(function () {
    if ($(this).is(':checked')) {
      $('#activityscheduletoggledependency').show();
    }
    if (!$(this).is(':checked')) {
      $('#activityscheduletoggledependency').hide();
    }
  });
});
$(function () {
  $('.schoolsitefontradio').change(function () {
    if ($(this).is(':checked')) {
      $('.fontlists').css({ border: '3px solid ##167c1a' });
    }
  });
});

$(function () {
  $('.sitepagesoption').hide();
  $('.sitecorepagesoption').hide();
  $('.productinfooption').hide();
  $('.sitecorepagesoption').hide();

  $('.selectpagetypebottom').change(function () {
    if ($('.selectpagetypebottom').val() == 'Page Type') {
      $('.sitepagesoption').hide();
      $('.sitecorepagesoption').hide();
      $('.productinfooption').hide();
      $('.sitecorepagesoption').hide();
    }
    if ($('.selectpagetypebottom').val() == 'Site pages') {
      $('.sitepagesoption').show();
      $('.productinfooption').hide();
      $('.sitecorepagesoption').hide();
    }
    if ($('.selectpagetypebottom').val() == 'Site core pages') {
      $('.sitecorepagesoption').show();
      $('.productinfooption').hide();
      $('.sitepagesoption').hide();
    }
    if ($('.selectpagetypebottom').val() == 'Product info pages') {
      $('.productinfooption').show();
      $('.sitecorepagesoption').hide();
      $('.sitepagesoption').hide();
    }
  });
});
$(function () {
  $('.sitepagesoption2').hide();
  $('.sitecorepagesoption2').hide();
  $('.productinfooption2').hide();
  $('.sitecorepagesoption2').hide();

  $('.selectpagetypebottom2').change(function () {
    if ($('.selectpagetypebottom2').val() == 'Page Type') {
      $('.sitepagesoption2').hide();
      $('.sitecorepagesoption2').hide();
      $('.productinfooption2').hide();
      $('.sitecorepagesoption2').hide();
    }
    if ($('.selectpagetypebottom2').val() == 'Site pages') {
      $('.sitepagesoption2').show();
      $('.productinfooption2').hide();
      $('.sitecorepagesoption2').hide();
    }
    if ($('.selectpagetypebottom2').val() == 'Site core pages') {
      $('.sitecorepagesoption2').show();
      $('.productinfooption2').hide();
      $('.sitepagesoption2').hide();
    }
    if ($('.selectpagetypebottom2').val() == 'Product info pages') {
      $('.productinfooption2').show();
      $('.sitecorepagesoption2').hide();
      $('.sitepagesoption2').hide();
    }
  });
});

$(document).ready(function () {
  $('#addanotherfeature').on('click', function () {
    // $('#newfeature-field').append()
    $('#featuresblock').clone().appendTo('#newfeature-field');
  });
  $('#removefeaturediv').on('click', function () {
    $('#newfeature-field').children().last().remove();
  });

  // testimonials
  $('#addanothertestimonial').on('click', function () {
    $('#testimonialsblock').clone().appendTo('#newtestimonial-field');
  });
  $('#removetestimonialdiv').on('click', function () {
    $('#newtestimonial-field').children().last().remove();
  });

  // add faq

  $('#addanotherfaq').on('click', function () {
    $('#faqblock').clone().appendTo('#newfaq-field');
  });
  $('#removefaqdiv').on('click', function () {
    $('#newfaq-field').children().last().remove();
  });

  // add btn

  $('#addanotherbutton').on('click', function () {
    $('#buttonblock').clone().appendTo('#newbutton-field');
  });
  $('#removebuttondiv').on('click', function () {
    $('#newbutton-field').children().last().remove();
  });

  // add cohort

  $('#addanothercohort').on('click', function () {
    $('#cohortblock').clone().appendTo('#newcohort-field');
  });
  $('#removecohortdiv').on('click', function () {
    $('#newcohort-field').each(function (i) {
      $('#newcohort-field').children().last().remove();
    });
  });

  // add bundle

  $('#addanotherbundle').on('click', function () {
    $('#bundleblock').clone().appendTo('#bundle-field');
  });
  $('#removebundlediv').on('click', function () {
    $('#bundle-field').each(function (i) {
      $('#bundle-field').children().last().remove();
    });
  });

  // add highlight

  $('#addanotherhighlight').on('click', function () {
    $('#highlightpointsblock').clone().appendTo('#newhighlight-field');
  });
  $('#removehighlightdiv').on('click', function () {
    $('#newhighlight-field').each(function (i) {
      $('#newhighlight-field').children().last().remove();
    });
  });

  // add schedule

  $('#addanotherschedule').on('click', function () {
    $('#scheduleblock').clone().appendTo('#newschedule-field');
  });
  $('#removeschedulediv').on('click', function () {
    $('#newschedule-field').each(function (i) {
      $('#newschedule-field').children().last().remove();
    });
  });

  // add external link

  $('#addanotherexternallink').on('click', function () {
    $('#externallinkblock').clone().appendTo('#newexternallink-field');
  });
  $('#removeexternaldiv').on('click', function () {
    $('#newexternallink-field').each(function (i) {
      $('#newexternallink-field').children().last().remove();
    });
  });
});

//add highlight

$(document).ready(function () {
  var max_fields = 10;
  var wrapper = $('.dynamicfieldwrapper');
  var add_button = $('.addformfield');

  var x = 1;
  $(add_button).click(function (e) {
    e.preventDefault();
    if (x < max_fields) {
      x++;
      $(wrapper).append(
        '<div class="row align-items-center my-2"> <div class="col-11"> <input type="text" placeholder="" class="form-control" /> </div>  <div class="col-1 delete"> <i class="fa fa-times-circle text-danger" aria-hidden="true" ></i> </div></div>'
      );
    } else {
      alert('you cant add more than 10 highlights');
    }
  });

  $(wrapper).on('click', '.delete', function (e) {
    e.preventDefault();
    $(this).parent('div').remove();
    x--;
  });
});

$(document).ready(function () {
  var max_fields2 = 10;
  var wrapper2 = $('.dynamicfieldwrapper2');
  var add_button2 = $('.addformfield');

  var x = 1;
  $(add_button2).click(function (e) {
    e.preventDefault();
    if (x < max_fields2) {
      x++;
      $(wrapper2).append(
        '<div class="row align-items-center py-4 dottedborderbottom"> <div class="col-md-2"> <label class="my-2 generalparagraph2 darkergray" >No. of Courses</label> <input type="text" placeholder="e.g 2" class="form-control" /> </div>  <div class="col-md-3"> <div class="alignicons">     <label class="my-2 generalparagraph2 darkergray" >Discount Type </label>   <select name="" id="" class="form-control"> <option value="" selected> Percentage </option> <option value=""></option> </select></div></div>   <div class="col-md-6"> <label class="my-2 generalparagraph2 darkergray" >No. of Courses</label> <input type="text" class="form-control" placeholder="e.g 2" /></div> <div class="col-1 delete"> <div class="d-flex align-items-center mt-3"> <i class="fa fa-times-circle text-danger" aria-hidden="true" ></i> </div> </div> </div>'
      );
    } else {
      alert('you cant add more than 10 fields');
    }
  });

  $(wrapper2).on('click', '.delete', function (e) {
    e.preventDefault();
    $(this).parent('div').remove();
    x--;
  });
});

$(document).ready(function () {
  $('.lessonfeedynamic').hide();
  $('.lessonassetplan').hide();
  $('.sessionfee').change(function () {
    $('.selectplandynamic').hide();
    $('.lessonassetplan').hide();
    $('.lessonfeedynamic').show();
  });
  $('.assetplan').change(function () {
    $('.lessonassetplan').show();
    $('.selectplandynamic').hide();
    $('.lessonfeedynamic').hide();
  });
  $('.siteplan').change(function () {
    $('.lessonassetplan').hide();
    $('.selectplandynamic').show();
    $('.lessonfeedynamic').hide();
  });
});

var quill = new Quill('#editor-container', {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block'],
    ],
  },
  placeholder: '',
  theme: 'snow', // or 'bubble'
});

let audioplaceholder = document.getElementById('audioplaceholder');

function changeHandler({ target }) {
  if (!target.files.length) return;
  const urlObj = URL.createObjectURL(target.files[0]);

  // Create an audio element
  const audio = document.createElement('audio');

  // Clean up the URL Object after we are done with it
  audio.addEventListener('load', () => {
    URL.revokeObjectURL(urlObj);
  });

  // Append the audio element
  audioplaceholder.appendChild(audio);

  // Allow us to control the audio
  audio.controls = 'true';

  // Set the src and start loading the audio from the file
  audio.src = urlObj;
}

document
  .getElementById('uploadAudioInput')
  .addEventListener('change', changeHandler);

// for videos

let videoplaceholder = document.getElementById('videoplaceholder');

function changeVideoHandler({ target }) {
  if (!target.files.length) return;
  const urlObjVid = URL.createObjectURL(target.files[0]);
  const video = document.createElement('video');

  video.addEventListener('load', () => {
    URL.revokeObjectURL(urlObjVid);
  });

  videoplaceholder.appendChild(video);

  video.controls = 'true';
  video.src = urlObjVid;
}

document
  .getElementById('uploadVideoInput')
  .addEventListener('change', changeVideoHandler);

// change image

// $(document).ready(function () {
//   $('#imageInput').on('change', loadimage())

//    function loadimage () {
//     $input = $(this);
//     if ($input.val().length > 0) {
//       fileReader = new FileReader();
//       fileReader.onload = function (data) {
//         $('.image-preview').attr('src', data.target.result);
//       };
//       fileReader.readAsDataURL($input.prop('files')[0]);
//       $('.image-button').css('display', 'none');
//       $('.image-preview').css('display', 'block');
//       $('#uploadImageInput').css('display', 'block');
//     }
//   });

//   $('#uploadImageInput').on('click', function () {
//     $control = $(this);
//     $('#imageInput').val('');
//     $preview = $('.image-preview');
//     $preview.attr('src', '');
//     $preview.css('display', 'none');
//     $control.css('display', 'none');
//   });
// });

// $(document).ready(function () {
//   $('#imageInput').on('change', function () {
//     $input = $(this);
//     if ($input.val().length > 0) {
//       fileReader = new FileReader();
//       fileReader.onload = function (data) {
//         $('.image-preview').attr('src', data.target.result);
//       };
//       fileReader.readAsDataURL($input.prop('files')[0]);
//       $('.image-button').css('display', 'none');
//       $('.image-preview').css('display', 'block');
//       $('.change-image').css('display', 'block');
//     }
//   });

//   $('.change-image').on('click', function () {
//     fileReader = new FileReader();
//     fileReader.onload = function (data) {
//       $('.image-preview').attr('src', data.target.result);
//     };
//   });
// });

$('#files').change(function () {
  filename = this.files[0].name;
  $('#new-file-field').append(`<p class="generalparagraph"> ${filename} </p>`);
  console.log(filename);
});

function preview_file(event) {
  var reader = new FileReader();
  reader.onload = function () {
    // var output = document.querySelectorAll('.upfile1');
    var output =
      event.target.parentElement.previousElementSibling.children[0].children[0];
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function preview_image(event) {
  var reader = new FileReader();
  reader.onload = function () {
    // var output = document.querySelectorAll('.upfile1');
    var output =
      event.target.parentElement.previousElementSibling.children[0].children[0];
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function preview_image2(event) {
  var reader = new FileReader();
  reader.onload = function () {
    // var output = document.querySelectorAll('.upfile1');
    var output =
      event.target.parentElement.previousElementSibling.children[0].children[0];
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

//upload video func

$(function () {
  $('#articlecontent').hide();
  $('#jobcontent').hide();
  $('#videocontent').hide();
  $('#audiocontent').hide();
  $('#filecontent').hide();
  $('#externallink').hide();
  $('#customcontent').hide();
  //
  $('#checkedarticle').click(function () {
    if ($(this).is(':checked')) {
      $('#articlecontent').show();
      $('#jobcontent').hide();
      $('#customcontent').show();
      $('#audiocontent').hide();
      $('#imagecontent').hide();
      $('#filecontent').hide();
    }
  });
  $('#checkedjoboffer').click(function () {
    if ($(this).is(':checked')) {
      $('#jobcontent').show();
      $('#audiocontent').show();
      $('#customcontent').show();
      $('#videocontent').hide();
      $('#imagecontent').hide();
      $('#filecontent').hide();
    }
  });
  $('#checkedimage').click(function () {
    if ($(this).is(':checked')) {
      $('#titlecontent').show();
      $('#imagecontent').show();
      $('#customcontent').show();
      $('#videocontent').hide();
      $('#filecontent').hide();
      $('#audiocontent').hide();
    }
  });
  $('#checkedfile').click(function () {
    if ($(this).is(':checked')) {
      $('#titlecontent').show();
      $('#filecontent').show();
      $('#customcontent').show();
      $('#imagecontent').hide();
      $('#videocontent').hide();
      $('#audiocontent').hide();
    }
  });
});

// for files
let fileplaceholder = document.getElementById('fileplaceholder');

function changeFileHandler({ target }) {}

document
  .getElementById('uploadFileInput')
  .addEventListener('click', changeFileHandler);

function toggle(source) {
  checkboxes = document.getElementsByName('foo');
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
}
