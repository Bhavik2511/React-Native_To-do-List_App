import { View ,StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home.jsx'

const Task=(prop)=>{



  return(
    
    <View style={styles.container}>
    <View style={styles.wrapper}>
    <View style={styles.square}></View>
    <Text style={styles.text}>{prop.text}</Text>
    
      </View>
      
      <Ionicons name="trash-sharp" size={32} color="#4F709C" />
      
     </View>
  );
}
export default Task;

const styles=StyleSheet.create({
 container:{
  //  top: 10,
    marginLeft: 20,
    marginRight: 20,

   backgroundColor:'#FFF',
   padding: 15,
   borderRadius: 10,
   flexDirection:'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   marginBottom: 15,
 },
 wrapper:{
   display: 'flex',
   flexDirection: 'row',
   alignItems:  'center',
   flexWrap: 'wrap'
 },
 square:{
   width: 24,
   height: 24,
   backgroundColor:'#4F709C',
   opacity: 0.4,
   borderRadius: 5,
   marginRight: 15
 },
 text:{
   maxWidth: '80%',
   color: '#213555',
   fontSize: 15,
 },

})