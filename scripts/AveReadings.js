//this script is to make an average readings per user graph
function makeAveReadings(){
var aveReadingsTot = new Array();
var xLabels=new Array();

for (var i=0; i<monthlyReadings.length; i++){
    aveReadingsTot[i]=monthlyReadings[i].count/monthlyUsers[i].count;
    xLabels[i] = monthlyReadings[i].month;

}

var data = {
    x: xLabels,
    y: aveReadingsTot,
    text: xLabels,
};

var layout = {
    
    title: 'Readings per User per Month',
    xaxis: {
        title: 'Months',
        showgrid: true,
        zeroline: false,
        showticklabels: true
     },
    yaxis: {
        title: 'Readings per User',
        showline: false
    }
}

Plotly.plot( 'GraphTR', [data], layout);
}