<?php 
//this code is written by James Gorsich

//Make the connection and set key variables - this part always occurs

$today = date("Y-m-d");
$oneYearAgo = date("Y-m-01", strtotime("-1 year"));
$config = parse_ini_file('../../../php/DashBoardConfig.ini');
$conn = mysqli_connect($config['host'], $config['username'], $config['password'], $config['db']);
if(! $conn){
    die('Could not connect: ' . mysqli_error());
}


?>
