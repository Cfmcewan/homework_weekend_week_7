const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const selectElement = document.querySelector('#years');
const selectView = new SelectView(selectElement);
selectView.bindEvents();

const container = document.querySelector('#beer-list');
const beerList = new BeerListView(container)
beerList.bindEvents();

const beers = new Beers();
beers.getData();
beers.bindEvents();


});
