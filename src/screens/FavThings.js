import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import NewButton from "../components/NewButton";

export default function FavThings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>✨</Text>
      <Text style={styles.title}>Here are some of my favourite things:</Text>
      <Text style={styles.text}> Knitting</Text>
      <Text style={styles.text}> Reality TV</Text>
      <Text style={styles.text}> Pubs</Text>
      <Text style={styles.text}> Fizzy strawberry laces</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8DAEF",
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
