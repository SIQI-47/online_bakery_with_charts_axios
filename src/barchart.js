import {Bar} from 'vue-chartjs' //first step: import bar

export default{
    extends:Bar,//extend bar chart
    data:()=>({
        chartdata: {
            labels: ['January', 'February','March','April'],
            datasets: [ //dataset can be stored in the array
              {
                label: 'Sales1',
                data: [400, 300,150,100],
                backgroundColor:'#AA6',
                borderWidth:1.0,
                borderColor:"#000"
              }
              ,
           /*   {
                  label: 'Sales2',
                  data: [40, 30,10,105],
                  backgroundColor:'#7C1'
                }*/
            ]
            
          },
          
          options: { //options: where you can write style layout something
              title:{//chart title
                  display:true,
                  text:'Bar Chart BT3103',
                  fontColor:'Black',
                  fontSize:15
                  //align, color, 
              },
              legend:{//chart legend
                  position:'top' //can be changed to left, right, bottom
              },
              layout:{
                  padding:{
                      left: 5,
                      right: 0,
                      top: 0,
                      bottom: 5
                  }
              },
              scales:{
                  yAxes:[{
                      ticks:{//can change the starting point
                          min:0 //change to 10: then y-axis will start from 10
                      }
                   }],
                   
              }
            
          }  
    }),
    mounted(){//hoook: in order to create a chart instance
        this.renderChart(this.chartdata,this.options)
    }
}