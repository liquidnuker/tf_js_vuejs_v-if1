// import "./js/vendor/vue.min.js";
// import Vue from 'vue';
// var Vue = require("./js/vendor/vue.min.js"); // ok
const Vue = require("./js/vendor/vue.min.js");

let app3 = new Vue({
  el: '#app-3',
  data: {
    seenx: true
  }
});

let seenxFalse = function() {
  app3.seenx = false;
};

document.getElementById("demo").onclick = seenxFalse;