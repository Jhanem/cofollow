<?php
    session_start();

    include("registration.php");

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $email = $_POST['email'];
        $password = $_POST['psw'];
        $number = $_POST['phone'];

        if (!empty($email) && !empty($password) && !is_numeric($email)) {

            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            $query = "INSERT INTO form (email, password, number) VALUES (?, ?, ?)";
            $stmt = mysqli_prepare($con, $query);
            mysqli_stmt_bind_param($stmt, 'sss', $email, $hashedPassword, $number);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);

            header("Location: /Co-Follow/Authentication/Login/Login.php");
            exit();
        } else {
            echo "<script type='text/javascript'> alert('Please enter valid information')</script>";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="icon" type="image/png" href="/Images/Logo.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=League+Spartan:wght@600&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css"> 
        <link rel="stylesheet" href="mobile.css"> 
        <title>CoFollow</title>
    </head>
    
    <body>
        <Nav class="navbar">

            <div class="logo">
                <a><b>CoFollow | Register   </b></a>
            </div>
            <div class="nav-links">
                <a class="sign-up">
                    <a class"a1">Already Registered?</a> <a class="a2" href=https://cofollow-login.netlify.app>Log in →</a>
                </a>
            </div>
        </Nav>
        <div class="sign-upfunc">
            <div class="widget-container">
                <div> 
                    <h1 class="signuptitle">Register Your Account </h1> 
                    
                </div>
                
                <form onsubmit="return validateForm()"  method="post" id="registrationForm" novalidate>
                    <div class="group"> 
                        <input type="text"  name="email" id="email" onchange="validateEmail()" required >
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label for="email"><b>Liceo Email</b></label>
                        <div id="emailError" class="emailError"></div>
                    </div>
                    
                    <div class="group">      
                        <input type="password" autocomplete="off" id="password"  name="psw" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>   
                        <label for="psw"><b>Password</b></label>
                        <div id="passwordError" class="passwordError"></div>
                    </div>
                    
                    <div class="group">      
                        <input type="password" autocomplete="off" id="confirmPassword"  name="confirmPassword" required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label for="confirmPassword"><b>Confirm Password</b></label>
                        <div id="confirmPasswordError" class="confirmPasswordError"></div>
                    </div>
                    
                    <div class="group">      
                        <input type="tel" autocomplete="off" id="phone" name="phone" maxlength="11"  required>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label for="phone"><b>Phone Number</b></label>
                        <div id="phoneError" class="phoneError"></div>
                    </div>
                    
                    <p class="terms">By creating an account, you agree to our <a href="#" style= "text-align: center; color: #0099ff;" >Terms</a> & <a href="#" style= "text-align: center; color: #0099ff;" >Privacy</a>.</p>
                    <div class="submit-button">
                        <button type="submit" id="registerButton" value="submit" class="signupbtn">Register</button>
                    </div>
                </form>
                
                
            </div>
        </div>

        <section class="footer">
            <p class="copyright">CoFollow © 2024</p>
        </section>
   
        <script defer src="script.js"></script>
    </body>
    
</html>
