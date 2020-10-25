import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginLeft: 15,
      fontSize: 16,
    },
    photo: {
      height: 80,
      width: 80,
      resizeMode: 'contain',
      borderColor: '#BDBDBD',
      borderWidth: 1,    
    },
});

const QueueRow = (props) => {
  return(
      <TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text>{props.partNumber}</Text>
                  <Text>{props.description}</Text>
                  <Text style={{opacity: 0.7}}>Additional notes about the item</Text> 
              </View>
              <Image style={styles.photo} source={
                  props.primaryPhoto?
                  {uri:  props.primaryPhoto} : require('../../assets/noImage.png')
              }/>            
          </View>
      </TouchableOpacity>
  )

}

export default QueueRow
