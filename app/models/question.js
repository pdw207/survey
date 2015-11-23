import DS from 'ember-data';

export default DS.Model.extend({
  //attributes: DS.belongsTo('attribute'),
  //responses: DS.hasMany('response')
  text: DS.attr('string')
});
