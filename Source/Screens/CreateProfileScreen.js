import { Image,ScrollView, ImageBackground,TouchableWithoutFeedback, StyleSheet, Dimensions,Platform, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Pressable } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../Components/BackButton'
import { useNavigation } from '@react-navigation/native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { RadioButton } from 'react-native-paper'
import CheckBox from '@react-native-community/checkbox';
// import { Checkbox } from 'react-native-paper';
import { LevelOptions, RoleOptions, SportOptions } from '../Constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width, height } = Dimensions.get('window')
const isSmallScreen = width < 400;


const CreateProfileScreen = () => {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('')
    const [university, setUniversity] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [year, setYear] = useState('')
    const [selectedGender, setSelectedGender] = useState('Male')
    const [selectedLevel, setSelectedLevel] = useState('')
    const [selectedSport, setSelectedSport] = useState('')
    const [showSport, setShowSport] = useState(false)
    const [showGender, setShowGender] = useState(false)
    const [showLevel, setShowLevel] = useState(false)
    const [selectedRole, setSelectedRole] = useState('')
    const [showRole, setShowRole] = useState(false)
   
    const [toggleCheckBoxLevel, setToggleCheckBoxLevel] = useState(false)
    const [toggleCheckBoxRole, setToggleCheckBoxRole] = useState(false)
    const [toggleCheckBoxSport, setToggleCheckBoxSport] = useState(false)

  

    const handleCheckBoxLevel =(value, index, name) =>{
      console.log("Level Check Box",index)
     setToggleCheckBoxLevel(value)
     setSelectedLevel(name)
    //  const updatedCheckedState = toggleCheckBoxLevel.map((item, index) =>
    //   index === value ? !item : item
    // );
    // setToggleCheckBoxLevel(updatedCheckedState)
    }

  
   

   
    return (
        <View style={styles.container}>
      <ScrollView  contentContainerStyle={{paddingBottom:isSmallScreen?height*0.75:height*0.00, overflow:"hidden"}}>

       <BackButton onPress={()=>navigation.goBack()} bgColor="#FDBA31" color="#000"/>
       
   
            <ImageBackground source={require('../assets/images/createbg.png')} style={styles.image}>
            <Text style={{color:"#fff",fontSize:isSmallScreen?22:24,marginTop:isSmallScreen?"8%":"8%", alignSelf:"center", fontWeight:"600",}}>Create Your Profile</Text>
            </ImageBackground>
                
            
                <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
                >
 <View style={{justifyContent:"center", backgroundColor:"#032D62", }}>

 <View style={{marginTop:isSmallScreen?30:40}}>
   <ImageBackground source={require('../assets/images/profile.png')} style={{height:isSmallScreen?100:120,width:isSmallScreen?100:120, alignSelf:"center",}}>
   <TouchableOpacity style={{position:"absolute", top:"60%",left:"75%", height:isSmallScreen?30:30,width:isSmallScreen?30:30, borderRadius:15, backgroundColor:"#FDBA31", justifyContent:'center', alignItems:"center"}}>
   <FontAwesome5Icon name="pen" size={isSmallScreen?14:16} color="#032D62" /> 
</TouchableOpacity>
   </ImageBackground>
  
</View>

 <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
 <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/person.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder='John Smith' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10,color:"#000"}}
       value={name}
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
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10,color:"#000"}}
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
          style={{color:"#000", fontSize:isSmallScreen?15:16}}
          value={selectedGender}
          onChangeText={setSelectedGender}
        />
      <TouchableWithoutFeedback onPress={() => setShowGender(!showGender)}>
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <FeatherIcon name={showGender ? "chevron-up" : "chevron-down"} size={20} color="gray" /> 
      </View>
    </TouchableWithoutFeedback> 
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

 <Text style={{marginTop:isSmallScreen?"5%":"5%", fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff", marginLeft:isSmallScreen?"7%":"8%"}}>Personal Info</Text>

 <View style={{backgroundColor:"#fff",marginLeft:isSmallScreen?"7%":"7%", marginTop:10, height:isSmallScreen?90:100, width:isSmallScreen?330:350, borderRadius:10,}}>
      <TextInput placeholder='Bio' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={bio}
       onChangeText={(value)=>setBio(value)}
      />
      <Text style={{alignSelf:"flex-end",fontSize:isSmallScreen?12:14, color:"#032D62",marginTop:isSmallScreen?"5%":"7%",marginRight:"5%"}}>0/200</Text>
      
   </View>

   <Text style={{marginTop:30, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff", marginLeft:isSmallScreen?"7%":"8%"}}>Enter information about University.</Text>
 
  <ScrollView contentContainerStyle={{justifyContent:"center", alignItems:"center",}}>

  <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../assets/icons/univ.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='University*' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10,color:"#000"}}
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
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
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
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
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
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
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
          style={{fontSize:isSmallScreen?15:16}}
          
          value={selectedLevel}
          onChangeText={setSelectedLevel}
        />
      <TouchableWithoutFeedback onPress={() => setShowLevel(!showLevel)}>
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <FeatherIcon name={showLevel ? "chevron-up" : "chevron-down"} size={20} color="gray" /> 
      </View>
    </TouchableWithoutFeedback> 
    </View>

    
  
      
   </View>

   {showLevel && (
  
  <View style={{backgroundColor:"#fff",marginTop:1.5,height:isSmallScreen?430:440, width:isSmallScreen?330:350, borderRadius:10}}>
 
 <View style={{padding:0.1,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",marginTop:isSmallScreen?"3%":"3%"}}>
<TextInput
  style={styles.Techinput}
  placeholder="Search Coach Level"
  placeholderTextColor="#333333"
  value={selectedLevel}
  onChangeText={(text)=>setSelectedLevel(text)} />
<FeatherIcon name="search" size={isSmallScreen ? 15 : 23} color="#aaa" style={{ marginEnd: 3 }} />
</View>

                          <ScrollView contentContainerStyle={{paddingBottom:50,marginTop:isSmallScreen?"3%":"3%" }} showsVerticalScrollIndicator={true}>
                          <View style={{ justifyContent:"space-around"}}>
                             {LevelOptions.map((item, index)=>{
                             return(
                              
                              <View style={{flexDirection:"row", alignItems:"center", }} key={index}>
                              <CheckBox
    disabled={false}
    tintColors={toggleCheckBoxLevel?"red":"transparent"}
    value={toggleCheckBoxLevel}
    onValueChange={(newValue) => handleCheckBoxLevel(newValue, index, item.levelName)}
  />
                            <Text style={{fontSize:isSmallScreen?14:16,color:"#000",marginLeft:"3%", }}>{item.levelName}</Text>
                            </View>
                            
                          
                             )
                             })}
                          </View>

                          <TouchableOpacity onPress={()=>setShowLevel(false)} style={{width:isSmallScreen?100:130, height:40,marginLeft:"4%", marginTop:isSmallScreen?"5%":"8%",borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"left", justifyContent:'center', alignItems:"center"}}>
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
          style={{fontSize:isSmallScreen?15:16}}
          
          value={selectedSport}
          onChangeText={setSelectedSport}
        />
      <TouchableWithoutFeedback onPress={() => setShowSport(!showSport)}>
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <FeatherIcon name={showSport ? "chevron-up" : "chevron-down"} size={20} color="gray" /> 
      </View>
    </TouchableWithoutFeedback> 
    </View>

    
  
      
   </View>

   {showSport && (
  
  <View style={{backgroundColor:"#fff",marginTop:1.5,height:height*2.28, width:isSmallScreen?330:350, borderRadius:10}}>
 
                          <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                          <TextInput
                            style={styles.Techinput}
                            placeholder="Search Sport"
                            placeholderTextColor="#333333"
                            value={selectedLevel}
                            onChangeText={(text)=>setSelectedLevel(text)} />
                        <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                          </View>

                          <ScrollView contentContainerStyle={{paddingBottom:25, }} showsVerticalScrollIndicator={true}>
                          <View style={{ justifyContent:"space-around",}}>
                             {SportOptions.map((item, index)=>{
                             return(
                              
                             <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                               <Checkbox
      status={toggleCheckBoxSport ? 'checked' : 'unchecked'}
      color={toggleCheckBoxSport?"#032D62":"transparent"}
      onPress={() => {
        setToggleCheckBoxSport(!toggleCheckBoxSport);
      }}
    />
                            <Text style={{fontSize:isSmallScreen?15:16, color:"#000"}}>{item.sport}</Text>
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
          
          value={selectedRole}
          onChangeText={setSelectedRole}
        />
      <TouchableWithoutFeedback onPress={() => setShowRole(!showRole)}>
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <FeatherIcon name={showRole ? "chevron-up" : "chevron-down"} size={20} color="gray" /> 
      </View>
    </TouchableWithoutFeedback> 
    </View>


  
      
   </View>

   {showRole&&(

<View style={{backgroundColor:"#fff",marginTop:1.5,height:height*0.65, width:isSmallScreen?330:350, borderRadius:10}}>
 
<View style={{padding:0.1,marginTop:isSmallScreen?"3%":"3%",width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center"}}>
<TextInput
  style={styles.Techinput}
  placeholder="Search Role"
  placeholderTextColor="#333333"
  value={selectedLevel}
  onChangeText={(text)=>setSelectedLevel(text)} />
<FeatherIcon name="search" size={isSmallScreen ? 15 : 20} color="#aaa" style={{ marginEnd: 3 }} />
</View>

<ScrollView contentContainerStyle={{paddingBottom:15,marginTop:isSmallScreen?"3%":"3%" }} showsVerticalScrollIndicator={true}>
                          <View style={{ justifyContent:"space-around"}}>
                             {RoleOptions.map((item, index)=>{
                             return(
                              <View style={{flexDirection:"row", alignItems:"center", }} key={index}>
                             <Checkbox
      status={toggleCheckBoxRole ? 'checked' : 'unchecked'}
      color={toggleCheckBoxRole?"#032D62":"transparent"}
      onPress={() => {
        setToggleCheckBoxRole(!toggleCheckBoxRole);
      }}
    />
                            <Text style={{fontSize:isSmallScreen?15:16, color:"#000"}}>{item.role}</Text>
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
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={year}
      onChangeText={(value)=>setYear(value)}
      
      />
   </View>
 
   <TouchableOpacity onPress={()=>{navigation.navigate('Tabs')}} style={{width:isSmallScreen?330:350, height:50, marginTop:30,marginBottom:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>Submit</Text>
</TouchableOpacity>
  
  </ScrollView>
  </View>                   
                    







                   




                </KeyboardAvoidingView>
              
          
          
            </ScrollView>
           

        </View>
    )
}

export default CreateProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        height:72,
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