<?php 


$conn = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$data = json_decode(file_get_contents('php://input'), true);

$edit = $data['edit_id'];

$a = "select * from comment where id='$edit'";
$query = mysqli_query($conn , $a);
$row = mysqli_fetch_assoc($query);

echo json_encode($row);

 ?>