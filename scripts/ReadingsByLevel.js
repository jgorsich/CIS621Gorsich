//this script is for the Monthly Reaings by Level
function makeReadingsByLevel(){
var xLabels = new Array();
var xData = new Array();
var greenData = new Array();
var yellowData=new Array();
var orangeData = new Array();
var redData = new Array();

for (var i=0; i<monthlyReadings.length; i++){
    xLabels[i] = monthlyReadings[i].month;
    xData[i]=i;
    greenData[i]=parseInt(WHOBoth[i].Green, 10);
    yellowData[i]=parseInt(WHOBoth[i].Yellow, 10);
    orangeData[i]=parseInt(WHOBoth[i].Orange, 10);
    redData[i]=parseInt(WHOBoth[i].Red, 10);
}

var greenTrace = {
    x: xLabels,
    y: greenData,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(0, 204, 0)'}
};

var yellowTrace = {
    x: xLabels,
    y: yellowData,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(255, 255, 0)'}
};

var orangeTrace = {
    x: xLabels,
    y: orangeData,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(240, 88, 0)'}
};

var redTrace = {
    x: xLabels,
    y: redData,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(215, 11, 11)'}
};


var data = [greenTrace, yellowTrace, orangeTrace, redTrace];

var layout = {
    
    title: 'Readings per Month by WHO Level',
    xaxis: {
        title: 'Months',
        showgrid: true,
        zeroline: false,
        showticklabels: true
     },
    yaxis: {
        title: 'Readings per Month',
        showline: false
    },
    showlegend: false,
}

Plotly.plot( 'GraphTL', data, layout);
}