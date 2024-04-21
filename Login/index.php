<?php
session_start();

include("registration.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['psw'];

    if (!empty($email) && !empty($password) && !is_numeric($email)) {

        $query = "SELECT * FROM form WHERE email = '$email' LIMIT 1";
        $result = mysqli_query($con, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $user_data = mysqli_fetch_assoc($result);

            // Check if the entered password matches the stored password
            if ($user_data['password'] == $password) {
                // Passwords match, set session variables or perform other login actions
                $_SESSION['user_id'] = $user_data['id'];
                $_SESSION['user_email'] = $user_data['email'];

                echo "<script>alert('Login successful'); window.location.href='/Co-Follow/Co-Follow Homepage/index.php';</script>";
                exit();
            } else {
                echo "<script>alert('Incorrect password');</script>";
            }
        } else {
            echo "<script>alert('User not found');</script>";
        }
    } else {
        echo "<script>alert('Please enter valid information');</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="icon" type="image/png" href="/Images/Logo.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=League+Spartan:wght@600&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="stylesheet" href="animation.css">
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="mobile.css">
        <title>CoFollow</title>
    </head>
    
    <body>
        <header class="navbar">
                
            <div class="logo">
                <a><b>CoFollow | Log in   </b></a>
            </div>
            <div class="nav-links">
                <a class="log-in">
                    <a class="a1">New to CoFollow?</a> <a class="a2" href="https://cofollow-signup.netlify.app">Sign-up →</a>
                </a>
            </div>
        </header>
        <div id="loading-screen" class="loading-screen">
            <div class="loading-spinner"></div>
        </div>
        <div class="login">
            <div class="widget-container">
                <div> 
                    <h1 class="signuptitle">Welcome back!</h1>
                </div>
                <form onsubmit="return validateForm()" method="post" netlify novalidate>

                    <label for="email">Liceo Email</label><br>
                    <input type="email" id="email" name="email" placeholder="example@liceo.edu.ph"  required><br>
                    <span id="emailError" class="error"></span><br>
                    <label for="password">Enter Password</label><br>
                    <input type="password" id="password" name="password" placeholder="Password" required><br>
                    <span id="passwordError" class="error"></span><br>

                    <div class="submit-button"> 
                        <button type="submit" id="registerButton" value="submit" class="signupbtn">Log in</button>
                    </div>
                    <a class="terms" id="forgotpassword">Forgot password</a>
                </form>
                
            </div>
        </div>
        <form class="forgotpassword" id="forgotPasswordForm" action="reset_password.php" method="post" novalidate>
            <img class="exitbutton" id="exitbutton" src="/Authentication/Login/icon/no.png" alt="exit">
            <h1>Forgot Password</h1>
            <label for="email">Email:</label><br>
            <input type="email" id="emailinput" name="email" required><br>
            <span id="Error" class="error"></span><br>
            <input type="submit" value="Reset Password">
        </form>
        <script src="animation.js"></script>
        <script src="login.js"></script>
        <script src="forgotpassword.js"></script>
    </body>
</html>

