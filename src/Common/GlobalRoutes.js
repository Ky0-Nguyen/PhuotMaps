import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import SplashScreen from 'frontend/Screen/SplashScreen'

const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
    <Scene key="splashScreen" component={SplashScreen} initial={true}/>
  </Scene>
)
export default scenes
