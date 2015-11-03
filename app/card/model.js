import DS from 'ember-data';
const attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  stripe: attr('string'),
  lastFour: attr('number'),
  brand: attr('brand'),
});
