
<script>


import { Line } from 'vue-chartjs';
import { EventBus } from '~/assets/js/eventBus.js';
import Vue from 'vue';



export default {}




Vue.component('LineChart', {
  extends: Line,
   props: ['dataSet','dataType'],
   methods: {
     showLineGraph: function (dataset) {
        Chart.defaults.global.defaultFontColor = 'white';

        let type = "Monthly Average Precipitation (mm)";
        if(this.dataType === 'tas'){
          type = 'Monthly Average Temperature (°C)';
          dataset = dataset['temperature'];
        } else{
          dataset = dataset['precipitation']
        }

        let dataSetArray = [];

        function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {

              color += letters[Math.floor(Math.random() * 16)];



          }
          return color;
        }
        let colorId=0.1;

        for (var yearRange in dataset) {
            let oneYearRangeData = dataset[yearRange];
            oneYearRangeData['yearRange'] = yearRange;
            let colorLine;
            if( colorId === 0.55){
              colorLine = 'rgba(250, 229, 147, 1)';
            }
            else if( colorId > 0.55 ){
              colorLine = 'rgba(250, 147, 174,'+ colorId +')';
            }else{
              colorLine = 'rgba(52, 219, 198, '+ colorId +')';
            }


            let oneYearRangeDataOptions =
            {

              label: yearRange,

              data: dataset[yearRange].monthVals,
              pointBackgroundColor: colorLine,
              borderColor: colorLine,
              responsive: true,

              maintainAspectRatio: false,
              pointRadius: 1,
              borderWidth:1,
              fill:false,
              options: {


                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'black'
                        }
                    }
             }
           };
            dataSetArray.push(oneYearRangeDataOptions)
            colorId +=0.1125;

        }



        this.renderChart({

          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: dataSetArray,

       })
     }

   },


  created () {

    let self = this;
    EventBus.$on('showLineGraphTrigger',  function (payload) {
      self.showLineGraph(payload);
    })
 },
 template: `<div className="LineChart"></div>`
})

</script>
