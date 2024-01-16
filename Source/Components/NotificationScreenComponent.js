import { View, Text, Dimensions,StyleSheet,TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import BackButton from './BackButton';
import { useNavigation } from '@react-navigation/native';
import FeatherIcons from 'react-native-vector-icons/Feather'
import Service from '../../Service/Service';

import { notificationData } from '../Constants';
const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400;


const NotificationScreenComponent = ({notify_me, setNotify_Me}) => {

  const navigation = useNavigation();

  return (
    <View style={{flex:1, backgroundColor:"#032D62"}}>
           
      <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
      <BackButton bgColor="#FDBA31"color="#000" onPress={()=>{setNotify_Me(false)}}/>
         <Text style={{color:"#fff",fontSize:isSmallScreen?22:24, fontWeight:"600", textAlign:"center"}}>Notifications</Text>
         <Text></Text>
         <Text></Text>
      </View>

        <View>
            <FlatList 
              data={notificationData}
              keyExtractor={item=>item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom:70, paddingTop:20}}
              renderItem={({item, index})=>
                <NotficationCard item={item} index={index}/>
              }
            
            />
        </View>

           


      
    </View>
  )
}

const NotficationCard =({item, index}) =>{
 return(
  <View key={index} style={styles.backgroundContainer} >
  <View style={{marginStart:"2%",marginTop:"2%" , opacity:3,backgroundColor: "#fff", height:isSmallScreen?80:80, width:isSmallScreen?80:80,borderRadius: 10, justifyContent:"center", alignItems:"center" }}>
      <Image source={item.image} style={{  height:isSmallScreen?75:70,width:isSmallScreen?75:70}} resizeMode='contain' />
  </View>

  <View style={{ marginTop: "2%",marginLeft:"2%" }}>
      <Text style={{ fontSize: isSmallScreen ? 14 : 16,  fontWeight: "600", color: "#fff" }}>{Service.selectedFlow =="Coach"?item.name:"Coach Name"}</Text>
      <View style={{ flexDirection: "row", marginTop:"3%"  }}>
          <Text style={{ color: "#fff"}}>{item.desc}</Text>
         
      </View>
     <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%"}}>
     <View style={{ flexDirection: "row",}}>
<View style={{justifyContent:"center",alignItems:'center'}}>
<Image source={require('../assets/icons/calendar.png')} style={{height:isSmallScreen?15:20, width:isSmallScreen?15:20}}/>
</View>
          <Text style={{color:"#fff", marginLeft:"5%"}}>{item.date}</Text>
      </View>
     <View style={{ flexDirection: "row",}}>
     <View style={{justifyContent:"center",alignItems:'center'}}>
<Image source={require('../assets/icons/clock.png')} style={{height:isSmallScreen?15:20, width:isSmallScreen?15:20}}/>
</View>
          <Text style={{color:"#fff",marginLeft:"5%"}}>{item.time}</Text>
      </View>
     </View>
     
  </View>


</View>
 )
}

export default NotificationScreenComponent

const styles = StyleSheet.create({
  backgroundContainer: {
    marginStart: "3%",
    backgroundColor: "rgba(200, 220, 240, 0.1)", // Lighter background color (adjust the alpha value)
    height: isSmallScreen ? 100 : 100,
    width: isSmallScreen ? "93%" : "95%",
    marginBottom: 20,
    flexDirection: "row",
    // justifyContent: "space-between",
    borderRadius: 15, // Increase the border radius for a softer appearance
    shadowColor: '#888', // Lighter shadow color
    shadowOpacity: 0.5, // Adjust the shadow opacity (adjust between 0 and 1)
    shadowOffset: { width: 0, height: 10 }, // Adjust the elevation angle
    shadowRadius: 15, // Increase the shadow radius for a more spread-out effect
  },
  doneButton:{
      height:isSmallScreen?30:30, width:isSmallScreen?40:40,
      alignSelf:"flex-end",
      justifyContent:"center", alignItems:"center",
      backgroundColor:"#FDBA31",
      borderTopLeftRadius:80
  },
})