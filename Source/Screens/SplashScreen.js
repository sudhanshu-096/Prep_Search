import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const {height, width} =Dimensions.get('window')
const isSmallScreen = width<400;

const SplashScreen = () => {
    const navigation = useNavigation();
    
    useEffect(()=>{
  checkOnboarding()
    },[])

    const checkOnboarding = async() =>{
   try {
     const onboard = await AsyncStorage.getItem('ONBOARDED');
     if(onboard ==1){
        setTimeout(() => {
            navigation.navigate('Welcome')
        }, 3000);
     }else{
        setTimeout(() => {
            navigation.navigate('Onboarding')
        }, 3000);
     }
   } catch (e) {
      console.log(e)
   }
    }
  return (
    <View style={styles.container}>
     <Image source={require('../assets/images/splash.png')} style={{height:height*0.1, width:width*0.7}} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})