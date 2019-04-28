<?php 
//this code is written by James Gorsich

//Make the connection and set key variables - this part always occurs
$today = date("Y-m-d");
$oneYearAgo = date("Y-m-01", strtotime("-1 year"));
$conn = mysqli_connect('localhost', "jgorsich_Admin", "mila8625", 'jgorsich_localBPData');
if(! $conn){
    die('Could not connect: ' . mysqli_error());
}


?>
