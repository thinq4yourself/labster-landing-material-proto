<?php
// Check for empty fields
if(empty($_POST['FNAME'])  		||
   empty($_POST['LNAME']) 		||
   empty($_POST['EMAIL']) 		||
   empty($_POST['MESSAGE'])	||
   !filter_var($_POST['EMAIL'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$fname = $_POST['FNAME'];
$lname = $_POST['LNAME'];
$email_address = $_POST['EMAIL'];
$message = $_POST['MESSAGE'];

// Create the email and send the message
$to = 'thewebsite@beardandfedora.com'; // This is where the form will send a message to.
$email_subject = "BaF Website Contact Form:  $name";
$email_body = "We have received a new message from our website contact form.\n\n"."Here are the deets:\n\nFirst Name: $fname\n\nLast Name $lname\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: rsvp@beardandfedora.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>