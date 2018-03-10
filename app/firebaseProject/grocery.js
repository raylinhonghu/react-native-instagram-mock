import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import ListView from './listview';
import ListItem from './listitem';
import StatusBar from './statusbar';
import ActionButton from './actionbutton';

export default class GroceryApp extends Component{

  onPressHandle = () => {

  }

  render() {
    return(
      <View>
        <StatusBar/>
        <ListView/>
        <ListItem/>
        <ActionButton />
      </View>
    );
  }
}


AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
