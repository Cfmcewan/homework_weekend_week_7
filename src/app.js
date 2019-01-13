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

const canvas = document.querySelector('#main-canvas');
const context = canvas.getContext('2d');
console.log('context', context);


const img1 = document.createElement('img');
img1.src = "https://images.punkapi.com/v2/2.png";

const drawImag1 = function(){
  context.drawImage(img1, 10, 10, 60, 150);
}
img1.addEventListener('load', drawImag1);



})
