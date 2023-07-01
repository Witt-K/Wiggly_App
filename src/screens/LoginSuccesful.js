import { StyleSheet, Text, View } from "react-native";

export default function LoginSuccesful({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥳</Text>
      <Text style={styles.title}>Welcome, you have succesfully logged in!</Text>
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
