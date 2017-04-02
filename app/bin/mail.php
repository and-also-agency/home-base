<?php

// echo "Got your ", $_SERVER['REQUEST_METHOD'], " request";

 if ($_SERVER['REQUEST_METHOD'] == 'POST') {
 	$data = json_decode(stripslashes($_POST['arr']),true);
echo '<pre>';
print_r($data);
echo '</pre>';
}
  // if($_POST){
  //   // $data = json_decode(stripslashes($_POST['data']),true);
  //   // print_r($data);
  //   echo "Success";

  //   $to = 'dani@andalsoagency.com';
  //   $subject = 'And Also Agency Form Submission';
  //   $from_name = 'Sam';
  //   $from_email = 'sam@andalsoagency.com';
  //   // $from_company = $_POST['company'];
  //   // $from_email = $_POST['email'];

  //   // $message = $_POST['message'];
  //   // $robotest = $_POST['special-requests'];
  // //   if($robotest != '' || $from_email == '' || $from_name == '') {
		// // $error = "You are a gutless robot.";
  // //   }
  // //   else{
		// $headers = "From: $from_name <$from_email>";
		// mail($to, $subject, $headers);
		
	// }
  // }
?>