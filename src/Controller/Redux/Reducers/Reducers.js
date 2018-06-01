import createReducer from '../Lib/reducerConfig'
import key from '../Lib/constants'
import init from '../Lib/initState'

export const internetData = createReducer(init.internetInit, {
  [key.SET_INTERNET] (state, action) {
    return action.payload
  }
})
