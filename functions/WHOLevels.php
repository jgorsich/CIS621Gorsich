<?php
//this sql counts the number of readings per blood pressure category over the last year 

//just systolic

$sql = "SELECT COUNT(IF(systolic<135, 1, NULL)) 'Green', COUNT(IF(systolic BETWEEN 135 AND 159, 1, NULL)) 'Yellow', COUNT(IF(systolic BETWEEN 160 AND 179, 1, NULL)) 'Orange', COUNT(IF(systolic > 179, 1, NULL)) 'Red' FROM `blood_pressure_readings` WHERE `date` BETWEEN '{$oneYearAgo}' AND '{$today}' GROUP BY DATE_FORMAT(date, '%Y-%m')";


$result = mysqli_query($conn, $sql);
$i = 0;
if (mysqli_num_rows($result) >0){
    while($row = mysqli_fetch_assoc($result)) {
         $rows[$i]=$row;
         $i++;
    }
} 

echo "<script>var WHOSystolic = (", json_encode($rows), ");</script>";
unset($rows);

//just diastolic
$sql = "SELECT COUNT(IF(diastolic<85, 1, NULL)) 'Green', COUNT(IF(diastolic BETWEEN 85 AND 99, 1, NULL)) 'Yellow', COUNT(IF(diastolic BETWEEN 100 AND 109, 1, NULL)) 'Orange', COUNT(IF(diastolic > 109, 1, NULL)) 'Red' FROM `blood_pressure_readings` WHERE `date` BETWEEN '{$oneYearAgo}' AND '{$today}' GROUP BY DATE_FORMAT(date, '%Y-%m')";


$result = mysqli_query($conn, $sql);
$i = 0;
if (mysqli_num_rows($result) >0){
    while($row = mysqli_fetch_assoc($result)) {
         $rows[$i]=$row;
         $i++;
    }
} 

echo "<script>var WHODiastolic = (", json_encode($rows), ");</script>";
unset($rows);

//both
$sql = "SELECT COUNT(IF((systolic<135) AND (diastolic<85), 1, NULL)) 'Green', COUNT(IF(((systolic BETWEEN 135 AND 159) AND (diastolic <=99)) OR ((diastolic BETWEEN 85 AND 99) AND (systolic <=159)), 1, NULL)) 'Yellow', COUNT(IF(((systolic BETWEEN 160 AND 179) AND (diastolic <=109)) OR ((diastolic BETWEEN 100 AND 109) AND (systolic <=179)), 1, NULL)) 'Orange', COUNT(IF((systolic > 179) OR (diastolic>109), 1, NULL)) 'Red' FROM `blood_pressure_readings` WHERE `date` BETWEEN '{$oneYearAgo}' AND '{$today}' GROUP BY DATE_FORMAT(date, '%Y-%m')";


$result = mysqli_query($conn, $sql);
$i = 0;
if (mysqli_num_rows($result) >0){
    while($row = mysqli_fetch_assoc($result)) {
         $rows[$i]=$row;
         $i++;
    }
} 

echo "<script>var WHOBoth = (", json_encode($rows), ");</script>";
unset($rows);

?>