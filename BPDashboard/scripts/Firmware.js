function makeFirmwareVersion(){
var firmwareVersion = [];
var readingCount = [];
var userCount = [];


for (var i=0; i<firmVersion.length; i++){
    firmwareVersion[i]=firmVersion[i].version;
    if (i==0){firmwareVersion[i]= "Not recorded";}
    readingCount[i]=firmVersion[i].countReadings;
    userCount[i]=firmVersion[i].countUser;
    

}

var subPieUser = {
    values: userCount,
    labels: firmwareVersion,
    type: 'pie',
    name: 'By User',

    domain: {
        row: 0,
        column: 0
    },
    sort: false,
    title: 'By User',
};

var subPieReadings = {
    values: readingCount,
    labels: firmwareVersion,
    type: 'pie',
    name: 'By Readings',

    domain: {
        row: 0,
        column: 1
    },
    sort: false,
    title: 'By Readings',
};

var subPieData = [subPieUser, subPieReadings];

var layout = {
    title: 'Firmware Versions',
    grid: {rows: 1, columns: 2}
};



Plotly.plot( 'GraphTR', subPieData, layout);

}