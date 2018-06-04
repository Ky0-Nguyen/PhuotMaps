import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

export default class CoreLayout extends Component {
  static defaultProps ={
    title: 'PhuotMaps',
    leftAction: undefined,
    rightAction: undefined
  }
  static propTypes ={
    title: PropTypes.string,
    leftAction: PropTypes.func,
    rightAction: PropTypes.func
  }

  render () {
    const {title, children, CustomHeader, leftAction, rightAction} = this.props
    return (
      <View style={styles.container}>
        {
          CustomHeader ||
          <View style={styles.containerHeader}>
            {
              leftAction &&
              <TouchableOpacity onPress={leftAction}>
                <View style={styles.containerLeft}>
                  <Text>{'left'}</Text>
                </View>
              </TouchableOpacity>
            }
            <View style={styles.containerTitle}>
              <Text style={styles.txtTitle}>{title.toUpperCase()}</Text>
            </View>
            {
              rightAction &&
              <TouchableOpacity onPress={rightAction}>
                <View style={styles.containerRight}>
                  <Text>{'right'}</Text>
                </View>
              </TouchableOpacity>
            }
          </View>
        }
        <View style={styles.containerContent}>
          {children}
        </View>
      </View>
    )
  }
}
