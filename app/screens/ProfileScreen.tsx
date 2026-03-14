import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../context/AppContext";

export default function ProfileScreen(){

  const { setIsLoggedIn } = useContext(AppContext);

  return(

    <View style={styles.container}>

      <View style={styles.header}/>

      <Text style={styles.name}>Vu Tien Manh</Text>

      <Text style={styles.desc}>
        Mobile developer
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>setIsLoggedIn(false)}
      >
        <Text style={{color:"white"}}>Sign Out</Text>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:"center"
  },

  header:{
    height:150,
    width:"100%",
    backgroundColor:"#1ca9c9",
    marginBottom:20
  },

  name:{
    fontSize:22,
    fontWeight:"bold"
  },

  desc:{
    marginBottom:20,
    color:"gray"
  },

  button:{
    backgroundColor:"#f9a825",
    padding:12,
    borderRadius:5
  }

});