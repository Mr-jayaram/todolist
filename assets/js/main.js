
$(document).ready(function(){
   
 
   $('#calendar').attr('data-vc-theme','light');


       var options = {
          series: [44, 55],
          chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Pending', 'Complete'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      
      

         })
            
           document.addEventListener('DOMContentLoaded', () => {
             const { Calendar } = window.VanillaCalendarPro;
             const { getDateString } = window.VanillaCalendarProUtils;
         
             const calendar = new Calendar('#calendar');
             calendar.init();
         
             // console.log('A copy of the calendar:', calendar);
             // console.log('Date string conversion utility:', getDateString(new Date()));
  });
         
         

