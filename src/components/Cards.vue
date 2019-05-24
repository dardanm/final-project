<template>
  <div class="row">
        <h4>TLC New Driver Application <br> Status Checker</h4> 

    <!-- Approved -->
    <div v-for="item in result" class="col s12 m6 l6 xl3">
      <div class="card green-teal gradient-shadow white-text animate fadeLeft">
        <div>
          <div class="col s7 m7 left-align">
            <p>{{ item.status }}</p>
          </div>
          <div class="col s5 m5 right-align">
            <h5 class="mb-0 white-text">{{ Number(item.count).toLocaleString() }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cards",
  data() {
    return {
      result: null
    };
  },
  mounted() {
    axios
      .get(
        "https://data.cityofnewyork.us/resource/dpec-ucu7.json?$select=status,%20count(*)%20group%20by%20status%20order%20by%20status&$limit=4"
      )
      .then(response => {
        this.result = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.row {
  margin-bottom: 0;
}
.row .col {
  padding: 0 1rem;
}
.animate.fadeLeft {
  -webkit-animation: fadeLeft;
  -moz-animation: fadeLeft;
  -o-animation: fadeLeft;
  animation: fadeLeft;
  -webkit-animation-duration: 1.5s;
  -moz-animation-duration: 1.5s;
  -o-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
}
.card {
  overflow: hidden;
  margin: 1rem 0 1rem 0;
}
.light-blue-cyan {
  background: #0288d1;
  background: -webkit-linear-gradient(45deg, #0288d1, #26c6da) !important;
  background: -moz- oldlinear-gradient(45deg, #0288d1, #26c6da) !important;
  background: -o-linear-gradient(45deg, #0288d1, #26c6da) !important;
  background: linear-gradient(45deg, #0288d1, #26c6da) !important;
}
.red-pink {
  background: #ff5252;
  background: -webkit-linear-gradient(45deg, #ff5252, #f48fb1) !important;
  background: -moz- oldlinear-gradient(45deg, #ff5252, #f48fb1) !important;
  background: -o-linear-gradient(45deg, #ff5252, #f48fb1) !important;
  background: linear-gradient(45deg, #ff5252, #f48fb1) !important;
}
.green-teal {
  background: #43a047;
  background: -webkit-linear-gradient(45deg, #43a047, #1de9b6) !important;
  background: -moz- oldlinear-gradient(45deg, #43a047, #1de9b6) !important;
  background: -o-linear-gradient(45deg, #43a047, #1de9b6) !important;
  background: linear-gradient(45deg, #43a047, #1de9b6) !important;
}
.amber-amber {
  background: #ff6f00;
  background: -webkit-linear-gradient(45deg, #ff6f00, #ffca28) !important;
  background: -moz- oldlinear-gradient(45deg, #ff6f00, #ffca28) !important;
  background: -o-linear-gradient(45deg, #ff6f00, #ffca28) !important;
  background: linear-gradient(45deg, #ff6f00, #ffca28) !important;
}
.white-text {
  color: #fff !important;
}
.padding-4 {
  padding: 4% !important;
}
.material-icons {
  font-family: "Material Icons";
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  display: inline-block;
  white-space: nowrap;
  letter-spacing: normal;
  text-transform: none;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
}
.background-round {
  padding: 15px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.18);
}
.mt-5 {
  margin-top: 5% !important;
}
h5 {
  font-size: 1.64rem;
  line-height: 110%;
  margin: 0.82rem 0 0.656rem 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Muli", sans-serif;
  font-weight: 400;
  line-height: 1.1;
  color: #333;
}
.no-margin {
  margin: 0 !important;
}
p {
  font-family: "Muli", sans-serif;
}
</style>
