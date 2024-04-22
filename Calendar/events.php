<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "calendar";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $picture = $_POST['photoInput'];
    $event_date = $_POST['month'] . '-' . $_POST['day'] . '-' . $_POST['year'];
    $event_name = $_POST['set_title'];
    $event_description = $_POST['setdesc'];
    
    

    // Prepare SQL statement
    $sql = "INSERT INTO events (picture, event_date, event_name, event_description) VALUES ('$picture', '$event_date', '$event_name', '$event_description')";

    // Execute SQL statement
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert ('New record inserted succesfully.'); window.location.href=' /Co-Follow/Calendar/admincalendar.php'; </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
