document.getElementById('no').addEventListener('click', function () {
  changeText('Nie to nie! :(')
});

function changeText(text) {
  var button1 = document.getElementById('yes');
  var button2 = document.getElementById('no');
  var answer = document.getElementById('answer');
  button1.style.opacity = 0;
  button2.style.opacity = 0;
  answer.style.opacity = 1;
  answer.innerHTML = text;
}