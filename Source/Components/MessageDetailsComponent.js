import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React,{useState, useEffect} from 'react'
import BackButton from './BackButton'
import Octicons from 'react-native-vector-icons/Octicons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Service from '../../Service/Service';
import { GiftedChat } from 'react-native-gifted-chat';
import { dummyMessages } from '../Constants';



const {height, width} = Dimensions.get('window');
console.log("height",height)
console.log("width",width)
const isSmallScreen = width<400;

const MessageDetailsComponent = ({messageDetails, setMessage_Details}) => {

  const [messages, setMessages] = useState(dummyMessages)

  const handleMessages = () =>{
    console.log("Item added")
  }

 
  return (
    <View>
        <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
      <BackButton bgColor="#FDBA31" color="#000" onPress={()=>setMessage_Details(false)}/>
      </View>

      <View style={{marginLeft:isSmallScreen?"8%":"8%", flexDirection:"row"}}>
      <View style={{height:isSmallScreen?36:48,width:isSmallScreen?36:48,borderColor:"#FDBA31", borderWidth:2,borderRadius:50, marginTop:isSmallScreen?"5%":"3%" }}>
                <Image source={Service.mesages} style={{height:isSmallScreen?35:45,width:isSmallScreen?35:45,borderRadius:50 }} resizeMode='cover'/>
                <View style={{height:isSmallScreen?10:10, width:isSmallScreen?10:10, backgroundColor:"#27AE60",borderRadius:50, position:"absolute", top:"20%", left:"90%"}}/>

  </View>
  <View style={{marginLeft:isSmallScreen?"5%":"5%",marginTop:isSmallScreen?"8%":"3%"}}>
    <Text style={{fontWeight:"500",color:"#fff", fontSize:isSmallScreen?16:18}}>Brian</Text>
    <Text style={{fontWeight:"500",color:"#FDBA31",fontSize:isSmallScreen?12:14}}>Active today</Text>
  </View>
      </View>

      <View  style={{height:1, marginStart:"5%", width:"90%",justifyContent:"center",alignItems:"center",marginTop:isSmallScreen?"5%":"8%",alignItems:"center", backgroundColor:"#FDBA31",}}/>
        <View style={{backgroundColor:"#FDBA31",width:"30%",borderRadius:30,height:35,marginTop:"-4%",justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
          <Text style={{color:"#032D62", fontSize:isSmallScreen?12:14}}>Thursday</Text>
        </View>
     

      <KeyboardAvoidingView 
      style={{height:height*0.698, width:"100%", backgroundColor:"#032D62"}}
      behavior={Platform.OS === 'ios' ? "padding" : ""}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
    <ScrollView bounces={false}
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{paddingBottom:10}}
    >
      {
        messages.map((message, index)=>{
            if(message.role =="Student"){
              return(
                <View style={{flexDirection:"row",marginStart:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"8%":"10%"}} key={index}>
                  <View style={{marginTop:isSmallScreen?"5%":"5%"}}>
                     <Image source={require('../assets/images/settings_profile.png')} style={{height:isSmallScreen?35:45,width:isSmallScreen?35:45, borderRadius:50,}}/>
                  </View>
                <View style={{backgroundColor:"#fff",borderTopLeftRadius:30,borderTopRightRadius:30, borderBottomRightRadius:30, padding:isSmallScreen?15:25, marginStart:"3%"}}>
                
                <Text style={{color:"#000"}}>{message.content}</Text>
                <Text  style={{color:"#000", alignSelf:"flex-end"}}>{message.time}</Text>
                </View>
               
                </View>
              )
            }else{
              return(
                <View style={{flexDirection:"row",marginStart:isSmallScreen?"5%":"5%",marginTop:isSmallScreen?"5%":"5%", justifyContent:"flex-end", marginEnd:isSmallScreen?"8%":"10%"}}>
                <View style={{marginTop:isSmallScreen?"5%":"5%"}}>
                     <Image source={require('../assets/images/settings_profile.png')} style={{height:isSmallScreen?35:45,width:isSmallScreen?35:45, borderRadius:50,}}/>
                  </View>
                <View style={{backgroundColor:"#FDBA31",borderTopLeftRadius:20,borderBottomLeftRadius:20, borderBottomRightRadius:20, padding:isSmallScreen?15:25, marginStart:isSmallScreen?"3%":"3%"}}>
                  
                   <Text style={{color:"#032D62"}}>{message.content}</Text>
                   <Text  style={{color:"#000", alignSelf:"flex-end"}}>{message.time}</Text>
                </View>
                </View>
              )
            }
        })
      }
       
      
    </ScrollView>
    
    <View style={{height:isSmallScreen?50:70,flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:isSmallScreen?"85%":"90%",borderRadius:40, marginStart:isSmallScreen?"5%":"5%",backgroundColor:"#fff", marginBottom:isSmallScreen?"5%":"2%"}}>
         <View style={{flexDirection:"row", }}>
         <TouchableOpacity style={{height:isSmallScreen?35:40,marginStart:"3%",marginTop:isSmallScreen?"5%":"3%",justifyContent:"center",borderRadius:20,alignItems:"center",width:isSmallScreen?35:40, backgroundColor:"#032D62"}}>
          <Octicons  name="smiley"
    
              size={isSmallScreen ? 22 : 24}
              color= '#fff'/>
          </TouchableOpacity>

          <TextInput placeholder='Send a message' placeholderTextColor="#000" style={{color:"#000"}}/>
         </View>

          
          <IonIcons  name="send-sharp"
          onPress={()=>handleMessages()}
     style={{marginEnd:"5%"}}
              size={isSmallScreen ? 22 : 24}
              color= '#032D62'/>
         
    </View>
      </KeyboardAvoidingView>
      


    </View>
  )
}

export default MessageDetailsComponent

const styles = StyleSheet.create({
  
})