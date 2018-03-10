/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import {Icon, Container, Content, Thumbnail, Header, Left, Right,Body} from 'native-base';
import CardComponent from '../CardComponent';

export default class HomtTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{color:tintColor}}/>
    ),
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor:'white'}}>
          <Left><Icon name="ios-camera-outline" style={{paddingLeft:10}}></Icon></Left>
          <Body style={{marginLeft:110,justifyContent:'center'}}><Text>Instagram</Text></Body>
          <Right><Icon name="ios-send-outline" style={{paddingRight:10}}></Icon></Right>
        </Header>
        <Content>
          <View style={{height: 100}}>
           <View style={{flex:1,flexDirection:'row',
           justifyContent:'space-between',
           alignItems:'center',
           paddingHorizontal: 7}}>
            <Text style={{fontWeight: 'bold'}}>Stories</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon name="md-play" style={{fontSize:14}}></Icon>
              <Text style={{fontWeight: 'bold'}}>Watch All</Text>
            </View>
            
           </View>
           <View style={{flex:3}}>
            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems:'center',
                paddingStart:5,
                paddingEnd: 5
              }}
            >
              <Thumbnail source={
                require('../assets/story/1.png')
              }
              style={{
                marginHorizontal:5,
                borderColor:'pink',
                borderWidth:2
              }}
              />
              <Thumbnail source={
                require('../assets/story/2.png')
              }
              style={{
                marginHorizontal:5,
                borderColor:'pink',
                borderWidth:2
              }}
              />
              <Thumbnail source={
                require('../assets/story/3.png')
              }
              style={{
                marginHorizontal:5,
                borderColor:'pink',
                borderWidth:2
              }}
              />
              <Thumbnail source={
                require('../assets/story/4.png')
              }
              style={{
                marginHorizontal:5,
                borderColor:'pink',
                borderWidth:2
              }}
              />
              <Thumbnail source={
                require('../assets/story/5.png')
              }
              style={{
                marginHorizontal:5,
                borderColor:'pink',
                borderWidth:2
              }}
              />
              <Thumbnail source={
                require('../assets/story/6.png')
              }
              style={{
                marginHorizontal:5,
                borderColor:'pink',
                borderWidth:2
              }}
              />
              <Thumbnail source={
                require('../assets/story/7.png')
              }
              style={{
                marginHorizontal:5,
                borderColor:'pink',
                borderWidth:2
              }}
              />
              <Thumbnail source={
                require('../assets/story/8.png')
              }
              style={{
                marginHorizontal:5,
                borderColor:'pink',
                borderWidth:2
              }}
              />

            </ScrollView>
           </View>
          </View>
          <CardComponent imageSource="0" likes="1.3M"/>
          <CardComponent imageSource="1" likes="9,900"/>
          <CardComponent imageSource="2" likes="2.1M"/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
});
