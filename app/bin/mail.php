<?php

  if (isset($_POST['name'])) {
    echo 'Your name is' . $_POST['name'];
    $to = 'dani@andalsoagency.com';
    $subject = 'And Also Agency Form Submission';
    $from_name = $_POST['name'];
    $from_email = $_POST['email'];
    $message = $_POST['message'];
    $services = $_POST['services'];

    $email_message = "Form details below.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "First Name: ".clean_string($from_name)."\n";
    $email_message .= "Email: ".clean_string($from_email)."\n";
    $email_message .= "Services: ".clean_string($services)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";    

    // create email headers
    $headers = 'From: '.$from_email."\r\n".
    'Reply-To: '.$from_email."\r\n" .
    mail($to, $subject, $email_message, $headers);

  }

?>