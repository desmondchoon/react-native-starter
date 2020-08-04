import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export default class Home extends Component {
  render() {
    const { store } = this.props;
    const { generalStore } = store;

    return (
      <View>
        <Text> Home Screen </Text>
        <Text>{ generalStore.hello }</Text>
      </View>
    )
  }
}
