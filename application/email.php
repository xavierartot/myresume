<?php
//echo var_dump($_POST);
 $to = "xavierartot@gmail.com";
 $subject = "Hi!";
 $body = "Hi,\n\nHow are you?";
 if (mail($to, $subject, $body)) {
   echo("<p>Email successfully sent!</p>".
      'name: '.$_POST['name'].'.
      'email: '.$_POST['email'].'.
      'message: '.$_POST['message'].'.

");

  } else {
   echo("<p>Email delivery failed…</p>");
  }
 ?>
