import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr('date'),
  answer: DS.attr('value')
});
