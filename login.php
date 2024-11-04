<?php
require 'config.php';

if(isset($_POST["submit"])){
   $email = $_POST["email"];
   $password = $_POST["password"];
   $result = mysqli_query($conn,"SELECT * FROM users WHERE email = '$email'" );
   $row = mysqli_fetch_assoc($result);
   if(mysqli_num_rows($result)>0){
      if($password == $row["password"]){
         $_SESSION["login"] = true;
         $_SESSION["id"] = $row["id"];
         header("Location: home.html");
      }
      else{
         echo "<script>alert('Wrong Password');</script>";
      }
   }
   else{
      echo "<script>alert('User not registered');</script>";
   }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MindFlex - Sign Up</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

   <style>
       /* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

:root {
    --primary-color: #2E073F;
    --secondary-color: #EBD3F8;
    --text-color: #2E073;
    --button-color: #21005D;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: var(--primary-color);
    color: var(--text-color);
    height: 100%;
  }

  p {
    
    font-size: 20px;
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
}

a {
    color: white;
    text-decoration: underline;
}
  
  .container {
    display: flex;
    height: 100%;
    padding: 20px;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;

  }
  
  /* Left Column */
  .left-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 10px;
    padding: 2rem;
    border-radius: 10px;
    text-align: left;
  }
  
  .logo img{
    
    height: 175px;
    width: 185px;
    font-size: 24px;
    font-weight: bold;
    color: var(--secondary-color);
    
    
  }
  
  h1 {
    font-size: 60px;
    color: white;
      font-family: "Poppins", sans-serif;
      font-weight: 400px;
      font-style: normal;
    
  }

  h2 {
    font-size: 50px;
    align-self: center;
    padding-bottom: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 600px;
    font-style: normal;
  }
  
  .login-link {
    color: var(--secondary-color);
    text-decoration: none;
  }
  
  .welcome-text {
    color: var(--secondary-color);
    margin-top: 40px;
  }
  
  /* Right Column - Signup Form */
  .signup-form {
    flex: 1;
    background-color: var(--secondary-color);
    border-radius: 20px;
    padding: 40px;
    display: flex;
    height: 650px;
    width: 500px;
    flex-direction: column;
    justify-content: center;
  }

  .signin-form {
    flex: 1;
    background-color: var(--secondary-color);
    border-radius: 20px;
    padding: 40px;
    display: flex;
    height: 500px;
    width: 500px;
    flex-direction: column;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    color: #21005D;
}

label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #21005D;
}
  
  .form-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #21005D;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-style: normal;
      font-size: 20px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  
  .password-toggle {
    position: relative;
    top: -42%;
    right: -385px; 
    cursor: pointer;
}
  
  .signup-button {
    background-color: #21005D;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 100px;
    cursor: pointer;
    font-size: 22px;
    width: 200px;
    height: 50px;
    margin-top: -35px;
    margin-left: 99px;
    margin-bottom: 20px;
    font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-style: normal;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #12053d;
}

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #4c0066;
}
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    
    .left-column {
      padding-right: 0;
      padding-bottom: 40px;
    }
  }
   </style>
</head>
<body>
<div class="container">
        <div class="left-section">
            <div class="logo">
                <img src="pics\mff.png" alt="MindFlex Logo">
            </div>
            <h1>Login <br></h1>
            <p>Sign in to continue!</p><br><br>
            <hr><br>
            <div class="welcome-text">
                <p>Welcome to <strong>MindFlex</strong>, where</p>
                <p><strong>challenging quizzes</strong> await to unlock your</p>
                <p>true <strong>aptitude potential!</strong></p>
            </div>
        </div>
        <div class="right-section">
            <form class="signin-form" method="post" action="">
                <h2>Sign In</h2>
                <div class="form-group">
                    <label for="email">Email ID</label>
                    <input type="text" id="email" name="email" placeholder="ethanbelmont@gmail.com" required value="">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="**********" required value="">
                    <span class="password-toggle" onclick="togglePassword()">👁️</span>
                </div>
                <button type="submit" name="submit" class="signup-button">Login</button>
                <a   style="color: #2E073F;  display: block; text-align: center;" ; href="http://localhost/Ganesha/signup.php">Create an account</a>
            </form>
        </div>
    </div>
</body>
</html>








































