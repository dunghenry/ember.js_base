import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RentalsRoute extends Route {
  @service store;
  async model() {
    let response = await fetch(`/api/rentals.json`);
    let { data } = await response.json();
    return data[0];
  }
}
