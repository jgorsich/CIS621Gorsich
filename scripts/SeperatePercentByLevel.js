//this script is for the Monthly Reaings by Level
function makeSysPercentByLevel(){
var xLabels = [];
var xData = [];
var greenDataSys = [];
var yellowDataSys=[];
var orangeDataSys = [];
var redDataSys = [];


for (var i=0; i<monthlyReadings.length; i++){
    xLabels[i] = monthlyReadings[i].month;
    xData[i]=i;
    greenDataSys[i]=parseFloat(WHOSystolic[i].Green/monthlyReadings[i].count);
    yellowDataSys[i]=parseFloat(WHOSystolic[i].Yellow/monthlyReadings[i].count);
    orangeDataSys[i]=parseFloat(WHOSystolic[i].Orange/monthlyReadings[i].count);
    redDataSys[i]=parseFloat(WHOSystolic[i].Red/monthlyReadings[i].count);
}

var greenTraceSys = {
    x: xLabels,
    y: greenDataSys,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(0, 204, 0)'}
};

var yellowTraceSys = {
    x: xLabels,
    y: yellowDataSys,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(255, 255, 0)'}
};

var orangeTraceSys = {
    x: xLabels,
    y: orangeDataSys,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(240, 88, 0)'}
};

var redTraceSys = {
    x: xLabels,
    y: redDataSys,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(215, 11, 11)'}
};


var data = [greenTraceSys, yellowTraceSys, orangeTraceSys, redTraceSys];

var layout = {
    
    title: '% of Monthly Readings per WHO Level, Systolic',
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

Plotly.plot( 'GraphBL', data, layout);
}

function makeDiaPercentByLevel(){
var xLabels = [];
var xData = [];
var greenDataDia = [];
var yellowDataDia=[];
var orangeDataDia = [];
var redDataDia = [];


for (var i=0; i<monthlyReadings.length; i++){
    xLabels[i] = monthlyReadings[i].month;
    xData[i]=i;
    greenDataDia[i]=parseFloat(WHODiastolic[i].Green/monthlyReadings[i].count);
    yellowDataDia[i]=parseFloat(WHODiastolic[i].Yellow/monthlyReadings[i].count);
    orangeDataDia[i]=parseFloat(WHODiastolic[i].Orange/monthlyReadings[i].count);
    redDataDia[i]=parseFloat(WHODiastolic[i].Red/monthlyReadings[i].count);
}

var greenTraceDia = {
    x: xLabels,
    y: greenDataDia,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(0, 204, 0)'}
};

var yellowTraceDia = {
    x: xLabels,
    y: yellowDataDia,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(255, 255, 0)'}
};

var orangeTraceDia = {
    x: xLabels,
    y: orangeDataDia,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(240, 88, 0)'}
};

var redTraceDia = {
    x: xLabels,
    y: redDataDia,
    text: xLabels,
    mode: 'lines',
    line: {color: 'rgb(215, 11, 11)'}
};


var data = [greenTraceDia, yellowTraceDia, orangeTraceDia, redTraceDia];

var layout = {
    
    title: '% of Monthly Readings per WHO Level, Diastolic',
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

Plotly.plot( 'GraphBR', data, layout);
}