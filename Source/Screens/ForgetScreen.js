import { Image, ImageBackground, StyleSheet, Dimensions,Platform, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TextInputBase, ToastAndroid, SectionListComponent } from 'react-native'
import React, { useRef, useState } from 'react'
import BackButton from '../Components/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window')
const isSmallScreen = width < 400;

const ForgetScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const timer = "01:59"
    const [Verification, setVerification] = useState(false)
    const [minute, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(59)
    const [code1, setCode1] = useState('');
    const [resendTimer, setResendTimer] = useState(0);
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
    const [email, setEmail] = useState('')
    const [start_timer, setStartTimer] = useState(false)
   var et1 = useRef()
   var et2 = useRef()
   var et3 = useRef()
   var et4 = useRef()

 const handleSubmit = () =>{
    if(email.length ==0){
        ToastAndroid.show('Email cannot be blank!',ToastAndroid.SHORT)
    }else{
       setVerification(true)
    }
 }

 const handleGoBack = () =>{
   setVerification(false)
   navigation.goBack()
 }
 const handleVerify = () =>{
    navigation.navigate('ResetPassword')
    
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
                
               
               {Verification?
               
               (<KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
                >
                    <Text style={{marginTop:80, alignSelf:'center', fontSize:30,fontWeight:'600', color:"#fff"}}>Verification Code</Text>
                     <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
                     <Text style={{color:"#fff"}}>Enter the verification code sent to your  </Text>
                     <Text style={{color:"#fff"}}>registered email.</Text>
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
                    
         

<TouchableOpacity onPress={()=>handleVerify()} style={{width:340, height:50, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>Submit</Text>
</TouchableOpacity>
{code1.length>=1 &&!code4.length>=1?
<Text style={{color:"red", alignSelf:"center", marginTop:10}}>Incorrect verification code, please try again</Text>:null}

   
<View style={{flexDirection:"row",marginTop:15, justifyContent:'center'}}>
                     <Text style={{color:"#fff"}}>Didn't receive the verification code? </Text>
                     <TouchableOpacity onPress={()=>startResendTimer()}>
                        <Text style={{color:"#FDBA31", fontWeight:"600"}}>RESEND</Text>
                     </TouchableOpacity>
                  </View>

                 {start_timer&&  <View style={{flexDirection:'row', justifyContent:"center"}}>
                  <Text style={{color:"#fff", marginTop:10, alignSelf:"center"}}>Resend verification code in </Text>
                  <Text style={{color:"#FDBA31", marginTop:10, alignSelf:"center"}}>0{minute}:{seconds} sec</Text>
                  </View>}
                </KeyboardAvoidingView>)


:
               ( <KeyboardAvoidingView 
                behavior={Platform.OS ==="ios"?"padding":"height"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
                >
                    <Text style={{marginTop:isSmallScreen?"10%":"15%", alignSelf:'center', fontSize:isSmallScreen?25:33,fontWeight:'600', color:"#fff"}}>Forgot Password</Text>
                     <View style={{justifyContent:'center', alignItems:'center', marginTop:isSmallScreen?"8%":"8%"}}>
                     <View style={{backgroundColor:"#fff", height:50, width:340, borderRadius:10, flexDirection:'row'}}>
                          <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                          <Image source={require('../assets/icons/email.png')} style={{height:24, width:24}}/>
                          </View>
                          <TextInput placeholder='Enter your registered email' 
                          placeholderTextColor="#000"
                          style={{fontSize:15, fontWeight:'400', left:10,color:"#000"}}
                           value={email}
                           onChangeText={(value)=>setEmail(value)}
                          />
                          
                       </View>
                   
                     
                     </View>
         

<TouchableOpacity onPress={()=>handleSubmit()} style={{width:340, height:50, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>Submit</Text>
</TouchableOpacity>
                </KeyboardAvoidingView>)
                
                }
               

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
        fontSize:18,
        color:"#032D62"
    }
})