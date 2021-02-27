/*---------------------------------------------------------------------------------------------------------------
  #Original Author:   Jeff Bohn 
  #Date Created:   2/26/2021    
  #Date Last Modified:                   
               
  #Modification log:  Create education.js              
  ---------------------------------------------------------------------------------------------------------------*/

"use strict";

$('#contact').on('click', function() {

  let email = prompt("Please enter your email", "someone@mail");

  alert(`Thank you for your submission, ${email}`);

}); 

