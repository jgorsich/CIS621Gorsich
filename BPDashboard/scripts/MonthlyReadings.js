//this script is for the Monthly Readings graph

var xLabels = new Array();
var xData = new Array();
var yData = new Array();

for (var i=0; i<monthlyReadings.length; i++){
    xLabels[i] = monthlyReadings[i].month;
    xData[i]=i;
    yData[i]=parseInt(monthlyReadings[i].count, 10);
}

var data = {
    x: xLabels,
    y: yData,
    text: xLabels,
};

var layout = {
    
    title: 'Readings per Month',
    xaxis: {
        title: 'Months',
        showgrid: true,
        zeroline: false,
        showticklabels: true
     },
    yaxis: {
        title: 'Readings per Month',
        showline: false
    }
}

Plotly.plot( 'Readings', [data], layout);