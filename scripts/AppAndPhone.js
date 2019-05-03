function makePhoneVersion(){
var iOSVersions = [];
var androidVersions = [];
var iOSReadings = [];
var iOSUsers=[];
var androidReadings=[];
var androidUsers=[];

for (var i=0; i<appVersion.length; i++){
    if (appVersion[i].os == 'iOS'){
        iOSVersions[iOSVersions.length]=appVersion[i].version;
        iOSReadings[iOSReadings.length]=appVersion[i].countReadings;
        iOSUsers[iOSUsers.length]=appVersion[i].countUser;
    }else{
        androidVersions[androidVersions.length]=appVersion[i].version;
        androidReadings[androidReadings.length]=appVersion[i].countReadings;
        androidUsers[androidUsers.length]=appVersion[i].countUser;
    }

}

var subPieUsers = {
    values: iOSUsers,
    labels: iOSVersions,
    type: 'pie',
    name: 'By User',

    domain: {
        row: 0,
        column: 0
    },

    title: 'iOS by Users',
};

var subPieReadings = {
    values: iOSReadings,
    labels: iOSVersions,
    type: 'pie',
    name: 'By Readings',

    domain: {
        row: 0,
        column: 1
    },

    title: 'iOS by Readings',
};

var subPieData = [subPieUsers, subPieReadings];

var layout = {
    title: 'App Versions: iOS',
    grid: {rows: 1, columns: 2}
};



Plotly.plot( 'GraphTL', subPieData, layout);


// now add a 2 chart pie chart with the diastolic and systolic charts broken up in a 1x2 grid - see plotly for info
//this second chart will go in BPSubLevels div.


var subPieUsers = {
    values: androidUsers,
    labels: androidVersions,
    type: 'pie',
    name: 'By User',

    domain: {
        row: 0,
        column: 0
    },

    title: 'Android by Users',
};

var subPieReadings = {
    values: androidReadings,
    labels: androidVersions,
    type: 'pie',
    name: 'By Readings',

    domain: {
        row: 0,
        column: 1
    },

    title: 'Android by Readings',
};

var subPieData = [subPieUsers, subPieReadings];

var layout = {
    title: 'App Versions: Android',
    grid: {rows: 1, columns: 2}
};



Plotly.plot( 'GraphBL', subPieData, layout);
}
