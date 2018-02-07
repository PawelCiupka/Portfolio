document.getElementById("menu-elem-oMnie").onclick = function() { load_view('content', "contents/oMnie.html"); }
document.getElementById("menu-elem-umiejestnosci").onclick = function() { load_view('content', 'contents/umiejetnosci.html') };
document.getElementById("menu-elem-oferta").onclick = function() { load_view('content', 'contents/oferta.html') };
document.getElementById("menu-elem-portfolio").onclick = function() { load_view('content', 'contents/portfolio.html')};
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

function sleep(timeValue) {
  var x = 0;
  var pause = setInterval(p, 100);
  function p() {
    if(x == (10*timeValue)) {
      clearInterval(pause);
    } else {
      x += 1
    }
  }
}

function x(containerName, elementName, circleName, button1, button2, delay, numberOfElements) {
  var container = document.getElementById(containerName);
  var element = container.getElementsByClassName(elementName);
  var circle = document.getElementsByClassName(circleName);
  var leftButton = document.getElementById(button1);
  var rightButton = document.getElementById(button2);
  
  var i = 1;

  showAndHideElement(element[0], circle[0], delay);
  var interval = setInterval(frame, (delay * 1000));
  function frame() {    
    showAndHideElement(element[i], circle[i], delay);

    detectClick('rightButton');
    
    i += 1;
    if(i == numberOfElements) {
      i = 0;
    }
  }
}

// Powoduje pokazanie, a nastepnie ukrycie wskazanego elementu 
function showAndHideElement(element, circle, duration) {
  var i = 0;

  var interval = setInterval(frame, (5 * duration));
  function frame() {

    if(i >= 1) {
      i = 0;
      element.style.top = "-200%";
      clearInterval(interval);
    } 
    else if(i <= 0) {
      element.style.top = "0%";
    } 
    else if(i <= 0.1) {
      element.style.opacity = (i * 10) + 0.05;
      circle.style.opacity = (i * 5) + 0.55;
    } 
    else if(i >= 0.9) {
      element.style.opacity = (i - 1) * (-10) - 0.05;
      circle.style.opacity = (i - 1) * (-5) + 0.55; 
    }

    i += 0.005;
  }
}


function detectClick(divId) {
  divId.onclick = function() { divId.style.background = black;};
}