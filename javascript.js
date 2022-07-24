
//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  //chuyển đến slide tiếp theo
  slideIndex++;
  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  if (slideIndex > slides.length-1 ) {
    slideIndex = 0;
  }
  //tự động chuyển đổi slide sau 5s
  setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// <!-- java cho prev và next của slideshow-->

function plusSlides(n) {
showSlides1(slideIndex += n);
}

function showSlides1(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) { slideIndex = 1 }
if (n < 1) { slideIndex = slides.length }
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}
// java dành cho xem thêm và rút gọn
function show(){
  var a=document.getElementById("show");
  var b=document.getElementById("content-hide");
  var c=document.getElementById("hide");
  var d=document.getElementById("content-hide2");
  b.style.display="block";
  a.style.display="none";
  c.style.display="block";
  d.style.display="block"
}
function hide(){
  var a=document.getElementById("show");
  var b=document.getElementById("content-hide");
  var c=document.getElementById("hide");
  var d=document.getElementById("content-hide2");
  b.style.display="none";
  a.style.display="block";
  c.style.display="none";
  d.style.display="none";
}


//javascript scroll to top



//javascript dành cho loading
function loading(){
  document.getElementById("loading").style.visibility="hidden";
  document.getElementById("loading").style.opacity="0.8";
}
function loading1(){
  document.getElementById("loading1").style.visibility="hidden";
}

