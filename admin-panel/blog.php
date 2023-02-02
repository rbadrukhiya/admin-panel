<?php 


    $conn = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
// $data = json_decode(file_get_contents('php://input'), true);
    
// $data = json_decode(file_get_contents('php://input'), true);


if(isset($_POST['title']))
{
     // $image = $_FILES['image']['name'];
    $title = $_POST['title'];
    $desc = $_POST['desc'];
    $status = $_POST['status'];
    $path = "image/" . $image;
    $id = $_POST['edit_id'];
    if ($_FILES['image']!='')
     {
        $image = $_FILES['image']['name'];
    }
    else
    {
        $image = $_POST['image'];
    }

        move_uploaded_file($_FILES['image']['tmp_name'],$path);


    echo $image;
    echo $title;
    echo $desc;
    echo $status;

    if (isset($id)) {
        $update = "update blog set title='$title' , description='$desc' , image='$image' , status='$status' where id='$id' ";
        $up_data = mysqli_query($conn , $update);
    }
    else
    {
         $insert = "insert into blog (title,description,image,status) values ('$title' , '$desc' , '$image' , '$status')";
        $query = mysqli_query($conn , $insert);

        // $arr = array('title'=>$title,'desc' => $desc ,'image' => $image , 'status' => $status);
        // print_r(json_encode($arr));
    }

   
}

   

 ?>