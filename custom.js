$(function(){
  $("#posts .main > article .post-notes").click(function(){
    $(".notes-pop-container .notes-wrapper").toggle();
    return false;
  });
  
  $($('.tumblr_video_iframe')[0]).contents().find('.crt-skin-default .vjs-tech').css({'width': 'auto'});
});