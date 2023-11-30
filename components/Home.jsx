import { Text, SafeAreaView,StyleSheet , View, Image, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity,Keyboard, ScrollView } from 'react-native';
import React,{useState} from 'react';
import Task from './Task.jsx'
import { Ionicons } from '@expo/vector-icons';

const Home=(index)=>{

const [task, setTask]=useState();
const [taskitem, setTaskitem ]= useState([]);

const TaskHandle = () => {
  // Keyboard.dismiss();
  setTaskitem([...taskitem, task]);
  setTask(null);
}

const deleteTask = (index) => {
  let itemcopy = [...taskitem];
  itemcopy.splice(index, 1);
  setTaskitem(itemcopy);
}




  return(
    
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.hedtext}>My Today's Tasks </Text>
      
      <Image style={styles.avatar} source={require('../assets/avatar.png')}/>
     
     </View>

      <ScrollView>

    {
      taskitem.map((item, index) => {
        return(
          <TouchableOpacity  key={index} onPress={() => deleteTask(index)}>
            <Task text = {item} />
          </TouchableOpacity>
        ) 
      } )
    }
    </ScrollView>
     
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bottomwrapper}>
    <TextInput style={styles.input} placeholder={'write your Task'} value={task} onChangeText={task=>setTask(task)}/>

    <TouchableOpacity key={index} onPress={()=>TaskHandle()}>
    <View style={styles.addwrapper} ><Ionicons name="add-sharp" size={50} color="#FFF" /></View>
    </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
    
  );
}
export default Home;

const styles=StyleSheet.create({
  container:{
   backgroundColor:'#F0F0F0',
   height: '100%',
   width:'100%',
  },
  header:{
       top: 30,
       margin: 20,
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       marginBottom: 50,

  },
  hedtext:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#213555',

  },
  avatar:{
    height: 50,
    width: 50,
    borderRadius:20,
  },
  //bottom navigator style.
  bottomwrapper:{
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  input:{
    // paddingHorizontal: 15,
    // paddingVertical: 15,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#213555',
    borderWidth: 2,
    width: 230,

  },
  addwrapper:{
    
    width: 60,
    height: 60,
    backgroundColor:'#4F709C',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#213555',
    borderWidth: 2
  },
})