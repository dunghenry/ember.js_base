import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  async model() {
    return {
      id: 1,
      title: 'Hello',
    };
  }
}
