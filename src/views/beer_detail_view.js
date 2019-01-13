const BeerDetailView = function(){

}

BeerDetailView.prototype.createBeerDetail = function(beer){
  const beerDiv = document.createElement('div');

  const beerName = document.createElement('h2');
  beerName.textContent = beer.name;
  beerDiv.appendChild(beerName);

  const beerTagLine = document.createElement('h5');
  beerTagLine.textContent = beer.tagline;
  beerDiv.appendChild(beerTagLine);

  const description = document.createElement('p');
  description.textContent = beer.description;
  beerDiv.appendChild(description);

  const foodPairingHeader = document.createElement('h3');
  foodPairingHeader.textContent = `Recommended food pairings with ${beer.name}:`;
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

module.exports = BeerDetailView;
