const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Beers = function(){
  this.beers = [];

}

Beers.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:first-year-brewed-selected', (event) => {
    const year = event.detail;
    const foundBeerByYear = this.findByYear(year);
    PubSub.publish('Beers:beer-by-year-found', foundBeerByYear);
    console.log(foundBeerByYear);
  })
}


Beers.prototype.getData = function(){
  const request = new Request('https://api.punkapi.com/v2/beers');
  request.get().then((data) => {
    this.beers = data;
    // console.log(this.beers);
    PubSub.publish('Beers:all-beers-ready', this.beers);
  })
}

Beers.prototype.findByYear = function(searchYear){
  const foundYear = this.beers.filter((beer) => {
    return beer.first_brewed.slice(3) === searchYear;
  })
  return foundYear;
  console.log(foundYear);
}

module.exports = Beers;
