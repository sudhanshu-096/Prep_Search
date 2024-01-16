import { Image, ImageBackground, StyleSheet,Modal, Dimensions,Platform, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TextInputBase, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../Components/BackButton'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
const { width, height } = Dimensions.get('window')
const isSmallScreen = width < 400;

const ForgetScreen = () => {
    const navigation = useNavigation()
    const timer = "01:59"
    const [Verification, setVerification] = useState(false)

    
    const [password, setPassword] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

 const handleSubmit = () =>{
   if(password.length ==0) {
  ToastAndroid.show('Password cannot be blank',ToastAndroid.SHORT)
   }else if(confirmPassword.length ==0){
    ToastAndroid.show('Confirm Password cannot be blank',ToastAndroid.SHORT)
   }else{
    setIsModalVisible(true)
   }
 }

const clearInputs = () =>{
    setIsModalVisible(false)
    setPassword('');
    setConfirmPassword('')
    navigation.navigate('Login')
    
}
 

 const closeModal = async () => {
    setIsModalVisible(false)
  };

    return (
        <View style={styles.container}>
            <BackButton onPress={()=>navigation.goBack()} bgColor="#FDBA31" color="#000"/>

            <View style={{ alignItems: "center" }}>
                <Image source={require('../assets/images/splash.png')} style={{ marginTop: 60, marginBottom: 100,width:width*0.7, height:height*0.1 }} />
            </View>

            <ImageBackground source={require('../assets/images/bg.png')} imageStyle={styles.image}  >
                
               
     
               <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
                >
                    <Text style={{marginTop:80, alignSelf:'center', fontSize:30,fontWeight:'600', color:"#fff"}}>Reset Password</Text>
                     <View style={{justifyContent:'center', alignItems:'center', marginTop:30}}>
                     
                     <View style={{backgroundColor:"#fff", height:50, width:340, borderRadius:10, flexDirection:'row'}}>
                          <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                             <Icon name="lock" size={30} color="#032D62"/>
                          </View>
                          <TextInput placeholder='Create New Password' 
                          placeholderTextColor="#000"
                          style={{fontSize:15, fontWeight:'400', left:10, color:"#000"}}
                           value={password}
                           secureTextEntry={true}
                           onChangeText={(value)=>setPassword(value)}
                          />
                          
                       </View>

                       <View style={{backgroundColor:"#fff", height:50, width:340, borderRadius:10, flexDirection:'row',marginTop:20}}>
                          <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
                             <Icon name="lock" size={30} color="#032D62"/>
                          </View>
                          <TextInput placeholder='Confirm New Password'
                           placeholderTextColor="#000" 
                          style={{fontSize:15, fontWeight:'400', left:10, color:"#000"}}
                           value={confirmPassword}
                           secureTextEntry={!showPassword}
                           onChangeText={(value)=>setConfirmPassword(value)}
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
             

                <View>

                </View>

                <Modal
            animationType="slide"
            visible={isModalVisible}
            transparent={true}
            onRequestClose={closeModal}>
            <View
              style={{
                backgroundColor: 'black',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            
              }}>
              <View
                style={{

                  backgroundColor: 'white',
                  padding: 39,
                  borderRadius: 15,
                  width: isSmallScreen ? width*0.9  : width * 0.9,
                  marginTop: -height * 0.09,
                }}>
                <View style={{ alignSelf: 'flex-end' }}>
                  <Icon1
                    onPress={closeModal}
                    name="cross"
                    size={30}
                    color="grey"
                  />
                </View>
                
                <Image
                  style={{
                    width: isSmallScreen ? width * 0.34 : width * 0.25,
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
                  Password Changed
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    top:'5%',
                    fontSize: isSmallScreen?14:18,
                    color:"#000",
                    fontWeight: '400',
                  }}>
                  Your password has been changed {'\n'} successfully.
                </Text>
                <TouchableOpacity
                onPress={()=>clearInputs()}
                  style={{
                    alignSelf: 'center',
                    marginTop:'15%',
                    backgroundColor: '#032D62',
                    height:50,
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
                    
         

<TouchableOpacity onPress={()=>handleSubmit()} style={{width:340, height:50, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>Submit</Text>
</TouchableOpacity>

   


             
                </KeyboardAvoidingView>



          
                
                
               

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