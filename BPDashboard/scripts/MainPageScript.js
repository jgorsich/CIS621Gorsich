$(document).ready(function(){
    $("#output").append(
        "test");

    $.post('../functions/MainPageQuery.php', data, function(response){
        $.each(this, function(key, value){
            $("#output").append(
                "BP reading: " + value.systolic + " over " + value.diastolic + " on " + value.date + "<br><br>");
        });
    }, 'json');


});
