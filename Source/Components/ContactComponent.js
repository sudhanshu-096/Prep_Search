import { Dimensions, ScrollView,StyleSheet, Text,TouchableOpacity,TextInput, View, Image, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import BackButton from './BackButton';

const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400;

const ContactComponent = ({contact_me, setContact_Me}) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [query, setQuery] = useState('')
  return (
    <View style={{flex:1, backgroundColor:"#032D62"}}>
  
   <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
   <BackButton bgColor="#FDBA31"color="#000" onPress={()=>{setContact_Me(false)}}/>
      <Text style={{color:"#fff",fontSize:isSmallScreen?22:22, fontWeight:"600", textAlign:"center", marginTop:isSmallScreen?"3%":"3%"}}>Contact Us</Text>
      <Text></Text>
      <Text></Text>
   </View>

   <Text style={{textAlign:"center", marginTop:isSmallScreen?"5%":"5%", fontSize:isSmallScreen?18:20,fontWeight:"600", color:"#FDBA31"}}>Help, Support and Feedback</Text>
   <View style={{justifyContent:"center",alignItems:"center", marginTop:isSmallScreen?"8%":"8%"}}>
      <Image source={require('../assets/images/contact_img.png')} style={{height:isSmallScreen?height*0.30:height*0.20, width:isSmallScreen?width*0.70:width*0.60}} resizeMode='contain'/>
   </View>

     <View style={{alignSelf:"center", marginTop:isSmallScreen?"10%":"10%"}}>

     <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/person.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder='Full Name*' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, flex:1,fontWeight:'400', left:10, color:"#000"}}
       value={fullName}
       onChangeText={(value)=>setFullName(value)}
      />
      
   </View> 

     <View style={{backgroundColor:"#fff",marginTop:isSmallScreen?"5%":"5%", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/email.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder='Enter Email*' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16,flex:1, fontWeight:'400', left:10, color:"#000"}}
       value={email}
       onChangeText={(value)=>setEmail(value)}
      />
      
   </View> 

     <View style={{backgroundColor:"#fff",marginTop:isSmallScreen?"5%":"5%", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/phone.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder='Phone Number*' 
      placeholderTextColor={'black'}
      keyboardType='number-pad'
      style={{fontSize:isSmallScreen?15:16,flex:1, fontWeight:'400', left:10,color:"#000"}}
       value={phoneNumber}
       onChangeText={(value)=>setPhoneNumber(value)}
      />
      
   </View> 

   <View style={{backgroundColor:"#fff", marginTop:isSmallScreen?"5%":"5%", height:isSmallScreen?100:100, width:isSmallScreen?330:350, borderRadius:10,}}>
      <TextInput placeholder='Enter Your Query' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10, color:"#000"}}
       value={query}
       onChangeText={(value)=>setQuery(value)}
      />
      
      
   </View>

   <TouchableOpacity onPress={()=>ToastAndroid.show("Your query submitted successfully. We will contact you shortly",ToastAndroid.SHORT)} style={{width:isSmallScreen?330:350, height:50, marginTop:isSmallScreen?"5%":"5%",borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>Submit</Text>
</TouchableOpacity>

     </View>
 
 
 </View>
  )
}

export default ContactComponent

const styles = StyleSheet.create({})