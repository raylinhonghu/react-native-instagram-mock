import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import {Icon} from 'native-base';
import {TabNavigator} from 'react-navigation';

import HomeTab from './appTabNavigator/HomeTab';
import SearchTab from './appTabNavigator/SearchTab';
import ProfileTab from './appTabNavigator/ProfileTab';
import AddMediaTab from './appTabNavigator/addMediaTab';
import LikeTab from './appTabNavigator/LikeTab';

const AppTabNavigator = TabNavigator({
  ProfileTab:{
    screen: ProfileTab
  },
  HomeTab: {
    screen: HomeTab
  },
  SearchTab:{
    screen: SearchTab
  },
  AddMediaTab:{
    screen: AddMediaTab
  },
  LikeTab:{
    screen: LikeTab
  },

},{
  animationEabled: true,
  swipeEnabled :true,
  tabBarPosition:'bottom',
  tabBarOptions:{
    style:{
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel:false,
    showIcon:true
  }
})

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AppTabNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
