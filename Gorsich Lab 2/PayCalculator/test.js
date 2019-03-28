"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var taxPercent(income){
    //determine and return tax percent
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
var calcPay(){
    //activate upon button click
    //check for legit data and respond if bad
    //determine tax
    //display final data
    var error=false;
    var hours = $("hours");
    var rate=$("rate");

    if (isNaN(hours) || hours=0){
        error=true;
        $("hours_error").firstChild.nodeValue="Please enter your hours worked.";
    }

    if (isNaN(rate) || rate=0){
        error=true;
        $("rate_error").firstChild.nodeValue="Please enter your pay per hour.";
    }

    if (!error){
        var grossPay=hours*rate;
        var taxRate=taxPercent(grossPay*26);
        var netPay=grossPay*(1-taxRate);
        $("gross_pay").value=grossPay;
        $("net_pay").value=netPay;
    }

}

window.onload = function() {
    $("calc_pay").onclick = calcPay;
    $("hours").focus();
};