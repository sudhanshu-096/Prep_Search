import { Image, ImageBackground, StyleSheet, Dimensions,Platform, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TextInputBase } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackButton from '../Components/BackButton'
import { useNavigation,useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Service from '../../Service/Service';

const { width, height } = Dimensions.get('window')
const isSmallScreen = width < 400;

const LoginScreen = () => {


    const navigation = useNavigation()
    const route = useRoute()
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [checked, setChecked] = useState(false)
    const [isCoach, setIsCoach] = useState(false)
   

  
    return (
        <View style={styles.container}>
        
         
         <>
            <View style={{ alignItems: "center" }}>
                <Image source={require('../assets/images/splash.png')} style={{ marginTop: 60, marginBottom: 100,width:width*0.7, height:height*0.1 }} />
            </View>

            <ImageBackground source={require('../assets/images/bg.png')} imageStyle={styles.image}  >
                <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
                >
                    
                  <Text style={{marginTop:isSmallScreen?60:70, alignSelf:'center', fontSize:30,fontWeight:'600', color:"#fff"}}>Log In</Text>
               
                
                <View style={{justifyContent:'center', alignItems:'center', marginTop:isSmallScreen?20:40}}>
                     <View style={{backgroundColor:"#fff", height:50, width:340, borderRadius:10, flexDirection:'row'}}>
                          <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                          <Image source={require('../assets/icons/email.png')} style={{height:24, width:24}}/>
                          </View>
                          <TextInput placeholder='Email' 
                          placeholderTextColor={'black'}
                          style={{fontSize:15, fontWeight:'400', left:10}}
                           value={email}
                           onChangeText={(value)=>setEmail(value)}
                          />
                          
                       </View>
                     <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:340, borderRadius:10, flexDirection:'row'}}>
                          <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                          <Image source={require('../assets/icons/lock.png')} style={{height:24, width:24}}/>
                           
                          </View>
                          <TextInput placeholder='Password' 
                          placeholderTextColor={'black'}
                          style={{fontSize:15, fontWeight:'400', left:10}}
                          value={password}
                          onChangeText={(value)=>setPassword(value)}
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
                         
                     
                </View>
    <View style={{ flexDirection: "row",justifyContent:"center",alignItems: 'center',marginTop:isSmallScreen?"3%":"3%",}}>
     <View style={{ borderRadius: 10,marginStart:'6%' }}>
     <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color={checked?"#FDBA31":"transparent"}
      onPress={() => {
        setChecked(!checked);
      }}
    />
</View>
<TouchableOpacity style={{ flex: 1 }}>
  <Text style={{justifyContent:'flex-end',color:'#FDBA31' }}>Remember me</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
  <Text style={{ marginEnd:'8%',color:'#fff' }}>Forgot Password?</Text>
</TouchableOpacity>
</View>


<TouchableOpacity style={{width:340, height:50, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>Log In</Text>
</TouchableOpacity>


<View style={{flexDirection:"row",justifyContent:"center", alignSelf:"center", marginTop:isSmallScreen?"5%":"20%"}}>
   <Text style={{fontWeight:"400",fontSize:16, color:"#fff"}}>Don't have an account? </Text>
   <Text style={{fontWeight:"400",fontSize:16, color:"#FDBA31"}} onPress={()=>navigation.navigate('signup')}>Sign Up</Text>
</View>

{Service.selectedFlow =="Coach"?<View style={{flexDirection:"row",justifyContent:"center", alignSelf:"center", marginTop:15}}>
   <Text style={{fontWeight:"400",fontSize:16, color:"#fff"}}>Are you a {isCoach?"coach":"student"}? </Text>
   <Text style={{fontWeight:"400",fontSize:16, textDecorationLine:"underline",  color:"#FDBA31"}} onPress={()=>setIsCoach(!isCoach)}>Log In</Text>
   <Text style={{fontWeight:"400",fontSize:16, color:"#fff", marginLeft:5}}>as a {isCoach?"coach":"student"}</Text>
</View>
:
 
<View style={{flexDirection:"row",justifyContent:"center", alignSelf:"center", marginTop:15}}>
   <Text style={{fontWeight:"600",fontSize:16, color:"#fff"}}>Are you a Coach? </Text>
   <Text style={{fontWeight:"600",fontSize:16, textDecorationLine:"underline",  color:"#FDBA31"}} onPress={()=>setIsCoach(!isCoach)}>Log In</Text>
   <Text style={{fontWeight:"600",fontSize:16, color:"#fff", marginLeft:5}}>as a Coach</Text>
</View>
}
                </KeyboardAvoidingView>

            </ImageBackground>
            </>
            
            


        </View>
    )
}

export default LoginScreen

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