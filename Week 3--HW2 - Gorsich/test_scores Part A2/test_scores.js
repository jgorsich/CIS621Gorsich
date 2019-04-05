"use strict";
var $ = function (id) { return document.getElementById(id); }

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var textDisplay;



var addElement = function () {
	// get user entries
	var name = $("name").value;
    var score  = parseInt( $("score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = $("name").value;
		scores[scores.length] = parseInt($("score").value);
	    $("name").value = "";
	    $("score").value = "";
		$("results").value="";
	}

    $("name").focus();
}

var showBest = function(){

	var bestScore=[];
	var bestName=[];
	bestScore[0]=0;
	for (var i=0; i<scores.length; i++){
		if (scores[i]==bestScore[0]){
			bestScore.unshift(scores[i]);
			bestName.unshift(names[i]);
		}

		if (scores[i]>bestScore[0]) {
			bestScore.length=0;
			bestName.length=0;
			bestScore[0]=scores[i];
			bestName[0]=names[i];
		}


	}

	if (bestScore.length>1){
		textDisplay="Highest Scoring Students = \n";
		for (var i=0; i<bestScore.length; i++){
			textDisplay=textDisplay+bestName[i]+", "+bestScore[i]+"\n";
		}
	}else {
		textDisplay = "High Score Student = " + bestName[0] + "\nHigh Score = " + bestScore[0];
	}
	$("results").value=textDisplay;
}

var listArray=function(){
	textDisplay="";
	for (var i=0; i<scores.length; i++){
		textDisplay=textDisplay+names[i]+", "+scores[i]+"\n";
	}

	$("results").value=textDisplay;
}

window.onload = function () {
	$("add").onclick = addElement;
	$("show_best").onclick=showBest;
	$("list_array").onclick=listArray;
	$("name").focus();
}


