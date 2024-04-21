
<?php 

   
    $Dbhost = "localhost";
    $Dbusername = "root";
    $Dbpassword = "";
    $Dbname = "website";

    $conn = new mysqli($DBhost, $DBusername, $DBpassword, $DBname);

    if (!$fileDb) {
        die("Connection failed: " . mysqli_connect_error());
    }   

?>