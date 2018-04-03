document.getElementById('e1').addEventListener("mouseenter", function () {
  showDescription('e1');
});

document.getElementById('e1').addEventListener("mouseleave", function () {
  hideDescription('e1');
});

document.getElementById('e1').addEventListener('click', function () {
  showDescribeOnMobile('e1')
});


document.getElementById('e2').addEventListener("mouseenter", function () {
  showDescription('e2');
});

document.getElementById('e2').addEventListener("mouseleave", function () {
  hideDescription('e2');
});

document.getElementById('e2').addEventListener('click', function () {
  showDescribeOnMobile('e2')
});


document.getElementById('e3').addEventListener("mouseenter", function () {
  showDescription('e3');
});

document.getElementById('e3').addEventListener("mouseleave", function () {
  hideDescription('e3');
});

document.getElementById('e3').addEventListener('click', function () {
  showDescribeOnMobile('e3')
});


document.getElementById('e4').addEventListener("mouseenter", function () {
  showDescription('e4');
});

document.getElementById('e4').addEventListener("mouseleave", function () {
  hideDescription('e4');
});

document.getElementById('e4').addEventListener('click', function () {
  showDescribeOnMobile('e4')
});


document.getElementById('e5').addEventListener("mouseenter", function () {
  showDescription('e5');
});

document.getElementById('e5').addEventListener("mouseleave", function () {
  hideDescription('e5');
});

document.getElementById('e5').addEventListener('click', function () {
  showDescribeOnMobile('e5')
});


document.getElementById('e6').addEventListener("mouseenter", function () {
  showDescription('e6');
});

document.getElementById('e6').addEventListener("mouseleave", function () {
  hideDescription('e6');
});

document.getElementById('e6').addEventListener('click', function () {
  showDescribeOnMobile('e6')
});


function showDescription(divName) {
  var container = document.getElementById(divName);
  var icon = container.getElementsByClassName('icon');
  var title = container.getElementsByTagName('h4');
  var description = container.getElementsByClassName('description');
  var i = 0;  

  var interval = setInterval(frame, 5);
  function frame() {
    if(i >= 1) {
      clearInterval(interval);
    } else if(i < 0.5) {
      icon[0].style.opacity = 1-(2*i);
      title[0].style.opacity = 1-(2*i);
    } else if(i > 0.5 && i <= 1) {
      description[0].style.visibility = "visible";
      description[0].style.height = "90%";
      icon[0].style.visibility = "hidden";
      icon[0].style.height = "0%";
      title[0].style.visibility = "hidden";
      title[0].style.height = "0%";
      description[0].style.opacity = (2*i)-1;
    }    
    i+=0.02;
  }
}

function hideDescription(divName) {
  var container = document.getElementById(divName);
  var icon = container.getElementsByClassName('icon');
  var title = container.getElementsByTagName('h4');
  var description = container.getElementsByClassName('description');
  var i = 0;  

  var interval = setInterval(frame, 5);
  function frame() {
    if(i >= 1) {
      clearInterval(interval);
    } else if(i < 0.5) {
      description[0].style.opacity = 1-(2*i);
    } else if(i > 0.5 && i < 1) {
      description[0].style.visibility = "hidden";
      description[0].style.height = "0%";
      icon[0].style.visibility = "visible";
      icon[0].style.height = "60%";
      title[0].style.visibility = "visible";
      title[0].style.height = "40%";
      icon[0].style.opacity = (2*i)-1;
      title[0].style.opacity = (2*i)-1;
    }    
    i+=0.02;
  }
}

function showDescribeOnMobile(divName) {
  if(screen.width < 768) {
    showDescription(divName);
  }
}