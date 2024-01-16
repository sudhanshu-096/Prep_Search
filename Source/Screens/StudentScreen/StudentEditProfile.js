import { Image,ScrollView, ToastAndroid,ImageBackground,FlatList,TouchableWithoutFeedback, StyleSheet, Dimensions,Platform, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Pressable } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../../Components/BackButton';
import { useNavigation } from '@react-navigation/native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper'
import CheckBox from '@react-native-community/checkbox';
import { LevelOptions, RoleOptions } from '../../Constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import EditProfileScreen from '../EditProfileScreen';

const { width, height } = Dimensions.get('window')
const isSmallScreen = width < 400;

const CustomRadioButton = ({ value, selectedValue, onPress,label }) => {
    const isSelected = selectedValue === value;
   
       return (    
     <TouchableOpacity style={{marginLeft:10}} onPress={onPress}>
   
     <View
       style={{
         width: 20,
         height: 20,
         borderRadius: 10,
         borderWidth: 2,
         borderColor: isSelected ? '#032D62' : 'gray',
         alignItems: 'center',
         justifyContent: 'center',
       }} >
   
       {isSelected && (
         <View
           style={{
             width: 12,
             height: 12,
             borderRadius: 6,
             backgroundColor: '#032D62',
           }}
         />
       )}
     </View>
   </TouchableOpacity>  
       );
     };
const CustomCheckBox = ({ value, selectedValue, onPress,label }) => {
    const isSelected = selectedValue === value;
   
       return (    
     <TouchableOpacity style={{marginLeft:10}} onPress={onPress}>
   
     <View
       style={{
         width: 20,
         height: 20,
         borderWidth: 2,
         borderColor: isSelected ? '#032D62' : 'gray',
         alignItems: 'center',
         justifyContent: 'center',
       }} >
   
       {isSelected && (
         <View
           style={{
             width: 12,
             height: 12,
             backgroundColor: '#032D62',
           }}
         />
       )}
     </View>
   </TouchableOpacity>  
       );
     };
const StudentEditProfile = () => {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [selectedGender, setSelectedGender] = useState('Male')
    const [parentEmail, setParentEmail] = useState('')
    const [parentsPhone, setParentsPhone] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [studentPhone, setStudentPhone] = useState('')
    const [homeAddress, setHomeAddress] = useState('')
    const [height, setHeight] = useState('')
    const [grade, setGrade] = useState('')
    const [academic, setAcademic] = useState('')
    const [gpa, setGpa] = useState('')
    const [SATScore, setSATScore] = useState('')
    const [ActScore, setActScore] = useState('')
    const [HighSchool, setHighSchool] = useState('')
    const [HighSchoolAddress, setHighSchoolAddress] = useState('')
    const [Recruitinglink, setRecruitinglink] = useState('')
    const [Academictranscript, setAcademictranscript] = useState('')
    const [Honors, setHonors] = useState('')
    const [Hobbies, setHobbies] = useState('')
    const [Basketball, setBasketball] = useState('')
    const [Guard, setGuard] = useState('')
    const [NCA, setNCA] = useState('')
    const [NCIA, setNCIA] = useState('')
    const [Other, setOther] = useState('')
    const [Coachrefernces,setCoachRefernces]=useState({
      name:'',
      email:'',
      phone:'',
    })

    
    const [Prorefernces,setProRefernces]=useState({
      name:'',
      email:'',
      phone:'',
    })


    const [Othrefernces,setOthRefernces]=useState({
      name:'',
      email:'',
      phone:'',
    })

    const [SocialLinks, setSocialLinks] = useState('')
    const [attachment, setAttachment] = useState('')
    


    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('')
    const [university, setUniversity] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [year, setYear] = useState('')
  
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
    const [edit, setEdit] = useState(false)
    const [editbutton, setEditbutton] = useState(true)
    const [gender, setGender] = useState(false)
    const [major, setMajor] = useState(false)
    const [sport, setSport] = useState(false)
    const [position, setPosition] = useState(false)


    const [Images1, setImages1] = useState([1,2,3])

    const startEditing = () =>{
      setEdit(true)
      setGender(true)
      setMajor(true)
      setSport(true)
      setPosition(true)
      setEditbutton(false)
    }
    const closeEditing = () =>{
      setEdit(false)
      setGender(false)
      setMajor(false)
      setSport(false)
      setPosition(false)
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
 <KeyboardAwareScrollView showsVerticalScrollIndicator={false}keyboardShouldPersistTaps={'always'}>

       <BackButton onPress={()=>navigation.goBack()} bgColor="#FDBA31" color="#000"/>
       
   
            <ImageBackground source={require('../../assets/images/bg.png')} imageStyle={styles.image}  >
                
                
  
                <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? "padding" : "padding"}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
                   
                    
            <Text style={{marginTop:isSmallScreen?55:60, alignSelf:'center', fontSize:isSmallScreen?22:25,fontWeight:'600', color:"#fff"}}>{editbutton?"Profile":"Edit Profile"}</Text>

<View style={{marginTop:isSmallScreen?30:40}}>
   <ImageBackground source={require('../../assets/images/profile.png')} style={{height:isSmallScreen?100:120,width:isSmallScreen?100:120, alignSelf:"center",}}>
   <TouchableOpacity style={{position:"absolute", top:"60%",left:"75%", height:isSmallScreen?30:30,width:isSmallScreen?30:30, borderRadius:15, backgroundColor:"#FDBA31", justifyContent:'center', alignItems:"center"}}>
<Image source={require('../../assets/icons/edit_profile.png')} style={{height:isSmallScreen?15:18, width:isSmallScreen?15:18}}/>
</TouchableOpacity>
   </ImageBackground>
  
  
</View>

 <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
  
 <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/person.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder='John Smith' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={name}
       onChangeText={(value)=>setName(value)}
      />
     
   </View>

   <View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/images/Vector.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder='Birth Date*' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={dob}
       onChangeText={(value)=>setDob(value)}
      />
      
   </View>

   <View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/gender.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
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
      {gender && <TouchableWithoutFeedback onPress={() => setShowGender(!showGender)}>
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <FeatherIcon name={showGender ? "chevron-up" : "chevron-down"} size={20} color="gray" /> 
      </View>
    </TouchableWithoutFeedback> }
    </View>


   </View>
   {showGender&&(
   
   <View style={{backgroundColor:"#fff", width:isSmallScreen?330:350, borderRadius:10}}>

<RadioButton.Group style={{position:"absolute"}} onValueChange={(value) => setSelectedGender(value)} value={selectedGender}>
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
 <Text style={{marginTop:10, fontWeight:"400",fontSize:isSmallScreen?11:12, color:"#fff", marginLeft:"7%"}}>If under the age of 16, please enter parents contact information.</Text>



 <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginLeft:30,marginTop:30}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/email.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`example@gmail.com`}
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={parentEmail}
       onChangeText={(value)=>setParentEmail(value)}
      />
      
   </View>


   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginLeft:30,marginTop:20}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/phone.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`+1 (XXX) XXX-XXXX`} 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={parentsPhone}
       onChangeText={(value)=>setParentsPhone(value)}
      />
      
   </View>
   <Text style={{marginTop:30, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff", marginLeft:"6%"}}>Student Contact Information</Text>

   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginLeft:30,marginTop:20}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/email.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`example@gmail.com`} 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={studentEmail}
       onChangeText={(value)=>setStudentEmail(value)}
      />
      
   </View>



   
   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginLeft:30,marginTop:20}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/phone.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`+1 (XXX) XXX-XXXX`} 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={studentPhone}
       editable={edit}
       onChangeText={(value)=>setStudentPhone(value)}
      />
      
   </View>

   
   

   
 
  <View style={{justifyContent:"center", alignItems:"center", backgroundColor:"#032D62"}}>

  <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/address.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='Lorem Ipsum is simply dummy text' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={homeAddress}
      editable={edit}
      onChangeText={(value)=>setHomeAddress(value)}
      
      />
   </View>


   <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/state.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='New York' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={state}
      onChangeText={(value)=>setState(value)}
      
      />
   </View>


  <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/country.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='United States' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={country}
      onChangeText={(value)=>setCountry(value)}
      
      />
   </View>


   <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/Height.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='5.7' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={height}
      onChangeText={(value)=>setHeight(value)}
      
      />
   </View>

   <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/Grade.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='A' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={grade}
      onChangeText={(value)=>setGrade(value)}
      
      />
   </View>

<View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/univ.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <View  style={styles.textInputContainer}>
        
        <TextInput
          placeholder='Accounting'
          placeholderTextColor={'black'}
          editable={edit}
          style={{fontSize:isSmallScreen?15:16}}
          
          value={academic}
          onChangeText={setAcademic}
        />
      {major &&<TouchableWithoutFeedback onPress={() => setShowSport(!showSport)}>
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
                          <TouchableOpacity style={{width:isSmallScreen?100:130, height:40,marginLeft:5, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"left", justifyContent:'center', alignItems:"center"}}>
                          <Text style={{fontSize:isSmallScreen?14:16,fontWeight:"600", color:"#032D62"}}>Apply</Text>
                         </TouchableOpacity>
                          

                          </ScrollView>
                        
  </View>

  
)}


<View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/GPA.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='3.7' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={gpa}
      onChangeText={(value)=>setGpa(value)}
      
      />
   </View>


   <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/SAT.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='300' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={SATScore}
      editable={edit}
      onChangeText={(value)=>setSATScore(value)}
      
      />
   </View>


   <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/ACT.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='200' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={ActScore}
      onChangeText={(value)=>setActScore(value)}
      
      />
   </View>



   <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/HighSchool.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='Hofstra University' 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={HighSchool}
      onChangeText={(value)=>setHighSchool(value)}
      
      />
   </View>



   <View style={{backgroundColor:"#fff", height:50, marginTop:20, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/HighSchool.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
       
      </View>
      <TextInput placeholder='Hofstra University, N.Y. 11549-1000' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
      value={HighSchoolAddress}
      editable={edit}
      onChangeText={(value)=>setHighSchoolAddress(value)}
      
      />
   </View>


   <Text style={{marginTop:30, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff",marginRight:'13%'}}>Upload links of recruiting services</Text>




   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:20}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/Recruitinglink.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`Recruiting Links`} 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Recruitinglink}
       onChangeText={(value)=>setRecruitinglink(value)}
      />
      
   </View>



<View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/Academictranscript.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <View  style={styles.textInputContainer}>
        
        <TextInput
          placeholder='Academic Transcript'
          placeholderTextColor={'black'}
          editable={edit}
          style={{fontSize:isSmallScreen?15:16}}
          
          value={Academictranscript}
          onChangeText={setAcademictranscript}
        />
      <TouchableWithoutFeedback >
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <AntDesignIcon name= 'upload' size={20} color="blue"  style={{marginEnd:3,fontWeight:'bold'}}/> 
      </View>
    </TouchableWithoutFeedback> 
    </View>
    

    
  
      
   </View>

   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:20}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/Honors.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`Honors & Accomplishments`} 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Honors}
       onChangeText={(value)=>setHonors(value)}
      />

<Text style={{fontSize:isSmallScreen?12:14, color:"#032D62",marginTop:isSmallScreen?"8%":"7%",alignSelf:'flex-end',marginLeft:'13%'}}>0/200</Text>
      
   </View>

   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:20}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/Hobbies.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`Hobbies & Interests`} 
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Hobbies}
       onChangeText={(value)=>setHobbies(value)}
      />
      
<Text style={{fontSize:isSmallScreen?12:14, color:"#032D62",marginTop:isSmallScreen?"8%":"7%",alignSelf:'flex-end',marginLeft:'29%'}}>0/200</Text>
   </View>


   <View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/Basketball.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <View  style={styles.textInputContainer}>
        
        <TextInput
          placeholder='Basketball'
          placeholderTextColor={'black'}
          editable={edit}
          style={{fontSize:isSmallScreen?15:16}}
          
          value={Basketball}
          onChangeText={setBasketball}
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
                          <TouchableOpacity style={{width:isSmallScreen?100:130, height:40,marginLeft:5, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"left", justifyContent:'center', alignItems:"center"}}>
                          <Text style={{fontSize:isSmallScreen?14:16,fontWeight:"600", color:"#032D62"}}>Apply</Text>
                         </TouchableOpacity>
                          

                          </ScrollView>
                        
  </View>

  
)}

<View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/Guard.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <View  style={styles.textInputContainer}>
        
        <TextInput
          placeholder='Forward'
          placeholderTextColor={'black'}
          editable={edit}
          style={{fontSize:isSmallScreen?15:16}}
          
          value={Guard}
          onChangeText={setGuard}
        />
      {position&&<TouchableWithoutFeedback onPress={() => setShowSport(!showSport)}>
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
                          <TouchableOpacity style={{width:isSmallScreen?100:130, height:40,marginLeft:5, marginTop:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"left", justifyContent:'center', alignItems:"center"}}>
                          <Text style={{fontSize:isSmallScreen?14:16,fontWeight:"600", color:"#032D62"}}>Apply</Text>
                         </TouchableOpacity>
                          

                          </ScrollView>
                        
  </View>

  
)}

<View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:20}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/NCA.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`1234567890`} 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={NCA}
       editable={edit}
       onChangeText={(value)=>setNCA(value)}
      />
      
   </View>



   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:20}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/NIA.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`1234567890`} 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={NCIA}
       editable={edit}
       onChangeText={(value)=>setNCIA(value)}
      />
      
   </View>


 <View style={{backgroundColor:"#fff", marginTop:10, height:isSmallScreen?100:150, width:isSmallScreen?330:350, borderRadius:10,}}>
      <TextInput placeholder='other information' 
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Other}
       editable={edit}
       onChangeText={(value)=>setOther(value)}
      />
      <Text style={{alignSelf:"flex-end",fontSize:isSmallScreen?12:14, color:"#032D62",marginTop:isSmallScreen?"8%":"20%",marginRight:"5%"}}>0/200</Text>
      
   </View>


   <Text style={{marginTop:30, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff",marginRight:'60%'}}>References</Text>
   

   <Text style={{marginTop:10, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff",marginRight:'50%'}}> Coach Reference*</Text>


   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/person.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`Alina`}
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Coachrefernces.name}
       onChangeText={(value)=>setCoachRefernces.name(value)}
      />
      
   </View>

   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/email.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`example@gmail.com`}
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Coachrefernces.email}
       onChangeText={(value)=>setCoachRefernces.email(value)}
      />
      
   </View>

  

   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/phone.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={` +1 (XXX) XXX-XXXX `}
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Coachrefernces.phone}
       editable={edit}
       onChangeText={(value)=>setCoachRefernces.phone(value)}
      />
      
   </View>


   <Text style={{marginTop:30, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff",marginRight:'35%'}}>Professional Reference</Text>

   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/person.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`Lizza`}
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Prorefernces.name}
       onChangeText={(value)=>setProRefernces.name(value)}
      />
      
   </View>


   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/email.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`example@gmail.com`}
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Prorefernces.email}
       onChangeText={(value)=>setProRefernces.email(value)}
      />
      
   </View>


   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/phone.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`+1 (XXX) XXX-XXXX`}
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Prorefernces.phone}
       editable={edit}
       onChangeText={(value)=>setProRefernces.phone(value)}
      />
      
   </View>

   <Text style={{marginTop:30, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff",marginRight:'50%'}}>Other Reference</Text>


   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/person.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`dezzy`}
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Othrefernces.name}
       onChangeText={(value)=>setOthRefernces.name(value)}
      />
      
   </View>


   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/email.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`example@gmail.com`}
      placeholderTextColor={'black'}
      editable={edit}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Othrefernces.email}
       onChangeText={(value)=>setOthrefernces.email(value)}
      />
                                                          
   </View>


   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/phone.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`+1 (XXX) XXX-XXXX`}
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={Othrefernces.phone}
       editable={edit}
       onChangeText={(value)=>setOthrefernces.phone(value)}
      />
      
   </View>

   <Text style={{marginTop:30, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff",marginRight:'50%'}}>Social Media Links</Text>



   <View style={{backgroundColor:"#fff", height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row',marginTop:10}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <Image source={require('../../assets/icons/social-media.png')} style={{height:isSmallScreen?20:25, width:isSmallScreen?20:25}}/>
      </View>
      <TextInput placeholder={`Social media link`}
      placeholderTextColor={'black'}
      style={{fontSize:isSmallScreen?15:16, fontWeight:'400', left:10}}
       value={SocialLinks}
       editable={edit}
       onChangeText={(value)=>setSocialLinks(value)}
      />
      

   </View>

  <Text style={{marginTop:30, fontWeight:"600",fontSize:isSmallScreen?15:18, color:"#fff",marginRight:'30%'}}>Letters of Recommendation</Text>


  <View style={{backgroundColor:"#fff", marginTop:20, height:50, width:isSmallScreen?330:350, borderRadius:10, flexDirection:'row'}}>
      <View style={{height:50, width:50, backgroundColor:"#FDBA31", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
      <AntDesignIcon name= 'cloudupload' size={20} color="#032D62"  /> 
      </View>
      <View  style={styles.textInputContainer}>
        
        <TextInput
          placeholder='Upload attchments'
          placeholderTextColor={'black'}
          style={{fontSize:isSmallScreen?15:16}}
          editable={edit}
          
          value={attachment}
          onChangeText={setAttachment}
        />
      <TouchableWithoutFeedback >
        <View style={{ marginLeft: 10,
       justifyContent: 'center', }}>
       <AntDesignIcon name= 'upload' size={20} color="#032D62"  style={{marginEnd:3,fontWeight:'bold'}}/> 
      </View>
    </TouchableWithoutFeedback> 
    </View>

    
  
      
  </View>



  {/* Parent View Block */}
  <View style={{ flex: 1, flexDirection: 'row',  borderColor: '#FFFFFF',marginTop:30, width:'70%',marginEnd:'13%'}}>
    {/* Child 1 */}
    <View style={{ borderWidth: 2, borderStyle: 'dashed', padding: 10, flex: 1, marginHorizontal: 5, borderColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
      {/* Content for Child 1 */}
      <Image source={require('../../assets/icons/gallery.png')} style={{ height: isSmallScreen ? 20 : 25, width: isSmallScreen ? 20 : 25 }} resizeMode='contain' />
    </View>
    {/* Child 2 */}
    <View style={{ borderWidth: 2, borderStyle: 'dashed', padding: 10, flex: 1, marginHorizontal: 5, borderColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
      {/* Content for Child 2 */}
      <Image source={require('../../assets/icons/gallery.png')} style={{ height: isSmallScreen ? 20 : 25, width: isSmallScreen ? 20 : 25 }} resizeMode='contain' />
    </View>
    {/* Child 3 */}
    <View style={{ borderWidth: 2, borderStyle: 'dashed', padding: 10, flex: 1, marginHorizontal: 5, borderColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
      {/* Content for Child 3 */}
      <Image source={require('../../assets/icons/gallery.png')} style={{ height: isSmallScreen ? 20 : 25, width: isSmallScreen ? 20 : 25 }} resizeMode='contain' />
    </View>

    <View style={{ borderWidth: 2, borderStyle: 'dashed', padding: 10, flex: 1, marginHorizontal: 5, borderColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
      {/* Content for Child 3 */}
      <Image source={require('../../assets/icons/gallery.png')} style={{ height: isSmallScreen ? 20 : 25, width: isSmallScreen ? 20 : 25 }} resizeMode='contain' />
    </View>
  </View>

<TouchableOpacity onPress={()=>{handleData()}} style={{width:isSmallScreen?330:350, height:50, marginTop:30,marginBottom:30,borderRadius:10, backgroundColor:'#FDBA31', alignSelf:"center", justifyContent:'center', alignItems:"center"}}>
   <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"600", color:"#000"}}>{editbutton?"Edit Profile":"Submit"}</Text>
</TouchableOpacity>

  </View>
                </KeyboardAvoidingView>
            </ImageBackground>
           
            </KeyboardAwareScrollView>
           
           
        </View>
    )
}

export default StudentEditProfile

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