<template>
  <div class="search">
    <h5>Check Status:</h5>
    <form class="search-form" v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Enter application number..." v-model="query">
    </form>

    <div v-if="results">
      <div v-for="result in results" v-bind:key="result">
        <strong>Current Status: </strong>
        <span class="complete-green" v-if="result.status === 'Complete'">Complete</span>
        <span class="incomplete-red" v-else>Incomplete</span>
        <br>
        <strong>Drug Test: </strong>
        <span class="complete-green" v-if="result.drug_test === 'Complete'">Complete</span>
        <span class="incomplete-red" v-else>Incomplete</span>
        <br>
        <strong>Wav Course: </strong>
                <span class="complete-green" v-if="result.wav_course === 'Complete'">Complete</span>
        <span class="incomplete-red" v-else>Incomplete</span>
        <br>
        <strong>Defensive Driving: </strong>
        <span class="complete-green" v-if="result.defensive_driving === 'Complete'">Complete</span>
        <span class="incomplete-red" v-else>Incomplete</span>
        <br>
        <strong>Driver Exam: </strong>
                <span class="complete-green" v-if="result.driver_exam === 'Complete'">Complete</span>
        <span class="incomplete-red" v-else>Incomplete</span>
        <br>
        <strong>Medical Clearance: </strong>
                        <span class="complete-green" v-if="result.medical_clearance_form === 'Complete'">Complete</span>
        <span class="incomplete-red" v-else>Incomplete</span>
        <br>
        <strong>Other Requirements: </strong>
        <br>
        {{ result.other_requirements }}
      </div>
    </div>

    <br>Source:
    <br>
    <a href="https://data.cityofnewyork.us/resource/dpec-ucu7.json" target="_blank">NYC Open Data</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "search",
  data() {
    return {
      msg: "Search",
      query: "",
      results: ""
    };
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://data.cityofnewyork.us/resource/dpec-ucu7.json?app_no=" +
            query
        )
        .then(respone => {
          this.results = respone.data;
        });
    }
  }
};
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
input {
  max-width: 30%;
  text-align: center;
}
.search-form {
  margin: 0 0 2%;
}
.complete-green {
  font-weight: 700;
  color: green;
}
.incomplete-red {
  font-weight: 700;
  color: red;
}
.search {
  margin-top: 5%;
}
</style>
