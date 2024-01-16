import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {height, width} = Dimensions.get('window')
const isSmallScreen = width<400;

const BackButton = ({onPress,bgColor,color}) => {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:bgColor}]} onPress={onPress}>
      <Icon name="arrow-left" size={25} color={color} style={{marginLeft:10, marginBottom:8}}/>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        height:height*0.07,
        width:width*0.15,
        borderBottomRightRadius:100,
        justifyContent:'center',
      
    }
})