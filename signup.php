<?php
session_start();




    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
    $gender = $_POST["gender"];
    $birthdate = $_POST["birthdate"];
    $address = $_POST["address"];
    $password = $_POST["password"];


    


  
    $conn = new mysqli("localhost", "root", "", "user");

   
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM information WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $_SESSION["error_message"] = "Email already exists.";
        header("Location: signup.html");
        exit();
    }

    $sql = "INSERT INTO information (fname, lname, email, gender, birthdate, address, password) VALUES ('$fname', '$lname', '$email', '$gender', '$birthdate', '$address', '$password')";
    if ($conn->query($sql) === TRUE) {
        $_SESSION["success_message"] = "Registration successful. You can now login.";
        header("Location: login.html");
        exit();
    } else {
        $_SESSION["error_message"] = "Error: " . $sql . "<br>" . $conn->error;
        header("Location: signup.html");
        exit();
    }

?>