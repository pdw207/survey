import Ember from 'ember';

export default Ember.Controller.extend({
  timeRemaining: null,
  actions: {
    updateTime: function(time) {
      console.log(time);
      this.set('timeRemaining', time);
    }
  }

})
