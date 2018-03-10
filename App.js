import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './layout/HomeScreen';

const AppStackNavigator = StackNavigator({
  Home: {
    screen: HomeScreen
  }
})


export default class MyApp extends Component{

  render() {
    return(
      <AppStackNavigator/>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
