

<template>
  <section class="container">
    <div class="container-overlay">

      <div class="side-menu">
        <dashboard-logo/>
        <p class="name">
          dashboard
        </p>
        <div class="nav" id="nav">



          <div class="input-field col s12 m6">

            <label for="country">Country</label>
            <select id="country" v-model="country">
              <option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>

            <!-- <label for="timespan">Years</label>
            <select id="timespan" v-model="timespan">
              <option v-for="year in years" v-bind:key="year.value" v-bind:value="year.value">
                {{ year.text }}
              </option>
            </select> -->



          </div>



          <div class="nav-item">

          </div>

<button v-on:click="createGraph(country)" type="button" class="btn waves-effect waves-light" name="button"> OK </button>

          <!-- <button v-on:click="showData(country,timespan,variable)" type="button" class="btn waves-effect waves-light" name="button"> Show me the money </button> -->
        </div>
      </div>




      <div class="main">
          <div class="panel"  style="position: relative; ">
              <p class="panel-title">
                Precipitation
              </p>
              <LineChart dataType="pr" ref="chart"></LineChart>
          </div>
          <div class="panel" style="position: relative;">
              <p class="panel-title">
                Temperature
              </p>
              <!-- <BarChart dataType="tas"  ref="chart"></BarChart> -->
              <LineChart dataType="tas"  ref="chart"></LineChart>


          </div>
      </div>
    </div>
  </section>
</template>


<script>


import DashboardLogo from '~/components/DashboardLogo.vue';
import BarChart from '~/components/BarChart.vue';
import LineChart from '~/components/LineChart.vue';
import { EventBus } from '~/assets/js/eventBus.js';
import axios from 'axios';
import { Bar, Line } from 'vue-chartjs';
import Vue from 'vue';




export default {

  components: {
    DashboardLogo
  },
    data: function() {
      return {
        country: '',
        info: [],
        options: [
          { text: 'Australia', value: 'AUS' },
          { text: 'Japan', value: 'JPN' },
          { text: 'America', value: 'USA' },
          { text: 'Brazil', value: 'BRA' },
          { text: 'China', value: 'CHN' },
          { text: 'Egypt', value: 'EGY' },
          { text: 'Greece', value: 'GRC' },
          { text: 'India', value: 'IND' },
          { text: 'Turkey', value: 'TUR' }
        ],
        years:[
          { text: '1920-1939', value: '1920/1939' },
          { text: '1940-1959', value: '1940/1959' },
          { text: '1960-1979', value: '1960/1979' },
          { text: '1980-1999', value: '1980/1999' },
          { text: '2020-2039', value: '2020/2039' },
          { text: '2040-2059', value: '2040/2059' },
          { text: '2060-2079', value: '2060/2079' },
          { text: '2080-2099', value: '2080/2099' }
        ]
      }
    },
    methods: {

      createGraph: function (country) {

        let ajaxUrlTas19201939  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/tas/1920/1939/${country}`,
            ajaxUrlTas19401959  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/tas/1940/1959/${country}`,
            ajaxUrlTas19601979  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/tas/1960/1979/${country}`,
            ajaxUrlTas19801999  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/tas/1980/1999/${country}`,
            ajaxUrlTas20202039  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/tas/2020/2039/${country}`,
            ajaxUrlTas20402059  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/tas/2040/2059/${country}`,
            ajaxUrlTas20602079  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/tas/2060/2079/${country}`,
            ajaxUrlTas20802099  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/tas/2080/2099/${country}`,
            ajaxUrlPr19201939  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/pr/1920/1939/${country}`,
            ajaxUrlPr19401959  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/pr/1940/1959/${country}`,
            ajaxUrlPr19601979  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/pr/1960/1979/${country}`,
            ajaxUrlPr19801999  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/pr/1980/1999/${country}`,
            ajaxUrlPr20202039  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/pr/2020/2039/${country}`,
            ajaxUrlPr20402059  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/pr/2040/2059/${country}`,
            ajaxUrlPr20602079  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/pr/2060/2079/${country}`,
            ajaxUrlPr20802099  = `http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/csiro_mk3_5/pr/2080/2099/${country}`;





      axios.all([
        axios.get(ajaxUrlTas19201939),
        axios.get(ajaxUrlTas19401959),
        axios.get(ajaxUrlTas19601979),
        axios.get(ajaxUrlTas19801999),
        axios.get(ajaxUrlTas20202039),
        axios.get(ajaxUrlTas20402059),
        axios.get(ajaxUrlTas20602079),
        axios.get(ajaxUrlTas20802099),
        axios.get(ajaxUrlPr19201939),
        axios.get(ajaxUrlPr19401959),
        axios.get(ajaxUrlPr19601979),
        axios.get(ajaxUrlPr19801999),
        axios.get(ajaxUrlPr20202039),
        axios.get(ajaxUrlPr20402059),
        axios.get(ajaxUrlPr20602079),
        axios.get(ajaxUrlPr20802099)
      ]).then(axios.spread((
        response19201939,
        response19401959,
        response19601979,
        response19801999,
        response20202039,
        response20402059,
        response20602079,
        response20802099,
        response19201939Pr,
        response19401959Pr,
        response19601979Pr,
        response19801999Pr,
        response20202039Pr,
        response20402059Pr,
        response20602079Pr,
        response20802099Pr
      ) => {
        // do something with both responses

        this.info = {
          "temperature": [],
          "precipitation": []
        };

        Vue.set(this.info.temperature, '1920-1939', response19201939.data[0]);
        Vue.set(this.info.temperature, '1940-1959', response19401959.data[0]);
        Vue.set(this.info.temperature, '1960-1979', response19601979.data[0]);
        Vue.set(this.info.temperature, '1980-1999', response19801999.data[0]);
        Vue.set(this.info.temperature, '2020-2039', response20202039.data[0]);
        Vue.set(this.info.temperature, '2040-2059', response20402059.data[0]);
        Vue.set(this.info.temperature, '2060-2079', response20602079.data[0]);
        Vue.set(this.info.temperature, '2080-2099', response20802099.data[0]);
        Vue.set(this.info.precipitation, '1920-1939', response19201939Pr.data[0]);
        Vue.set(this.info.precipitation, '1940-1959', response19401959Pr.data[0]);
        Vue.set(this.info.precipitation, '1960-1979', response19601979Pr.data[0]);
        Vue.set(this.info.precipitation, '1980-1999', response19801999Pr.data[0]);
        Vue.set(this.info.precipitation, '2020-2039', response20202039Pr.data[0]);
        Vue.set(this.info.precipitation, '2040-2059', response20402059Pr.data[0]);
        Vue.set(this.info.precipitation, '2060-2079', response20602079Pr.data[0]);
        Vue.set(this.info.precipitation, '2080-2099', response20802099Pr.data[0]);


        EventBus.$emit('showLineGraphTrigger', this.info)



      })).catch(message => console.log('Axios exception: ', message));


        // axios
        //   .get(ajaxUrlTas)
        //   .then((response) => {
        //     this.info = {};
        //     Vue.set(this.info, 'tas', response.data[0]);
        //
        //     axios
        //       .get(ajaxUrlPr)
        //       .then(secondResponse => {
        //         Vue.set(this.info, 'pr', secondResponse.data[0]);
        //
        //         EventBus.$emit('showGraphTrigger', this.info);
        //         EventBus.$emit('showLineGraphTrigger', this.info);
        //       })
        //
        //   })









      }
    },
    mounted: function () {

    }


}


</script>

<style>
label{
  display:block;
}

select{
  margin-bottom: 15px;
}




.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
