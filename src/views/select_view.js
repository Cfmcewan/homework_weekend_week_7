const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Beers:all-beers-ready', (event) => {
    this.populate(event.detail);
    console.log(event.detail);
  });
  this.element.addEventListener('change', (event) => {
    const selectedYearFirstBrewed = event.target.value;
    PubSub.publish('SelectView:first-year-brewed-selected', selectedYearFirstBrewed);
    console.log(selectedYearFirstBrewed);
  })
}

SelectView.prototype.populate = function (beers){
  const uniqueYears = []
  beers.forEach((beer) => {
    if (!uniqueYears.includes(beer.first_brewed.slice(3))){
      uniqueYears.push(beer.first_brewed.slice(3))
    }
  })
  uniqueYears.forEach((year) => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    this.element.appendChild(option);
    console.log(option.textContent);

  })
}

module.exports = SelectView;
