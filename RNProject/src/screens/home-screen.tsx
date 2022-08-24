import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

interface HomeProps{
    navigation: any;
}
 
const HomeScreen = (props: HomeProps) => {
 
  return (
    <View style={styles.container}>
      <Text>This is HomeScreen</Text>
    </View>
  );
}

export default HomeScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});