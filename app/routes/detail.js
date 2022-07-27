import Route from '@ember/routing/route';
import axios from 'axios';
export default class DetailRoute extends Route {
  async model(params) {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${params.id}`
    );
    return {
      data: res.data,
    };
  }
}
