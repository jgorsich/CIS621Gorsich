<?php 
//this code is written by James Gorsich

function db_connect() {
    //connect to the database, based on username and password
    //returns false if connection doesn't work, for error checking without use of exceptions

   $result = new mysqli('localhost', "jgorsich_Admin", "mila8625", 'jgorsich_api');

   if (!$result) {
     return false;
   } else {
     return $result;
   }
}

function dbSearch($SearchTerms){
    //this function searches the database and returns an array for use on the other sheets

        //make sure a useful entry is in every relevant field of $SearchTerms

    $QuerySet="";
    // QuerySet builds what columns I'm searching
    $FormatSet="";
    //format set is ultimately used in the prepared statement
    $ParameterSet=array();
    //parameter set is used in the prepared statement
        //$i is used to move through ParameterSet
    $i=0;
    /*  the below code is preserved as an example.  todo: complete this with your search terms to build the query

    //check to see if you are searching for a title
    if (array_key_exists('1', $SearchTerms) && $SearchTerms[1]!="") {
        if ($QuerySet!=""){
            //if this isn't your first search term, add an 'OR' after the last
            $QuerySet=$QuerySet." OR ";
        }
        //add the query search for title
        $QuerySet=$QuerySet."books.Title like ?";
        //build the value to submit to the prepared statement, include wildcards before and after
        $Title = "%".$SearchTerms[1]."%";
        //build the FormatSet
        $FormatSet.="s";
        //Build the Parameter Set
        while($i<strlen($FormatSet)){
            $ParameterSet[$i]="$Title";
            $i++;
        }
        }

     */

    //prepend QuerySet with "Where"
    if ($QuerySet!=""){$QuerySet="WHERE ".$QuerySet;}


    //connect to the database
    @$db=db_connect();
    //build the return set for the information

    /*  these two lines kept as an example  todo: complete the return set

    $ReturnSet="books.ISBN, books.Title, books.Authors, books.Publisher, books.PublishYear, books.ForNF, ";
    $ReturnSet=$ReturnSet."books.Subject, books.Universe, books.NumberInUniverse, books.Series, books.NumberInSeries, books.Description, books.ISBNClean";
    */

    //build the query
    //following line kept as an example  todo: complete the query
    //   $query = "SELECT $ReturnSet FROM books $QuerySet";


    //prepare the querry
    $stmt =$db->prepare($query);
    //if you are using prepared statements (I'm not expecting too)
    if ($FormatSet!=""){

    //from https://stackoverflow.com/questions/16120822/mysqli-bind-param-expected-to-be-a-reference-value-given

    $stmt->bind_param($FormatSet, ...$ParameterSet);
    }
    //bind results in the appropriate format
    //the following line is kept as an example todo: bind the results

    //    $stmt->bind_result($ISBN, $Title, $Authors, $Publisher, $PublishYear, $ForNF, $Subject, $Universe, $NumberInUniverse, $Series, $NumberInSeries, $Description, $ISBNClean);


    //execute the search
    $stmt->execute();
    $stmt->store_result();

    //store the data is the appropriate format; mysqli should make it possible to pass it straight to an array
    $i=0;
    while($stmt->fetch()){

    //load up $DataPull for use in the normal manner
    //todo: once the query is established, pass over all the results here.  Expand as necessary for additional terms
        $DataPull[$i]['firstResultTerm']=$firstResultTerm;
        $DataPull[$i]['secondResultTerm']=$secondResultTerm;


        $i++;
    }

    //close the database
    $stmt->free_result();


    //strip duplicates - may or may not be necessary.  should be no harm in doing it.

    if (isset($DataPull)){
    // todo: replace ISBNClean with whatever you are filtering by for duplicates

        //    $DataPull=super_unique($DataPull,'ISBNClean');
    }


    //close the database
    $db->close();
    $stmt->close();
    if (isset($DataPull)){
        //send back the results of the search, with the user specific information
        return $DataPull;
    }else{
        //enable graceful handling of no findings
        return "No results found";
    }
}

function super_unique($array,$key)
//this is for removing duplicate entries from 2 dimensional arrays.
//sourced from https://stackoverflow.com/questions/307674/how-to-remove-duplicate-values-from-a-multi-dimensional-array-in-php
{
   $temp_array = array();
   foreach ($array as &$v) {
       if (!isset($temp_array[$v[$key]]))
       $temp_array[$v[$key]] =& $v;
   }
   $array = array_values($temp_array);
   return $array;
}



?>
