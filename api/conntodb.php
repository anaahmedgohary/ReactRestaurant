<?php
$servername = "localhost";
$username = "pma";
$password = "";
$dbname = "test";
$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("Sorry, please try again: " . $conn->connect_error);
}
?>