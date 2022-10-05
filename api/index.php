<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include "./connection.php";
$objDB = new DbConnect;
$conn = $objDB->connect();

//$conn = $pdo->connect();
// $pdo

//var_dump($conn);
//print_r($_POST);
//print_r(file_get_contents('php://input'));

echo "wow test";

$method = $_SERVER['REQUEST_METHOD'];
    switch ($method) {
        case 'POST':
            # code...
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO tesnotable(email, password) VALUES(:email, :password)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', $user->password);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'goood yob'];
            } else {
                $response = ['status' => 0, 'message' => 'fail absolute'];
            }
            echo json_encode($response);
            break;
    }

?>