import { View, Text, StatusBar,Image, TextInput,Dimensions, TouchableOpacity, StyleSheet, Touchable } from 'react-native'
import React,{useState, useEffect} from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import FeatherIcons from 'react-native-vector-icons/Feather'
import ConnectionList from '../../Components/ConnectionList'
import { connectionData } from '../../Constants';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ConnectionDetail from '../../Components/ConnectionDetail'
import BackButton from '../../Components/BackButton'
import NotificationScreenComponent from '../../Components/NotificationScreenComponent'


const{height, width} = Dimensions.get('window');
const isSmallScreen = width<400;


const HomeScreen = () => {

  const [search, setSearch] = useState('')
  const [openSheet, setOpenSheet] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [notify_me, setNotify_Me] = useState(false)

  const navigation= useNavigation();
  const isfocused = useIsFocused();
  useEffect(()=>{
    setShowDetails(false)
    setNotify_Me(false)
      },[isfocused])

 
 
  return (
    <View style={{flex:1,backgroundColor:"#032D62" }}>
     {notify_me==false?<>
     
      {showDetails==false?<>
     
     <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",}}>
     <BackButton onPress={()=>navigation.goBack()} bgColor="#FDBA31" color="#000"/>
        
         {/* Notification Icon */}
         <TouchableOpacity onPress={()=>setNotify_Me(true)} style={{justifyContent:"center", alignItems:"center", marginRight:"5%"}}>
           <IonIcons  name="notifications"
               size={isSmallScreen ? 20 : 22}
               color= '#FDBA31'/>
         </TouchableOpacity>
     </View>

     <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}} >
        <View style={styles.textInputContainer}>
        <TextInput placeholder='Search' 
     placeholderTextColor={'black'}
     style={{fontSize:isSmallScreen?15:16, flex:1,fontWeight:'400', left:10, color:"#000"}}
     value={search}
     onChangeText={(value)=>setSearch(value)}
     
     />
     <FeatherIcons  name="search"
     style={{marginEnd:"3%"}}
               size={isSmallScreen ? 20 : 22}
               color= '#032D62'/>

        </View>
        
        
        <TouchableOpacity onPress={()=>setOpenSheet(true)} style={{height:isSmallScreen?40:40, width:isSmallScreen?40:40, backgroundColor:"#FDBA31", justifyContent:"center", alignItems:"center", marginEnd:"3%",marginTop:'5%', borderRadius:10}}>
        <IonIcons  name="filter-sharp"
               size={isSmallScreen ? 20 : 22}
               color= '#032D62'/>
        </TouchableOpacity>
       
     </View>
    
     {search.length>2&&
        
       <View style={{backgroundColor:"#fff", marginStart:"5%",marginTop:1.5,width:isSmallScreen?"78%":"78%", borderRadius:10}}>
         {connectionData.map((item,index)=>{
           return(
             <TouchableOpacity key={index}
              style={{padding:8,}}
             >
                <Text style={{color:"#000"}}>{item.name}</Text>
             </TouchableOpacity>
           )
         })}
         </View>
        
        }

    {/* Show connection list */}
    <View style={{marginTop:isSmallScreen?"3%":"6%"}}>
    <ConnectionList showDetails={showDetails} setShowDetails={setShowDetails} />
    </View>
    </>:
    <ConnectionDetail setShowDetails={setShowDetails}  />
    }
     
     </>:
     
     <>
       <NotificationScreenComponent notify_me={notify_me} setNotify_Me={setNotify_Me}/>
     </>}
    

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  textInputContainer: {
    marginStart:"5%",
    marginTop:"5%",
    backgroundColor:"#fff",
    height:isSmallScreen?50:50,
    width:isSmallScreen?"78%":"78%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius:10
  },
})