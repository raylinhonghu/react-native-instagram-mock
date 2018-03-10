import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native';


export default class Component3 extends Component{

  constructor(){
    super();
    this.state = {
      textValue : 'hello',
      switchValue: false
    }
  }

  changetxt(event){
    this.setState({
      textValue:event.nativeEvent.text
    })
  }

  changehandle(tt){
    this.setState({
      textValue:tt
    })
  }

  submithandle(){
    this.setState({
      textValue:"on no"
    })
  }

  onSwitchChange(value){
    this.setState({
      switchValue:value
    })
  }

  render() {
    return(
      <View>
        <TextInput
        value={this.state.val}
        placeholder="Enter Text1"
        onChange={this.changetxt.bind(this)}/>

        <TextInput
        value={this.state.val}
        placeholder="Enter Text2"
        onChangeText={this.changehandle.bind(this)}/>

        <TextInput
        value={this.state.val}
        placeholder="Enter Text3"
        onSubmitEditing={this.submithandle.bind(this)}/>

        <Text> {this.state.switchValue?"1":"2"} </Text>

        <Switch
          value={this.state.switchValue}
          onValueChange={(value)=>this.onSwitchChange(value)}
        />
      </View>
    );

  }
}

AppRegistry.registerComponent('Component3', () => Component3);
