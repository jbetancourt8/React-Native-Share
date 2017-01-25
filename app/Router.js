import React, { Component } from 'react';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';
import ShareScreen from './containers/ShareScreen';
import ContactSelectionScreen from './containers/ContactSelectionScreen';
import PhotoSelectionScreen from './containers/PhotoSelectionScreen';

class RouterComponent extends Component {
  render() {
    return (
      <Router sceneStyle={styles.sceneStyle}>

        <Scene key="main">

          <Scene
            key="shareScreen"
            component={ShareScreen}
            initial
            hideNavBar
          />
          <Scene
            key="contactselection"
            component={ContactSelectionScreen}
            hideNavBar
          />
          <Scene
            key="photoselection"
            component={PhotoSelectionScreen}
            hideNavBar
          />

        </Scene>

      </Router>
    );
  }
}

const styles = {
  sceneStyle: {
    flex: 1
  }
};

export default RouterComponent;
