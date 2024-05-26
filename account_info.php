<!DOCTYPE html>
<html>
<head>
  <title>Account Information</title>
  <link rel="stylesheet" type="text/css" href="main-design.css">
  <link rel="stylesheet" type="text/css" href="account_info.css">
    <script src="toggle.js"></script>
 
</head>
<body>
<div class="header">
        <h1 class="col-5 col-s-12"><a href="home.html">ARNIE'S</a></h1>
        <button class="toggle"><a class="mystyle" href="togglebtn.png"></a></button>
        <div class="col-5"></div>
        <ul id="myUl">
            <li class="col-1 col-s-4"><a href="memberships.html">MEMBERSHIPS</a></li>
            <li class="col-1 col-s-4"><a href="about-us.html">ABOUT US</a></li>
            <li class="col-1 col-s-4"><a href="account_info.php">PROFILE</a></li>
        </ul>
    </div>
  <h1>Account Information</h1>
  
  <div class="account-info">
    <?php
  
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "user";
    
  
    $conn = new mysqli($servername, $username, $password, $dbname);

  
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    session_start();
    if (!isset($_SESSION['email'])) {
      die("User not logged in.");
    }
    
    $email = $_SESSION['email'];
    
    $sql = "SELECT * FROM information WHERE email = '$email'";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
       
        $row = $result->fetch_assoc();
        $fname = $row["fname"];
        $lname = $row["lname"];
        $email = $row["email"];
        $password = $row["password"];
        $date = $row["birthdate"];
        $address = $row["address"];

   
        echo '<label for="fname">First Name:</label>';
        echo '<p>' . $fname . '</p>';
        
        echo '<label for="lname">Last Name:</label>';
        echo '<p>' . $lname . '</p>';
        
        echo '<label for="email">Email:</label>';
        echo '<p>' . $email . '</p>';
        
        echo '<label for="password">Password:</label>';
        echo '<p>' . $password . '</p>';
        
        echo '<label for="date">Date of Birth:</label>';
        echo '<p>' . $date . '</p>';
        
        echo '<label for="address">Address:</label>';
        echo '<p>' . $address . '</p>';
    } else {
        echo '<p>No information found.</p>';
    }

    $conn->close();
    ?>
    
    <a href="logout.php"><button>Logout</button></a>
  </div>
</body>
</html>
