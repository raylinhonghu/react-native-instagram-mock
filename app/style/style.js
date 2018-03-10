var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  groceryTitle:{
    fontSize:20,
    backgroundColor:'red',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    height: 50
  },
  buttonColor:{
    backgroundColor:'green',
    padding:10,
    flex:2
  },
  buttonText:{
    color:'black',
    height:50,
    textAlign:'center',
    textAlignVertical: 'center',
    fontSize:20,
  },
  container:{
    flex:1
  }
});
