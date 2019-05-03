function makeOSVersion(){

var operatingSystem = ['iOS','Android'];
var readingCount = [0,0];
var userCount = [0,0];


for (var i=0; i<appVersion.length; i++){
    if (appVersion[i].os == operatingSystem[0]){
        readingCount[0]+=parseInt(appVersion[i].countReadings);
        userCount[0]+=parseInt(appVersion[i].countUser);
    } else {
        readingCount[1]+=parseInt(appVersion[i].countReadings);
        userCount[1]+=parseInt(appVersion[i].countUser);
    }


    

}

var subPieUser = {
    values: userCount,
    labels: operatingSystem,
    type: 'pie',
    name: 'By User',

    domain: {
        row: 0,
        column: 0
    },

    title: 'By User',
};

var subPieReadings = {
    values: readingCount,
    labels: operatingSystem,
    type: 'pie',
    name: 'By Readings',

    domain: {
        row: 0,
        column: 1
    },

    title: 'By Readings',
};

var subPieData = [subPieUser, subPieReadings];

var layout = {
    title: 'Operating System Divisions',
    grid: {rows: 1, columns: 2}
};



Plotly.plot( 'GraphBR', subPieData, layout);

}