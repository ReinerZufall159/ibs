  $(document).ready(function(){
        lauf();
});

setInterval(function(){lauf();}, 1800000);

      function lauf(){
          var test = new XMLHttpRequest();

                test.onreadystatechange = function(){
                   if(test.readyState == 4 && test.status == 200){
                   var array = JSON.parse(test.responseText);
                   zeichnen(array);
                }
                };
                test.open("GET","https://arsnova.eu/api/statistics/",true);

                test.send();
     }

     function zeichnen(array){

        var chart = new CanvasJS.Chart("chartContainer",
        {

                 legend:{
                        fontFamily: "Arial, Times New Roman",
                        fontSize: 12,
                        itemWidth: 150,

                  },


                animationEnabled: true,
                title:{
                        text: "Arsnova Statistik"
                },
                data: [
                {



                        type: "doughnut", //change type to bar, line, area, pie, etc
                        indexLabelPlacement: "outside",
                        showInLegend: true,

                        dataPoints: [
                                { label: "answers", y: array.answers, name: "answers" },
                                { label: "lectureQuestions", y: array.lectureQuestions, name: "lectureQuestions" },
                                { label: "preparationQuestions",  y: array.preparationQuestions, name: "preparationQuestions" },
                                { label: "openSessions",  y: array.openSessions, name: "openSessions" },
                                { label: "closedSessions",  y: array.closedSessions, name: "closedSessions" },
                                { label: "creators", y: array.creators, name: "creators" },
                                { label: "activeUsers", y: array.activeUsers, name: "activeUsers" },
                                { label: "activeStudents",  y: array.activeStudents, name: "activeStudents" },
                                { label: "loggedinUsers",  y: array.loggedinUsers, name: "loggedinUsers" },
                                { label: "interposedQuestions",  y: array.interposedQuestions, name: "interposedQuestions" },
                                { label: "conceptQuestions", y: array.conceptQuestions, name: "conceptQuestions" },
                                { label: "questions", y: array.questions, name: "questions" },
                                { label: "sessions",  y: array.sessions, name: "sessions" }


                        ]
                }
                ]
                });

        chart.render();

}