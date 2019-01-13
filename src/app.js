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

const drawImage1 = function(){
  context.drawImage(img1, 10, 10, 70, 170);
}
img1.addEventListener('load', drawImage1);

const img2 = document.createElement('img');
img2.src = "https://images.punkapi.com/v2/5.png";

const drawImage2 = function(){
  context.drawImage(img2, 90, 10, 70, 170);

}
img2.addEventListener('load', drawImage2);

const img3 = document.createElement('img');
img3.src = "https://images.punkapi.com/v2/6.png";

const drawImage3 = function(){
  context.drawImage(img3, 170, 10, 70, 170);
}
img3.addEventListener('load', drawImage3);

const img4 = document.createElement('img');
img4.src = "https://images.punkapi.com/v2/8.png";

const drawImage4 = function(){
  context.drawImage(img4, 250, 10, 70, 170);
}
img4.addEventListener('load', drawImage4);

const img5 = document.createElement('img');
img5.src = "https://images.punkapi.com/v2/10.png";

const drawImage5 = function(){
  context.drawImage(img5, 330, 10, 70, 170);

}
img5.addEventListener('load', drawImage5);

const img6 = document.createElement('img');
img6.src = "https://images.punkapi.com/v2/12.png";

const drawImage6 = function(){
  context.drawImage(img6, 410, 10, 70, 170);

}
img6.addEventListener('load', drawImage6);

// const createRectangle = function (colour, x, y, w, h);
//   context.fillStyle = colour;
//   context.fillRect(x, y, w, h);
//   return createRectangle;
//
// const rect1 = createRectangle( '#712361', 490, 100, 70, 70);
context.fillStyle = '#712361';
context.fillRect(490, 100, 70, 70);

context.fillStyle = '#11612e';
context.fillRect(570, 100, 70, 70);

context.fillStyle = '#cb6630';
context.fillRect(650, 100, 70, 70);

context.fillStyle = '#0a4437';
context.fillRect(730, 100, 70, 70);

context.fillStyle = '#298fb4';
context.fillRect(810, 100, 70, 70);

})
