import { View, Text, Dimensions, Image, StyleSheet,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { studentData, studentData1 } from '../Constants'
import FeatherIcons from 'react-native-vector-icons/Feather'
import Service from '../../Service/Service';



const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400

const StudentList = ({showDetails, setShowDetails}) => {

    const handleDetails = (item)=>{
        setShowDetails(true)
        Service.details.image = item.image
        Service.details.position = item.position
        Service.details.height= item.height
        Service.details.sport= item.sport
        Service.details.gpa = item.gpa
        Service.details.major = item.major
        Service.details.dob = item.DOB
        Service.details.name = item.name
        Service.details.bio =item.Bio
        Service.details.phone=item.phone
        Service.details.email=item.email
        Service.details.gender=item.gender
        Service.details.univ=item.univ
        Service.details.address=item.address
        Service.details.school = item.school
        Service.details.Highschool = item.highschool
        Service.details.year = item.year


        Service.details.coachlevel=item.CoachLevel
        Service.details.role=item.Role
        Service.details.start_year=item.StartYear

    }
   
  return (

   <>
   {Service.selectedFlow=="Coach"?
   (
    <ScrollView contentContainerStyle={{marginTop:8, paddingBottom:25,}}>
    {
      studentData.map((item, index)=>{
          return(
       
                  <View key={index} style={styles.backgroundContainer} >
                     <View style={{flexDirection:"row", marginStart:"3%", marginTop:"2%",}}>
                     <View style={{marginStart:"2%",marginTop:"2%" , opacity:3,backgroundColor: "#fff", height:isSmallScreen?80:80, width:isSmallScreen?80:80,borderRadius: 10, justifyContent:"center", alignItems:"center" }}>
                          <Image source={item.image} style={{  height:isSmallScreen?75:70,width:isSmallScreen?75:70}} resizeMode='contain' />
                      </View>

                      <View style={{ marginTop: "2%", marginLeft:"5%" }}>
                          <Text style={{ fontSize: isSmallScreen ? 14 : 16,  fontWeight: "600", color: "#fff" }}>{item.name}</Text>
                          <View style={{ flexDirection: "row" ,alignItems: "center",  }}>
                              <Text style={{ color: "#FDBA31",  fontWeight: "bold" }}>Sport: </Text>
                              <Text style={{color:"#fff"}}>{item.sport}</Text>
                          </View>
                          <View style={{ flexDirection: "row",  alignItems: "center",}}>
                              <Text style={{ color: "#FDBA31", fontWeight: "bold" }}>Position: </Text>
                              <Text style={{color:"#fff"}}>{item.position}</Text>
                          </View>
                          <View style={{ flexDirection: "row",  alignItems: "center",  }}>
                              <Text style={{ color: "#FDBA31", fontWeight: "bold" }}>Height: </Text>
                              <Text style={{color:"#fff"}}>{item.height}</Text>
                          </View>
                      </View>
                     </View>


                       <TouchableOpacity onPress={()=>handleDetails(item)} style={styles.doneButton}>
                       <FeatherIcons  name="arrow-right-circle"
                       style={{marginTop:"2%",marginLeft:"2%"}}
                       size={isSmallScreen ? 18 : 20}
                       color= '#032D62'/>
                       </TouchableOpacity>

                  </View>
                  
                  
   
              
             
           
          )
      })
    }
    </ScrollView>
   ):(
    <ScrollView contentContainerStyle={{marginTop:8, paddingBottom:25,}}>
      {
        studentData1.map((item, index)=>{
            return(
         
                <View key={index} style={styles.backgroundContainer} >
                 <View style={{flexDirection:"row", marginStart:"3%", marginTop:"2%",}}>
                 <View style={{marginStart:"2%",marginTop:"2%" , opacity:3,backgroundColor: "#fff", height:isSmallScreen?80:80, width:isSmallScreen?80:80,borderRadius: 10, justifyContent:"center", alignItems:"center" }}>
                            <Image source={item.image} style={{  height:isSmallScreen?75:70,width:isSmallScreen?75:70}} resizeMode='contain' />
                        </View>

                  <View style={{ marginTop: "2%",marginLeft:"5%"}}>
                            <Text style={{ fontSize: isSmallScreen ? 14 : 16,  fontWeight: "600", color: "#fff" }}>{item.name}</Text>
                            <View style={{ flexDirection: "row" , alignItems: "center",  }}>
                                <Text style={{ color: "#FDBA31",  fontWeight: "bold" }}>CoachLevel: </Text>
                                <Text style={{color:"#fff"}}>{item.CoachLevel}</Text>
                            </View>
                            <View style={{ flexDirection: "row",alignItems: "center",}}>
                                <Text style={{ color: "#FDBA31", fontWeight: "bold" }}>Sport: </Text>
                                <Text style={{color:"#fff"}}>{item.sport}</Text>
                            </View>
                            <View style={{ flexDirection: "row",  alignItems: "center",  }}>
                                <Text style={{ color: "#FDBA31", fontWeight: "bold" }}>Role: </Text>
                                <Text style={{color:"#fff"}}>{item.Role}</Text>
                            </View>
                        </View> 
                 </View>

                        <TouchableOpacity onPress={()=>handleDetails(item)} style={styles.doneButton}>
                         <FeatherIcons  name="arrow-right-circle"
                         style={{marginLeft:"5%"}}
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

export default StudentList

const styles = StyleSheet.create({
    backgroundContainer: {
        marginStart: "3%",
        backgroundColor: "rgba(200, 220, 240, 0.1)", // Lighter background color (adjust the alpha value)
        height: isSmallScreen ? 100 : 100,
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