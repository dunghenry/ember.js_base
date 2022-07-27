import EmberRouter from '@ember/routing/router';
import config from 'emberjs/config/environment';
export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/');
  this.route('scientists');
  this.route('pagenotfound', { path: '*path' });
  this.route('posts');
  this.route('users');
  this.route('rental');
  this.route('detail', { path: 'detail/:id' });
  this.route('rentals');
});
