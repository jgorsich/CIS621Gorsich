<?php 

function db_connect() {
    //connect to the database, based on username and password
    //adapted from chapter 27 sample code
    //returns false if connection doesn't work, for error checking without use of exceptions

   $result = new mysqli('localhost', "jgorsich_Admin62", "CIS626", 'jgorsich_Test626');
   //$result = mysqli_connect('localhost', "jgorsich_Admin626", "CIS626", 'jgorsich_Test626');
   if (!$result) {
     return false;
   } else {
     return $result;
   }
}
?>
