import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen(){

  return(
    <View style={styles.container}>

      <Text style={styles.title}>Explorer</Text>

      <TextInput
        placeholder="Search for meals or area"
        style={styles.search}
      />

      <Text style={styles.section}>Top Categories</Text>

      <View style={styles.row}>
        <Text style={styles.card}>Pizza</Text>
        <Text style={styles.card}>Burger</Text>
        <Text style={styles.card}>Steak</Text>
      </View>

      <Text style={styles.section}>Popular Items</Text>

      <View style={styles.row}>
        <Text style={styles.card}>Food 1</Text>
        <Text style={styles.card}>Food 2</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20
  },

  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:10
  },

  search:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:5,
    padding:10,
    marginBottom:20
  },

  section:{
    fontSize:18,
    fontWeight:"bold",
    marginTop:10
  },

  row:{
    flexDirection:"row",
    marginTop:10
  },

  card:{
    backgroundColor:"#eee",
    padding:20,
    marginRight:10,
    borderRadius:5
  }

});