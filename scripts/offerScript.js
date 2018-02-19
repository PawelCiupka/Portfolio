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