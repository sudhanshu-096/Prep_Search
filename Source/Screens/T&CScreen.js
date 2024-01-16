import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../Components/BackButton';
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400;

const TandCScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, backgroundColor:"#032D62"}}>
    <ScrollView contentContainerStyle={{paddingBottom:50, height:height}}>
    <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
      <BackButton bgColor="#FDBA31"color="#000" onPress={()=>{navigation.goBack()}}/>
         <Text style={{color:"#fff",fontSize:isSmallScreen?22:24,marginTop:isSmallScreen?"5%":"5%", fontWeight:"600", textAlign:"center"}}>Terms and Conditions</Text>
         <Text></Text>
         <Text></Text>
      </View>

      <Text style={{textAlign:"left",marginStart:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"8%":"10%", fontSize:isSmallScreen?18:20,fontWeight:"600", color:"#FDBA31"}}>Introduction</Text>
      <View style={{width:width*0.9,alignSelf:"center" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,lineHeight:22, textAlign:"justify",color:"#fff"}}>This account is for verified college coaches and their direct support staff only.
Every application is reviewed by a PrepSearch administrator. You must have a verifiable biography on your school site and a College/University work email address ending in .edu. At PrepSearch we take the security of the student-athlete information in our database very seriously. Anyone submitting registration for a fake account or under an assumed identity will be subject to state and/or federal prosecution.
PrepSearch database and app services are available to verified employees of Colleges and Universities. We do not sell to individuals. All purchases, rosters, evaluations, and work remain within the school account. Once you leave a program, you will no longer have access to that school’s PrepSearch account and will need to complete a new registration.</Text>
      </View>

      <Text style={{textAlign:"left",marginStart:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"8%":"10%", fontSize:isSmallScreen?16:18,fontWeight:"600", color:"#FDBA31"}}>By using this site, you agree to the following {'\n'} restrictions:</Text>

      <View style={{width:width*0.95, alignItems:"left" , marginLeft:10,}}>
        <Text style={{textAlign:"justify",color:"#fff",lineHeight:22}}>{' \u25CF You are a registered staff member for your respective program '}</Text>
        <Text style={{textAlign:"justify",color:"#fff",lineHeight:22}}>{' \u25CF You will not share your login with anyone else, including other staff members '}</Text>
        <Text style={{textAlign:"justify",color:"#fff",lineHeight:22}}>{' \u25CF You will immediately remove accounts of former staff members who stop working at you school or ask PrepSearch support to do it.'}</Text>
      </View>
    </ScrollView>
    </View>
  )
}

export default TandCScreen

const styles = StyleSheet.create({})