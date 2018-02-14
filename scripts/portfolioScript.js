iElem = 0;
zElem = 1;
function showNextElement(elementName, circleName, numberOfElements, diff, direction) {
  var element = document.getElementsByClassName(elementName);
  var circle = document.getElementsByClassName(circleName);

  var i1 = 0;

  circle[iElem].style.opacity = 0.5;
  element[iElem].style.opacity = 0;

  zElem += 1;
  iElem += (direction * 1);
  if (iElem < 0) {
    iElem = numberOfElements - 1;
  } else if (iElem > numberOfElements - 1) {
    iElem = 0;
  }

  var interval = setInterval(frame, 5);
  function frame() {
    if (i1 > 1) {
      clearInterval(interval);
    } else {
      element[iElem].style.opacity = i1;
      element[iElem].style.zIndex = zElem;

      circle[iElem].style.opacity = 0.5 + (i1 * 0.5);
      i1 += diff;
    }
  }
}