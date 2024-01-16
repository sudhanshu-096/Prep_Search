import { Image, ImageBackground, StyleSheet, Dimensions,Platform, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TextInputBase } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Checkbox } from 'react-native-paper';
import BackButton from '../Components/BackButton';
import Service from '../../Service/Service';
const { width, height } = Dimensions.get('window')
const isSmallScreen = width < 400;

const SignUpScreen = () => {
    const navigation = useNavigation()

    const[name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const [checked, setChecked] = useState(false)
    const [signup, setSignup] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const [isCoach, setIsCoach] = useState(false)

    
const handleSignup = async() =>{ 
    navigation.navigate('Verification')  
}
    return (
        <View style={styles.container}>
            <BackButton onPress={()=>navigation.goBack()} bgColor="#FDBA31" color="#000"/>

            <View style={{ alignItems: "center" }}>
                <Image source={require('../assets/images/splash.png')} style={{ marginTop: 40, marginBottom:60,width:width*0.7, height:height*0.1}} />
            </View>

            <ImageBackground source={require('../assets/images/bg.png')} imageStyle={styles.image}  >
                <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
                >
                    <Text style={{marginTop:isSmallScreen?30:40, alignSelf:'center', fontSize:isSmallScreen?25:30,fontWeight:'600', color:"#fff"}}>Sign Up</Text>
                     <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>

                     <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:370, borderRadius:10, flexDirection:'row'}}>
                          <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                          <Image source={require('../assets/icons/person.png')} style={{height:24, width:24}}/>
                          </View>
                          <TextInput 
                          placeholder='Name'
                          value={name}
                          onChangeText={(txt)=>setName(txt)}
                          placeholderTextColor={'black'}
                          style={{fontSize:15, fontWeight:'400', left:10}}/>
                          
                       </View>
                     <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:370,marginTop:20, borderRadius:10, flexDirection:'row'}}>
                          <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                          <Image source={require('../assets/icons/email.png')} style={{height:24, width:24}}/>
                          </View>
                          <TextInput placeholder='Email'
                          value={email}
                          onChangeText={(txt)=>setEmail(txt)}
                           placeholderTextColor={'black'} 
                           style={{fontSize:15, fontWeight:'400', left:10}}/>
                          
                       </View>
                     <View style={{backgroundColor:"#fff", height:50, marginTop:20,width:isSmallScreen?330:370, borderRadius:10, flexDirection:'row'}}>
                          <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                          <Image source={require('../assets/icons/lock.png')} style={{height:24, width:24}}/>
                           
                          </View>
                          <TextInput placeholder='Password' 
                          value={password}
                          onChangeText={(txt)=>setPassword(txt)}
                          placeholderTextColor={'black'}
                          style={{fontSize:15, fontWeight:'400', left:10}}
                           secureTextEntry={!showPassword}
                          />
                          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ position: "absolute", right: '5%', top:'30%' }} >
            {showPassword ? (
              <FeatherIcon name="eye" size={20} color="black"/>
            ) : (
              <FeatherIcon name="eye-off" size={20} color="black"/>
            )}
          </TouchableOpacity>
                       </View>
                       <Text style={{color:"red"}}>{passwordError}</Text>
                         
                     
                     </View>
                     <View style={{ flexDirection: "row",alignSelf:'center', alignItems: 'center',marginTop:isSmallScreen?8:10}}>
 
</View>

<TouchableOpacity onPress={()=>handleSignup()} style={{width:isSmallScreen?330:370, height:50, marginTop:isSmallScreen?3:5,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>Sign Up</Text>
</TouchableOpacity>

<View style={{ borderRadius: 10,marginStart:'4%',marginTop:isSmallScreen?"4%":"4%", flexDirection:'row' }}>
<Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color={checked?"#FDBA31":"transparent"}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{marginTop:isSmallScreen?"2%":"2%",fontSize:isSmallScreen?14.5:14.5, color:'#fff'}}>By signing up you agree to our </Text> 
    <Text  onPress={()=>navigation.navigate('T&C')} style={{marginTop:isSmallScreen?8:10, fontSize:isSmallScreen?13:13, color:'#FDBA31', textDecorationLine:'underline'}}>Terms & Conditions.</Text>
     </View>


<View style={{flexDirection:"row",justifyContent:"center", alignSelf:"center", marginTop:isSmallScreen?"5%":"12%"}}>
   <Text style={{fontWeight:"400",fontSize:isSmallScreen?14:16, color:"#fff"}}>Already have an account? </Text>
   <Text style={{fontWeight:"600",fontSize:isSmallScreen?14:16, color:"#FDBA31"}} onPress={()=>navigation.navigate('Login')}>Log In</Text>
</View>

{
    Service.selectedFlow=="Coach"?
    
    <View style={{flexDirection:"row",justifyContent:"center", alignSelf:"center", marginTop:15}}>
   <Text style={{fontSize:isSmallScreen?14:16, color:"#fff"}}>Are you a {isCoach?"coach":"student"}? </Text>
   <Text style={{fontSize:isSmallScreen?14:16, textDecorationLine:"underline",  color:"#FDBA31"}} onPress={()=>setIsCoach(!isCoach)}>Sign Up</Text>
   <Text style={{fontSize:isSmallScreen?14:16, color:"#fff", marginLeft:5}}>as a {isCoach?"coach":"student"}</Text>
</View>:

<View style={{flexDirection:"row",justifyContent:"center", alignSelf:"center", marginTop:15}}>
   <Text style={{fontSize:isSmallScreen?14:16, color:"#fff"}}>Are you a coach? </Text>
   <Text style={{fontSize:isSmallScreen?14:16, textDecorationLine:"underline",  color:"#FDBA31"}} onPress={()=>setIsCoach(!isCoach)}>Sign Up</Text>
   <Text style={{fontSize:isSmallScreen?14:16, color:"#fff", marginLeft:5}}>as a coach</Text>
</View>
}
                </KeyboardAvoidingView>

            </ImageBackground>


        </View>
    )
}

export default SignUpScreen

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
    }
})