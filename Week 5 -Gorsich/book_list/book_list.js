$(document).ready(function(){
   $("h2").click(function(){
       $(this).toggleClass("minus");
       $(this).next().toggleClass("open");
       $("#image").attr("src","");
       $("#image").addClass("hide");
   });//end heading click

    $("#categories a").each(function(){
        var bookImage=new Image();
        bookImage.scr=$(this).attr("href");
    }); //end image preload

    $("#categories a").click(function(evt){
        //show image
        var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);
        $("#image").removeClass(["hide"]);

        evt.preventDefault(); //prefent the default link action
    }); //end link click


});//end ready