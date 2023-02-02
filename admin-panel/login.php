<?php 

    $conn = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data)){
	
 $email = $data['email'];
 $password = $data['password'];

$select_data = "select * from regester where   email='$email' and password='$password'";
$sel = mysqli_query($conn , $select_data);
$run = mysqli_fetch_assoc($sel);
$count = mysqli_num_rows($sel);

if ($count == 1)
 {
	echo json_encode($run);	
}
else
{
	echo "check your email or password";
}
}
 ?>