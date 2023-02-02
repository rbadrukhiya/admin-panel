<?php 

$con = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');




header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');



$data = json_decode(file_get_contents('php://input'), true);

$del_id = $data['del_id'];
print_r(json_encode($del_id));
$del = "delete from blog where id = '$del_id'";
	mysqli_query($con , $del);
 ?>