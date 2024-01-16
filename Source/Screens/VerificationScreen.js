import { Image, ImageBackground, StyleSheet,Modal, Dimensions,Platform, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TextInputBase, ToastAndroid } from 'react-native'
import React, { useRef, useState } from 'react'
import BackButton from '../Components/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import Icon1 from 'react-native-vector-icons/Entypo';
import Service from '../../Service/Service';

import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window')
const isSmallScreen = width < 400;

const ForgetScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const timer = "01:59"
    const [minute, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(59)
    const [code1, setCode1] = useState('');
    const [resendTimer, setResendTimer] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
    const [email, setEmail] = useState('')
    const [start_timer, setStartTimer] = useState(false)
   var et1 = useRef()
   var et2 = useRef()
   var et3 = useRef()
   var et4 = useRef()



 const handleGoBack = () =>{
   navigation.goBack()
 }
 const handleVerify = () =>{
    navigation.navigate('ResetPassword')
    
 }

 const closeModal = () =>{
  setIsModalVisible(false)
 }
 const startResendTimer =() =>{
  setStartTimer(true)
  console.log('1111')
  const intervalRef = setInterval(() => {
     if (seconds > 0) {
       setSeconds(prevTime => prevTime - 1);
       if(seconds==0){
        setSeconds(59)
       }
     } else {
       clearInterval(intervalRef);
     }
   }, 1500);
  
}

    return (
        <View style={styles.container}>
             <BackButton onPress={()=>handleGoBack()} bgColor="#FDBA31" color="#000"/>
            <View style={{ alignItems: "center" }}>
                <Image source={require('../assets/images/splash.png')} style={{ marginTop: 60, marginBottom: 100,width:width*0.7, height:height*0.1 }} />
            </View>

            <ImageBackground source={require('../assets/images/bg.png')} imageStyle={styles.image}  >
                
               
               
               <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
                >
                    <Text style={{marginTop:isSmallScreen?40:50, alignSelf:'center', fontSize:30,fontWeight:'600', color:"#fff"}}>Verification Code</Text>
                     <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                     <Text style={{color:"#fff",fontSize:isSmallScreen?14:16}}>Enter the verification code sent to your  </Text>
                     <Text style={{color:"#fff",fontSize:isSmallScreen?14:16}}>registered email.</Text>
                     <View style={{flexDirection:"row", marginTop:20}}>
                        <TextInput
                         value={code1} 
                         onChangeText={txt => {
                           if (txt.length >= 1) {
                             et2.current.focus()
                             setCode1(txt);
                           }else if(txt.length<1){
                              et1.current.focus()
                              setCode1('')
                           }
                         }} 
                         ref={et1} 
                         style={styles.input} maxLength={1} 
                         keyboardType='number-pad'/>
                        <TextInput
                         value={code2} 
                         onChangeText={txt => {
                           if (txt.length >= 1) {
                             et3.current.focus()
                             setCode2(txt);
                           }else if(txt.length<1){
                              et1.current.focus()
                              setCode2('')
                           }
                         }} 
                         ref={et2}
                         style={styles.input} maxLength={1} 
                         keyboardType='number-pad'/>
                        <TextInput value={code3} 
                        onChangeText={txt => {
                           if (txt.length >= 1) {
                             et4.current.focus()
                             setCode3(txt);
                           }
                           else if(txt.length<1){
                              et2.current.focus()
                              setCode3('')
                           }
                         }} 
                        ref={et3}
                        style={styles.input} maxLength={1} 
                        keyboardType='number-pad'/>
                        <TextInput value={code4}
                         onChangeText={txt => {
                           if (txt.length >= 1) {
                             setCode4(txt);
                           }else if(txt.length<1){
                              et3.current.focus()
                              setCode4('')
                           }
                         }} 
                          ref={et4}
                          style={styles.input} maxLength={1}
                           keyboardType='number-pad'/>
                     </View>
                     </View> 
             

                <View>

                </View>
                    
         

<TouchableOpacity onPress={()=>setIsModalVisible(true)} style={{width:isSmallScreen?330:350, height:50, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>Submit</Text>
</TouchableOpacity>
{code1.length>=1 &&!code4.length>=1?
<Text style={{color:"red", alignSelf:"center", marginTop:10}}>Incorrect verification code, please try again</Text>:null}

   
<View style={{flexDirection:"row",marginTop:20, justifyContent:'center'}}>
                     <Text style={{color:"#fff",fontSize:isSmallScreen?14:14}}>Didn't receive the verification code? </Text>
                     <TouchableOpacity onPress={()=> startResendTimer()}>
                        <Text style={{color:"#FDBA31",fontWeight:"600",fontSize:isSmallScreen?14:14}}>RESEND</Text>
                     </TouchableOpacity>
                  </View>

                 {start_timer && <View style={{flexDirection:'row', justifyContent:"center"}}>
                  <Text style={{color:"#fff",fontSize:isSmallScreen?14:14, marginTop:isSmallScreen?8:10, alignSelf:"center"}}>Resend verification code in </Text>
                  <Text style={{color:"#FDBA31",fontSize:isSmallScreen?14:14, marginTop:isSmallScreen?8:10, alignSelf:"center"}}>0{minute}:{seconds} sec</Text>
                  </View>}
                </KeyboardAvoidingView>


                <Modal
            animationType="slide"
            visible={isModalVisible}
            transparent={true}
            onRequestClose={closeModal}>
            <View
              style={{
                // backgroundColor: 'black',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                
            
              }}>
              <View
                style={{

                  backgroundColor: 'white',
                  padding: 39,
                  borderRadius: 15,
                  width: isSmallScreen ? width*0.9  : width * 0.87,
                  marginTop: -height * 0.09,
               
                }}>
                <View style={{ alignSelf: 'flex-end', }}>
                  <Icon1
                    onPress={closeModal}
                    name="cross"
                    size={30}
                    color="grey"
                  />
                </View>
                
                <Image
                  style={{
                    width: isSmallScreen ? width * 0.3 : width * 0.3,
                    height: height * 0.2,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    marginTop: -30,
                  }}
                  source={require('../assets/images/ResetIcon.png')}
                />
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 25,
                    textAlign: 'center',
                    color: '#000000',
                  }}>
                  Successful
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color:"#000",
                    top:'5%',
                    fontSize: isSmallScreen?16:18,
                    fontWeight: '400',
                  }}>
                  Your account has been created {'\n'} successfully.
                </Text>
                <TouchableOpacity
                onPress={()=>{Service.selectedFlow =="Coach"?navigation.navigate('CreateProfile'):navigation.navigate('StudentProfile')}}
                  style={{
                    alignSelf: 'center',
                    marginTop:'15%',
                    backgroundColor: '#032D62',
                    height: 50,
                    borderRadius: 10,
                    width: isSmallScreen ? width * 0.7 : width * 0.4,
                    justifyContent: 'center',

                  }}
                 >
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: isSmallScreen?16:18,
                      fontWeight: 'bold',
                    }}>
                    Ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
               

            </ImageBackground>


        </View>
    )
}

export default ForgetScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    btn: {
        flexDirection: "row",
        height: 60,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        borderRadius: 10
    },
    image:{
        width:width,
        height:height,
    },
    input:{
        height:50,
        width:50,
        backgroundColor:"#fff",
        borderRadius:10,
        margin:10,
        textAlign:"center",
        fontSize:isSmallScreen?14:16,
        color:"#032D62"
    }
})