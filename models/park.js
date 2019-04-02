const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = []
};

Park.prototype.addToCollection = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.removeFromCollection = function(){
  this.collectionOfDinosaurs.pop();
};

Park.prototype.mostPopularDinosaur = function(){
  let mostPopular;
  let popularity = 0;
  for (dinosaur of this.collectionOfDinosaurs){
  if ( dinosaur.guestsAttractedPerDay > popularity){
    popularity = dinosaur.guestsAttractedPerDay
    mostPopular = dinosaur}
  }
  return mostPopular
};

module.exports = Park;
