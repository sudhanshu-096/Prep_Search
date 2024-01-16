import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../Screens/SplashScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ForgetScreen from '../Screens/ForgetScreen';
import ResetPassScreen from '../Screens/ResetPassScreen';
import VerificationScreen from '../Screens/VerificationScreen';
import CreateProfileScreen from '../Screens/CreateProfileScreen';
import TandCScreen from '../Screens/T&CScreen';
import TabNavigation from './TabNavigation';
import EditProfileScreen from '../Screens/EditProfileScreen';
import Messages from '../Screens/Tabs/Messages';
import StudentCreateProfile from '../Screens/StudentScreen/StudentCreateProfile';
import StudentEditProfile from '../Screens/StudentScreen/StudentEditProfile';





const Stack  = createNativeStackNavigator();
const AppNavigation = () => {

    useEffect(()=>{
        checkIfAlreadyOnboarded()
    },[])

    const [showOnboarding, setShowOnboarding] = useState(false)

    const checkIfAlreadyOnboarded = async() =>{
    let onboarded = JSON.parse(await AsyncStorage.getItem('ONBOARDED'));
    console.log('Local Value:',onboarded)
    if(onboarded ==1){
      console.log('1111')
      console.log('onboarding kya hai:',showOnboarding)
        //hide onboarding
        setShowOnboarding(false)
    }else{
      console.log('onboard not 1')
      console.log("kya val hai",showOnboarding)
        //show onboarding
        setShowOnboarding(true)
    }
  }



  if(showOnboarding){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
             <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
             <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown:false}}/>
             <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>
             <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
  }else{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen'>
                 <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='signup' component={SignUpScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='Forget' component={ForgetScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='ResetPassword' component={ResetPassScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='Verification' component={VerificationScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='CreateProfile' component={CreateProfileScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='T&C' component={TandCScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='Tabs' component={TabNavigation} options={{headerShown:false}}/>
                 <Stack.Screen name='EditProfile' component={EditProfileScreen} options={{headerShown:false}}/>
                 <Stack.Screen name='Messages' component={Messages} options={{headerShown:false}}/>
                 <Stack.Screen name='StudentProfile' component={StudentCreateProfile} options={{headerShown:false}}/>
                 <Stack.Screen name='StudentEdit' component={StudentEditProfile} options={{headerShown:false}}/>

                
            </Stack.Navigator>
        </NavigationContainer>
      )
  }
  
}

export default AppNavigation

const styles = StyleSheet.create({})