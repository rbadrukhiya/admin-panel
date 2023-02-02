<?php 



   $conn = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$data = json_decode(file_get_contents('php://input'), true);

	if (isset($data))
	 {

	 	$u_id = $data['id'];

	// echo $u_id;

	$select = "select * from liked where u_id = '$u_id'";
	$a = mysqli_query($conn , $select);
	$num = mysqli_num_rows($a);

	if($num == 1)
	{	
			$fetch = mysqli_fetch_assoc($a);
			$like = ($fetch['likes']+1);
			$update = "update liked set likes='$like' where u_id = '$u_id'";
			$query = mysqli_query($conn , $update);
	}
	else
	{
		$insert = "insert into liked (u_id , likes) values ('$u_id' , 1)";
		$b = mysqli_query($conn , $insert);
	}

	}

	

 ?> 