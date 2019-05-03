//this script is for the Monthly Reaings by Level
function makePercentByLevel(){
var xLabels = new Array();
var xData = new Array();
var greenData = new Array();
var yellowData=new Array();
var orangeData = new Array();
var redData = new Array();

for (var i=0; i<monthlyReadings.length; i++){
    xLabels[i] = monthlyReadings[i].month;
    xData[i]=i;
    greenData[i]=parseFloat(WHOBoth[i].Green/monthlyReadings[i].count);
    yellowData[i]=parseFloat(WHOBoth[i].Yellow/monthlyReadings[i].count);
    orangeData[i]=parseFloat(WHOBoth[i].Orange/monthlyReadings[i].count);
    redData[i]=parseFloat(WHOBoth[i].Red/monthlyReadings[i].count);
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
    
    title: 'Percent of Monthly Readings per WHO Level',
    xaxis: {
        title: 'Months',
        showgrid: true,
        zeroline: false,
        showticklabels: true
     },
    yaxis: {
        title: '% of Readings',
        showline: false,
        tickformat: '.1%',
        range: [0,1],
    },
    showlegend: false,
}

Plotly.plot( 'GraphTL', data, layout);
}