const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function(){
   park = new Park('Jurassic Park', 30);
   tRex = new Dinosaur('t-rex', 'carnivore', 50);
   raptor = new Dinosaur('raptor', 'carnivore', 20);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection',function(){
    park.addToCollection(tRex);
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addToCollection(tRex);
    park.addToCollection(raptor);
    park.removeFromCollection();
    const actual = park.collectionOfDinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addToCollection(tRex);
    park.addToCollection(raptor);
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, tRex)
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');
});
