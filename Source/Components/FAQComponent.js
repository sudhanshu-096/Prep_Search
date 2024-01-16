import { StyleSheet, Text, View,TouchableOpacity,Image, Dimensions} from 'react-native'
import React, {useState} from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import BackButton from './BackButton'
import FeatherIcon from 'react-native-vector-icons/Feather'

const {height, width} = Dimensions.get('window');
const isSmallScreen = width<400;

const FAQComponent = ({faq, setFAQ}) => {
  const [benefits, setbenefits] = useState(true)
  const [s2, sets2] = useState(false)
  const [s3, sets3] = useState(false)
  const [s4, sets4] = useState(false)
  const [s5, sets5] = useState(false)
  const [s6, sets6] = useState(false)
  const [s7, sets7] = useState(false)
  const [s8, sets8] = useState(false)
  const [s9, sets9] = useState(false)
  return (
    <View style={{flex:1, backgroundColor:"#032D62",}}>
    <ScrollView contentContainerStyle={{paddingBottom:50}}>
    <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
   <BackButton bgColor="#FDBA31"color="#000" onPress={()=>{setFAQ(false)}}/>
      <Text style={{color:"#fff",fontSize:isSmallScreen?22:24, fontWeight:"600", textAlign:"center"}}>FAQ</Text>
      <Text></Text>
      <Text></Text>
   </View>

   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"10%"}}>
              <Text style={{marginLeft:isSmallScreen?"8%":"11%",fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#FDBA31"}}>What are the benefits</Text>
              
          </View>
          <TouchableOpacity onPress={()=>setbenefits(!benefits)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"9%"}}>
             <FeatherIcon  name={benefits?"chevron-up":"chevron-down"}
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
      {benefits&&<View style={{width:width*0.85,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,color:"#fff",lineHeight:22, textAlign:"justify"}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
      </View>}


   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", }}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"10%"}}>
              <Text style={{marginLeft:isSmallScreen?"8%":"10%",fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#FDBA31"}}>Lorem ipsum dolor sit consetuer</Text>
              
          </View>
          <TouchableOpacity onPress={()=>sets2(!s2)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"9%"}}>
             <FeatherIcon  name={s2?"chevron-up":"chevron-down"}
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
      {s2&&<View style={{width:width*0.85,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,color:"#fff",lineHeight:22, textAlign:"justify"}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
      </View>}

   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"10%"}}>
              <Text style={{marginLeft:isSmallScreen?"8%":"10%",fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#FDBA31"}}>Lorem ipsum commodo ligulia</Text>
              
          </View>
          <TouchableOpacity onPress={()=>sets3(!s3)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"9%"}}>
             <FeatherIcon  name={s3?"chevron-up":"chevron-down"}
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
      {s3&&<View style={{width:width*0.85,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,color:"#fff",lineHeight:22, textAlign:"justify"}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
      </View>}


   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"10%"}}>
              <Text style={{marginLeft:isSmallScreen?"8%":"10%",fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#FDBA31"}}>Donec pede justo,fringil aliquet</Text>
              
          </View>
          <TouchableOpacity onPress={()=>sets4(!s4)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"5%"}}>
             <FeatherIcon  name={s4?"chevron-up":"chevron-down"}
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
      {s4&&<View style={{width:width*0.85,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,color:"#fff",lineHeight:22, textAlign:"justify"}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
      </View>}


   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"10%"}}>
              <Text style={{marginLeft:isSmallScreen?"8%":"10%",fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#FDBA31"}}>Vivamus elemntum semper nisi</Text>
              
          </View>
          <TouchableOpacity onPress={()=>sets5(!s5)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"5%"}}>
             <FeatherIcon  name={s5?"chevron-up":"chevron-down"}
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
      {s5&&<View style={{width:width*0.85,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,color:"#fff",lineHeight:22, textAlign:"justify"}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
      </View>}


   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"10%"}}>
              <Text style={{marginLeft:isSmallScreen?"8%":"10%",fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#FDBA31"}}>Aliquam lorem ante, dapibus in.</Text>
              
          </View>
          <TouchableOpacity onPress={()=>sets6(!s6)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"5%"}}>
             <FeatherIcon  name={s6?"chevron-up":"chevron-down"}
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
      {s6&&<View style={{width:width*0.85,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,color:"#fff",lineHeight:22, textAlign:"justify"}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
      </View>}



   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"10%"}}>
              <Text style={{marginLeft:isSmallScreen?"8%":"10%",fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#FDBA31"}}>Etiam ultricies nisi vel augue</Text>
              
          </View>
          <TouchableOpacity onPress={()=>sets7(!s7)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"5%"}}>
             <FeatherIcon  name={s7?"chevron-up":"chevron-down"}
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
      {s7&&<View style={{width:width*0.85,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,color:"#fff",lineHeight:22, textAlign:"justify"}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
      </View>}


   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"10%"}}>
              <Text style={{marginLeft:isSmallScreen?"8%":"10%",fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#FDBA31"}}>Etiam ultricies nisi vel augue</Text>
              
</View>
          <TouchableOpacity onPress={()=>sets8(!s8)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"5%"}}>
             <FeatherIcon  name={s8?"chevron-up":"chevron-down"}
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
      {s8&&<View style={{width:width*0.85,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,color:"#fff",lineHeight:22, textAlign:"justify"}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
      </View>}


   <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
<View style={{flexDirection:"row",marginTop:isSmallScreen?"6%":"10%"}}>
              <Text style={{marginLeft:isSmallScreen?"8%":"10%",fontSize:isSmallScreen?16:18, fontWeight:"400", color:"#FDBA31"}}>Etiam ultricies nisi vel augue</Text>
              
</View>
          <TouchableOpacity onPress={()=>sets9(!s9)} style={{marginEnd:isSmallScreen?"5%":"5%", marginTop:isSmallScreen?"7%":"5%",}}>
             <FeatherIcon  name={s9?"chevron-up":"chevron-down"}
                size={isSmallScreen ? 22 : 25}
                color="rgba(253, 186, 49, 1)"/>
          </TouchableOpacity>
</View>
      {s9&&<View style={{width:width*0.85,alignSelf:"center", marginTop:isSmallScreen?"3%":"3%" }}>
          <Text style={{fontWeight:"400", fontSize:isSmallScreen?14:16,color:"#fff",lineHeight:22, textAlign:"justify"}}>This account is for verified college coaches and their direct support staff only.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </Text>
      </View>}
  
    </ScrollView>
 </View>
  )
}

export default FAQComponent

const styles = StyleSheet.create({})