

var monbouton = document.getElementById("btn");
monbouton.addEventListener("click", function () {
  basculeMenu();
});
var monsand = document.getElementById("menu1");
monsand.addEventListener("click", function () {
  basculeMenu();
});
function basculeMenu() {
  var monmenuamoa = document.getElementById("menu1");
  var monicone = document.getElementById("btnicone");

  if (monmenuamoa.style.left != "0px") {
    monmenuamoa.style.left = "0px";
    monicone.style.left = "100%";
  } else {
    monmenuamoa.style.left = "100%";
    monicone.style.left = "0px";
  }
  return;
}