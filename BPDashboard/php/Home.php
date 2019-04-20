<?php
session_start();
?>

<!DOCTYPE html>

<!--
    Written by James Gorsich for CIS621 based on code previously written for CIS626

this is the home page for the dashboard, the index.html page auto passes the user here for easier styling

The user will be given access to different pages based upon their login credentials.

When login credentials are enabled, redirect index.html to this page instead of MainLanding

-->
<html>
<head>
    <!-- give a title and include the css page-->
    <title>BP Data Dashboard</title>
    <link rel="stylesheet" type"text/css" href="../css/GorsichStyle.css">

</head>
<body>
        <?php
        //do the standard inclusion
        require('GorsichInclusions.php');
        ?>
        <article>
<h1> Welcome to BPDashboard </h1>
<!-- make a bad joke -->


<p>Please log in - if you don't have an account, simply enter your email and a password and an account will automatically be created for you.</p>

<form action="PassEval.php" method="post">
    <!--note that the post method is used for increased security -->

<p><label for="email">Username:</label><input type="text" id="email" name="email" size="50" maxlength="100" placeholder="Username"/></p>
<p><label for="password">Password:</label><input type="Password" id="password" name="password" size="50" maxlength="100" placeholder="Password"/></p>
<input type="hidden" name="Login" value="yes">
<p><input type="submit" value="LogIn"/></p>
</form>
<!-- give a method to start browing without an account -->
<form action="MainLanding.php" method="post">
    <p><input type="submit" value="Browse Without an Account"/> </p>
</form>

<form action="PassEval.php" method="post">
    <input type="hidden" name="Logout" value="yes">
    <p><input type="submit" value="Log Out"/> </p>
</form>

<form action="PassEval.php" method="post">
    <input type="hidden" name="NewUser" value="yes">
    <p><input type="submit" value="Register New User"/> </p>
</form>
</article>
</body>
</html>