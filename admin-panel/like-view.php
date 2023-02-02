<?php 


   $conn = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$data = json_decode(file_get_contents('php://input'), true);

	
	$select = "select * from liked";
	$query = mysqli_query($conn , $select);


$json = array();


	while ($row = mysqli_fetch_assoc($query)) 
	{
	
	$num = mysqli_num_rows($query);

    $json[] = $row;

	}
echo json_encode(['phpresult'=>$json]);


 ?>