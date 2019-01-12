const BeerDetailView = function(){

}

BeerDetailView.prototype.createBeerDetail = function(beer){
  const beerDiv = document.createElement('div');

  const beerHeader = document.createElement('h2');
  beerHeader.textContent = `Beers first brewed in ${beer.first_brewed.slice(3)}:`;
  beerDiv.appendChild(beerHeader);

  const beerName = document.createElement('h3');
  beerName.textContent = beer.name;
  beerDiv.appendChild(beerName);

  const description = document.createElement('p');
  description.textContent = beer.description;
  beerDiv.appendChild(description);

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
