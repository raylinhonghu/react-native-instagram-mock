import React, {Component} from 'react';
import {AppRegistry, Text, View,Navigator} from 'react-native';


export default class Component5 extends Component{

  render() {
    return(
      <Navigator
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route,routeStack) => Navigator.SceneConfigs.Float}
      />
    );
  }
}

AppRegistry.registerComponent('Component5', () => Component5);
