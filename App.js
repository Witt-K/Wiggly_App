import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "./src/components/MyButton";
import NewButton from "./src/components/NewButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>😎</Text>
      <Text style={styles.title}>Wiggly Kee's first app!</Text>
      <Text style={styles.text}>The app has many lines of text</Text>
      <Text style={styles.text}>Many</Text>
      <Text style={styles.text}>Many!</Text>
      <Text style={styles.text}>Many!!</Text>
      <Text style={styles.text}>Many!!!</Text>
      <MyButton />
      <NewButton title="props title for new button" />
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
