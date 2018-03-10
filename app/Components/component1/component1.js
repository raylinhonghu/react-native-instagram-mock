import React, {Component} from 'react';
import {AppRegistry, Text, View,Image} from 'react-native';

export default class Component1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Ray',
      showName: false,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hi There'
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let name = this.state.showName ? 'gg' : 'wp';
    return(
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>{this.state.message}|{name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);
