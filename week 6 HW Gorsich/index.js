$(document).ready(function(){

    $("#reset").click(function(){
        $(".resettable").val("");
        $("span").text('*');
    }); //reset button

    $("#submit").click(function(event) {

        var isValid=true;
        

        //validate email first
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var email=$("#email").val().trim();
        if (email=="") {
            $("#email").next().text("This field is required.");
            isValid=false;
        } else if (!emailPattern.test(email)){
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }

        

        //validate name and country
        var name=$("#name").val().trim();
        if (name=="") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").next().text("");
        }


        var country=$("#country").val().trim();
        if (country=="") {
            $("#country").next().text("This field is required.");
            isValid = false;
        } else {
            $("#country").next().text("");
        }


        //validate phone number
        var phonePattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

        var phoneNumber=$("#phone").val().trim();
        if (phoneNumber=="") {
            $("#phone").next().text("This field is required.");
            isValid = false;
        }else if (!phonePattern.test(phoneNumber)){
            $("#phone").next().text("Must be a valid phone number.");
            isValid=false;
        } else {
            $("#phone").next().text("");
        }


        //prevent submision if not valid
       
        if (isValid==true){
            $("#contact").submit();
            $("#message").val("this was submitted")}

    }); // end click of submit button
    $("[name='name']").focus();  //this should put the focus on the name field without entering an id
}); // end ready