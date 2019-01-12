const Beers = require('./models/beers.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const selectElement = document.querySelector('#years');
const selectView = new SelectView(selectElement);
selectView.bindEvents();

const beers = new Beers();
beers.getData();


});
