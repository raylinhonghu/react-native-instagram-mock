import React, {Component} from 'react';
import {AppRegistry, Text, View,StyleSheet} from 'react-native';
var s = require('../style/style')

export default class StatusBar extends Component{

  render() {
    return(
      <View>
        <Text style={s.groceryTitle}> Grocery List </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('StatusBar', () => StatusBar);
