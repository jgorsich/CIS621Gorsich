// the folllowing script is for the Unique Users graph
var xLabels = new Array();
var xData = new Array();
var yData = new Array();

for (var i=0; i<monthlyUsers.length; i++){
    xLabels[i] = monthlyUsers[i].month;
    xData[i]=i;
    yData[i]=parseInt(monthlyUsers[i].count, 10);
}

var data = {
    x: xLabels,
    y: yData,
    text: xLabels,
};

var layout = {
    
    title: 'Unique Users per Month',
    xaxis: {
        title: 'Months',
        showgrid: true,
        zeroline: false,
        showticklabels: true
     },
    yaxis: {
        title: 'Unique Users',
        showline: false
    }
}

Plotly.plot( 'UniqueUsers', [data], layout);
