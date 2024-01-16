import { StyleSheet, Text,Modal,Dimensions,TextInput, View,TouchableOpacity,ScrollView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather';
// import CheckBox from '@react-native-community/checkbox';
import { Checkbox } from 'react-native-paper';
import Service from '../../Service/Service';
import { GPA, Location, SportOptions, heightData, highschool, major, positionOptions, year } from '../Constants';

const{height, width} = Dimensions.get('window');
const isSmallScreen = width<400;

const BottomSheetModal = ({showFilterModal, setShowFilterModal}) => {


    const[showSport, setShowSport] = useState(false)
    const[showPosition, setShowPosition] = useState(false)
    const[showGPA, setShowGPA] = useState(false)
    const[showMajor, setShowMajor] = useState(false)
    const[showDOB, setShowDOB] = useState(false)
    const[showHeight, setShowHeight] = useState(false)
    const[showLocation, setShowLocation] = useState(false)
    const[showHighSchool, setShowHighSchool] = useState(false)
    const[showGraduationYear, setShowGraduationYear] = useState(false)
    const [toggleCheckBoxSport, setToggleCheckBoxSport] = useState(false)
    const [checked, setChecked] = useState(false)

  return (
    <View>
      {Service.selectedFlow =="Coach"?
        (
        <Modal
          animationType='slide'
          transparent={true}
           visible={showFilterModal}
           onRequestClose={()=>setShowFilterModal(false)}
          >
          <View style={styles.modalView}>
      
         <TouchableOpacity onPress={()=>setShowFilterModal(false)} style={styles.bar}/>
        <View style={{justifyContent:"center", alignItems:"center", marginTop:isSmallScreen?"3%":"3%"}}>
           <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Filters</Text>
          </View> 
      
      <ScrollView contentContainerStyle={{paddingBottom:50}}>
      <View>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Sport</Text>
              <FeatherIcon  name={showSport?"chevron-up":"chevron-down"}
              onPress={()=>setShowSport(!showSport)}
                      size={isSmallScreen ? 22 : 25}
                      style={{marginEnd:"3%"}}
                      color="gray"/>
          </View>
          {showSport && (
        
        <View style={{backgroundColor:"#fff",height:height*2.15,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
       
                                <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                <TextInput
                                  style={styles.Techinput}
                                  placeholder="Search Sport"
                                  placeholderTextColor="#333333"/>
                              
                              <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                </View>
      
                                <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={false}>
                                <View style={{ justifyContent:"space-around"}}>
                                   {SportOptions.map((item, index)=>{
                                   return(
                                    
                                   <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={checked?"#032D62":"transparent"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
                                  <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item.sport}</Text>
                                   </View>
                                   
                                
                                  
                                
                                   )
                                   })}
                                </View>
                               
                                
      
                                </ScrollView>
                              
        </View>
      
        
      )}
      <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
      
      </View>
      
      <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Position</Text>
              <FeatherIcon  name={showPosition?"chevron-up":"chevron-down"}
              onPress={()=>setShowPosition(!showPosition)}
                      size={isSmallScreen ? 22 : 25}
                      style={{marginEnd:"3%"}}
                      color="gray"/>
          </View>
          {showPosition && (
        
        <View style={{backgroundColor:"#fff",height:height*0.77,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
       
                                <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                <TextInput
                                  style={styles.Techinput}
                                  placeholder="Search Position"
                                  placeholderTextColor="#333333"/>
                              
                              <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                </View>
      
                                <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                <View style={{ justifyContent:"space-around"}}>
                                   {positionOptions.map((item, index)=>{
                                   return(
                                    
                                   <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={checked?"#032D62":"transparent"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
                                  <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item.position}</Text>
                                   </View>
                                   
                                
                                  
                                
                                   )
                                   })}
                                </View>
                               
                                
      
                                </ScrollView>
                              
        </View>
      
        
      )}
      <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6",opacity:0.9,marginTop:"1%"}}/>
      </View>
      
      <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>GPA</Text>
              <FeatherIcon  name={showGPA?"chevron-up":"chevron-down"}
              onPress={()=>setShowGPA(!showGPA)}
                      size={isSmallScreen ? 22 : 25}
                      style={{marginEnd:"3%"}}
                      color="gray"/>
          </View>
          {showGPA && (
        
        <View style={{backgroundColor:"#fff",height:height*0.44,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
       
                                <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                <TextInput
                                  style={styles.Techinput}
                                  placeholder="Search GPA"
                                  placeholderTextColor="#333333"/>
                              
                              <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                </View>
      
                                <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                <View style={{ justifyContent:"space-around"}}>
                                   {GPA.map((item, index)=>{
                                   return(
                                    
                                   <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={checked?"#032D62":"transparent"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
                                 <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item}</Text>
                                   </View>
                                   
                                
                                  
                                
                                   )
                                   })}
                                </View>
                               
                                
      
                                </ScrollView>
                              
        </View>
      
        
      )}
      <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
      
      </View>
      
      <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Major</Text>
              <FeatherIcon  name={showMajor?"chevron-up":"chevron-down"}
              onPress={()=>setShowMajor(!showMajor)}
                      size={isSmallScreen ? 22 : 25}
                      style={{marginEnd:"3%"}}
                      color="gray"/>
          </View>
          {showMajor && (
        
        <View style={{backgroundColor:"#fff",height:height*0.26,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
       
                                <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                <TextInput
                                  style={styles.Techinput}
                                  placeholder="Search Major"
                                  placeholderTextColor="#333333"/>
                              
                              <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                </View>
      
                                <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                <View style={{ justifyContent:"space-around"}}>
                                   {major.map((item, index)=>{
                                   return(
                                    
                                   <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={checked?"#032D62":"transparent"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
                                  <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item}</Text>
                                   </View>
                                   
                                
                                  
                                
                                   )
                                   })}
                                </View>
                               
                                
      
                                </ScrollView>
                              
        </View>
      
        
      )}
      <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
      
      </View>
      
      <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Date Birth</Text>
              <FeatherIcon  name={showDOB?"chevron-up":"chevron-down"}
              onPress={()=>setShowDOB(!showDOB)}
                      size={isSmallScreen ? 22 : 25}
                      style={{marginEnd:"3%"}}
                      color="gray"/>
          </View>
          {showDOB && (
        
        <View style={{backgroundColor:"#fff",height:height*0.77,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
       
                                <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                <TextInput
                                  style={styles.Techinput}
                                  placeholder="Search Birth Date"
                                  placeholderTextColor="#333333"/>
                              
                              <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                </View>
      
                                <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                <View style={{ justifyContent:"space-around"}}>
                                   {SportOptions.map((item, index)=>{
                                   return(
                                    
                                   <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={checked?"#032D62":"transparent"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
                                   <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item.sport}</Text>
                                   </View>
                                   
                                
                                  
                                
                                   )
                                   })}
                                </View>
                               
                                
      
                                </ScrollView>
                              
        </View>
      
        
      )}
      <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
      
      </View>
      
      <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Height</Text>
              <FeatherIcon  name={showHeight?"chevron-up":"chevron-down"}
              onPress={()=>setShowHeight(!showHeight)}
                      size={isSmallScreen ? 22 : 25}
                      style={{marginEnd:"3%"}}
                      color="gray"/>
          </View>
          {showHeight && (
        
        <View style={{backgroundColor:"#fff",height:height*0.25,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
       
                                <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                <TextInput
                                  style={styles.Techinput}
                                  placeholder="Search Height"
                                  placeholderTextColor="#333333"/>
                              
                              <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                </View>
      
                                <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                <View style={{ justifyContent:"space-around"}}>
                                   {heightData.map((item, index)=>{
                                   return(
                                    
                                   <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={checked?"#032D62":"transparent"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
                                   <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item}</Text>
                                   </View>
                                   
                                
                                  
                                
                                   )
                                   })}
                                </View>
                               
                                
      
                                </ScrollView>
                              
        </View>
      
        
      )}
      <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
      
      </View>
      
      <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Location</Text>
              <FeatherIcon  name={showLocation?"chevron-up":"chevron-down"}
              onPress={()=>setShowLocation(!showLocation)}
                      size={isSmallScreen ? 22 : 25}
                      style={{marginEnd:"3%"}}
                      color="gray"/>
          </View>
          {showLocation && (
        
        <View style={{backgroundColor:"#fff",height:height*0.77,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
       
                                <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                <TextInput
                                  style={styles.Techinput}
                                  placeholder="Search Sport"
                                  placeholderTextColor="#333333"/>
                              
                              <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                </View>
      
                                <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                <View style={{ justifyContent:"space-around"}}>
                                   {SportOptions.map((item, index)=>{
                                   return(
                                    
                                   <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={checked?"#032D62":"transparent"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
                                   <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item.sport}</Text>
                                   </View>
                                   
                                
                                  
                                
                                   )
                                   })}
                                </View>
                               
                                
      
                                </ScrollView>
                              
        </View>
      
        
      )}
      <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
      
      </View>
      
      <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>High School</Text>
              <FeatherIcon  name={showHighSchool?"chevron-up":"chevron-down"}
              onPress={()=>setShowHighSchool(!showHighSchool)}
                      size={isSmallScreen ? 22 : 25}
                      style={{marginEnd:"3%"}}
                      color="gray"/>
          </View>
          {showHighSchool && (
        
        <View style={{backgroundColor:"#fff",height:height*0.27,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
       
                                <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                <TextInput
                                  style={styles.Techinput}
                                  placeholder="Search High School"
                                  placeholderTextColor="#333333"/>
                              
                              <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                </View>
      
                                <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                <View style={{ justifyContent:"space-around"}}>
                                   {highschool.map((item, index)=>{
                                   return(
                                    
                                   <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={checked?"#032D62":"transparent"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
                                  <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item}</Text>
                                   </View>
                                   
                                
                                  
                                
                                   )
                                   })}
                                </View>
                               
                                
      
                                </ScrollView>
                              
        </View>
      
        
      )}
      <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
      
      </View>
      
      <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
              <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Graduation Year</Text>
              <FeatherIcon  name={showGraduationYear?"chevron-up":"chevron-down"}
              onPress={()=>setShowGraduationYear(!showGraduationYear)}
                      size={isSmallScreen ? 22 : 25}
                      style={{marginEnd:"3%"}}
                      color="gray"/>
          </View>
          {showGraduationYear && (
        
        <View style={{backgroundColor:"#fff",height:height*0.40,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
       
                                <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                <TextInput
                                  style={styles.Techinput}
                                  placeholder="Search Year"
                                  placeholderTextColor="#333333"/>
                              
                              <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                </View>
      
                                <ScrollView contentContainerStyle={{paddingBottom:500, }} showsVerticalScrollIndicator={true}>
                                <View style={{ justifyContent:"space-around"}}>
                                   {year.map((item, index)=>{
                                   return(
                                    
                                   <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                     <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={checked?"#032D62":"transparent"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
                                  <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item}</Text>
                                   </View>
                                   
                                
                                  
                                
                                   )
                                   })}
                                </View>
                               
                                
      
                                </ScrollView>
                              
        </View>
      
        
      )}
      <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
      
      </View>
      
      <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center", marginTop:isSmallScreen?"5%":"5%"}}>
         <TouchableOpacity onPress={()=>ToastAndroid.show('Filter Applied',ToastAndroid.SHORT)} style={[styles.btn,{backgroundColor:"#032D62"}]}>
         <Text style={{color:"#fff", fontWeight:"600", fontSize:isSmallScreen?14:16}}>Apply</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>setShowFilterModal(false)} style={[styles.btn,{backgroundColor:"#FDBA31"}]}>
             <Text style={{color:"#032D62", fontWeight:"600",fontSize:isSmallScreen?14:16}}>Cancel</Text>
         </TouchableOpacity>
      </View>
      
      
      </ScrollView>
      
          
      
      
         
          </View>
          
          </Modal>
          
          )
          :
          (
            (<Modal
              animationType='slide'
              transparent={true}
               visible={showFilterModal}
               onRequestClose={()=>setShowFilterModal(false)}
              >
              <View style={styles.modalView}>
          
             <TouchableOpacity onPress={()=>setShowFilterModal(false)} style={styles.bar}/>
            <View style={{justifyContent:"center", alignItems:"center", marginTop:isSmallScreen?"3%":"3%"}}>
               <Text style={{color:"#000", fontWeight:"600", fontSize:isSmallScreen?16:18}}>Filters</Text>
              </View> 
          
          <ScrollView contentContainerStyle={{paddingBottom:50}}>
          <View>
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Coach Level</Text>
                  <FeatherIcon  name={showSport?"chevron-up":"chevron-down"}
                  onPress={()=>setShowSport(!showSport)}
                          size={isSmallScreen ? 22 : 25}
                          style={{marginEnd:"3%"}}
                          color="gray"/>
              </View>
              {showSport && (
            
            <View style={{backgroundColor:"#fff",height:height*2.15,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
           
                                    <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                    <TextInput
                                      style={styles.Techinput}
                                      placeholder="Search Sport"
                                      placeholderTextColor="#333333"/>
                                  
                                  <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                    </View>
          
                                    <ScrollView contentContainerStyle={{paddingBottom:500, }} showsVerticalScrollIndicator={true}>
                                    <View style={{ justifyContent:"space-around"}}>
                                       {SportOptions.map((item, index)=>{
                                       return(
                                        
                                       <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                         <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color={checked?"#032D62":"transparent"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
                                      <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item.sport}</Text>
                                       </View>
                                       
                                    
                                      
                                    
                                       )
                                       })}
                                    </View>
                                   
                                    
          
                                    </ScrollView>
                                  
            </View>
          
            
          )}
          <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
          
          </View>
          
          <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Sport</Text>
                  <FeatherIcon  name={showPosition?"chevron-up":"chevron-down"}
                  onPress={()=>setShowPosition(!showPosition)}
                          size={isSmallScreen ? 22 : 25}
                          style={{marginEnd:"3%"}}
                          color="gray"/>
              </View>
              {showPosition && (
            
            <View style={{backgroundColor:"#fff",height:360,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
           
                                    <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                    <TextInput
                                      style={styles.Techinput}
                                      placeholder="Search Sport"
                                      placeholderTextColor="#333333"/>
                                  
                                  <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                    </View>
          
                                    <ScrollView contentContainerStyle={{paddingBottom:1000, }} showsVerticalScrollIndicator={true}>
                                    <View style={{ justifyContent:"space-around"}}>
                                       {SportOptions.map((item, index)=>{
                                       return(
                                        
                                       <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                         <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color={checked?"#032D62":"transparent"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
                                      <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item.sport}</Text>
                                       </View>
                                       
                                    
                                      
                                    
                                       )
                                       })}
                                    </View>
                                   
                                    
          
                                    </ScrollView>
                                  
            </View>
          
            
          )}
          <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6",opacity:0.9,marginTop:"1%"}}/>
          </View>
          
          <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Role</Text>
                  <FeatherIcon  name={showGPA?"chevron-up":"chevron-down"}
                  onPress={()=>setShowGPA(!showGPA)}
                          size={isSmallScreen ? 22 : 25}
                          style={{marginEnd:"3%"}}
                          color="gray"/>
              </View>
              {showGPA && (
            
            <View style={{backgroundColor:"#fff",height:360,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
           
                                    <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                    <TextInput
                                      style={styles.Techinput}
                                      placeholder="Search Sport"
                                      placeholderTextColor="#333333"/>
                                  
                                  <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                    </View>
          
                                    <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                    <View style={{ justifyContent:"space-around"}}>
                                       {SportOptions.map((item, index)=>{
                                       return(
                                        
                                       <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                         <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color={checked?"#032D62":"transparent"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
                                     <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item.sport}</Text>
                                       </View>
                                       
                                    
                                      
                                    
                                       )
                                       })}
                                    </View>
                                   
                                    
          
                                    </ScrollView>
                                  
            </View>
          
            
          )}
          <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
          
          </View>
          
          <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Location</Text>
                  <FeatherIcon  name={showMajor?"chevron-up":"chevron-down"}
                  onPress={()=>setShowMajor(!showMajor)}
                          size={isSmallScreen ? 22 : 25}
                          style={{marginEnd:"3%"}}
                          color="gray"/>
              </View>
              {showMajor && (
            
            <View style={{backgroundColor:"#fff",height:250,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
           
                                    <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                    <TextInput
                                      style={styles.Techinput}
                                      placeholder="Search Location"
                                      placeholderTextColor="#333333"/>
                                  
                                  <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                    </View>
          
                                    <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                    <View style={{ justifyContent:"space-around"}}>
                                       {Location.map((item, index)=>{
                                       return(
                                        
                                       <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                         <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color={checked?"#032D62":"transparent"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
                                      <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item}</Text>
                                       </View>
                                       
                                    
                                      
                                    
                                       )
                                       })}
                                    </View>
                                   
                                    
          
                                    </ScrollView>
                                  
            </View>
          
            
          )}
          <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
          
          </View>
          
          <View style={{marginTop:isSmallScreen?"3%":"3%"}}>
              <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <Text style={{color:"#333333", marginStart:isSmallScreen?"5%":"5%"}}>Start Year</Text>
                  <FeatherIcon  name={showDOB?"chevron-up":"chevron-down"}
                  onPress={()=>setShowDOB(!showDOB)}
                          size={isSmallScreen ? 22 : 25}
                          style={{marginEnd:"3%"}}
                          color="gray"/>
              </View>
              {showDOB && (
            
            <View style={{backgroundColor:"#fff",height:360,alignSelf:"center", width:isSmallScreen?330:350, borderRadius:10}}>
           
                                    <View style={{padding:0.1,marginTop:10,width:isSmallScreen?300:310,alignSelf:"center",borderRadius:5,backgroundColor:"lightgray", flexDirection:'row', justifyContent:'space-between', alignItems:"center",}}>
                                    <TextInput
                                      style={styles.Techinput}
                                      placeholder="Search Year"
                                      placeholderTextColor="#333333"/>
                                  
                                  <FeatherIcon name="search" size={isSmallScreen ? 18 : 20} color="#aaa" style={{ marginEnd: 3 }} />
                                    </View>
          
                                    <ScrollView contentContainerStyle={{paddingBottom:100, }} showsVerticalScrollIndicator={true}>
                                    <View style={{ justifyContent:"space-around"}}>
                                       {year.map((item, index)=>{
                                       return(
                                        
                                       <View style={{flexDirection:"row", alignItems:"center"}} key={index}>
                                         <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color={checked?"#032D62":"transparent"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
                                       <Text style={{fontSize:isSmallScreen?15:16, color:"#333333"}}>{item}</Text>
                                       </View>
                                       
                                    
                                      
                                    
                                       )
                                       })}
                                    </View>
                                   
                                    
          
                                    </ScrollView>
                                  
            </View>
          
            
          )}
          <View style={{height:1, width:"90%",alignSelf:"center", backgroundColor:"#C6C6C6", opacity:0.9,marginTop:"1%"}}/>
          
          </View>
          

          
    

    
          
          <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center", marginTop:isSmallScreen?"7%":"7%"}}>
             <TouchableOpacity onPress={()=>ToastAndroid.show('Filter Applied',ToastAndroid.SHORT)} style={[styles.btn,{backgroundColor:"#032D62"}]}>
             <Text style={{color:"#fff", fontWeight:"600", fontSize:isSmallScreen?14:16}}>Apply</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>setShowFilterModal(false)} style={[styles.btn,{backgroundColor:"#FDBA31"}]}>
                 <Text style={{color:"#032D62", fontWeight:"600",fontSize:isSmallScreen?14:16}}>Cancel</Text>
             </TouchableOpacity>
          </View>
          
          
          </ScrollView>
          
              
          
          
             
              </View>
              
              </Modal>)
          )
      }
    </View>
  )
}

export default BottomSheetModal

const styles = StyleSheet.create({
    modalView:{
        position:'absolute',
        bottom:0,
        width:'100%',
        backgroundColor:'#fff',
        height:height*0.49,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
      
      },
      bar:{
        height:4,
        width:40,
        backgroundColor:"#032D62",
        borderRadius:5,
        marginTop:isSmallScreen?"5%":"5%",
        alignSelf:"center"
        
      },
      btn:{
        height:40,
       justifyContent:"center",
       alignItems:"center",
        width:isSmallScreen?130:180,
        borderRadius:5
    
        
      }
})