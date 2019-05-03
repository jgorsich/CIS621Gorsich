function makeOSVersion(){


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
    title: 'OS Versions: Android / iOS',
    grid: {rows: 1, columns: 2}
};



Plotly.plot( 'GraphBR', subPieData, layout);

}