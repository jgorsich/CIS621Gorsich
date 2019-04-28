<?php

//this sql counts distinct users in the last 13 months and groups and identifies them by year-month 
$sql = "SELECT COUNT(DISTINCT app_user_id) as 'count', DATE_FORMAT(date, '%Y-%m') as 'month' FROM `blood_pressure_readings` WHERE `date` BETWEEN '{$oneYearAgo}' AND '{$today}' GROUP BY DATE_FORMAT(date, '%Y-%m')";


$result = mysqli_query($conn, $sql);
$i = 0;
if (mysqli_num_rows($result) >0){
    while($row = mysqli_fetch_assoc($result)) {
         $rows[$i]=$row;
         $i++;
    }
} 

//echo "<script>console.log(", json_encode($rows), ");</script>";
echo "<script>var monthlyUsers = (", json_encode($rows), ");</script>";
    
?>