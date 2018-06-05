import {StyleSheet, Platform, Dimensions} from 'react-native'
import {width} from 'react-native-dimension'

const ISIOS = Platform.OS === 'ios'
const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const isIphoneX = ISIOS && (deviceHeight === 812 || deviceWidth === 812)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isIphoneX ? 30 : ISIOS ? 20 : 0
  },
  containerHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  containerContent: {
    flex: 9,
    flexDirection: 'column'
  },
  txtTitle: {
    fontSize: width(6),
    fontWeight: 'bold'
  },
  containerTitle: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'green'
  },
  containerLeft: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  containerRight: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
})
export default styles
