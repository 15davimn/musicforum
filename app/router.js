import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-up');
  this.route('create');
  this.route('list');
  this.route('thread');
  this.route('post', { path: 'thread/:thread_id'});
});

export default Router;
