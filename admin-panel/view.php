

 <?php 
    $con = mysqli_connect('localhost' , 'root' , '' , 'admin-panel');
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$data = json_decode(file_get_contents('php://input'), true);

$sql = "select * from blog";
$query = mysqli_query($con , $sql);
$json = array();
while ($row = mysqli_fetch_assoc($query))
{
    $json[] = $row;
}
echo json_encode(['phpresult'=>$json]);
 ?>
