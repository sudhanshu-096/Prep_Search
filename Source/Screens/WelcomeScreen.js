import { Dimensions, Image,Alert,BackHandler, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import BackButton from '../Components/BackButton'
import { useNavigation } from '@react-navigation/native'
import Service from '../../Service/Service'
import AsyncStorage from '@react-native-async-storage/async-storage'


const {height, width} = Dimensions.get('window')
const isSmallScreen = width<400;

const WelcomeScreen = () => {
  useEffect(()=>{
    checkLocalValue()
  },[])
  const checkLocalValue = async() =>{
  let local =  await AsyncStorage.getItem('ONBOARDED');
  console.log('Local Value on Welcome',local)

  }
  const navigation = useNavigation()
  const [selected, setSelected] = useState('Coach')

  const handleCoachFlow =() =>{
    setSelected('Coach')
    Service.selectedFlow ="Coach"
    navigation.navigate('Login',{selectedFlow:selected})
  }

const handleStudentFlow = () =>{
  setSelected('Student');
  Service.selectedFlow ="Student"
 navigation.navigate('Login',{selectedFlow:selected})
}
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
    <BackButton bgColor="#FDBA31" color="#000"/>

          <View style={{ alignItems:"center"}}>
            <Image source={require('../assets/images/splash.png')} style={{marginTop:60, marginBottom:100, width:width*0.7, height:height*0.1}}/>
          </View>

          <ImageBackground source={require('../assets/images/bg.png')} imageStyle={styles.image} >
          <View style={{marginTop:40, alignItems:"center"}}>
              <Text style={{color:"#fff", fontSize:isSmallScreen?30:35,fontWeight:"600" }}>WELCOME!</Text>
           </View>

           <View style={{marginTop:30, justifyContent:"center", alignItems:"center"}}>
             <TouchableOpacity onPress={()=>{handleCoachFlow()}} style={[styles.btn,{backgroundColor:selected=="Coach"?"#FDBA31":"#FFFFFF"}]}>
              <Image source={require('../assets/images/Coach.png')} style={{height:40, width:40}}/>
                 <Text style={{fontWeight:"600", fontSize:18,marginLeft:20, color:"#000"}}>Coach</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{handleStudentFlow()}} style={[styles.btn,{backgroundColor:selected=="Student"?"#FDBA31":"#FFFFFF"}]}>
             <Image source={require('../assets/images/student.png')} style={{height:40, width:40}}/>
                 <Text  style={{fontWeight:"600", fontSize:18, marginLeft:20, color:'#000'}}>Student</Text>
             </TouchableOpacity>
           </View>
          </ImageBackground>

         
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:'white'
    },
     btn:{
        flexDirection:"row",
         height:60,
         width:300,
         justifyContent:"center",
         alignItems:"center",
         marginTop:40,
         borderRadius:10
      },
      image:{
        width:width,
        height:height
      }
})