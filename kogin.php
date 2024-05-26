<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM information WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $_SESSION["email"] = $email;
    header("Location: account_info.php");
    exit();
} else {
    $_SESSION["error_message"] = "Invalid email or password.";
    header("Location: login.html");
    exit();
}

$conn->close();
?>
