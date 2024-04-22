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
    $todo_date = $_POST['month'] . '-' . $_POST['day'] . '-' . $_POST['year'];
    $todo_title = $_POST['set_title'];
    $todo_description = $_POST['setdesc'];
    

    // Prepare SQL statement
    $sql = "INSERT INTO todolists (todo_date, todo_title, todo_description) VALUES ('$todo_date', '$todo_title', '$todo_description')";

    // Execute SQL statement
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert ('New record inserted succesfully.'); window.location.href=' /Co-Follow/Calendar/index.php'; </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
