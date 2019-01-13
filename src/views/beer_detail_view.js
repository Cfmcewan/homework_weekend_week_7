const BeerDetailView = function(){

}

BeerDetailView.prototype.createBeerDetail = function(beer){
  const beerDiv = document.createElement('div');

  beerDiv.classList.add('beerDiv');

  const beerName = this.addElement('h2', beer.name);
  beerDiv.appendChild(beerName);

  const beerTagLine = this.addElement('h5', beer.tagline);
  beerDiv.appendChild(beerTagLine);

  const description = this.addElement('p', beer.description);
  beerDiv.appendChild(description);

  const foodPairingHeader = this.addElement('h3', `Recommended food pairings with ${beer.name}:`);
  beerDiv.appendChild(foodPairingHeader);


  const foodPairingList = document.createElement('ul');
  beer.food_pairing.forEach((food) => {
    const foodItem = document.createElement('li');
    foodItem.textContent = food;
    foodPairingList.appendChild(foodItem);
  });
  beerDiv.appendChild(foodPairingList);

  const beerImage = document.createElement('img');
  beerImage.src = beer.image_url;
  beerImage.alt = `${beer.name}'s image'`;
  beerImage.id = 'beerImage';
  beerDiv.appendChild(beerImage);

  return beerDiv;

}

BeerDetailView.prototype.addElement = function(type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;

}
module.exports = BeerDetailView;
