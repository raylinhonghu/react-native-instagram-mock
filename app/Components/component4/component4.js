import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList, StyleSheet} from 'react-native';



export default class Component4 extends Component{

  render() {
    return(
      <View>
        <FlatList
          data = {[
          { name : ' Aray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Bray'},
          { name : ' Ccray'},
          { name : ' Dray'},
        ]}
        renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:22
  },
  item:{
    padding: 10,
    fontSize: 18,
    height:44
  }
})

AppRegistry.registerComponent('Component4', () => Component4);
