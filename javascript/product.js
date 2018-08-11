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
