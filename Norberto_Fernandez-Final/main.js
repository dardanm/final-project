console.log("im hook");


mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

//import axios from 'axios';

var app = new Vue({
    el:'#app',
  name: 'search',
  
  data() {
    return {
      msg: 'Search',
      query: '',
      results: '',
      pNotFound: 'The number entered is not found!',
      tryA: 'Try again',
      notFound: false
     
    }
  }, 
  methods: {
    getResult(query) {
      axios.get("https://data.cityofnewyork.us/resource/dpec-ucu7.json?app_no="+query)
      .then( response => {
         console.log(response.data);
         if(response.data == [].length == 1)
         {
            //alert("Application Number not Found!");
            this.notFound = true;
         }else
         {
            this. notFound = false;
            this.results = response.data;
         }
        
        
      })
    }
}
})

document.getElementById("myInput").oninvalid = function() {myFunction()};

function myFunction() {
  alert("You must type your reference number!");
}


// SLides-----------------

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