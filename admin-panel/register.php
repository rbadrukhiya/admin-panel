<?php 
    $conn = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data)) {
    // code...
    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];
    echo $name;
    echo $email;
    echo $password;

    $insert = "insert into regester(name , email , password) values ('$name' , '$email' , '$password')";
  $a=  mysqli_query($conn , $insert);


}

    

 ?>