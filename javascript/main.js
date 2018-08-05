/******Jquery******/
$(function() {
  $("#menu").click(function() {
      $('.slidenav').toggle("slide");
  });
  $('.testcontent, #close').click(function(){
    $('.slidenav').hide("slide");
  })
})



/******Vanilla JavaScript******/
