import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class UserItemComponent extends Component {
  @action
  showUser(username) {
    alert(`The person's name is ${username}!`);
  }
}
