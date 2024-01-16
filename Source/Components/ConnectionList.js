import { View, Text, Dimensions, Image, StyleSheet,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { StudentData, connectionData, studentData } from '../Constants'
import FeatherIcons from 'react-native-vector-icons/Feather'
import Service from '../../Service/Service';



const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400

const ConnectionList = ({showDetails, setShowDetails}) => {

    const handleDetails = (item)=>{
        setShowDetails(true)
        Service.details.image = item.image
        Service.details.position = item.position
        Service.details.height= item.height
        Service.details.sport= item.sport
        Service.details.name = item.name
        Service.details.gpa = item.gpa
        Service.details.major = item.major
        Service.details.bio =item.Bio
        Service.details.phone=item.phone
        Service.details.email=item.email
        Service.details.gender=item.gender
        Service.details.univ=item.univ
        Service.details.address=item.address
        Service.details.coachlevel=item.CoachLevel
        Service.details.role=item.Role
        Service.details.start_year=item.StartYear
        Service.details.dob = item.DOB
       Service.details.gender = item.gender
       Service.details.school = item.school
       Service.details.year = item.year
    }
   
  return (

      <>
      {Service.selectedFlow =="Coach"?
      (
        <ScrollView contentContainerStyle={{marginTop:8, paddingBottom:140,}}>
      {
        connectionData.map((item, index)=>{
            return(
         
                    <View key={index} style={styles.backgroundContainer} >
                        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <View style={{marginStart:"3%",marginTop:"2%" , opacity:3, backgroundColor: "#fff", height:isSmallScreen?100:100, width:isSmallScreen?100:100,borderRadius: 10, justifyContent:"center", alignItems:"center" }}>
                            <Image source={item.image} style={{ height:isSmallScreen?90:90,width:isSmallScreen?90:90}} resizeMode='contain' />
                        </View>

                        <View style={{ marginTop: "4%", }}>
                            <Text style={{ fontSize: isSmallScreen ? 14 : 16,alignSelf:"flex-start",marginTop:"2%" ,  fontWeight: "600", color: "#fff" }}>{item.name}</Text>
                            <View style={{ flexDirection: "row", zIndex:1 ,  alignSelf:"flex-start", marginStart: "1%" }}>
                                <Text style={{ color: "#FDBA31", zIndex:1 , fontWeight: "bold" }}>Sport: </Text>
                                <Text style={{color:"#fff"}}>{item.sport}</Text>
                            </View>
                            <View style={{ flexDirection: "row",  alignItems: "center", marginStart: "1%" }}>
                                <Text style={{ color: "#FDBA31", fontWeight: "bold" }}>Position: </Text>
                                <Text style={{color:"#fff"}}>{item.position}</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", marginStart: "1%" }}>
                                <Text style={{ color: "#FDBA31", fontWeight: "bold" }}>Height: </Text>
                                <Text style={{color:"#fff"}}>{item.height}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%"}}>
     <View style={{ flexDirection: "row",marginStart:"3%",marginBottom:"8%"}}>
<View style={{justifyContent:"space-between",alignItems:'center'}}>
<Image source={require('../assets/icons/calendar.png')} style={{height:isSmallScreen?15:20, width:isSmallScreen?15:20}}/>
</View>
          <Text style={{color:"#fff", marginLeft:"5%"}}>{item.date}</Text>
      </View>
     <View style={{ flexDirection: "row", marginBottom:"8%"}}>
     <View style={{justifyContent:"center",alignItems:'center'}}>
<Image source={require('../assets/icons/clock.png')} style={{height:isSmallScreen?15:20, width:isSmallScreen?15:20}}/>
</View>
          <Text style={{color:"#fff",marginLeft:"5%"}}>{item.time}</Text>
      </View>
     </View>
                            
                        </View>
                        </View>

                         <TouchableOpacity onPress={()=>handleDetails(item)} style={styles.doneButton}>
                         <FeatherIcons  name="arrow-right-circle"
                         style={{marginLeft:"5%", marginTop:"5%"}}
                         size={isSmallScreen ? 18 : 20}
                         color= '#032D62'/>
                         </TouchableOpacity>

                    </View>
                    
                    
     
                
               
             
            )
        })
      }
      </ScrollView>
      ):
      (
        <ScrollView contentContainerStyle={{marginTop:8, paddingBottom:140,}}>
      {
        StudentData.map((item, index)=>{
            return(
         
                    <View key={index} style={styles.backgroundContainer} >
                        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <View style={{marginStart:"3%",marginTop:"2%" , opacity:3, backgroundColor: "#fff", height:isSmallScreen?100:100, width:isSmallScreen?100:100,borderRadius: 10, justifyContent:"center", alignItems:"center" }}>
                            <Image source={item.image} style={{ height:isSmallScreen?90:90,width:isSmallScreen?90:90}} resizeMode='contain' />
                        </View>

                        <View style={{ marginTop: "4%", }}>
                            <Text style={{ fontSize: isSmallScreen ? 14 : 16,alignSelf:"flex-start",marginTop:"2%" ,  fontWeight: "600", color: "#fff" }}>{item.name}</Text>
                            <View style={{ flexDirection: "row", zIndex:1 ,  alignSelf:"flex-start", marginStart: "3%" }}>
                                <Text style={{ color: "#FDBA31", zIndex:1 , fontWeight: "bold" }}>Coach Level: </Text>
                                <Text style={{color:"#fff"}}>{item.CoachLevel}</Text>
                            </View>
                            <View style={{ flexDirection: "row",  alignItems: "center", marginStart: "3%" }}>
                                <Text style={{ color: "#FDBA31", fontWeight: "bold" }}>Sport: </Text>
                                <Text style={{color:"#fff"}}>{item.sport}</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", marginStart: "3%" }}>
                                <Text style={{ color: "#FDBA31", fontWeight: "bold" }}>Role: </Text>
                                <Text style={{color:"#fff"}}>{item.Role}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:"5%"}}>
     <View style={{ flexDirection: "row",marginStart:"5%",marginBottom:"8%"}}>
<View style={{justifyContent:"space-between",alignItems:'center'}}>
<Image source={require('../assets/icons/calendar.png')} style={{height:isSmallScreen?15:20, width:isSmallScreen?15:20}}/>
</View>
          <Text style={{color:"#fff", marginLeft:"5%"}}>{item.date}</Text>
      </View>
     <View style={{ flexDirection: "row", marginBottom:"8%"}}>
     <View style={{justifyContent:"center",alignItems:'center'}}>
<Image source={require('../assets/icons/clock.png')} style={{height:isSmallScreen?15:20, width:isSmallScreen?15:20}}/>
</View>
          <Text style={{color:"#fff",marginLeft:"5%"}}>{item.time}</Text>
      </View>
     </View>
                            
                        </View>
                        </View>

                         <TouchableOpacity onPress={()=>handleDetails(item)} style={styles.doneButton}>
                         <FeatherIcons  name="arrow-right-circle"
                         style={{marginLeft:"5%", marginTop:"5%"}}
                         size={isSmallScreen ? 18 : 20}
                         color= '#032D62'/>
                         </TouchableOpacity>

                    </View>
                    
                    
     
                
               
             
            )
        })
      }
      </ScrollView>
      )

    

    }
      </>
 
  )
}

export default ConnectionList

const styles = StyleSheet.create({
    backgroundContainer: {
        marginStart: "3%",
        backgroundColor: "rgba(200, 220, 240, 0.1)", // Lighter background color (adjust the alpha value)
        height: isSmallScreen ? 130 : 130,
        width: isSmallScreen ? "93%" : "95%",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
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