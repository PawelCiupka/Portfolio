document.getElementById('menu-elem-about').addEventListener('click', function () {
  load_view('content', 'contents/about.html');
});

document.getElementById('menu-elem-offer').addEventListener('click', function () {
  load_view('content', 'contents/offer.html');
});

document.getElementById('menu-elem-portfolio').addEventListener('click', function () {
  load_view('content', 'contents/portfolio.html');
});

document.getElementById('menu-elem-contact').addEventListener('click', function () {
  load_view('content', 'contents/contact.html');
});

document.getElementById('photo').addEventListener('click', function () {
  location.reload();
});

function load_view(divName, fileName) {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(divName).innerHTML =
        this.responseText;
    }
  };
  xhttp.open("GET", fileName, true);
  xhttp.send();
  fancyChange(divName);
}

function load_view_mobile(divName, fileName) {
  load_view(divName, fileName)
  closeMenu();
}

function fancyChange(divName) {
  var element = document.getElementById(divName);
  var interval = setInterval(frame, 1);
  var i = 0;

  element.style.opacity = "0";
  function frame() {
    if (i >= 1) {
      clearInterval(interval);
    }
    else {
      element.style.opacity = i;
      i += 0.01;
    }
  }
}