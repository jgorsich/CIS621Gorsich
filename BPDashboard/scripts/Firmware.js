function makeFirmwareVersion(){
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
    title: 'Firmware Versions',
};



Plotly.plot( 'GraphTR', pieData, layout);

}