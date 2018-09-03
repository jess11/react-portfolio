
<script>

import { Bar } from 'vue-chartjs';
import { EventBus } from '~/assets/js/eventBus.js';
import Vue from 'vue';



export default {}



Vue.component('BarChart', {
  extends: Bar,
   props: ['dataSet','dataType'],
   methods: {
     showGraph: function (dataset) {
        Chart.defaults.global.defaultFontColor = 'white';

        let type = "Monthly Average Precipitation (mm)";
        if(this.dataType === 'tas'){
          type = 'Monthly Average Temperature (°C)';
          dataset = dataset['1920-1939'];
        } else{
          dataset = dataset['1920-1939']
        }


        this.renderChart({

          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

         datasets: [
           {

             label: type,
             backgroundColor: '#f87979',
             data: dataset.monthVals,
             backgroundColor:'rgb(51, 219, 198)',
             borderColor: 'rgb(51, 219, 198)',
             responsive: true,
             maintainAspectRatio: false,
             options: {
                   legend: {
                       display: true,
                       labels: {
                           fontColor: 'black'
                       }
                   }
            }
           }
         ]
       })
     }

   },

  created () {
    let self = this;
    EventBus.$on('showGraphTrigger',  function (payload) {
      self.showGraph(payload);
    })
 },
 template: `<div class="BarChart"></div>`
})

</script>
