import Route from '@ember/routing/route';
import axios from 'axios';
const getData = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export default class UsersRoute extends Route {
  async model() {
    return await getData();
  }
}
