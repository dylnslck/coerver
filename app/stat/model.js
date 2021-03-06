import DS from 'ember-data';
const attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  weight: attr('number'),
});
