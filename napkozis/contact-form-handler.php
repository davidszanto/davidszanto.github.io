<?php
$errors = '';
$myemail = 'szavid0@gmail.com';//<-----Put Your email address here.

$name = $_POST['name'];

$to = $myemail;
$email_subject = "JELENTKEZŐ: $name";
$email_body = "Something";
mail($to,$email_subject,$email_body);
//redirect to the 'thank you' page
header('Location: http://davidszanto.github.io');
?>
