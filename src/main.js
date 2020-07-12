import React, {Component} from 'react';

import store from './redux/store';
import AppContainer from './AppContainer';
export default class Root extends Component {
  renderApp() {
    return <AppContainer store={store} />;
  }

  render() {
    return this.renderApp();
  }
}
