<?php
$name = $_POST["name"];
$number = $_POST["number"];
$mail = $_POST["mail"];
$topic = $_POST["topic"];
$msg = $_POST["message"];

$to = "pawelciupka@gmail.com";
$them = "Czyżby zlecenie?";

$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: '.$name.' <'.$mail.'>' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

$message = '
<html>
<head lang="pl">
    <meta charset="utf-8">
    <style>
        span {
            color: #000;
        }
        .info {
            color: #3180fd;
            font-weight: bold;
            margin: 0 10px 0 0;
        }
        p {
            margin: 0;
            text-align: justify;
        }
    </style>
</head>
<body>
    <span class="info">Imię i nazwisko: </span>
    <span>'.$name.'</span>
    <br>
    <span class="info">Numer telefonu </span>
    <span>'.$number.'</span>
    <br>
    <span class="info">E-mail: </span>
    <span>'.$mail.'</span>
    <br>
    <span class="info">Temat: </span>
    <span>'.$topic.'</span>
    <br>
    <span class="info">Wiadomość: </span>
    <p>'.$msg.'</p>
</body>
</html>';

mail($to, $them, $message, $headers);
header('location: ../index.html');
?>