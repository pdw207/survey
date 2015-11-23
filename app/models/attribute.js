import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  text: DS.attr('string'),
  question: DS.belongsTo('question')
});
