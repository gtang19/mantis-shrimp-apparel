const dropdown = document.getElementById("item-complexity");
const explanation = document.getElementById("explanation");
const calm = "Colors blended together smoothly";
const normal = "Standard designs, like spirals and rings";
const chaotic = "Experimental, highly unique designs"

check();
dropdown.addEventListener("change", check)

function check(){
  var complexity = dropdown.selectedIndex
  switch (complexity) {
    case 0:
      explanation.innerHTML = calm;
      break;
    case 1:
      explanation.innerHTML = normal;
      break;
    case 2:
      explanation.innerHTML = chaotic;
      break;
  }
}

//Image viewer
var close = document.querySelector(".image-popup .close");
var popup = document.querySelector(".image-popup");
var images = document.querySelectorAll(".item-image img");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
close.addEventListener("click", function(){
  popup.setAttribute('style',"display: none;")
});
for (i in images) {
    images[i].addEventListener("click", function(){
    popup.setAttribute('style',"display: block;")
    modalImg.src = this.src;
    caption.innerHTML = this.alt;
  });

};



$(function() {
  $(".snip-input").change(function(){
    n = $(this).attr('data-custom-val')
    var data = "item-custom"+n+"-value";
    var item_val = $(this).val();
    $('#buy-button').data(data,item_val);
  });

  $(".check-container").change(function(){
    var n = $(this).attr('data-custom-val');
    var data = "item-custom"+n+"-value";
    var $input = $(this).children().first();
    var isChecked = $input.is(":checked");
    $('#buy-button').data(data, isChecked);
  });

  //Price change for selection
  $("#item-style").change(function(){
    var $selected = $("#item-style option:selected")
    var $unselected = $("#item-style option:not(option:selected)");
    var price = $selected.attr('data-price');
    var price_string = "$"+price+".00"
    var price_dif = $unselected.attr('data-price') - price;
    var price_dif_string;
    $(".item-price").html(price_string);
  });
});
