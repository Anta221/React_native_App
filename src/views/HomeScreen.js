import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";

const image = { uri: "" };

const Home = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../../assets/4299.jpg')} style={styles.image}>
{/*       <Text style={styles.text}>Inside</Text>
      <Button
        title="Go to Authent"
         onPress={() => navigation.navigate('Authent')}
        /> */}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default Home;

  
