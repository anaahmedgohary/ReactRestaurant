<?php
include "./conntodb.php";

$email = $_POST['email'];
$password = $_POST['password'];

// $conn = new mysqli('localhost', '3306', 'pma', '', 'tesnotable');
// if($conn->connect_error){
//     die('Sorry, please try again : '.$conn->connect_error);
// }else{
    $stmt = $conn->prepare("INSERT INTO tesnotable(email, password) 
    values(?, ?)");
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    echo "Thank you. Now choose payment method";
    $stmt->close();
    $conn->close();

// };
?>