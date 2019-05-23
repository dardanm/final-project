<template>
  <div class="search">
    <h1>TLC New Driver Application <br> Status Checker</h1> 
    <h2>Enter Application Number</h2>
    <form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Enter numbers..." v-model="query" />
    </form>

    <div v-if="results">

      <div v-for="result in results" v-bind:key="result">
        <br>
        <strong>Application No:</strong> {{ result.app_no }}
        <br>
        <strong>Current Status:</strong> {{ result.status }}
        <br>
        <strong>Drug Test:</strong> {{ result.drug_test }}
        <br>
        <strong>Wav Course:</strong> {{ result.wav_course }}
        <br>
        <strong>Defensive Driving:</strong> {{ result.defensive_driving }}
        <br>
        <strong>Driver Exam:</strong> {{ result.driver_exam }}
        <br>
        <strong>Medical Clearance:</strong> {{ result.medical_clearance_form }}
        <br>
        <strong>Other Requirements:</strong> 
        <br>
        {{ result.other_requirements }}
      </div>

    </div>

         <br>
      Source: 
      <br>
      <a href='https://data.cityofnewyork.us/resource/dpec-ucu7.json' target="_blank">NYC Open Data</a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'search',
  data() {
    return {
      msg: 'Search',
      query: '',
      results: ''
    }
  }, 
  methods: {
    getResult(query) {
      axios.get('https://data.cityofnewyork.us/resource/dpec-ucu7.json?app_no='+query)
      .then( respone => {
        // console.log(respone.data);
        this.results = respone.data;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
