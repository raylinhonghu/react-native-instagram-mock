import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight,
TouchableOpacity} from 'react-native';

export default class Component2 extends Component{

  state = {
    name: 'james'
  }

  onPress = () => {

  }
  render() {
    return(
      <View style={styles.myView}>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this.onPress}
            underlayColor="blue"
            style={styles.v1}>
            <View>
              <Text> {this.state.name}</Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity
            onPress={this.onPress}
            style={styles.v2}>
            <View>
              <Text> View 2</Text>
            </View>
          </TouchableOpacity>
            <View style={styles.v3}>
            <Text style={styles.vtext}> View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor:'blue'
  },
  myText:{
    color:'white'
  },
  container:{
    flexDirection: 'row',
    height:100
  },
  v1:{
    backgroundColor:'red',
    flex:1,
    padding:10
  },
  v2:{
    backgroundColor:'green',
    flex:1,
    padding:10
  },
  v3:{
    backgroundColor:'black',
    flex:1,
    padding:10
  },
  vtext:{
    color:'white'
  }
});

AppRegistry.registerComponent('Component2', () => Component2);
