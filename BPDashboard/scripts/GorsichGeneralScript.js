$(document).ready(function(){

    makeMonthlyReadings();
    makeWhoLevel();
    makeUniqueUser();

    $("#totals").click(function(){
        //clear all existing graphs, add required ones
        Plotly.purge('GraphTL');
        Plotly.purge('GraphTR');
        Plotly.purge('GraphBL');
        Plotly.purge('GraphBR');
        
        makeMonthlyReadings();
        makeWhoLevel();
        makeUniqueUser();


    }); //end of click on main


    $("#averages").click(function(){
        //clear all existing graphs, add required ones
        Plotly.purge('GraphTL');
        Plotly.purge('GraphTR');
        Plotly.purge('GraphBL');
        Plotly.purge('GraphBR');
        
        makeAveReadings();
        makeSysPercentByLevel();
        makePercentByLevel();
        makeDiaPercentByLevel();

    }); //end of click on secondary

    $("#demographics").click(function(){
        //clear all existing graphs, add required ones
        Plotly.purge('GraphTL');
        Plotly.purge('GraphTR');
        Plotly.purge('GraphBL');
        Plotly.purge('GraphBR');
        
        makePhoneVersion();
        makeFirmwareVersion();
        makeOSVersion();


    }); //end of click on tertiary
}); //end of ready