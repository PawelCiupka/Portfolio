document.getElementById('photo').addEventListener('click', function () {
  location.reload();
});

document.getElementById('hamburger').addEventListener('click', function () {
  openMenu();
});

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
    if (i == end) {
      clearInterval(inter);
    } else {
      elem.style.top = i + 'em';
      i += (direction * 0.5);
    }
  }
}

function closeMenu() {
  var menuList = document.getElementById("mobile-ul");
  var hamburgerStyle = document.getElementById("hamburger");
  var header = document.getElementById("header");
  hamburgerStyle.className = "hamburger1";
  header.className = "header_no_color";

  slideMenu('mobile-ul', 5, -15, -1, 5);
}
