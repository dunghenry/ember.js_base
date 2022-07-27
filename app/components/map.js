import Component from '@glimmer/component';
import ENV from 'emberjs/config/environment';

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class MapComponent extends Component {
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
