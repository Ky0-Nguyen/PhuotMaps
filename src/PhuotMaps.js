import React, { PureComponent } from 'react'

import GlobalRoutes from 'common/GlobalRoutes'
import { Router } from 'react-native-router-flux'

import { Provider, connect } from 'react-redux'
const RouterWithRedux = connect()(Router)
export default class PhuotMaps extends PureComponent {
  render () {
    return (
      <Provider store={storeRedux}>
        <RouterWithRedux scenes={GlobalRoutes}/>
      </Provider>
    )
  }
}
