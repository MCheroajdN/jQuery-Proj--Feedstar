$(document).ready(() => {
//Hover Functionality to Navigation Menu
$('.menu').on('mouseenter', () => {
  $('.nav-menu').show();
})

$('.nav-menu').on('mouseleave', () => {
  $('.nav-menu').hide();
})

//Hover Functionality to +1 button
$('.btn').on('mouseenter', (event) => {
  $(event.currentTarget).addClass('btn-hover');
}).on('mouseleave', (event) => {
  $(event.currentTarget).removeClass('btn-hover');
})

//Limit a User's Post to 140 Characters
$('.postText').on('keyup', (event) => {
  let post = $(event.currentTarget).val();
  let remaining = 140 - post.length;

  if (remaining <=0) {
    $('.wordcount').addClass('red');
  } else {
    $('.wordcount').removeClass('red');
  }

  $('.characters').html(remaining);
});

$('.postText').focus();

}); 
