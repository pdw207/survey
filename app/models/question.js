import DS from 'ember-data';

export default DS.Model.extend({
  questionText: DS.attr('string'),
  //attributes: DS.belongsTo('attribute'),
  //responses: DS.hasMany('response')
});
