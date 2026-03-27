// upload file code start
$(document).on('click', '.dropzone1', function () {
  $('.dropzone-desc1  h5.bg_full').css('width', '0');
});
// $(document).on('click', '.dropzone2', function () {
//   $('.dropzone-desc2  h5.bg_full').css('width', '0');
// });

function readFile2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    $('.all_file_upload_html').find('.dropzone-wrapper').removeClass('error_class');
    $('.all_file_upload_html p.error_message').remove();
    $('.already_uploaded_file').removeClass('error_class');
    $('.already_uploaded_file p.error_message').remove();
    reader.onload = function (e) {
      var htmlPreview =
        '<h4><img src="images/checked.svg" /> File uploaded successful</h4>' +
        '<span class="impload_flex"><img class="btnClosed second_btn" src="images/c.svg" /> <p><a target="blank" href="' + input.files[0].name + '">' + input.files[0].name + '</a></p></span>'
      $(input).parents('.upload_file2').addClass('file_added');
      $(input).addClass('ccccccc');
      $(input).siblings('.dropzone-desc2').find('h5').text('');
      $(input).siblings('.dropzone-desc2').find('h5').addClass('bg_full');
      $(input).siblings('.dropzone-desc2').find('h5.bg_full').animate({ width: "100%" }, 2000);
      $(input).siblings('.dropzone-desc2').find('p').text('');
      $(input).siblings('.dropzone-desc2').find('p').html('<h6>Uploading file <span class="Single">100</span><span class="per">%</span></h6>');
      $(input).siblings('.dropzone-desc2').addClass('active');

      var singleElement = $(input).closest('.dropzone-wrapper2').find('.Single');
      $({ Counter: 0 }).animate({
        Counter: 100
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          singleElement.text(Math.ceil(now));
        }
      });
      setTimeout(function () {
        $(input).parents('.dropzone-wrapper2').css('opacity', '0');
        $(input).parents('.dropzone-wrapper2').siblings('.preview-zone').find('.box-body2 ').addClass('green_color')
      }, 2000);
      var wrapperZone = $(input).parent();
      var previewZone = $(input).parent().parent().find('.preview-zone');
      var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body2');

      wrapperZone.removeClass('dragover');
      previewZone.removeClass('hidden');
      boxZone.empty();
      boxZone.append(htmlPreview);
    };

    reader.readAsDataURL(input.files[0]);
  }
}


function reset(e) {
  e.wrap('<form>').closest('form').get(0).reset();
  e.unwrap();
}


$(".dropzone2").change(function () {
  readFile2(this);
  $(this).parents('.dropzone-wrapper').delay(2000).hide(0);
  setTimeout(function () {
    $('.dropzone2').parents('.dropzone-wrapper').removeClass('bg_show');
  }, 2100);

});

$(document).on('click', 'img.second_btn', function () {
  $(this).parents('.upload_file2').removeClass('file_added');
  $(this).parents('.preview-zone').siblings('.dropzone-wrapper2').find('p').empty().append(`<img src="images/upload_arrow.svg" alt="arrow"> Select from
  Device`);
  $(this).parents('.preview-zone').siblings('.dropzone-wrapper2').find('h5').removeClass('bg_full').text('Drag and drop file here, or');
  $(this).parents('.preview-zone').siblings('.dropzone-wrapper2').find('.dropzone-desc2').removeClass('active');
  $(this).parents('.preview-zone').siblings('.dropzone-wrapper2').addClass('bg_show');
  $(this).parents('.box-body2').empty().css('background-color', '#fff');
  $('.box-body.box-body2').removeClass('green_color');
  $(".dropzone2").val('');
  $('.box-body2').css('z-index', 1);

});

$('.dropzone-wrapper').on('dragover', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass('dragover');
});


// upload file code end 


$(document).on('click', '.broad_div', function () {
  $('.broad_div').removeClass('active');
  $(this).addClass('active');
  var selected_broad = $(this).find('p').text().replace(/\s+/g, ' ').trim();
  $('.row.broad_row').attr('selectd_skill', selected_broad);
  $('.Broad_Skill_box input.form-control.common_input').val('');
  if (selected_broad == 'Other') {
    $('.row.broad_row p.error_message').remove();
    $('.Broad_Skill_box p.error_message').remove();
    $('.braod_skill_dropdown').removeClass('error_class');
    $('.Broad_Skill_box').show();
  }
  else {
    $('.row.broad_row p.error_message').remove();
    $('.Broad_Skill_box p.error_message').remove();
    $('.braod_skill_dropdown').removeClass('error_class');
    $('.Broad_Skill_box').hide();
  }
});
$(document).on('click', '.curr_dropdown', function () {
  if (!$(this).hasClass('slide_drop')) {
    $(this).addClass('slide_drop')
    $(this).siblings('ul').slideDown();
  }
  else {
    $(this).removeClass('slide_drop')
    $(this).siblings('ul').hide();
  }
});
$(document).on('click', function (e) {
  if ($(e.target).closest('.curr_dropdown').length === 0) {
    $('.buget_curr ul').hide();
    $('.curr_dropdown').removeClass('slide_drop');
  }
});
$(document).on('click', '.buget_curr ul li', function () {
  $('.buget_curr input').val($(this).text());
  $(this).parent('ul').hide();
  $(this).parent('ul').siblings('.curr_dropdown').removeClass('slide_drop');
});
$(document).on('click','.bugget_checkbox .custom-checkbox label',function(){
$(this)
  .parents('.bugget_checkbox')
  .siblings('.buget_details')
  .find('.buget_details_in')
  .removeClass('active max_height_width');
  $(this)
  .parents('.bugget_checkbox')
  .siblings('.buget_details')
  .find('.buget_details_in').find('input').val('');
  $('.buget_error_show').removeClass('error_class');
   $('.buget_error_show').find('p.error_message').remove();
});
$(document).on('click', '.buget_details_in', function () {
      $(".bugget_checkbox .custom-checkbox input").prop("checked", false);
  $('.buget_details_in').addClass('max_height_width').removeClass('active');
  $(this).removeClass('max_height_width').addClass('active');
  $('.buget_error_show.error_class p').remove();
  $('.buget_full_details input.form-control').removeClass('empty_class');
});
$(document).on('click', '.broad_slect', function () {

  if (!$(this).hasClass('slide_down')) {
    $(this).addClass('slide_down');
    $(this).siblings('.broad_skill_options').slideDown();
  }
  else {
    $(this).removeClass('slide_down');
    $(this).siblings('.broad_skill_options').hide();
  }
});
$(document).on('keyup', '.Broad_Skill_box input.form-control.common_input', function () {
  $('.Broad_Skill_box p.error_message').remove();
  $(this).siblings('span.broad_skil_cat').hide();
  $(this).siblings('span.drop_arrow_btn').hide();
  $(this).siblings('.spinner_2').show();
  var value = $(this).val().toLowerCase();
  var $dropdown = $(this).closest('.braod_skill_dropdown');
  var $list = $dropdown.find('.broad_skill_options ul');
  var $items = $list.find('li');

  var matchFound = false;

  $items.each(function () {
    var text = $(this).text().toLowerCase();

    if (text.includes(value)) {
      $(this).show();
      matchFound = true;
    } else {
      $(this).hide();
    }
  });


  $list.find('.no_option_msg').remove();

  if (!matchFound && value !== '') {
    $list.append('<span class="no_option_msg">No matching Category found. Remove your input & select from one of the options.</span>');
  }

});
$(document).on('click', '.broad_skill_options li', function () {
  $('.Broad_Skill_box p.error_message').remove();
  $(this).parents('.broad_skill_options').siblings('.broad_slect').find('span.broad_skil_cat').show();
  $(this).parents('.broad_skill_options').siblings('.broad_slect').find('span.drop_arrow_btn').show();
  $(this).parents('.broad_skill_options').siblings('.broad_slect').find('.spinner_2').hide();
  var current_select = $(this).text();
  var current_select_id = $(this).data('id');
  $('.row.broad_row').attr('selectd_skill', current_select);
  $(this).parents('.broad_skill_options').siblings('.broad_slect').find('input').val(current_select).attr('broad_id', current_select_id);
  $(this).parents('.broad_skill_options').hide();
  $(this).parents('.broad_skill_options').siblings('.broad_slect').removeClass('slide_down');
});
$(document).on('keypress', '.skill_tags input.form-control.common_input', function (e) {
  $('.spinner').hide();

  $(this)
    .closest('.skill_inputs')
    .find('.spinner')
    .show();

  if (e.which === 13) {
    e.preventDefault();

    var value = $(this).val().trim();
    $(this).val('');
    if (value !== '') {
      $('ul.added_skill_tags').append(`<li><span class="remove_tag"><img src="images/close_orange.svg" alt="close"></span><span class="tag_name">` + value + `</span></li>`)
    }
    $(this)
      .closest('.skill_inputs')
      .find('.spinner')
      .hide();
  }

});
$(document).on('click', 'span.remove_tag', function () {
  $(this).parents('li').remove();
});
$(document).on('click', '.recomended_tags ul li', function () {
  var select_rec = $(this).find('.recomended_val').text();
  $('ul.added_skill_tags').append(`<li><span class="remove_tag"><img src="images/close_orange.svg" alt="close"></span><span class="tag_name">` + select_rec + `</span></li>`)
});

$(document).on('click', '.projects_title input.form-control.common_input', function () {
  var broad_skill = localStorage.getItem("broad_skill");
  if (broad_skill) {
    $('.suggestion_box p b').text(broad_skill);
    $('.suggestion_box.siggestion_for_title').show();
    return;
  }
  var select_broad_skill = $('.row.broad_row').attr('selectd_skill');
  if ((select_broad_skill).length > 0) {
    $('.suggestion_box p b').text(select_broad_skill);
    $('.suggestion_box.siggestion_for_title').show();
  }
});
$(document).on('click', '.suggestion_box ul li ', function () {
  $('.projects_title input').val($(this).text());
  $(this).parents('.projects_title').removeClass('error_class').find('p.error_message').remove();
  // $('.suggestion_box.siggestion_for_title').hide();
});
$(document).on('focus', 'input.form-control.common_input', function () {
  $(this).parents('.error_class').removeClass('error_class').find('p.error_message').remove();
});
$(document).on('click', function (e) {
  if ($(e.target).closest('.braod_skill_dropdown').length === 0) {
    $('.broad_skill_options').hide();
    $('.broad_slect').removeClass('slide_down');
    $('span.drop_arrow_btn,span.broad_skil_cat').show();
    $('span.spinner_2').hide();
  }
});
$(document).on('click', function (e) {
  if ($(e.target).closest('.projects_title input,.suggestion_box.siggestion_for_title').length === 0) {
    // $('.suggestion_box.siggestion_for_title').hide();
  }
});
$(document).on('click', '.post_a_project_manually.footer_btns a.common_hover_btn', function () {

  var broad_active = $('.broad_div.active').find('p').text().replace(/\s+/g, ' ').trim();
  if (broad_active == 'Other') {
    broad_active = $('.Broad_Skill_box input.form-control.common_input').val();
  }
  var experience = $('input[name="experience"]:checked').closest('.card').find('.title').text().trim();
  var project_requirment = $('input[name="urgent_req"]:checked').closest('.card').find('.title').text().trim();
  var projects_title = $('.projects_title input').val();
  var skill_tags = [];
  $('ul.added_skill_tags li').each(function () {
    var skill = $(this).find('span.tag_name').text().trim();
    skill_tags.push(skill);
  });
  var upload_file = $('.already_uploaded_file .box-body p a').text();
  if (broad_active != '' && experience != '' && project_requirment != '' && projects_title != '' && upload_file != '') {
    $('#enter_your_email').modal('show');
  }
  else {
    if (!broad_active || broad_active.toLowerCase() === 'other') {
      if ($('.broad_div.other_broad').hasClass('active')) {
        $('.braod_skill_dropdown').addClass('error_class');
        $('.Broad_Skill_box p.error_message').remove();
        $('.Broad_Skill_box').append(`<p class="error_message">Please select the broad skill.</p>`);
      }
      else {
        $('.row.broad_row p.error_message').remove();
        $('.row.broad_row').append(`<p class="error_message">Please select the broad skill.</p>`);
      }
    }
    if (!projects_title) {
      $('.projects_title').addClass('error_class');
      $('.projects_title p.error_message').remove();
      $('.projects_title').append(`<p class="error_message">Please fill the project title.</p>`);
    }
    else {
      $('.projects_title').removeClass('error_class');
      $('.projects_title p.error_message').remove();
    }
    if (!upload_file) {
      $('.already_uploaded_file').addClass('error_class');
      $('.already_uploaded_file p.error_message').remove();
      $('.already_uploaded_file').append(`<p class="error_message">Please upload the project description.</p>`);
    }
    else {
      $('.already_uploaded_file').removeClass('error_class');
      $('.already_uploaded_file p.error_message').remove();
    }
    var $firstError = $('.error_class:visible').first();
    if ($firstError.length > 0) {
      $('.upload_step_2').animate({
        scrollTop: $firstError.offset().top - 200
      }, 500);
      $('html,body').animate({
        scrollTop: $firstError.offset().top - 200
      }, 500);
    }
  }

});

$(document).on('click', '.post_a_project_manually_btn a.footer_next', function () {
  var broad_active = $('.broad_div.active').find('p').text().replace(/\s+/g, ' ').trim();
  if (broad_active == 'Other') {
    broad_active = $('.Broad_Skill_box input.form-control.common_input').val();
  }
  var local_value = broad_active;
  localStorage.setItem("broad_skill", local_value);
  var experience = $('input[name="experience"]:checked').closest('.card').find('.title').text().trim();
  var project_requirment = $('input[name="urgent_req"]:checked').closest('.card').find('.title').text().trim();
  if (broad_active != '' && experience != '' && project_requirment != '') {
    var baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
    var finalUrl = baseUrl + 'post_your_project_manual_2.html';
    window.location.href = finalUrl;
  }
  else {
    if (!broad_active || broad_active.toLowerCase() === 'other') {
      if ($('.broad_div.other_broad').hasClass('active')) {
        $('.braod_skill_dropdown').addClass('error_class');
        $('.Broad_Skill_box p.error_message').remove();
        $('.Broad_Skill_box').append(`<p class="error_message">Please select the broad skill.</p>`);
      }
      else {
        $('.row.broad_row p.error_message').remove();
        $('.row.broad_row').append(`<p class="error_message">Please select the broad skill.</p>`);
      }
    }
    var $firstError = $('.error_class:visible').first();
    if ($firstError.length > 0) {
      $('.upload_step_2').animate({
        scrollTop: $firstError.offset().top - 200
      }, 500);
      $('html, body').animate({
        scrollTop: $firstError.offset().top - 200
      }, 500);
    }
  }
});

$(document).on('click', '.footer_btns.last_step a.submit_your_req', function () {
  var project_title = $('.help_us_div.second_Step .projects_title input').val();
  var projects_description = $('.help_us_div.second_Step .projects_description .ck.ck-content p').text();
  var Work_nature = $('input[name="work_nature"]:checked').closest('.card').find('.title').text().trim();
  var buget_details_in = $('.buget_details_in.active h2').text();
  var buget_currency = $('.buget_details_in.active .buget_curr input').val();
  var buget_range_from = $('.buget_details_in.active input.form-control.from_range').val();
  var buget_range_to = $('.buget_details_in.active input.form-control.to_range').val();
  var addtional_comment = $('.addtional_comment textarea').val();
var buget_var = $('.bugget_checkbox .custom-checkbox input').prop('checked');
  var skill_tags = [];
  $('ul.added_skill_tags li').each(function () {
    var skill = $(this).find('span.tag_name').text().trim();
    skill_tags.push(skill);
  });
if (
  project_title !== '' &&
  projects_description !== '' &&
  Work_nature !== '' &&
  (
    buget_var === true || 
    (
      buget_details_in !== '' &&
      buget_currency !== '' &&
      buget_range_from !== '' &&
      buget_range_to !== ''
    )
  )
) {
  $('#enter_your_email').show();
}
else {

  if (!project_title) {
    $('.projects_title').addClass('error_class');
    $('.projects_title p.error_message').remove();
    $('.projects_title').append(`<p class="error_message">Please fill the project title.</p>`);
  } else {
    $('.projects_title').removeClass('error_class');
    $('.projects_title p.error_message').remove();
  }

  if (!projects_description) {
    $('.projects_description').addClass('error_class');
    $('.projects_description p.error_message').remove();
    $('.projects_description').append(`<p class="error_message">Please fill the project description.</p>`);
  } else {
    $('.projects_description').removeClass('error_class');
    $('.projects_description p.error_message').remove();
  }

  if (!buget_var) {

    var $container = $('.buget_error_show');

    $container.addClass('error_class');
    $container.find('.error_message').remove();

    if (!buget_details_in) {
      $container.append('<p class="error_message">Please select a suitable budget.</p>');
    } 
    else if (!buget_currency || !buget_range_from || !buget_range_to) {
      $container.append('<p class="error_message">Please fill all mandatory details.</p>');
    }

    $('.buget_details_in.active input.form-control').each(function () {
      var value = $(this).val().trim();

      if (value === '') {
        $(this).addClass('empty_class');
      } else {
        $(this).removeClass('empty_class');
      }
    });

  } else {
    $('.buget_error_show').removeClass('error_class');
    $('.buget_error_show .error_message').remove();
    $('.buget_details_in input').removeClass('empty_class');
  }

}
  var $firstError = $('.error_class:visible').first();

  if ($firstError.length > 0) {
    $('.upload_step_2').animate({
      scrollTop: $firstError.offset().top - 200
    }, 500);
    $('html, body').animate({
      scrollTop: $firstError.offset().top - 200
    }, 500);
  }
});
$(document).on('click', '.buget_full_details input.form-control.empty_class', function () {
  $(this).removeClass('empty_class');
});
$(document).on('click', '.projects_description .c-form-group', function () {
  $(this).parents('.projects_description').removeClass('error_class');
  $(this).parents('.projects_description').find('p.error_message').remove();
});

$(document).on('click', '.submit_by_upload a', function () {

  var linkText = $('.box-body p a').text().trim();
  $('.all_file_upload_html').find('.dropzone-wrapper').removeClass('error_class');
  $('.all_file_upload_html p.error_message').remove();
  if (!linkText) {
    $('.all_file_upload_html p.error_message').remove();
    $('.all_file_upload_html').append(`<p class="error_message">Please upload the project description.</p>`);
    $('.all_file_upload_html').find('.dropzone-wrapper').addClass('error_class');
    return;
  }
  var baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
  var finalUrl = baseUrl + 'post_project_by_uploading.html';
  window.location.href = finalUrl;

});

$(document).on('click', 'img.new_uploaded', function () {
  $(this).parents('.already_uploaded_file').find('.all_file_upload_html').show();
  $(this).parents('.box-body.box-body2').remove();
  $('.box-body.box-body2').removeClass('green_color');
});

$(document).on('click', '.alreat_box_profile a', function () {
  $(this).parents('.alreat_box_profile').remove();
});
$(document).on('click', '.projects_title', function () {
  $('.upload_suggestion ul li').removeClass('active');
  $('li.project_li').addClass('active');
})
$(document).on('click', '.projects_description', function () {
  $('.upload_suggestion ul li').removeClass('active');
  $('li.discription_li').addClass('active');
})
$(document).on('click', '.skill_tags', function () {
  $('.upload_suggestion ul li').removeClass('active');
  $('li.flextags_li').addClass('active');
})
$(document).on('click', '.Work_nature.level_of_exp', function () {
  $('.upload_suggestion ul li').removeClass('active');
  $('li.nature_li').addClass('active');
});
$(document).on('click', 'a.Send_otp', function (e) {

  e.preventDefault();
  $('.modal_inner_content .form-group ').removeClass('error_class');
  var mail_val = $('.modal_inner_content input').val().trim();
  if (mail_val === '') {
    $('.modal_inner_content_2 .form-group ').addClass('error_class');
    $('.modal_inner_content_2 .form-group p.error_message').remove();
    $('.modal_inner_content_2 .form-group').append(`<p class="error_message">Please enter work email</p>`);
    return;
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(mail_val)) {
    $('.modal_inner_content_2 .form-group ').addClass('error_class');
    $('.modal_inner_content_2 .form-group p.error_message').remove();
    $('.modal_inner_content_2 .form-group').append(`<p class="error_message">Please enter valid work email</p>`);
    return;
  }
  $('#enter_your_email').hide();
  $('#enter_your_otp').show();

});
$(document).on('click', '.submit_email', function (e) {

  e.preventDefault();
  $('.modal_inner_content .form-group ').removeClass('error_class');
  var mail_val = $('.modal_inner_content input').val().trim();
  if (mail_val === '') {
    $('.modal_inner_content_3 .form-group ').addClass('error_class');
    $('.modal_inner_content_3 .form-group p.error_message').remove();
    $('.modal_inner_content_3 .form-group').append(`<p class="error_message">Please enter work email</p>`);
    return;
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(mail_val)) {
    $('.modal_inner_content_3 .form-group ').addClass('error_class');
    $('.modal_inner_content_3 .form-group p.error_message').remove();
    $('.modal_inner_content_3 .form-group').append(`<p class="error_message">Please enter valid work email</p>`);
    return;
  }
  $('#enter_your_email').hide();
  $('#enter_your_otp').show();

});

$(document).on('paste', '.otp_code input', function (e) {
  e.preventDefault();
  var pasteData = (e.originalEvent.clipboardData || window.clipboardData).getData('text').trim();
  if (!/^\d+$/.test(pasteData)) return;
  var inputs = $(this).closest('.otp_code').find('input');
  inputs.each(function (i) {
    $(this).val(pasteData[i] || '');
  });
  inputs.last().focus();
});

$(document).on('input', '.otp_code input', function () {
  var value = $(this).val().replace(/[^0-9]/g, '');
  $(this).val(value);
  if (value.length === 1) {
    $(this).next('input').focus();
  }
});

$(document).on('keydown', '.otp_code input', function (e) {
  if (e.key === 'Backspace' && $(this).val() === '') {
    $(this).prev('input').focus();
  }

});
$(document).on('click', 'a.otp_submit', function (e) {
  e.preventDefault();
  var isEmpty = false;
  $('.otp_code input').each(function () {
    if ($(this).val().trim() === '') {
      isEmpty = true;
      return false;
    }
  });
  if (isEmpty) {
    $('div#enter_your_otp .modal_inner_content .form-group').addClass('error_class');
    $('div#enter_your_otp .modal_inner_content .form-group p.error_message').remove();
    $('div#enter_your_otp .modal_inner_content .form-group').append(`<p class="error_message">Please enter complete OTP</p>`);
    return;
  }
  $('#enter_your_otp').hide();
  $('#Congratulations_modal').modal('show');

});

$(document).on('click', '.otp_code input[type="text"]', function () {
  $(this).parents('.form-group').removeClass('error_class');
  $(this).parents('.form-group').find('p.error_message').remove();
});

$(document).on('click', 'a.all_comments', function () {
  $('.all_textarea').append(`         <textarea class="form-control common_input"
                                    placeholder="Enter additional comments"></textarea>`)
});
$(document).on("click", ".cancel_modal", function () {
    $(this).closest(".modal").addClass('qwerty').hide();
});