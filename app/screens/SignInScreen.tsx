import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AppContext } from "../context/AppContext";

export default function SignInScreen() {

  const { setIsLoggedIn } = useContext(AppContext);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign In</Text>

      <Text>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsLoggedIn(true)}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:"center"
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:30,
    textAlign:"center"
  },

  input:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:5,
    padding:10,
    marginBottom:15
  },

  button:{
    backgroundColor:"#f9a825",
    padding:15,
    borderRadius:5,
    alignItems:"center"
  },

  buttonText:{
    color:"white",
    fontWeight:"bold"
  }

});