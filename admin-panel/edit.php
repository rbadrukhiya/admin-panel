<?php 
$con = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');



$data = json_decode(file_get_contents('php://input'), true);

// if (isset($data)) {
	// code...

	$edit = $data['edit_id'];

$a = "select * from blog where id = '$edit'";
$b = mysqli_query($con , $a);
$c = mysqli_fetch_assoc($b);
echo json_encode($c);
// }



 ?>