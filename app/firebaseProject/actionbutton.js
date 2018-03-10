import React, {Component} from 'react';
import {AppRegistry, Text, View, Button,TouchableHighlight, StyleSheet} from 'react-native';

var s = require('../style/style')

export default class ActionButton extends Component{
  constructor(props){
    super(props);
    this.state = {count:0};
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  render(){
    return (
      <View style={s.container}>
        <TouchableHighlight
          style={s.button}
          onPress={this.onPress}>
          <Text> Touch here </Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const s = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10
  },

})

AppRegistry.registerComponent('ActionButton', () => ActionButton);
