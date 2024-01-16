import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from './BackButton'
import { ScrollView } from 'react-native-virtualized-view';
const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400;

const AboutScreenComponent = ({about_me, setAbout_Me}) => {
  return (
    <View style={{flex:1, backgroundColor:"#032D62",}}>
       <ScrollView contentContainerStyle={{paddingBottom:50}}>
       <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
      <BackButton bgColor="#FDBA31"color="#000" onPress={()=>{setAbout_Me(false)}}/>
         <Text style={{color:"#fff",fontSize:isSmallScreen?22:24, fontWeight:"600", textAlign:"center"}}>About Us</Text>
         <Text></Text>
         <Text></Text>
      </View>
      <Text style={{textAlign:"left",marginStart:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"8%":"10%", fontSize:isSmallScreen?18:20,fontWeight:"600", color:"#FDBA31"}}>Learn about PrepSearch</Text>
      <View style={{marginStart:isSmallScreen?"3%":"3%"}}>
          <Image source={require('../assets/images/about1.png')} style={{height:isSmallScreen?height*0.22:height*0.22, width:isSmallScreen?width*0.93:width*0.95, borderRadius:5}} resizeMode='contain'/>
      </View>
      <View style={{width:width*0.9,alignSelf:"center" }}>
          <Text style={{fontWeight:"400",lineHeight:22, fontSize:isSmallScreen?14:16,color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</Text>
      </View>

      <Text style={{textAlign:"left",marginStart:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"8%":"10%", fontSize:isSmallScreen?18:20,fontWeight:"600", color:"#FDBA31"}}>Lorem ipsum is simply dummy</Text>
      <View style={{marginStart:isSmallScreen?"3%":"3%"}}>
          <Image source={require('../assets/images/about2.png')} style={{height:isSmallScreen?height*0.22:height*0.22, width:isSmallScreen?width*0.93:width*0.95, borderRadius:5}} resizeMode='contain'/>
      </View>
      <View style={{width:width*0.9,alignSelf:"center" }}>
          <Text style={{fontWeight:"400", lineHeight:22, fontSize:isSmallScreen?14:16,color:"#fff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      </View>
       </ScrollView>
    </View>
  )
}

export default AboutScreenComponent

const styles = StyleSheet.create({})