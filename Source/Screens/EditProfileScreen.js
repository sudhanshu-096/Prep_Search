import { Image, ScrollView, ImageBackground,FlatList,TouchableWithoutFeedback, StyleSheet, Dimensions,Platform, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

import BackButton from '../Components/BackButton'
import { useNavigation } from '@react-navigation/native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { RadioButton } from 'react-native-paper'
import CheckBox from '@react-native-community/checkbox';
import { LevelOptions, RoleOptions } from '../Constants'


const { width, height } = Dimensions.get('window')
const isSmallScreen = width < 400;


const EditProfileScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('example@gmail.com')
    const [name, setName] = useState('John Smith')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('+1(XXX)-XXX-XXXX')
    const [bio, setBio] = useState('Lorem Ipsum is simply dummy text of the printing')
    const [university, setUniversity] = useState('Hofstra University')
    const [address, setAddress] = useState('Hempstead, N.Y. 11549-1000')
    const [state, setState] = useState('New York')
    const [country, setCountry] = useState('United State')
    const [year, setYear] = useState('2022')
    const [selectedGender, setSelectedGender] = useState('Male')
    const [selectedLevel, setSelectedLevel] = useState('NCAA DI')
    const [selectedSport, setSelectedSport] = useState('Basketball')
    const [showSport, setShowSport] = useState(false)
    const [showGender, setShowGender] = useState(false)
    const [showLevel, setShowLevel] = useState(false)
    const [selectedRole, setSelectedRole] = useState('Forward')
    const [showRole, setShowRole] = useState(false)
   
    const [toggleCheckBoxLevel, setToggleCheckBoxLevel] = useState(false)
    const [toggleCheckBoxRole, setToggleCheckBoxRole] = useState(false)
    const [toggleCheckBoxSport, setToggleCheckBoxSport] = useState(false)
    const [edit, setEdit] = useState(false)
    const [editbutton, setEditbutton] = useState(true)
    const [gender, setGender] = useState(false)
    const [level, setLevel] = useState(false)
    const [sport, setSport] = useState(false)
    const [role, setRole] = useState(false)

    const startEditing = () =>{
      setEdit(true)
      setGender(true)
      setLevel(true)
      setSport(true)
      setRole(true)
      setEditbutton(false)
    }
    const closeEditing = () =>{
      setEdit(false)
      setGender(false)
      setLevel(false)
      setSport(false)
      setRole(false)
      setEditbutton(false)
    }

    const handleData =() =>{
      startEditing()
      if(editbutton==false){
        ToastAndroid.show('Profile updated Successfully..',ToastAndroid.SHORT)
        closeEditing()
      }
    }

  
   const SportOptions =["Baseball","Basketball-Men's","Basketball-Women's","Beach Volleyball","Bowling-Men's","Bowling-Women's","Competitive Cheer and Dance"]
   

   
    return (
        <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom:10}} showsVerticalScrollIndicator={false} keyboardVerticalOffset >

      <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
      <BackButton bgColor="#FDBA31"color="#000" onPress={()=>{navigation.goBack()}}/>
         <Text style={{color:"#fff",fontSize:isSmallScreen?22:24,marginTop:isSmallScreen?"5%":"5%", alignSelf:"center", fontWeight:"600",}}>{editbutton?"Profile":"Edit Profile"}</Text>
         <Text></Text>
         <Text></Text>
       
      </View>
       
       
       <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
                >
                   
                    
                    

<View style={{marginTop:isSmallScreen?30:40,}}>
   
<View style={{justifyContent:"center", alignItems:"center"}}>
      

         <View style={{height:isSmallScreen?120:120,width:isSmallScreen?120:120,borderColor:"#FDBA31", borderWidth:2,borderRadius:60, marginTop:isSmallScreen?"5%":"5%" }}>
         <Image source={require('../assets/images/settings_profile.png')} style={{height:isSmallScreen?115:115,width:isSmallScreen?115:115,borderRadius:60 }} resizeMode='cover'/>

         <TouchableOpacity style={{position:"absolute", top:"60%",left:"80%", height:isSmallScreen?30:30,width:isSmallScreen?30:30, borderRadius:15, backgroundColor:"#FDBA31", justifyContent:'center', alignItems:"center"}}>
         <FontAwesome5Icon name="pen" size={isSmallScreen?14:16} color="#032D62" /> 
</TouchableOpacity>
        </View>       
            
      </View>
</View>

 <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
 <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/person.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder='John Smith' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10, color:"#000"}}
       value={name}
        editable={edit}
       onChangeText={(value)=>setName(value)}
      />
      
   </View>
 <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/phone.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='+1(XXX)-XXX-XXXX' 
      maxLength={10}
      placeholderTextColor={'black'}
      keyboardType='number-pad'
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10, color:"#000"}}
      value={phone}
      onChangeText={(value)=>setPhone(value)}
      
      />
   </View>
   <View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/email.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder='example@gmail.com' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10,color:"#000"}}
       value={email}
       onChangeText={(value)=>setEmail(value)}
      />
      
   </View>

   <View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/gender.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <View  style={styles.textInputContainer}>
        
        <TextInput
          placeholder='Gender*'
          placeholderTextColor={'black'}
          editable={edit}
          style={{color:"#000", fontSize:isSmallScreen?15:16}}
          value={selectedGender}
          onChangeText={setSelectedGender}
        />
        {gender&&<TouchableWithoutFeedback onPress={() => setShowGender(!showGender)}>
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <FeatherIcon name={showGender ? "chevron-up" : "chevron-down"} size={20} color="gray" /> 
      </View>
    </TouchableWithoutFeedback> }
   
    </View>

  
  
      
   </View>

   {showGender&&(
   
   <View style={{backgroundColor:"#fff", width:isSmallScreen?330:350, borderRadius:10, marginTop:1.5}}>

<RadioButton.Group style={{position:"absolute"}} onValueChange={(value) => {setSelectedGender(value),setShowGender(false)}} value={selectedGender}>
 <View style={{ flexDirection: 'row', alignItems: 'center'}}>
   <RadioButton value="Male" color='#032D62' />
   <Text style={{fontSize:isSmallScreen?15:16,color:"#000"}}>Male</Text>
 </View>
 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
   <RadioButton value="Female" color='#032D62' />
   <Text style={{fontSize:isSmallScreen?15:16,color:"#000"}}>Female</Text>
 </View>
</RadioButton.Group>
   </View>

)}
  

 </View>

 <Text style={{marginTop:10, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff", marginLeft:isSmallScreen?"5%":"8%"}}>Personal Info</Text>

 <View style={{backgroundColor:"#fff",marginLeft:isSmallScreen?"5%":"8%", marginTop:10, height:isSmallScreen?100:150, width:isSmallScreen?330:350, borderRadius:10,}}>
      <TextInput placeholder='Bio' 
      placeholderTextColor={'black'}
      editable={edit}
      multiline={true}
      numberOfLines={5}
      textAlignVertical='top'
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400',left:10,color:"#000" }}
       value={bio}
       onChangeText={(value)=>setBio(value)}
      />
      
      
   </View>

   <Text style={{marginTop:30, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff", marginLeft:isSmallScreen?"5%":"8%"}}>Enter information about University.</Text>
 
  <View style={{justifyContent:"center", alignItems:"center", backgroundColor:"#032D62"}}>

  <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/univ.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='University*' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10, color:"#000"}}
      value={university}
      onChangeText={(value)=>setUniversity(value)}
      
      />
   </View>
  <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/address.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='Address*' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10,color:"#000"}}
      value={address}
      onChangeText={(value)=>setAddress(value)}
      
      />
   </View>
  <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/state.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='State*' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10,color:"#000"}}
      value={state}
      onChangeText={(value)=>setState(value)}
      
      />
   </View>
  <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/country.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='Country' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10,color:"#000"}}
      value={country}
      onChangeText={(value)=>setCountry(value)}
      
      />
   </View>

   <View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/level.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <View  style={styles.textInputContainer}>
        
        <TextInput
          placeholder='Coach Level*'
          placeholderTextColor={'black'}
          editable={edit}
          style={{fontSize:isSmallScreen?15:16, color:"#000"}}
          
          value={selectedLevel}
          onChangeText={setSelectedLevel}
        />
     {level&& <TouchableWithoutFeedback onPress={() => setShowLevel(!showLevel)}>
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <FeatherIcon name={showLevel ? "chevron-up" : "chevron-down"} size={20} color="gray" /> 
      </View>
    </TouchableWithoutFeedback> }
    </View>

    
  
      
   </View>

   {showLevel && (
  
  <View style={{backgroundColor:"#fff",height:isSmallScreen?430:450, width:isSmallScreen?330:350, borderRadius:10}}>
 
                          <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:350,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                          <TextInput
                            style={styles.Techinput}
                            placeholder="Search Coach Level"
                            placeholderTextColor="#333333"
                            value={selectedLevel}
                            onChangeText={(text)=>setSelectedLevel(text)} />
                        <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                          </View>

                          <ScrollView contentContainerStyle={{paddingBottom:15, }} showsVerticalScrollIndicator={true}>
                          <View style={{ justifyContent:"space-around"}}>
                             {LevelOptions.map((item, index)=>{
                             return(
                              
                              <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                              <CheckBox
                              style={{borderWidth:2, borderColor:"#032D62"}}
                                   disabled={false}
                                   value={toggleCheckBoxLevel}
                                   onValueChange={(newValue) => setToggleCheckBoxLevel(newValue)}
                                />
                            <Text style={{fontSize:isSmallScreen?14:16,color:"#000"}}>{item.levelName}</Text>
                            </View>
                            
                          
                             )
                             })}
                          </View>

                          <TouchableOpacity onPress={()=>setShowLevel(false)} style={{width:isSmallScreen?100:130, height:40,marginLeft:5, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"left", justifyContent:'center', alignItems:"center"}}>
                         <Text style={{fontSize:isSmallScreen?14:16,fontWeight:"600", color:"#032D62"}}>Apply</Text>
                        </TouchableOpacity>

                          </ScrollView>
                        
  </View>

  
)}



   <View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/sports.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <View  style={styles.textInputContainer}>
        
        <TextInput
          placeholder='Sport*'
          placeholderTextColor={'black'}
          editable={edit}
          style={{fontSize:isSmallScreen?15:16, color:"#000"}}
          
          value={selectedSport}
          onChangeText={setSelectedSport}
        />
      {sport&&<TouchableWithoutFeedback onPress={() => setShowSport(!showSport)}>
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <FeatherIcon name={showSport ? "chevron-up" : "chevron-down"} size={20} color="gray" /> 
      </View>
    </TouchableWithoutFeedback> }
    </View>

    
  
      
   </View>

   {showSport && (
  
  <View style={{backgroundColor:"#fff",height:360, width:isSmallScreen?330:350, borderRadius:10}}>
 
                          <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                          <TextInput
                            style={styles.Techinput}
                            placeholder="Search Sport"
                            placeholderTextColor="#333333"
                            value={selectedLevel}
                            onChangeText={(text)=>setSelectedLevel(text)} />
                        <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                          </View>

                          <ScrollView contentContainerStyle={{paddingBottom:15, }} showsVerticalScrollIndicator={true}>
                          <View style={{ justifyContent:"space-around"}}>
                             {SportOptions.map((item, index)=>{
                             return(
                              
                             <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                               <CheckBox
                                   disabled={false}
                                   value={toggleCheckBoxSport}
                                   onValueChange={(newValue) => setToggleCheckBoxSport(newValue)}
                                />
                            <Text style={{fontSize:isSmallScreen?15:18, color:"#000"}}>{item}</Text>
                             </View>
                             
                          
                            
                          
                             )
                             })}
                          </View>
                          <TouchableOpacity onPress={()=>setShowSport(false)} style={{width:isSmallScreen?100:130, height:40,marginLeft:5, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"left", justifyContent:'center', alignItems:"center"}}>
                          <Text style={{fontSize:isSmallScreen?14:16,fontWeight:"600", color:"#032D62"}}>Apply</Text>
                         </TouchableOpacity>
                          

                          </ScrollView>
                        
  </View>

  
)}
   <View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/select_role.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <View  style={styles.textInputContainer}>
        
        <TextInput
          placeholder='Select Role*'
          placeholderTextColor={'black'}
          style={{fontSize:isSmallScreen?15:16, color:"#000"}}
          editable={edit}
          value={selectedRole}
          onChangeText={setSelectedRole}
        />
      {role&&<TouchableWithoutFeedback onPress={() => setShowRole(!showRole)}>
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <FeatherIcon name={showRole ? "chevron-up" : "chevron-down"} size={20} color="gray" /> 
      </View>
    </TouchableWithoutFeedback> }
    </View>


  
      
   </View>

   {showRole&&(

<View style={{backgroundColor:"#fff",height:isSmallScreen?500:500, width:isSmallScreen?330:350, borderRadius:10}}>
 
<View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center"}}>
<TextInput
  style={styles.Techinput}
  placeholder="Search Role"
  placeholderTextColor="#333333"
  value={selectedLevel}
  onChangeText={(text)=>setSelectedLevel(text)} />
<FeatherIcon name="search" size={isSmallScreen ? 15 : 20} color="#aaa" style={{ marginEnd: 3 }} />
</View>

<ScrollView contentContainerStyle={{paddingBottom:15, }} showsVerticalScrollIndicator={true}>
                          <View style={{ justifyContent:"space-around"}}>
                             {RoleOptions.map((item, index)=>{
                             return(
                              <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                              <CheckBox
                                   disabled={false}
                                   value={toggleCheckBoxRole}
                                   onValueChange={(newValue) => setToggleCheckBoxRole(newValue)}
                                />
                            <Text style={{fontSize:isSmallScreen?15:18, color:"#000"}}>{item.role}</Text>
                            </View>
                            
                            
                          
                             )
                             })}
                          </View>

                          <TouchableOpacity onPress={()=>setShowRole(false)} style={{width:100, height:40,marginLeft:5, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"left", justifyContent:'center', alignItems:"center"}}>
                         <Text style={{fontSize:14,fontWeight:"600", color:"#032D62"}}>Apply</Text>
                        </TouchableOpacity>

                          </ScrollView>


</View>
   )}


   

   <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/year.png')}style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='Start Year' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400',color:"#000", left:10}}
      value={year}
      onChangeText={(value)=>setYear(value)}
      
      />
   </View>
 
   <TouchableOpacity onPress={()=>{handleData()}} style={{width:isSmallScreen?330:350, height:50, marginTop:30,marginBottom:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>{editbutton?"Edit Profile":"Submit"}</Text>
</TouchableOpacity>
  
  </View>






                   




       </KeyboardAvoidingView>


            </ScrollView>
           

        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#032D62',
        
    },
    btn: {
        flexDirection: "row",
        height: 60,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        borderRadius: 10
    },
    image:{
        marginTop:40,
        width:width,
        height:height,
    },
    textInputContainer: {
        marginEnd:5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        marginStart:5,
      },
      dropdownList: {
        opacity:10,
        elevation:10,
        shadowOpacity:10,
        position: 'absolute',
        top:"-150%",
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        zIndex:10
      },
      
      
      
})