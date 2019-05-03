<?php
//this sql counts the number of blood pressure readings over the last year by month. 

$sql = "SELECT COUNT(*) as 'count', DATE_FORMAT(date, '%Y-%m') as 'month' FROM `blood_pressure_readings` WHERE `date` BETWEEN '{$oneYearAgo}' AND '{$today}' GROUP BY DATE_FORMAT(date, '%Y-%m')";


$result = mysqli_query($conn, $sql);
$i = 0;
if (mysqli_num_rows($result) >0){
    while($row = mysqli_fetch_assoc($result)) {
         $rows[$i]=$row;
         $i++;
    }
} 

//echo "<script>console.log(", json_encode($rows), ");</script>";
echo "<script>var monthlyReadings = (", json_encode($rows), ");</script>";

unset($rows);
?>