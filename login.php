<?php
	$username=$_POST['UserName']; 
	$password=$_POST['Password']; 
	if ($username=='lama' && $password = 123456){
		echo 1;
 } else{
 		echo 2;
 }
?>