"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var taxPercent = function(income){
    //determine and return tax percent based on annual pay
    var taxRate;

    if (income <8700){
        taxRate=0.1;
    }
    else if (income <=35350){
        taxRate=0.15;
    }
    else if (income <=85650){
        taxRate=0.25;
    }
    else if (income <=178650){
        taxRate=0.28;
    }
    else if (income<=388350){
        taxRate=0.33;
    }
    else {
        taxRate=0.35;
    }

    return taxRate;
}
var calcPay=function(){
    //activate upon button click
    //check for legit data and respond if bad
    //determine tax
    //display final data
    var error=false;  //error flag for later
    var hours = $("hours").value;  //user supplied hours
    var rate=$("rate").value;  //user supplied pay rate

    //validate hours - must be number >0
    if ((isNaN(hours))||(hours==0)){
        error=true;
        $("hours_error").firstChild.nodeValue="Please enter your hours worked as a number.";
        console.log("hours error: "+hours);  //for testing purposes
    } else {
        $("hours_error").firstChild.nodeValue="";
    }

    //validate rate - must be number >0
    if ((isNaN(rate)) || (rate==0)){
        error=true;
        $("rate_error").firstChild.nodeValue="Please enter your pay per hour as a number.";
        console.log("rate error: " + rate);  //for testing purposes
    } else {
        $("rate_error").firstChild.nodeValue="";
    }

    //if no error present, proceed
    if (!error){
        var grossPay=hours*rate;
        var taxRate=taxPercent(grossPay*26);
        console.log("annuel pay: " + grossPay*26);  //for testing purposes
        console.log("tax rate: " + taxRate); //for testing purposes
        var netPay=grossPay*(1-taxRate);
        $("gross_pay").value=grossPay.toFixed(2);
        $("net_pay").value=netPay.toFixed(2);
    }

}

window.onload = function() {
    $("calc_pay").onclick = calcPay;
    $("hours").focus();
};