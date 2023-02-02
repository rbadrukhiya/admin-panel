<?php 

$conn = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['edit_id'];
	// echo $id;


if (isset($data)) {
	
	$name = $data['name'];
	$comment = $data['comment'];
	$u_id = $data['u_id'];
	$status=$data['status'];

	if (isset($id)) {
		$update = "update comment set name='$name' , comment='$comment' , u_id ='$u_id' , status='$status' where id='$id' ";
		mysqli_query($conn , $update);
	}
	else
	{
		$insert = "insert into comment (u_id , status , name , comment) values('$u_id' , '$status' , '$name' , '$comment')";
	mysqli_query($conn , $insert);
	}

	

	
}

	echo json_encode($data);

 ?>