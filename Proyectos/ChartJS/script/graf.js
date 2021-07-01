
let ctx;
let myChart;

function crearGrafico(data){

    if(typeof (myChart)=="object"){
        myChart.destroy();
    }

    ctx = document.getElementById('myChart').getContext('2d');

    myChart = new Chart(ctx,
    {

        type: 'bar',

        data: {
            labels: data.tag,

            datasets: [{
                label: "El Vengador mas Poderoso",

                data: data.values,

                backgroundColor: data.back,
                borderColor: ["red"],
                borderWidth: 1
            }]
        },

        options: {
           	plugins: {
                legend: {
                    display: true,
                    labels:{
                    	color:"green"
                    }
                }
            },    
        }
    }

    );

}	