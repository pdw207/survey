import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('instructions');
  this.resource('questions', function() {
    this.route('show', {path: ':question_id'});
  });
});

export default Router;
