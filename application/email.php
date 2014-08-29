<?php
//echo var_dump($_POST);
 $to = "xavierartot@gmail.com";
 $subject = "Hi!";
 $body = 
      'name: '.$_POST['name'].'.
      'email: '.$_POST['email'].'.
      'message: '.$_POST['message'];

 if (mail($to, $subject, $body)) {
   echo("<p>Email successfully sent!</p>");
  } else {
   echo("<p>Email delivery failed…</p>");
  }
 ?>
