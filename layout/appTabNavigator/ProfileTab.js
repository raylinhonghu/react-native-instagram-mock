/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import {Icon,Container,Content,Body,Left,Right,Header,Button, Item} from 'native-base';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import CardComponent from '../CardComponent'


var {width,height} = Dimensions.get('window');

const images = [
  require('../assets/img/1.png'),
  require('../assets/img/2.png'),
  require('../assets/img/3.png'),
  require('../assets/img/4.png'),
  require('../assets/img/5.png'),
  require('../assets/img/6.png'),
  require('../assets/img/7.png'),
  require('../assets/img/8.png'),
  require('../assets/img/9.png'),
  require('../assets/img/10.png'),
  require('../assets/img/11.png'),
  require('../assets/img/12.png'),
]

export default class ProfileTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{color:tintColor}}/>
    ),
  };

  constructor(props){
    super(props)

    this.state = {
      activeIndex:0
    }
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  renderSectionOne = () => {
    return images.map((image,index)=>{
      return (
        <View key={index} style={[
          {width:(width)/3},
          {height:(height)/5},
          index % 3 !==0 ? {paddingLeft:2} : {paddingleft:0},
          {marginBottom:2}
          ]}>
          <Image style={{flex:1, width:undefined, height:undefined}}
          source={image}/>
        </View>
      )
    })
  }

  renderSection = () => {
    if(this.state.activeIndex ==0){
      return(
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          {this.renderSectionOne()}
        </View>
      )
    }else if (this.state.activeIndex ==1){
      return(
        <View>
          <CardComponent imageSource="1" like="40"/>
          <CardComponent imageSource="2" like="220"/>
          <CardComponent imageSource="3" like="120"/>
          <CardComponent imageSource="4" like="300"/>
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={{flex:1, backgroundColor:'white'}}>
        <Header style={{backgroundColor:'white'}}>
          <Left><Icon name="md-person-add" style={{paddingLeft:10}}></Icon></Left>
          <Body style={{marginLeft:110,justifyContent:'center'}}><Text>Profile</Text></Body>
          <Right><EntypoIcon name="back-in-time" style={{paddingRight:10, fontSize:32}}></EntypoIcon></Right>
        </Header>

        <Content style={{paddingTop:10}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:1, alignItems:'center'}}>
              <Image style={{borderRadius:37.7, width:75,height:75}} source={require('../assets/02.png')}/>
            </View>

            <View style={{flex:3}}>
              <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View style={{alignItems:'center'}}>
                    <Text>20</Text>
                    <Text style={{fontSize:10, color:'grey'}}>Posts</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <Text>206</Text>
                  <Text style={{fontSize:10, color:'grey'}}>Followers</Text>
                </View>  
                <View style={{alignItems:'center'}}>  
                  <Text>167</Text> 
                  <Text style={{fontSize:10, color:'grey'}}>Following</Text> 
                </View>
              </View>

              <View style={{flexDirection:'row', paddingTop:10}}>
                <Button bordered dark
                  style={{
                    flex:3,marginLeft:10,borderRadius:10,
                    justifyContent: 'center', height:30
                  }}>
                  <Text>Edit Profile</Text>
                </Button>
                <Button bordered dark
                  style={{
                    flex:1,marginRight:10,borderRadius:10,
                    justifyContent: 'center', height:30
                  }}>
                  <Icon name="settings"/>
                </Button>
              </View>
            </View>
          </View>
          
          <View style={{paddingVertical:10, paddingHorizontal:10}}>
            <Text style={{fontWeight:'bold'}}>Cute Zero Two</Text>
            <Text>Frankxx Manipulator</Text>
            <Text>www.zerotwo.com/</Text>
          </View>

          <View>
            <View style={{flexDirection:'row',
             justifyContent:'space-around',
             borderTopWidth:1, borderTopColor:'#eae5e5'}}>
              <Button
              transparent
              onPress={()=>this.segmentClicked(0)}
              active={this.state.activeIndex==0}>
                <Icon name="ios-apps-outline"
                style={[this.state.activeIndex==0?{}:{color:'grey'}]}></Icon>
              </Button>
              <Button
              transparent
              onPress={()=>this.segmentClicked(1)}
              active={this.state.activeIndex==1}>
                <Icon name="ios-list-outline"
                style={[this.state.activeIndex==1?{}:{color:'grey'}]}></Icon>
              </Button>
              <Button
              transparent
              onPress={()=>this.segmentClicked(2)}
              active={this.state.activeIndex==2}>
                <Icon name="ios-people-outline"
                style={[this.state.activeIndex==2?{}:{color:'grey'}]}></Icon>
              </Button>
              <Button
              transparent
              onPress={()=>this.segmentClicked(3)}
              active={this.state.activeIndex==3}>
                <Icon name="ios-bookmark-outline"
                style={[this.state.activeIndex==3?{}:{color:'grey'}]}></Icon>
              </Button>
            </View>
          </View>

          {this.renderSection()}

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
