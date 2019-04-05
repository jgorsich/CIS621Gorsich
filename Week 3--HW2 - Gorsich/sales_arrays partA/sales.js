"use strict";
var $ = function (id) {
	return document.getElementById(id);
};

var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];

var textDisplay = "";

var regions=[];

regions[0]=r1;
regions[1]=r2;
regions[2]=r3;
regions[3]=r4;
regions[4]=r5;

var quarterDisplay = function() {
	textDisplay="Sales by Quarter \n";
	var runningTotal = 0;
	for (var i=0; i<=3; i++){
		for (var j=0; j<=4; j++){
			runningTotal=runningTotal+regions[j][i];
		}

		textDisplay=textDisplay+"Quarter "+(i+1)+": " + runningTotal+"\n";
		runningTotal=0;
	}

	updateDisplay(textDisplay);
	textDisplay="";
};

var regionDisplay=function(){
	textDisplay="Sales by Region \n";
	var runningTotal=0;
	for (var j=0; j<=4; j++){
		for (var i=0; i<=3; i++){
			runningTotal=runningTotal+regions[j][i];
		}

		textDisplay=textDisplay+"Region "+(j+1)+": " + runningTotal+"\n";
		runningTotal=0;
	}

	updateDisplay(textDisplay);
	textDisplay="";
};

var totalDisplay=function(){
	textDisplay="Total Sales \n";
	var runningTotal=0;
	for (var j=0; j<=4; j++){
		for (var i=0; i<=3; i++){
			runningTotal=runningTotal+regions[j][i];
		}
	}

	textDisplay=textDisplay+runningTotal;
	updateDisplay(textDisplay);
	textDisplay="";
};

var updateDisplay=function(textDisplay){
	$("results").value=textDisplay;
};

window.onload = function () {
$("show_quarter").onclick = quarterDisplay;
$("show_region").onclick=regionDisplay;
$("show_total").onclick=totalDisplay;
};