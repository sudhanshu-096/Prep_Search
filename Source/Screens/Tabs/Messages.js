import { View, Text, Dimensions, Image,TextInput,TouchableOpacity,FlatList, StyleSheet } from 'react-native'
import React,{useState, useEffect} from 'react'
import BackButton from '../../Components/BackButton'
import { useIsFocused, useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { mesages, studentData } from '../../Constants';
import MessageDetailsComponent from '../../Components/MessageDetailsComponent';
import Service from '../../../Service/Service';
const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400;


const Messages = () => {


 

  const navigation = useNavigation();
  const isfocused = useIsFocused();
  const [messageDetails, setMessage_Details] = useState(false)
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  
  useEffect(()=>{
 setShowSearch(false)
 setSearch('')
 setMessage_Details(false)
  },[navigation, isfocused])

  const handleMessages =(item) =>{
   setMessage_Details(true)
   Service.mesages= item.image
  }

  return (
    <View style={{flex:1, backgroundColor:"#032D62"}}>
           
      {messageDetails==false?
       ( <>
      <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
      <BackButton bgColor="#FDBA31" color="#000" onPress={()=>navigation.goBack()}/>
         {showSearch==false&&
         <>
         <Text style={{color:"#fff",fontSize:isSmallScreen?22:24,  fontWeight:"600", textAlign:"center"}}>Messages</Text>
        <TouchableOpacity onPress={()=>setShowSearch(true)} style={{marginEnd:isSmallScreen?"5%":"10%", }}>
        <FeatherIcon name="search" size={isSmallScreen ? 25 : 25} color="#aaa" style={{ marginEnd: 3 }} />
        </TouchableOpacity>
        </>
        }

       
       
       
       
      
      
    </View>
    {showSearch&&<View style={styles.textInputContainer}>
       <TextInput placeholder='Search' 
    placeholderTextColor={'black'}
    style={{fontSize:isSmallScreen?15:16,flex:1, fontWeight:'400', left:10, color:"#000"}}
    value={search}
    onChangeText={(value)=>setSearch(value)}
    
    />
    <FeatherIcon  name="search"
    style={{marginEnd:"3%"}}
              size={isSmallScreen ? 20 : 22}
              color= '#032D62'/>

       </View>}
         

      {search.length>2&&
       
       <View style={{backgroundColor:"#fff", marginStart:"5%",marginTop:1.5,width:isSmallScreen?"78%":"78%", borderRadius:10}}>
         {studentData.map((item,index)=>{
           return(
             <TouchableOpacity onPress={()=>setSearch(item.name) } key={index}
              style={{padding:8,}}
             >
                <Text style={{color:"#000"}}>{item.name}</Text>
             </TouchableOpacity>
           )
         })}
         </View>
        
        }

      <View>
            <FlatList 
              data={mesages}
              keyExtractor={item=>item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom:100, paddingTop:20}}
              renderItem={({item, index})=>
                <MessageCard item={item} index={index} handleMessages={handleMessages} setMessage_Details={setMessage_Details}/>
              }
            
            />
        </View>
      </>):(
        <MessageDetailsComponent  messageDetails={messageDetails} setMessage_Details={setMessage_Details}/>
      )
      }

      


    </View>
  )
}

const MessageCard =({item, index,  handleMessages}) =>{
  return(
    <View>
   <TouchableOpacity onPress={()=>handleMessages(item)} key={index} style={styles.backgroundContainer}  >
   
  <View style={{flexDirection:"row" }}>
    <View style={{height:isSmallScreen?73:80,width:isSmallScreen?73:80,borderColor:"#FDBA31", borderWidth:2,borderRadius:50, marginTop:isSmallScreen?"5%":"5%",marginStart:isSmallScreen?"5%":"5%"  }}>
                <Image source={item.image} style={{height:isSmallScreen?69:75,width:isSmallScreen?69:75,borderRadius:50 }} resizeMode='contain'/>
              {index%2==0&& 
              <View style={{height:isSmallScreen?20:20,width:isSmallScreen?20:20,borderColor:"#fff", borderWidth:2,borderRadius:50, position:"absolute", top:"5%", left:"80%"  }}>
                <View style={{height:isSmallScreen?15:15, width:isSmallScreen?15:15, backgroundColor:"#27AE60",borderRadius:50, }}/>
              </View>
}
               

    </View>


    <View style={{marginStart:isSmallScreen?"3%":"2%"}}>
      <View>
  <View style={{ marginTop: "10%",marginLeft:"3%", flexDirection:"row", justifyContent:"space-between" }}>
       <Text style={{ fontSize: isSmallScreen ? 14 : 16,  fontWeight: "600", color: "#fff" }}>{item.title}</Text>
       <Text style={{ fontSize: isSmallScreen ? 12 : 14,  fontWeight: "500",marginLeft:"3%",marginTop:"1%", color: "#FDBA31" }}>{item.time}</Text>
      
      
   </View>
  
   </View>
   <View style={{marginTop:isSmallScreen?"8%":null, alignSelf:"flex-end"}}>
 <View style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25, backgroundColor:"#FDBA31",borderRadius:50, position:"absolute", top:"20%", left:"90%", justifyContent:"center", alignItems:"center"}}>
  <Text style={{color:"#000"}}>1</Text>
 </View>
 </View>
   <Text style={{marginLeft:isSmallScreen?"5%":"5%",marginTop:isSmallScreen?"3%":"3%",color:"#fff", fontSize:isSmallScreen?12.5:12.5}}>{item.desc}</Text>
   
    </View>
  </View>

  
 

 

 

 
 </TouchableOpacity>
  <View style={{height:1, marginStart:"5%", width:"90%",justifyContent:"center",backgroundColor:"#fff", opacity:0.2}}/>
  </View>
  )
 }
export default Messages

const styles = StyleSheet.create({
  backgroundContainer:{
    marginStart:"3%",
   
   
    height:isSmallScreen?100:100,
    width:isSmallScreen?"93%":"95%",
    marginBottom:20,
    flexDirection:"row",
     justifyContent:"space-between",
    alignItems:"center",
 
     borderRadius:10,

},
textInputContainer: {
  marginStart:"5%",
  marginTop:"5%",
  backgroundColor:"#fff",
  height:isSmallScreen?50:50,
  width:isSmallScreen?"78%":"90%",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  borderRadius:10
},
})