    <?php
    //echo var_dump($_POST);
    $tab = array();
    $tab[$_POST];
    $to = "artotal@gmail.com";
    $subject = "Hi!";
    $body = 'name: '.$_POST['name'];
    $body .= 'email: '.$_POST['email'];
    $body .= 'message: '.$_POST['message'].
    ' /// '. 
    $HTTP_RAW_POST_DATA
    ' /// '. 
    var_dump( json_decode($tab) ) . ' /// '. 
    ' /// '; 

    if (mail($to, $subject, $body)) {
     echo("<p>Email successfully sent!</p>");
    } else {
     echo("<p>Email delivery failed…</p>");
    }
    ?>
