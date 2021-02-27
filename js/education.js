/*---------------------------------------------------------------------------------------------------------------
  #Original Author:   Jeff Bohn 
  #Date Created:   2/26/2021    
  #Date Last Modified:                   
               
  #Modification log:  Create education.js              
  ---------------------------------------------------------------------------------------------------------------*/

"use strict"


new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["C#", "Javascript", "CSS", "HTML", "Misc"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["grey", "#22333B","#EAE0D5","#C6AC8F","#5E503F"],      // ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
          hoverBorderColor: true,
          data: [15,25,25,25,10],                                            // data: [2478,5267,734,784,433]
        }
      ]
    /*},
    options: {
      title: {
        display: true,
      text: 'Software Development courses of study in 2020-2021'
      }*/
    }
});