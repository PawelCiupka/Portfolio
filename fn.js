document.getElementById("menu-elem-oMnie").onclick = function() { load_view('content', "contents/oMnie.html"); }
document.getElementById("menu-elem-umiejestnosci").onclick = function() { load_view('content', 'contents/umiejetnosci.html') };
document.getElementById("menu-elem-oferta").onclick = function() { load_view('content', 'contents/oferta.html') };
document.getElementById("menu-elem-portfolio").onclick = function() { load_view('content', 'contents/portfolio.html') };
document.getElementById("menu-elem-skontaktuj").onclick = function() { load_view('content', 'contents/kontakt.html') };
document.getElementById("hamburger").onclick = function () { openMenu() };
document.getElementById("photo").onclick = function() { location.reload() };

function openMenu() {
  var menuList = document.getElementById("mobile-ul");
  var hamburgerStyle = document.getElementById("hamburger");
  var header = document.getElementById("header");
  var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;

  if (hamburgerStyle.className === "hamburger1") { 
    hamburgerStyle.className = "hamburger2";
    header.className = "header_color";

    slideMenu('mobile-ul', -15, 5, 1, 5);    
  } 
  else {
    hamburgerStyle.className = "hamburger1";
    header.className = "header_no_color";

    slideMenu('mobile-ul', 5, -15, -1, 5);
    }
}

function slideMenu(divName, start, end, direction, frameTime) {
  var elem = document.getElementById(divName);
  var i = start;
  var inter = setInterval(frame, frameTime);

  function frame() {
    if(i == end) {
      clearInterval(inter);
    } else {
      elem.style.top = i + 'em';
      i += (direction * 0.5);
    } 
  }
}


function load_view(divName, fileName) {
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(divName).innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", fileName, true);
  xhttp.send();
}

// PAGE: UMIEJETNOSCI
/*
document.getElementById("element1").onmouseover = function() { showDescription( "element1", "TO JEST OPIS") };

function showDescription(divName, description) {
  var elem = document.getElementById(divName);

  elem.className = "hovered_element";
  elem.innerHTML = description;

}

function disableDescription(divName) {
  var elem = document.getElementById(divName);

  elem.className = "slider_element";
}
*/

// PAGE: PORTFOLIO
function x() {
  var container = document.getElementById('img_containter');
  var element = container.getElementsByClassName('page_img');
  var i = 0;

  var inter = setInterval(frame, 3000);

  function frame() {    
    element[i].style.opacity = "1";
    window.setTimeout(function x() {element[i].style.opacity = "0";}, 3000);
    i += 1;
    if(i == 2) {
      i = 0;
    }
  }
}