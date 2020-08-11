import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'mobx-react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
  Hello
} from './views'
import Store from './store';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
         <Provider store={Store}>
          <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    )
  }
}
