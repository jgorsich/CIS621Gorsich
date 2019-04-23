<?php
//this is for the main page query only


function dbSearchMainPage(){
    //this will pull the blood pressure readings for the current year from the database and return it as an array 
    //JavaScript will be used to parse the readings and present the results on the main page.

     //connect to the database
    @$db=db_connect();
    $today = date("Y-m-d", strtotime("+1 day"));
    $oneYearAgo = date("Y-m-d", strtotime("-1 year"));
        
    $query="SELECT * FROM blood_pressure_readings WHERE (date BETWEEN $oneYearAgo AND $today)";
    $result = $db->query($query);
    while ($row = $result->fetch_array()){
        $rows[]=$row;
    }
    mysqli_free_result($result);
    mysqli_close($db);
    echo json_encode($rows); // echo everything into the body
}
?>