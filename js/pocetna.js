/*Ivar btnKlik=document.getElementById('dugmeNaruci');
btnKlik.addEventListener('click',otvoriAlert);*/

function validirajFormu(){
  var mail = document.forms["forma"]["mail"].value;
  if (mail == "") {
    alert("Mail mora biti popunjen");
    return false;
  }
  var ime = document.forms["forma"]["imePrezime"].value;
  if (ime == "") {
    alert("Ime i prezime moraju biti popunjeni");
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
  return true;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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