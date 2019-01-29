'use strict';

module.exports = function(Car) {
  Car.disableRemoteMethodByName('replaceById');
  Car.disableRemoteMethodByName('replaceOrCreate');
};
