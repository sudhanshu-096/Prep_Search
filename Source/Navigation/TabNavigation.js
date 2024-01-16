import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import IonIcons from 'react-native-vector-icons/Ionicons'; 
import HomeScreen from '../Screens/Tabs/HomeScreen';
import Connections from '../Screens/Tabs/Connections';
import Messages from '../Screens/Tabs/Messages';
import Settings from '../Screens/Tabs/Settings';
const {height, width} = Dimensions.get('window')
const isSmallScreen = width<400


const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{
        backgroundColor: '#FDBA31',
        justifyContent:"center", alignItems:"center",
        height: isSmallScreen ? 60 : 70,
    }, tabBarHideOnKeyboard:true}}>
    <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel:"Home",
        tabBarLabelStyle:{color:"#000",fontWeight:"600",fontSize:isSmallScreen?14:14},
         tabBarIcon: ({ focused }) => (
            
            <View style={{
                borderColor:"#032D62",
                borderWidth:2,
                borderRadius:50,
                justifyContent:"center",
                alignItems:"center"
            }}>
            <View
              style={{
                width: isSmallScreen ? 30 : 40,
                height: isSmallScreen ? 30 : 40,
                borderRadius: isSmallScreen ? 20 : 30,
                backgroundColor: focused ? '#032D62' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Icon
                name="home"
                size={isSmallScreen ? 16 : 20}
                color={focused ? '#FDBA31' : '#032D62'}
              /> */}
              <Image source={focused?(require('../assets/icons/home_focus.png')):(require('../assets/icons/home.png'))} style={{height:isSmallScreen?20:25,width:isSmallScreen?20:25}} resizeMode='contain'/>
            </View>
            </View>
          ),
    }}  />
    <Tab.Screen name="Connnect" component={Connections} options={{
        tabBarLabel:"Connections",
        tabBarLabelStyle:{color:"#000",fontWeight:"600",fontSize:14},
         tabBarIcon: ({ focused }) => (
           <View style={{
            borderColor:"#032D62",
            borderWidth:2,
            borderRadius:50,
            justifyContent:"center",
            alignItems:"center"
        }}>
                <View
              style={{
                width: isSmallScreen ? 30 : 40,
                height: isSmallScreen ? 30 : 40,
                borderRadius: isSmallScreen ? 20 : 30,
                backgroundColor: focused ? '#032D62' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              

<Image source={focused?(require('../assets/icons/conn_focus.png')):(require('../assets/icons/conn.png'))} style={{height:isSmallScreen?20:25,width:isSmallScreen?20:25}} resizeMode='contain'/>
            </View>
           </View>
          ),
    }} />
    <Tab.Screen name="Message" component={Messages} options={{
        tabBarLabel:"Message",
        tabBarLabelStyle:{color:"#000",fontWeight:"600",fontSize:14},
         tabBarIcon: ({ focused }) => (
           <View style={{borderColor:"#032D62",borderWidth:2, borderRadius:50,  justifyContent:"center",
           alignItems:"center"}}>
               <View
              style={{
                width: isSmallScreen ? 30 : 40,
                height: isSmallScreen ? 30 : 40,
                borderRadius: isSmallScreen ? 20 : 30,
                backgroundColor: focused ? '#032D62' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Icon
                name="home"
                size={isSmallScreen ? 16 : 20}
                color={focused ? '#FDBA31' : '#032D62'}
              /> */}
               <Image source={focused?(require('../assets/icons/message_focus.png')):(require('../assets/icons/message.png'))} style={{height:isSmallScreen?20:25,width:isSmallScreen?20:25}} resizeMode='contain'/>
            </View>
           </View>
          ),
    }} />
    <Tab.Screen name="Settings" component={Settings} options={{
        tabBarLabel:"Settings",
        tabBarLabelStyle:{color:"#000",fontWeight:"600",fontSize:14},
         tabBarIcon: ({ focused }) => (
            <View style={{borderColor:"#032D62",borderWidth:2, borderRadius:50,  justifyContent:"center",
            alignItems:"center"}}>
                 <View
              style={{
                width: isSmallScreen ? 30 : 40,
                height: isSmallScreen ? 30 : 40,
                borderRadius: isSmallScreen ? 20 : 30,
                backgroundColor: focused ? '#032D62' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IonIcons
                name="settings"
                size={isSmallScreen ? 20 : 25}
                color={focused ? '#FDBA31' : '#032D62'}
              />
            </View>
            </View>
          ),
    }} />
   
  </Tab.Navigator>
);

}

export default TabNavigation