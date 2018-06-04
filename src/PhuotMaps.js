import React, { PureComponent } from 'react'

import scenes from 'common/GlobalRoutes'
import { Router } from 'react-native-router-flux'

import { Provider, connect } from 'react-redux'
import storeRedux from 'controller/Redux/Store/configureStore'

const RouterWithRedux = connect()(Router)
export default class PhuotMaps extends PureComponent {
  render () {
    return (
      <Provider store={storeRedux}>
        <RouterWithRedux scenes={scenes}/>
      </Provider>
    )
  }
}
