import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import NewButton from "../components/NewButton";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>😎</Text>
      <Text style={styles.title}>Welcome to Wiggly K's first app!</Text>
      <Button
        title="click to go to about page"
        onPress={() => navigation.navigate("About")}
      ></Button>
      <MyButton />
      <NewButton title="this button uses props!" />
      <StatusBar style="auto" />
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
