import DS from 'ember-data';

export default DS.Model.extend({
  attributeA: DS.belongsTo('attribute', {async: true}),
  attributeB: DS.belongsTo('attribute', {async: true}),
  text: DS.attr('string'),
  timeRemaining: null
});
