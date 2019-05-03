

 <?php
 //this is the page for inclusion on the other customer facing pages. 
    require('../functions/GorsichFunctions.php');
    require('../functions/MonthlyReadings.php');
    require('../functions/UniqueUsers.php');
    require('../functions/WHOLevels.php');
    require('../functions/Demographics.php');
    mysqli_close($conn);


    //add in the requried libraries
    echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'."\n";
    echo '<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>'."\n";
    echo '<script src="../scripts/UniqueUsers.js"></script>'."\n";
    echo '<script src="../scripts/MonthlyReadings.js"></script>'."\n";
    echo '<script src="../scripts/WHOLevels.js"></script>'."\n";
    echo '<script src="../scripts/AveReadings.js"></script>'."\n";
    echo '<script src="../scripts/ReadingsByLevel.js"></script>'."\n";
    echo '<script src="../scripts/SeperatePercentByLevel.js"></script>'."\n";
    echo '<script src="../scripts/PercentByLevel.js"></script>'."\n";
    echo '<script src="../scripts/GorsichGeneralScript.js"></script>'."\n";

    //include a header section for the site header
    echo "<header> \n";
    //a banner image is used instead of building the header each time, this allows easier resizing of the wording and images.
    echo '<img src="../images/Banner.jpg" alt="Blood Pressure Dashboard" >';


    echo "</header> \n";

   
    echo "<nav> \n";
    echo "<ul> \n";

    //the following are various navigation links 
    //fix this per https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_navbar
    echo '<li><a href="#" id="totals">Totals</a></li>'."\n";
    echo '<li><a href="#" id="averages">Averages & %</a></li>'."\n";
    echo '<li><a href="#" id="demographics">Demographics</a></li>'."\n";
    echo '<li class="dropdown">'."\n";
    echo '<a href="bullshit" class="dropbtn">Graphs by Level</a>'."\n";
    echo '<div class="dropdown-content">'."\n";
    echo '<a href="LevelGraphs.php?Level=Green">Green: Less than 135/85</a>'."\n";
    echo '<a href="LevelGraphs.php?Level=Yellow">Yellow: 135/85 to 159/99</a>'."\n";
    echo '<a href="LevelGraphs.php?Level=Orange">Orange: 160/100 to 179/109</a>'."\n";
    echo '<a href="LevelGraphs.php?Level=Red">Red: over 180/110</a>'."\n";
    echo '</div></li>'."\n";
    echo '<li class="dropdown">'."\n";
    echo '<a href="bullshit" class="dropbtn">Result types</a>'."\n";
    echo '<div class="dropdown-content">'."\n";
    echo '<a href="AtypicalResults.php">Atypical or Outlier</a>'."\n";
    echo '<a href="Errors.php">Errors</a>'."\n";
    echo '</div></li>'."\n";

    echo "</ul> \n";
    echo "</nav> \n";




?>