document.getElementById("menu-elem-oMnie").onclick = function() { load_view('content', "contents/oMnie.html"); }
document.getElementById("menu-elem-umiejestnosci").onclick = function() { load_view('content', 'contents/umiejetnosci.html') };
document.getElementById("menu-elem-oferta").onclick = function() { load_view('content', 'contents/oferta.html') };
document.getElementById("menu-elem-portfolio").onclick = function() { load_view('content', 'contents/portfolio.html') };
document.getElementById("menu-elem-skontaktuj").onclick = function() { load_view('content', 'contents/kontakt.html') };

document.getElementById("hamburger").onclick = function () { openMenu() };
document.getElementById("photo").onclick = function() { location.reload() };

// Powoduje otworzenie menu na mobile
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

// Animacja rozwijanego menu na mobile
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

// Powoduje załadowanie treścią wskazanego obiektu
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


// START -> PAGE: O MNIE
// Powoduje zniknięcie przycisków, oraz pokazanie się wiadomości
function changeText(text) {
  var b1 = document.getElementById('yes');
  var b2 = document.getElementById('no');
  var answer = document.getElementById('answer');
  b1.style.opacity = 0;
  b2.style.opacity = 0;
  answer.style.opacity = 1;
  answer.innerHTML = text;
}
// END -> PAGE: O MNIE


// START -> PAGE: PORTFOLIO
// Funkcja zarządzająca sliderem -> nie użyta
function letsSlide(containerName, elementName, circleName, button1, button2, delay, numberOfElements) {
  var container = document.getElementById(containerName);
  var element = document.getElementsByClassName(elementName);
  var circle = document.getElementsByClassName(circleName);
  var leftButton = document.getElementById(button1);
  var rightButton = document.getElementById(button2);

  var i = 1;
  var x = 0;
  
  var interval = setInterval(frame, (5 * delay));
  function frame() {

    rightButton.onclick = function() {
      x = 1;
      element[i].style.opacity = 0;
      circle[i].style.opacity = 0.5; 
    }

    leftButton.onclick = function() {
      x = 0;
      element[i].style.opacity = 0;
      circle[i].style.opacity = 0.5; 
      element[i].style.top = "-200%";
      i -= 1;
      if(i < 0) {
        i = 0;
      }
    }

    if(x >= 1) {
      x = 0;
      element[i].style.top = "-200%";
      i += 1;
      if(i == numberOfElements) {
        i = 0;
      }
     
    } 
    else if(x <= 0.005) {
      element[i].style.top = "0%";
    } 
    else if(x <= 0.1) {
      element[i].style.opacity = (x * 10) + 0.05;
      circle[i].style.opacity = (x * 5) + 0.55;
    } 
    else if(x >= 0.9) {
      element[i].style.opacity = (x - 1) * (-10) - 0.05;
      circle[i].style.opacity = (x - 1) * (-5) + 0.55; 
    }
    x += 0.005;
  }
}

// Powoduje pokazanie kolejnego/poprzedniego elementu slidera
iElem = 0;
zElem = 1;
function showNextElement(elementName, circleName, numberOfElements, diff) {
  var element = document.getElementsByClassName(elementName);
  var circle = document.getElementsByClassName(circleName);

  var i1 = 0;

  circle[iElem].style.opacity = 0.5;
  element[iElem].style.opacity = 0;
  
  zElem += 1;
  iElem += 1;
  if(iElem < 0) {
    iElem = numberOfElements-1;
  } else if (iElem > numberOfElements-1) {
    iElem = 0;
  }
  
  var interval = setInterval(frame, 5);
  function frame() {
    if(i1 > 1) {
      clearInterval(interval);
    } else {
      element[iElem].style.opacity = i1;
      element[iElem].style.zIndex = zElem;

      
      circle[iElem].style.opacity = 0.5 + (i1*0.5);
      i1 += diff;
    } 
  }
}
// END -> PAGE: PORTFOLIO






/*
// START -> PAGE: UMIEJETNOSCI

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

// END -> PAGE: UMIEJETNOSCI
*/