//this script is for the WHO Levels pie chart
function makeWhoLevel(){
var greenTotal = 0;
var yellowTotal = 0;
var orangeTotal = 0;
var redTotal=0;
var greenTotalSys = 0;
var yellowTotalSys = 0;
var orangeTotalSys = 0;
var redTotalSys=0;
var greenTotalDia = 0;
var yellowTotalDia = 0;
var orangeTotalDia = 0;
var redTotalDia=0;

for (var i=0; i<WHOBoth.length; i++){
    greenTotal=greenTotal+parseInt(WHOBoth[i].Green);
    yellowTotal=yellowTotal+parseInt(WHOBoth[i].Yellow);
    orangeTotal=orangeTotal+parseInt(WHOBoth[i].Orange);
    redTotal=redTotal+parseInt(WHOBoth[i].Red);

    greenTotalSys=greenTotalSys+parseInt(WHOSystolic[i].Green);
    yellowTotalSys=yellowTotalSys+parseInt(WHOSystolic[i].Yellow);
    orangeTotalSys=orangeTotalSys+parseInt(WHOSystolic[i].Orange);
    redTotalSys=redTotalSys+parseInt(WHOSystolic[i].Red);
    
    greenTotalDia=greenTotalDia+parseInt(WHODiastolic[i].Green);
    yellowTotalDia=yellowTotalDia+parseInt(WHODiastolic[i].Yellow);
    orangeTotalDia=orangeTotalDia+parseInt(WHODiastolic[i].Orange);
    redTotalDia=redTotalDia+parseInt(WHODiastolic[i].Red);

}

var pieData = [{
    values: [greenTotal, yellowTotal, orangeTotal, redTotal],
    labels: ['Green', 'Yellow', 'Orange', 'Red'],
    marker: { colors:[
            'rgb(0, 204, 0)',
            'rgb(255, 255, 0)',
            'rgb(240, 88, 0)',
            'rgb(215, 11, 11)'
        ]},
    type: 'pie',
    sort: false
}];

var layout = {
    title: 'WHO Levels, Last Full Year',
};



Plotly.plot( 'GraphTL', pieData, layout);


// now add a 2 chart pie chart with the diastolic and systolic charts broken up in a 1x2 grid - see plotly for info
//this second chart will go in BPSubLevels div.


var subPieSystolic = {
    values: [greenTotalSys, yellowTotalSys, orangeTotalSys, redTotalSys],
    labels: ['Green', 'Yellow', 'Orange', 'Red'],
    type: 'pie',
    name: 'Systolic Only',
    marker: { colors:[
            'rgb(0, 204, 0)',
            'rgb(255, 255, 0)',
            'rgb(240, 88, 0)',
            'rgb(215, 11, 11)'
        ]},
    domain: {
        row: 0,
        column: 0
    },
    sort: false,
    title: 'Systolic',
};

var subPieDiastolic = {
    values: [greenTotalDia, yellowTotalDia, orangeTotalDia, redTotalDia],
    labels: ['Green', 'Yellow', 'Orange', 'Red'],
    type: 'pie',
    name: 'Diastolic Only',
    marker: { colors:[
            'rgb(0, 204, 0)',
            'rgb(255, 255, 0)',
            'rgb(240, 88, 0)',
            'rgb(215, 11, 11)'
        ]},
    domain: {
        row: 0,
        column: 1
    },
    sort: false,
    title: 'Diastolic',
};

var subPieData = [subPieSystolic, subPieDiastolic];

var layout = {
    title: 'WHO Levels, Systolic / Diastolic Seperately',
    grid: {rows: 1, columns: 2}
};



Plotly.plot( 'GraphBL', subPieData, layout);
}

