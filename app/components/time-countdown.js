import Ember from 'ember';

export default Ember.Component.extend({
  className: ['question__time-remaining'],
  remainingTime: 20,
  willInsertElement() {
    var self = this,
    interval = window.setInterval(function() { self.tick.call(self); }, 1000);
    this.set('interval', interval);
  },
  tick: function() {
    Ember.run(this, function() {
      this.decrementProperty('remainingTime');
      this.sendAction('action', this.get('remainingTime'));
    });
  },
  willDestroy: function() {
    window.clearInterval(this.get('interval'));
  },
});
