/*Ivar btnKlik=document.getElementById('dugmeNaruci');
btnKlik.addEventListener('click',otvoriAlert);*/
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var days = ["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"];
function update(){

var d = new Date();
var n = days[d.getDay()];
var x = document.getElementById("demo");
if(x){
var h = addZero(d.getHours());
var m = addZero(d.getMinutes());
var s = addZero(d.getSeconds());
x.innerHTML =n +", "+ h + ":" + m + ":" + s; }

}
window.addEventListener("load", function(){
  setInterval( update, 1000 )
});




function validirajFormu(){
  var ime = document.forms["forma"]["imePrezime"].value;
  if (ime == "") {
    alert("Ime i prezime moraju biti popunjeni");
    return false;
  }
  var mail = document.forms["forma"]["mail"].value;
  if (mail == "") {
    alert("Mail mora biti popunjen");
    return false;
  }
 
  var adresa = document.forms["forma"]["adresa"].value;
  if (adresa == "") {
    alert("Adresa mora biti popunjena");
    return false;
  }
  var n = mail.includes('@');
  if(n == 0){
    alert("Nije ispravno unesen mail");
    return false;
  }
  alert("Uspesno popunjena forma");
  document.getElementById("formaPor").reset();
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
 function otvoriAlert(){
     alert('Uspesno ste narucili!');
 }