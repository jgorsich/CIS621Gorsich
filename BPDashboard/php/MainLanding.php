<?php
session_start();
?>

<!DOCTYPE html>
<html>
<!--
    Written by James Gorsich

-->

    <head>
    <title>Dashboard</title>
    <!-- add the css sheet for styling -->
    <link rel="stylesheet" type"text/css" href="../css/GorsichStyle.css">
    </head>
<body>
    <?php
    require('GorsichInclusions.php');

    require('../functions/MonthlyReadings.php');
    require('../functions/UniqueUsers.php');
    require('../functions/WHOLevels.php');
    ?>

    <div id="UniqueUsers"></div>
    <div id="BPLevels"></div>
    <div id="Readings"></div>
    <div id="BPSubLevels"></div>
    
    <script src="../scripts/UniqueUsers.js"></script>
    <script src="../scripts/MonthlyReadings.js"></script>
    <script src="../scripts/WHOLevels.js"></script>

    


 </body>

</html>