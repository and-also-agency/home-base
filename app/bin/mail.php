<?php

  if (isset($_POST['name'])) {
    echo 'Your name is' . $_POST['name'];
    $to = 'dani@andalsoagency.com';
    $subject = 'And Also Agency Form Submission';
    $from_name = $_POST['name'];
    $from_email = $_POST['email'];
    $headers = "From: $from_name <$from_email>";

    mail($to, $subject, $headers);

  }

?>