<?php

//this sql pulls demographic information

//first - os and os version info - currenetly unused

/*$sql = "SELECT app_users.os_type as 'os', app_users.os_version as 'os_version', COUNT(*) as 'countReadings', COUNT(DISTINCT app_users.id) as 'countUser' FROM `app_users` INNER JOIN blood_pressure_readings ON app_users.id=blood_pressure_readings.app_user_id WHERE `date` BETWEEN '{$oneYearAgo}' AND '{$today}' GROUP BY app_users.os_version";


$result = mysqli_query($conn, $sql);
$i = 0;
if (mysqli_num_rows($result) >0){
    while($row = mysqli_fetch_assoc($result)) {
         $rows[$i]=$row;
         $i++;
    }
} 

//echo "<script>console.log(", json_encode($rows), ");</script>";
echo "<script>var  OSData = (", json_encode($rows), ");</script>";
unset($rows);*/

//now app version info
$sql = "SELECT app_users.os_type as 'os', app_users.bpm_app_version as 'version', COUNT(*) as 'countReadings', COUNT(DISTINCT app_users.id) as 'countUser' FROM `app_users` INNER JOIN blood_pressure_readings ON app_users.id=blood_pressure_readings.app_user_id WHERE `date` BETWEEN '{$oneYearAgo}' AND '{$today}' GROUP BY app_users.bpm_app_version";


$result = mysqli_query($conn, $sql);
$i = 0;
if (mysqli_num_rows($result) >0){
    while($row = mysqli_fetch_assoc($result)) {
         $rows[$i]=$row;
         $i++;
    }
} 

//echo "<script>console.log(", json_encode($rows), ");</script>";
echo "<script>var  appVersion = (", json_encode($rows), ");</script>";
unset($rows);

//now, firmware version info
$sql = "SELECT bpm_devices.firmware_version as 'version', COUNT(*) as 'countReadings', COUNT(DISTINCT bpm_devices.id) as 'countUser' FROM `bpm_devices` INNER JOIN app_users_bpm_devices ON bpm_devices.id=app_users_bpm_devices.bpm_device_id INNER JOIN blood_pressure_readings ON app_users_bpm_devices.app_user_id=blood_pressure_readings.app_user_id WHERE `date` BETWEEN '{$oneYearAgo}' AND '{$today}' GROUP BY bpm_devices.firmware_version";


$result = mysqli_query($conn, $sql);
$i = 0;
if (mysqli_num_rows($result) >0){
    while($row = mysqli_fetch_assoc($result)) {
         $rows[$i]=$row;
         $i++;
    }
} 

//echo "<script>console.log(", json_encode($rows), ");</script>";
echo "<script>var  firmVersion = (", json_encode($rows), ");</script>";

unset($rows);

?>