import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function LoginSuccesful({ navigation }) {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "logUserOut" });
    navigation.navigate("Log in");
  };
  // changes username in redux back to "" and navigates back to log in

  let username = useSelector((s) => s.username);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥳</Text>
      <Text style={styles.title}>
        Welcome {username}, you have succesfully logged in!
      </Text>
      <Button onPress={logout} title="log out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd3da",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 40,
  },
  title: {
    color: "#797EF6",
    fontSize: 30,
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    margin: 10,
  },
});
