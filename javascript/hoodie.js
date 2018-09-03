$(function() {
  $("#item-style").change(function(){
    var item_val = $(this).val();
    if (item_val == "Zip-up"){
      $(".warning").show();
    }
    else{
      $(".warning").hide();
    }
  });
});
