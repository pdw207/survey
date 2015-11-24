import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateTime: function(time) {
      this.set('model.timeRemaining', time);
    }
  }

})
