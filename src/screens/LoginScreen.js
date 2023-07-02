import { StyleSheet, Text, View, Alert } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //useState to update value of username and password through props when text entered into text input

  const onLogInPressed = () => {
    if (username.length < 1 || password.length < 1) {
      Alert.alert("enter username AND password");
    } else {
      getData();
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");
      if (value !== null) {
        dispatch({ type: "updateUsername", payload: username });
        navigation.navigate("LoginSuccesful");
        // value previously stored
      } else {
        Alert.alert("please enter details to sign up ");
        storeData(username, password);
      }
    } catch (e) {
      // error reading value
    }
  };
  // checks if a username and password are stored - if yes, navigate to succesful log in page and update username in redux

  const storeData = async (username, password) => {
    try {
      await AsyncStorage.setItem("my-key", username, password);
    } catch (e) {
      // saving error
    }
  };
  // stores username and password

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🔓 </Text>
      <Text style={styles.text}>Log in Screen</Text>
      <Text>Username:</Text>
      <Input placeholder="Username" value={username} setValue={setUsername} />
      <Text>Password:</Text>
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <SubmitButton text="Log in" onPress={onLogInPressed} />
      <Text>Welcome {username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3E4D7",
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
    padding: 10,
  },
  input: {
    padding: 20,
  },
});
