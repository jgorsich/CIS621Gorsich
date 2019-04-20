

 <?php
 //this is the page for inclusion on the other customer facing pages.  It loads up the catalog into two different arrays (for two different types of searching) and sets up the navigation menu and site header.


    require('../functions/GorsichFunctions.php');

    //add in the requried libraries
    echo '<script src="../scripts/jquery-3.2.1.js"></script>'."\n";


    //include a header section for the site header
    echo "<header> \n";
    //a banner image is used instead of building the header each time, this allows easier resizing of the wording and two images.
    echo '<img src="../images/Banner.jpg" alt="Blood Pressure Dashboard" width=100% style="float: left; ">';


    echo "</header> \n";

        //include the nav section for the menu down the side.  This includes a link to the search page and shortcuts to searches completed on the various Subjects

    echo "<nav> \n";
    echo "<ul> \n";
    //if a valid user is logged in, greet them by name

    //the following are various navigation links with searches embedded in GET variables.
    echo '<li><a href="MainLanding.php">Home Page</a></li>'."\n";
    echo '<li><a href="DataDownload.php">Data Download</a></li>'."\n";
    echo '<li>Graphs by Level</li>'."\n";
    echo '<li><a href="LevelGraphs.php?Level=Green">Green: Less than 135/85</a></li>'."\n";
    echo '<li><a href="LevelGraphs.php?Level=Yellow">Yellow: 135/85 to 159/99</a></li>'."\n";
    echo '<li><a href="LevelGraphs.php?Level=Orange">Orange: 160/100 to 179/109</a></li>'."\n";
    echo '<li><a href="LevelGraphs.php?Level=Red">Red: over 180/100</a></li>'."\n";
    echo '<li>Result types</li>'."\n";
    echo '<li><a href="AtypicalResults.php">Atypical or Outlier</a></li>'."\n";
    echo '<li><a href="Errors.php">Errors</a></li>'."\n";

    echo "</ul> \n";
    echo "</nav> \n";


?>