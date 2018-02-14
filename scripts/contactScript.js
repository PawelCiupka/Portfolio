function validateForm() {
  var f = document.forms["send_mail"];
  var nameF = f.elements["name"].value;
  var numberF = f.elements["number"].value;
  var emailF = f.elements["mail"].value;
  var topicF = f.elements["topic"].value;
  var messageF = f.elements["message"].value;

  var ok = true;
  var errorMessage = "";

  if (nameF == null || nameF == "" || nameF.length < 6) {
    errorMessage += "Nieprawidłowe imię i nazwisko. \n"
    ok = false;
  }

  if (numberF == null || numberF == "" || numberF.length != 9) {
    errorMessage += "Nieprawidłowy numer. \n"
    ok = false;
  }

  if (emailF == null || emailF == "") {
    errorMessage += "Nieprawidłowy e-mail. \n"
    ok = false;
  }

  if (topicF == null || topicF == "" || topicF.length < 3) {
    errorMessage += "Nieprawidłowy temat. \n"
    ok = false;
  }

  if (messageF == null || messageF == "" || messageF.length < 10) {
    errorMessage += "Nieprawidłowa wiadomość. \n"
    ok = false;
  }

  if (ok) {
    alert("Wysłałeś wiadomość! \nPozwól, że przeniosę cię na stronę główną.");
    return true;
  } else {
    alert(errorMessage);
    return false;
  }
}