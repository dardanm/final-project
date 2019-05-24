console.log("im hook");

var app = new Vue({
    el: '#app',
    data:{
        letter: "hey im here"
    }
   
})


mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

//import axios from 'axios';

var app2 = new Vue({
    el:'#a2',
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
      //axios.get('https://data.cityofnewyork.us/resource/dpec-ucu7.json?app_no='+query)
      axios.get("https://data.cityofnewyork.us/resource/dpec-ucu7.json?app_no="+query)
     //axios.get("https://data.cityofnewyork.us/resource/ryuq-5ei3.json"+query)
      .then( response => {
         //console.log(response.data);
        this.results = response.data;
      })
    }
}
})




var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}