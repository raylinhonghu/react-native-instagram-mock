/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {Card,CardItem,Thumbnail,Body,Left,Right,Button,Icon} from 'native-base';

const images = {
  "0" : require('./assets/02.png'),
  "1" : require('./assets/03.png'),
  "2" : require('./assets/04.png'),
}

export default class CardComponent extends Component {

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={
              require('./assets/mei.png')}
            />
            <Body>
              <Text> Zero Two </Text>
              <Text note> March 09, 2018</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image source={
            images[this.props.imageSource]}
            style={{height:200,width:null,flex:1}}
          />
        </CardItem>

        <CardItem style={{height:45}}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline" style={{color:'black'}}/>  
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{color:'black'}}/>  
            </Button>
            <Button transparent>
              <Icon name="paper-plane" style={{color:'black'}}/>  
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{height:30,paddingLeft:0}}>
          <Text> {this.props.likes} Likes</Text>
        </CardItem>

        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight:"900"}}>Zero Two</Text>
              Went out with Hiro! We had a lot of fun today!
              <Icon name="heart" style={{color:'red',fontSize:20}}/> 
              <Icon name="heart" style={{color:'red',fontSize:20}}/> 
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
