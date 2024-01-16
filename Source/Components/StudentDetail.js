import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import BackButton from './BackButton'
import Service from '../../Service/Service'
import { ScrollView } from 'react-native-virtualized-view';

const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400;


const StudentDetail = ({setShowDetails}) => {

  return (

 <View style={{flex:1,}}>
    <ScrollView>
    <BackButton onPress={()=>setShowDetails(false)} bgColor="#FDBA31" color="#000"/>
    <View style={{height:210,marginTop:"5%", width:210,justifyContent:"center", alignItems:"center", alignSelf:"center", backgroundColor:"white", borderRadius:10}}>
        <Image source={Service.details.image} style={{height:200, width:200}} resizeMode='cover'/>
    </View>

      <View style={{backgroundColor:"#fff", height:isSmallScreen?height*0.75:height*0.75, width:"100%", marginTop:40,borderTopLeftRadius:30, borderTopRightRadius:30}}>
        <View style={{marginLeft:"8%", marginTop:"10%"}}>
            <Text style={{fontSize:isSmallScreen?20:22,color:"#000",fontWeight:"600"}}>{Service.details.name}</Text>
        </View>

        {Service.selectedFlow === 'Coach' ? 
        (

            <View style={{marginTop:5,}}>
        
            <View  style={{gap:20,display:'flex',width:'100%',padding:20,flexDirection:'row',alignItems:"center",}}>
            
                <View>
            
              <View>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>Sport</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>Position</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>GPA</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:"bold",color:"#000"}}>Academic Major</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>Birth Date</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>Gender</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>Height</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>Student Phone</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>Student Email</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>Home Address</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>High School</Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>School Address </Text>
            
              </View>
              <View style={{marginTop:8}}>
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold',color:"#000"}}>Graduation Year </Text>
            
              </View>
            
            
                </View>
                <View >
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
            <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>:</Text>
            </View>
                </View>
            
                <View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.sport}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.position}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.gpa}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.major}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.dob}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.gender}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.height}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.phone}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.email}</Text>
                    </View>
                    <View style={{marginTop:8, flexWrap:"wrap"}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold', }}>{Service.details.address}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold', }}>{Service.details.Highschool}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.school}</Text>
                    </View>
                    <View style={{marginTop:8}}>
            
              <Text style={{fontSize:isSmallScreen?16:18,fontWeight:'bold'}}>{Service.details.year}</Text>
                    </View>
            
                </View>
            
            </View>
            
            
                        {/* <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Bio</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18, marginLeft:"5%"}}>:</Text>
                            <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.bio}</Text>
                        </View> */}
                        {/* <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Sports</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                            <Text style={{color:"#333333",  fontSize:isSmallScreen?16:18}}>{Service.details.sport}</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Phone</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18, marginLeft:"5%"}}>:</Text>
                            <Text style={{color:"#333333",  fontSize:isSmallScreen?16:18}}>{Service.details.phone}</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Email</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                            <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.email}</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Gender</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                            <Text style={{color:"#333333",  fontSize:isSmallScreen?16:18}}>{Service.details.gender}</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>University</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                            <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.univ}</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Address</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                            <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.address}</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Coach Level</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                            <Text style={{color:"#333333",  fontSize:isSmallScreen?16:18}}>{Service.details.coachlevel}</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Role</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                            <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.role}</Text>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Start Year</Text>
                            <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                            <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.start_year}</Text>
                        </View> */}
                    </View>
        
        ) : (
        <View style={{marginTop:20}}>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Bio</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18,}}>:</Text>
                <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.bio}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Sport</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                <Text style={{color:"#333333",  fontSize:isSmallScreen?16:18}}>{Service.details.sport}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Phone</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18, marginLeft:"5%"}}>:</Text>
                <Text style={{color:"#333333",  fontSize:isSmallScreen?16:18}}>{Service.details.phone}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Email</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.email}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Gender</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                <Text style={{color:"#333333",  fontSize:isSmallScreen?16:18}}>{Service.details.gender}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>University</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.univ}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Address</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.address}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Coach Level</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                <Text style={{color:"#333333",  fontSize:isSmallScreen?16:18}}>{Service.details.coachlevel}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Role</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.role}</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:10, alignItems:"center"}}>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Start Year</Text>
                <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>:</Text>
                <Text style={{color:"#333333", fontSize:isSmallScreen?16:18}}>{Service.details.start_year}</Text>
            </View>
         
        </View>

)}
            <View style={{marginLeft:isSmallScreen?"8%":"8%"}}>
                <TouchableOpacity style={styles.btn}>
                    
                     <Text style={{color:"#fff", fontSize:isSmallScreen?14:16, fontWeight:"600"}}>Connect</Text>
                </TouchableOpacity>
            </View>
       
        </View>

        </ScrollView>
 </View>
  )
}

export default StudentDetail

const styles = StyleSheet.create({
    btn:{
      height:isSmallScreen?40:50,
      width:isSmallScreen?"45%":"45%",
      backgroundColor:"#032D62",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:5,
      marginBottom:isSmallScreen?"15%":"10%"
    }
})