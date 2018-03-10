/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Icon} from 'native-base';

export default class LikeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="heart" style={{color:tintColor}}/>
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LikeTab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
