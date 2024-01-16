import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import BackButton from './BackButton'
import { ScrollView } from 'react-native-virtualized-view';
const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400;

const PrivacyComponent = ({privacy, setPrivacy}) => {
  return (
    <View style={{flex:1, backgroundColor:"#032D62"}}>
  <ScrollView contentContainerStyle={{paddingBottom:50}}>
  <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
   <BackButton bgColor="#FDBA31"color="#000" onPress={()=>{setPrivacy(false)}}/>
      <Text style={{color:"#fff",fontSize:isSmallScreen?22:24, fontWeight:"600", textAlign:"center"}}>Privacy Policy</Text>
      <Text></Text>
      <Text></Text>
   </View>

   <Text style={{textAlign:"left",marginStart:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"8%":"10%", fontSize:isSmallScreen?18:20,fontWeight:"600", color:"#FDBA31"}}>Policy Rules</Text>

   <View style={{width:width*0.83,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16, textAlign:"justify",color:"#fff", lineHeight:22}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
           </Text>
      </View>

      <Text style={{textAlign:"left",marginStart:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"8%":"10%", fontSize:isSmallScreen?18:20,fontWeight:"600", color:"#FDBA31"}}>Community Guidelines</Text>
 
      <View style={{width:width*0.83,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16, textAlign:"justify",color:"#fff", lineHeight:22}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
           </Text>
      </View>
      <Text style={{textAlign:"left",marginStart:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"8%":"10%", fontSize:isSmallScreen?18:20,fontWeight:"600", color:"#FDBA31"}}>Accessing the Service</Text>
 
      <View style={{width:width*0.83,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16, textAlign:"justify",color:"#fff", lineHeight:22}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
           </Text>
      </View>
  </ScrollView>
 </View>
  )
}

export default PrivacyComponent

const styles = StyleSheet.create({})