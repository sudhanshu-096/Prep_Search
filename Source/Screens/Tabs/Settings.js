import { View, Text, ScrollView,Dimensions, Image,TouchableOpacity,Modal, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather'

import Icon2 from 'react-native-vector-icons/FontAwesome6';
import AboutScreenComponent from '../../Components/AboutScreenComponent';
import TandCComponent from '../../Components/TandCComponent';
import PrivacyComponent from '../../Components/PrivacyComponent';
import ContactComponent from '../../Components/ContactComponent';
import FAQComponent from '../../Components/FAQComponent';
import Icon7 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Entypo';
import Service from '../../../Service/Service';


const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400;


const Settings = () => {

  const navigation = useNavigation();
  const isfocused = useIsFocused();
  const[toggleSwitch, setToggleSwitch] = useState(true)
  const[about_me, setAbout_Me] = useState(false)
  const[terms, setTerms] = useState(false)
  const[privacy, setPrivacy] = useState(false)
  const[contact_me, setContact_Me] = useState(false)
  const[faq, setFAQ] = useState(false)
  const[deleteModal, setDeleteModal] = useState(false)
  const[logoutModal, setLogoutModal] = useState(false)
  const[account_delete, setAccount_delete] = useState(false)

  const closeModal = () =>{
   setDeleteModal(false)
  }
  const closeLogoutModal = () =>{
   setLogoutModal(false)
  }
  const closeAccountDeleteModal = () =>{
   setAccount_delete(false)
  }

  useEffect(()=>{
    setAbout_Me(false)
    setTerms(false)
    setPrivacy(false)
    setContact_Me(false)
    setFAQ(false)
  },[isfocused])

  return (
    <View style={{flex:1, backgroundColor:"#FDBA31"}}>
      
     {
     faq==false?
     ( <>
      {
       contact_me==false?
      (
       <>  
     {privacy==false?
     (<>
     {terms==false? 
     <>
      {about_me==false?
         (<>
      <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
      <BackButton bgColor="#032D62" color="#fff" onPress={()=>navigation.goBack()}/>
         <Text style={{color:"#000",fontSize:isSmallScreen?22:24,  fontWeight:"600", textAlign:"center"}}>Settings</Text>
         <Text></Text>
         <Text></Text>
      </View>

         <View style={{marginTop:20, flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
             <View>
             <Text style={{fontSize:isSmallScreen?18:20, fontWeight:"600", color:"#000"}}>Lissa John</Text>
             <Text style={{fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#032D62"}}>example@gmail.com</Text>
             </View>
             <View style={{height:isSmallScreen?73:80,width:isSmallScreen?73:80,borderColor:"#032D62", borderWidth:2,borderRadius:50 }}>
                <Image source={require('../../assets/images/settings_profile.png')} style={{height:isSmallScreen?69:77,width:isSmallScreen?69:77,borderRadius:50 }} resizeMode='cover'/>
             </View>
         </View>


         <View style={{backgroundColor:"#032D62", height:isSmallScreen?height*0.77:height*0.77, width:"100%", marginTop:isSmallScreen?"10%":"10%"}}>

       
       <View style={{marginTop:isSmallScreen?"6%":"6%",marginBottom:isSmallScreen?"6%":"8%", marginStart:isSmallScreen?"5%":"8%"}}>
 
          <Text style={{fontSize:isSmallScreen?16:16,fontWeight:"600", textTransform:"uppercase",color:'rgba(253, 186, 49, 1)'}}>General</Text>


<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"3%":"3%", }}>
              <Image source={require('../../assets/icons/myProfile.png')} resizeMode="contain" style={{height:isSmallScreen?24:24, width:isSmallScreen?24:24}}/>
              <Text style={{marginLeft:isSmallScreen?"8%":"8%",fontSize:isSmallScreen?16:16, fontWeight:"400",color:"#ffffff"}}>My Profile</Text>
              
          </View>
          <TouchableOpacity onPress={()=>{Service.selectedFlow =="Coach"?navigation.navigate('EditProfile'):navigation.navigate(('StudentEdit'))}} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"3%":"3%"}}>
             <FeatherIcon  name="chevron-right"
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
          <Text style={{fontSize:isSmallScreen?16:16,fontWeight:"600", marginTop:isSmallScreen?"5%":"5%", textTransform:"uppercase",color:'rgba(253, 186, 49, 1)'}}>About & Terms</Text>


<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"3%":"3%"}}>
              <Image source={require('../../assets/icons/about_us.png')} resizeMode="contain" style={{height:isSmallScreen?24:24, width:isSmallScreen?24:24}}/>
              <Text style={{marginLeft:isSmallScreen?"8%":"8%",fontSize:isSmallScreen?16:16, fontWeight:"400",color:"#ffffff"}}>About Us</Text>
              
          </View>
          <TouchableOpacity onPress={()=>setAbout_Me(true)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"3%":"3%"}}>
             <FeatherIcon  name="chevron-right"
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>

<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"6%"}}>
              <Image source={require('../../assets/icons/terms.png')} resizeMode="contain" style={{height:isSmallScreen?24:24, width:isSmallScreen?24:24}}/>
              <Text style={{marginLeft:isSmallScreen?"8%":"5%",fontSize:isSmallScreen?16:16, fontWeight:"400",color:"#ffffff"}}>Terms & Conditions</Text>
              
          </View>
          <TouchableOpacity onPress={()=>setTerms(true)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"3%":"3%"}}>
             <FeatherIcon  name="chevron-right"
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>

<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"6%"}}>
              <Image source={require('../../assets/icons/privacy.png')}  resizeMode="contain" style={{height:isSmallScreen?24:24, width:isSmallScreen?24:24}}/>
              <Text style={{marginLeft:isSmallScreen?"8%":"8%",fontSize:isSmallScreen?16:16, fontWeight:"400",color:"#fff"}}>Privacy Policy</Text>
              
          </View>
          <TouchableOpacity onPress={()=>setPrivacy(true)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"3%"}}>
             <FeatherIcon  name="chevron-right"
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>

<Text style={{fontSize:isSmallScreen?16:18,fontWeight:"600", marginTop:isSmallScreen?"5%":"5%", textTransform:"uppercase",color:'rgba(253, 186, 49, 1)'}}>Help Center</Text>


<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"4%"}}>
              <Image source={require('../../assets/icons/contact.png')} resizeMode="contain" style={{height:isSmallScreen?24:24, width:isSmallScreen?24:24}}/>
              <Text style={{marginLeft:isSmallScreen?"8%":"8%",fontSize:isSmallScreen?16:16, fontWeight:"400",color:"#fff"}}>Contact Us</Text>
              
          </View>
          <TouchableOpacity onPress={()=>setContact_Me(true)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"3%":"3%"}}>
             <FeatherIcon  name="chevron-right"
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>

<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"6%"}}>
              <Image source={require('../../assets/icons/faq.png')} resizeMode="contain" style={{height:isSmallScreen?24:24, width:isSmallScreen?24:24}}/>
              <Text style={{marginLeft:isSmallScreen?"15%":"10%",fontSize:isSmallScreen?16:16, fontWeight:"400",color:"#fff"}}>FAQ</Text>
              
          </View>
          <TouchableOpacity onPress={()=>setFAQ(true)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"3%"}}>
             <FeatherIcon  name="chevron-right"
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>

<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"6%"}}>
              <Image source={require('../../assets/icons/delete_account.png')} resizeMode="contain" style={{height:isSmallScreen?24:24, width:isSmallScreen?24:24}}/>
              <Text style={{marginLeft:isSmallScreen?"8%":"8%",fontSize:isSmallScreen?16:16, fontWeight:"400",color:"#fff"}}>Delete Account</Text>
              
          </View>
          <TouchableOpacity onPress={()=>setDeleteModal(true)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"5%"}}>
             <FeatherIcon  name="chevron-right"
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>

<View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"6%"}}>
              <Image source={require('../../assets/icons/logout.png')} resizeMode="contain" style={{height:isSmallScreen?24:24, width:isSmallScreen?24:24}}/>
              <Text style={{marginLeft:isSmallScreen?"8%":"10%",fontSize:isSmallScreen?16:16, fontWeight:"400",color:"#fff"}}>Log Out</Text>
              
          </View>
          <TouchableOpacity onPress={()=>setLogoutModal(true)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"5%"}}>
             <FeatherIcon  name="chevron-right"
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>

<View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
<Text style={{fontSize:isSmallScreen?16:18,fontWeight:"600", marginTop:isSmallScreen?"5%":"3%", textTransform:"uppercase",color:'rgba(253, 186, 49, 1)'}}>Notification</Text>
  <TouchableOpacity onPress={()=>setToggleSwitch(!toggleSwitch)} style={{marginTop:isSmallScreen?"3%":"2%", marginEnd:isSmallScreen?"5%":"5%"}}>
      <Icon2 name={toggleSwitch==true ?'toggle-on':'toggle-off' } size={40} color={toggleSwitch==true?'#FDBA31':"#FDBA31"} />
  </TouchableOpacity>
</View>

        

          
            
 
         </View>
       
           
         </View>
      </>):(
         <AboutScreenComponent about_me={about_me} setAbout_Me={setAbout_Me}/>
      )
      }
      
      </>:(<TandCComponent terms={terms} setTerms={setTerms}/>)}
     </>)
     :
     (<PrivacyComponent privacy={privacy} setPrivacy={setPrivacy}/>) 
     }
     </>):(<ContactComponent contact_me={contact_me} setContact_Me={setContact_Me}/>)}
     </>):(<FAQComponent faq={faq} setFAQ={setFAQ}/>)}

     {/* deleteModal */}
     <Modal
          animationType="slide"
          visible={deleteModal}
          transparent={true}
          onRequestClose={closeModal}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <View style={[
              { backgroundColor: 'white', padding: isSmallScreen ? 20 : 40, borderRadius: isSmallScreen ? 10 : 20, width: isSmallScreen ? width*  0.9 : width * 0.9, marginTop: isSmallScreen ? -height * 0.05 : -height * 0.11 },
            ]}>
              <View style={{ alignItems: 'flex-end' }}>
                <Icon7 onPress={closeModal} name="cross" size={isSmallScreen ? 20 : 30} color="grey" />
              </View>
           
                
              <Image
                style={{
                  width: isSmallScreen ? width * 0.3 : width * 0.3,
                  height: height * 0.2,
                  resizeMode: "contain",
                  alignSelf: "center",
                  marginTop: isSmallScreen ? 5 : 10,
                }}
                source={require('../../assets/images/deleteIcon.png')}
              />
              <Text style={{ fontSize: 25, fontWeight: '600', color: '#000000', justifyContent: 'center', textAlign: 'center' }}>Delete Account?</Text>
              <Text style={{ textAlign: "center", width:"98%",  fontSize: isSmallScreen?16:16,color:"#000", fontWeight: '400', marginTop: isSmallScreen ? 20 : 30 }}>
                Are you sure you want to delete your{`\n`} account?
              </Text>
              <View style={{ flexDirection: 'row', marginTop: isSmallScreen ? 20 : 30 }}>
                <TouchableOpacity onPress={()=>{setDeleteModal(false),setAccount_delete(true)}}
                  style={{ backgroundColor: "#032D62", height: isSmallScreen ? 40 : 45, borderRadius: 10, width: isSmallScreen ? width * 0.3 : width*  0.3, justifyContent: 'center', marginStart: isSmallScreen ? '10%' : '5%' }}
                 >
                  <Text style={{ color: "#fff", textAlign: "center", fontSize: isSmallScreen ? 16 : 16, fontWeight: "bold" }}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ backgroundColor: "#fff",borderWidth:2, borderColor:"#032D62", height: isSmallScreen ? 40 : 45, borderRadius: 10, width: isSmallScreen ? width * 0.3 : width*  0.3, justifyContent: 'center', marginLeft: isSmallScreen ? 8 : 10 }}
                  onPress={closeModal}>
                  <Text style={{ color: "#032D62", textAlign: "center", fontSize: isSmallScreen ? 16 : 16, fontWeight: "bold" }}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
 
 {/* Account Delete Success */}
 <Modal
            animationType="slide"
            visible={account_delete}
            transparent={true}
            onRequestClose={closeAccountDeleteModal}>
            <View
              style={{
                // backgroundColor: 'black',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
            
              }}>
              <View
                style={{

                  backgroundColor: 'white',
                  padding: 39,
                  borderRadius: 15,
                  width: isSmallScreen ? width*0.9  : width * 0.87,
                  marginTop: -height * 0.09,
                }}>
                <View style={{ alignItems: 'flex-end' }}>
                  <Icon1
                    onPress={closeAccountDeleteModal}
                    name="cross"
                    size={30}
                    color="grey"
                  />
                </View>
                
                <Image
                  style={{
                    width: isSmallScreen ? width * 0.3 : width * 0.3,
                    height: height * 0.2,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    marginTop: -30,
                  }}
                  source={require('../../assets/images/delete_success.png')}
                />
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 25,
                    textAlign: 'center',
                    color: '#000000',
                  }}>
                  Account Deleted
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color:"#000",
                    top:'5%',
                    fontSize: isSmallScreen?16:16,
                    fontWeight: '400',
                  }}>
                  Your account has been deleted {'\n'} successfully.
                </Text>
                <TouchableOpacity
                onPress={()=>{setAccount_delete(false)}}
                  style={{
                    alignSelf: 'center',
                    marginTop:'15%',
                    backgroundColor: '#032D62',
                    height: 45,
                    borderRadius: 10,
                    width: isSmallScreen ? width * 0.7 : width * 0.4,
                    justifyContent: 'center',

                  }}
                 >
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* LogoutModal */}

          <Modal
          animationType="slide"
          visible={logoutModal}
          transparent={true}
          onRequestClose={closeLogoutModal}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <View style={[
              { backgroundColor: 'white', padding: isSmallScreen ? 20 : 40, borderRadius: isSmallScreen ? 10 : 20, width: isSmallScreen ? width*  0.9 : width * 0.9, marginTop: isSmallScreen ? -height * 0.05 : -height * 0.11 },
            ]}>
              <View style={{ alignItems: 'flex-end' }}>
                <Icon7 onPress={closeLogoutModal} name="cross" size={isSmallScreen ? 20 : 30} color="grey" />
              </View>
           
                
              <Image
                style={{
                  width: isSmallScreen ? width * 0.3 : width * 0.3,
                  height: height * 0.2,
                  resizeMode: "contain",
                  alignSelf: "center",
                  marginTop: isSmallScreen ? 5 : 10,
                }}
                source={require('../../assets/images/logoutIcon.png')}
              />
              <Text style={{ fontSize: 25, fontWeight: '600', color: '#000000', justifyContent: 'center', textAlign: 'center' }}>Log Out</Text>
              <Text style={{ textAlign: "center",   fontSize: isSmallScreen?16:16,color:"#000", fontWeight: '400', marginTop: isSmallScreen ? 20 : 30 }}>
                Are you sure you want to log out?
              </Text>
              <View style={{ flexDirection: 'row', marginTop: isSmallScreen ? 20 : 30 }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}
                  style={{ backgroundColor: "#032D62", height: isSmallScreen ? 40 : 45, borderRadius:10, width: isSmallScreen ? width * 0.3 : width*  0.3, justifyContent: 'center', marginStart: isSmallScreen ? '10%' : '7%' }}
                 >
                  <Text style={{ color: "#fff", textAlign: "center", fontSize: isSmallScreen ? 16 : 16, fontWeight: "bold" }}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ backgroundColor: "#fff",borderWidth:2, borderColor:"#032D62", height: isSmallScreen ? 40 : 45, borderRadius: 10, width: isSmallScreen ? width * 0.3 : width*  0.3, justifyContent: 'center', marginLeft: isSmallScreen ? 8 : 10 }}
                  onPress={closeLogoutModal}>
                  <Text style={{ color: "#032D62", textAlign: "center", fontSize: isSmallScreen ? 16 : 16, fontWeight: "bold" }}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  btn:{
  borderColor:"#FDBA31",
  borderWidth:2
  }
})