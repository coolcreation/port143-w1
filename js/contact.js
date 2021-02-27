/*---------------------------------------------------------------------------------------------------------------
  #Original Author:   Jeff Bohn 
  #Date Created:   2/24/2021    
  #Date Last Modified:                   
               
  #Modification log:  Create contact.js              
  -------------------------------------------------------------------------------------------------------------*/ 

"use strict";



$( document ).ready( () => {

    $( "#register" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const email = $("#email").val();
        const phone = $("#phone").val();
        const country = $("#country").val();
        const comments = $("#comments").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const commentsPattern = /^[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

        // check user entries for validity
   
        let isValid = true;
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter email in X@X.X");
        }
         if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Enter in NNN-NNN-NNNN format");
        }
        if (country === "") {
            isValid = false;
            $("#country").next().text("Enter a country");
        }
        if ( comments === "" || !commentsPattern.test(comments) ) {
            isValid = false;
            $("#comments").next().text("Enter a comment");
        }
        if ( isValid ) { 
            $("#contact_form").submit();   // code that saves profile info goes here
        }
        
    });
    
    $( "#reset_form" ).click( () => {

     $("#email").val(""); 
     $("#phone").val("");
     $("#country").val("");
     $("#comments").val("");
    // document.getElementById("terms").checked = false;
     
    

    $("#email").focus();
   });

    $("#email").focus();
});