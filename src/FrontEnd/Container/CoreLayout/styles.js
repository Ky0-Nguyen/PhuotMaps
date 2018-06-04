import {StyleSheet} from 'react-native'
import {width} from 'react-native-dimension'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: width(3)
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
