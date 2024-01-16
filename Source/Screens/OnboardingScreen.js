import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window')
const isSmallScreen = width<400;

const OnboardingScreen = () => {
    const navigation = useNavigation()

    const handleDone = async() =>{
    await JSON.stringify(AsyncStorage.setItem('ONBOARDED','1'))
   navigation.navigate('Welcome')
   

    }

    const doneButton = ({...props}) =>{
  return(
    <TouchableOpacity style={styles.doneButton} {...props}>
         <Icon name="arrow-right" size={30} color={'black'} style={{marginLeft:5, }}/>
    </TouchableOpacity>
  )
    }

    const dotButton = ({selected}) =>{
  let bgColor;
  bgColor = selected?'#FDBA31':'#032D62'

  return (
    <View
    style={{
        width:11,
        height:11,
         marginHorizontal:3,
         borderRadius:6,
        backgroundColor:bgColor
    }}
    />
    )
    }
  return (
    <View style={styles.container}>
     
     <Onboarding
     showSkip={false}
     onDone={handleDone}
     DoneButtonComponent={doneButton}
     DotComponent={dotButton}
     NextButtonComponent={doneButton}
     containerStyles={{paddingHorizontal:10}}
     titleStyles={{fontWeight:"600",fontSize:isSmallScreen?22:25, }}
     subTitleStyles={{textAlign:"center" ,fontSize:isSmallScreen?14:16, justifyContent:"center", alignItems:"center",marginTop:isSmallScreen?"5%":"5%",}}
     
     bottomBarHighlight={false}
  pages={[
    
    {
      backgroundColor: '#fff',
     
      image: (
          <View style={styles.onboard}>
            <Image source={require('../assets/images/splash1.png')} style={{height:isSmallScreen?310:310, width:isSmallScreen?310:310}} resizeMode='contain'/>
            </View>
      ),
      
      title: (
        <View style={{justifyContent:"center", alignItems:"center",}}>
           <Text style={{fontSize:isSmallScreen?22:25,fontWeight:"600",color:"#000", marginLeft:"4%"}}>Search Colleges</Text>
        </View>
      ),
      subtitle:`Lorem Ipsum is simply dummy text of the ${'\n'}  printing and typesetting industry.`,
       
    },
  
    {
      backgroundColor: '#fff',
      image: (
        <View style={styles.onboard}>
        <Image source={require('../assets/images/splash2.png')} style={{height:isSmallScreen?310:300, width:isSmallScreen?310:310}} resizeMode='contain'/>
        </View>
      ),
      
      title: (
        <View style={{justifyContent:"center", alignItems:"center"}}>
           <Text style={{fontSize:isSmallScreen?22:25,fontWeight:"600",color:"#000"}}>Search Student-Atheletes</Text>
        </View>
      ),
      subtitle: `Lorem Ipsum is simply dummy text of the ${'\n'}  printing and typesetting industry.`,
    },
  
  ]}
/>

    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    doneButton:{
      height:height*0.09,
      width:width*0.23,
        justifyContent:"center", alignItems:"center",
        backgroundColor:"#FDBA31",
        borderTopLeftRadius:90
    },
    onboard:{
   height:height*0.4,
   width:width*0.7,
   justifyContent:"center",
   alignItems:"center"
  //  marginLeft:isSmallScreen?"28%":"20%",
   
   
    }
})