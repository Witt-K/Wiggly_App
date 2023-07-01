import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //useState to update value of username and password through props when text entered into text input

  function onSignInPressed() {
    if (username.length < 1 || password.length < 1) {
      console.log("only one entered");
    } else {
      console.log(username, password);
    }
    // if else statement to check there is text in both username and input
  }

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
      <SubmitButton text="Log in" onPress={onSignInPressed} />
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
