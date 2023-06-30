import { StyleSheet, Text, View } from "react-native";

export default function Music({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎶</Text>
      <Text style={styles.title}>Here is what I'm currently listening to:</Text>
      <Text style={styles.text}>
        {" "}
        The Beatles, While My Guitar Gently Weeps
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF3CF",
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
