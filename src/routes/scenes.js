import React from 'react';
import {Actions, Scene, Router, Stack} from 'react-native-router-flux';
import HomeContainer from './Home/containers/HomeContainer';
// import TrackDriverContainer from "./TrackDriver/container/TrackDriverContainer";

const scenes = Actions.create(
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="home" component={HomeContainer} title="home" initial />
      {/* <Scene key="trackDriver" component={TrackDriverContainer} title="trackDriver"/> */}
    </Stack>
  </Router>,
);

export default scenes;
